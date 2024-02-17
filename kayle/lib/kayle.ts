import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig, _log } from "./config";
import { runnersJavascript, getRunner } from "./runner-js";
import { goToPage, setNetworkInterception } from "./utils/go-to-page";
import { Watcher } from "./watcher";
import { Audit, type InnateIssue, RunnerConf } from "./common";
import { getAllCss } from "./wasm";

// perform audit
const audit = async (config: RunnerConfig): Promise<Audit> => {
  // perform audit as extension
  if (config.browserExtension) {
    return await auditExtension(config);
  }

  return await config.page.evaluate(
    async (runOptions) => {
      if (runOptions.origin && window.origin === "null") {
        window.origin = runOptions.origin;
      }
      // @ts-ignore
      return await window.__a11y.run(runOptions);
    },
    {
      hideElements: config.hideElements,
      ignore: config.ignore || [],
      rootElement: config.rootElement,
      rules: config.rules || [],
      runners: config.runners,
      standard: config.standard,
      origin: config.origin,
      language: config.language,
      clip: config.clip,
    }
  );
};

// run accessibility audit
const auditPage = async (config: RunnerConfig) => {
  await Promise.all([runActionsList(config), injectRunners(config)]);
  const results = await audit(config);

  if (config._kayleRunner) {
    await auditPageInnate(config, results);
  }

  return results;
};

// run actions
export const runActionsList = async (config: RunnerConfig) => {
  for (const action of config.actions) {
    await runAction(config.browser, config.page, config, action);
  }
};

// inject runners
const injectRunners = async (config: RunnerConfig) => {
  if (!config.browserExtension) {
    return await Promise.allSettled([
      config.page.evaluate(runnersJavascript["kayle"]),
      ...config.runners.map((r) =>
        config.page.evaluate(getRunner(config.language, r))
      ),
    ]);
  }
};

// perform an audit using browser extension - only used if extension is configured on browser
export const auditExtension = async (config: RunnerConfig): Promise<Audit> => {
  return await config.page.evaluate(
    (runOptions): Promise<Audit> => {
      return new Promise((resolve) => {
        if (runOptions.origin && window.origin === "null") {
          window.origin = runOptions.origin;
        }

        window.addEventListener("kayle_receive", (event: CustomEvent) =>
          resolve(event.detail.data)
        );

        window.dispatchEvent(
          new CustomEvent("kayle_send", {
            detail: {
              name: "kayle",
              options: runOptions,
            },
          })
        );
      });
    },
    {
      hideElements: config.hideElements,
      ignore: config.ignore || [],
      rootElement: config.rootElement,
      rules: config.rules || [],
      runners: config.runners,
      standard: config.standard,
      origin: config.origin,
      language: config.language,
      clip: config.clip,
    }
  );
};

// lazy load kayle innate
let kayle_innate;

// run the Rust wasm audit.
// we still need to add the score map and apply the score based on what is found.
// we need the old map to make sure we do not repeat values or opt in to the feature with the crate.
const auditPageInnate = async (config: RunnerConf, results: Audit) => {
  const html = await config.page.content();
  const css = await getAllCss(config as RunnerConfig);

  if (!kayle_innate) {
    kayle_innate = await import("kayle_innate");
  }

  const innateAudit: InnateIssue[] = await kayle_innate.audit(
    html,
    css,
    config.clip
  );

  for (const innateIssue of innateAudit) {
    if (innateIssue.issue_type === "error") {
      results.meta.errorCount += innateIssue.recurrence || 1;
    }
    if (innateIssue.issue_type === "warning") {
      results.meta.warningCount += innateIssue.recurrence || 1;
    }
    if (innateIssue.issue_type === "notice") {
      results.meta.noticeCount += innateIssue.recurrence || 1;
    }

    results.issues.push({
      code: innateIssue.code,
      type: innateIssue.issue_type,
      typeCode: innateIssue.type_code,
      message: innateIssue.message,
      recurrence: innateIssue.recurrence,
      clip: innateIssue.clip,
      runner: "kayle",
      runnerExtras: innateIssue.runner_extras,
      selector: innateIssue.selectors.join(","), // combo the selectors
      context: innateIssue.context,
    });

    // add value to missing alt index handling
    if (innateIssue.code === "Principle1.Guideline1_1.1_1_1.H37") {
      results.automateable.missingAltIndexs.push(results.issues.length - 1);
    }
  }
};

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] config - Options to change the way tests run.
 * @param {Boolean} [preventClose=false] preventClose - Prevent page page from closing on finish.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export const kayle = async (
  o: RunnerConf = {},
  preventClose?: boolean
): Promise<Audit> => {
  const watcher = new Watcher();
  const navigate = o.page.url() === "about:blank" && (o.origin || o.html);
  const config = extractArgs(o, watcher);

  if (navigate) {
    await goToPage(o);
  } else if (!o.noIntercept) {
    await setNetworkInterception(o);
  }

  const results = await Promise.race([
    watcher.watch(config.timeout),
    auditPage(config),
  ]);

  clearTimeout(watcher.timer as number);

  if (results && o.clip && o.clip2Base64 && Array.isArray(results.issues)) {
    results.issues = await Promise.all(
      results.issues.map(async (item) => {
        // prevent screenshots
        if (typeof o.clipMax === "number") {
          if (!o.clipMax) {
            return item;
          }
          o.clipMax--;
        }

        try {
          const buffer = await o.page.screenshot({
            path: o.clipDir
              ? `${o.clipDir}${
                  o.clipDir.endsWith("/") ? "" : "/"
                }${item.selector.trim()}.png`
              : undefined,
            clip: item.clip,
          });

          // use a dynamic property to inject - todo: set the config initially before this iteration to keep shape aligned.
          item.clipBase64 = buffer.toString("base64");
        } catch (_) {
          // most likely not in the viewport
          // console.error(e);
          item.clipBase64 = "";
        }

        return item;
      })
    );
  }

  if (!preventClose && navigate) {
    try {
      await config.page.close();
    } catch (e) {
      _log.enabled && console.error;
    }
  }

  return results;
};
