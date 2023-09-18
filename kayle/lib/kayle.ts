import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig, _log } from "./config";
import { runnersJavascript, getRunner } from "./runner-js";
import { goToPage, setNetworkInterception } from "./utils/go-to-page";
import { Watcher } from "./watcher";
import { Audit, RunnerConf } from "./common";

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

  return await audit(config);
};

// run actions
const runActionsList = async (config: RunnerConfig) => {
  for (const action of config.actions) {
    await runAction(config.browser, config.page, config, action);
  }
};

// inject runners
const injectRunners = async (config: RunnerConfig) => {
  if (!config.browserExtension) {
    return await Promise.all([
      config.page.evaluate(runnersJavascript["kayle"]),
      config.page.evaluate(getRunner(config.language, config.runners[0])),
      config.runners.length === 2
        ? config.page.evaluate(getRunner(config.language, config.runners[1]))
        : undefined,
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

  clearTimeout(watcher.timer);

  if (o.clip && results && Array.isArray(results.issues)) {
    results.issues = await Promise.all(
      results.issues.map(async (item) => {
        const { clip, selector } = item;

        try {
          const buffer = await o.page.screenshot({
            path: o.clipDir
              ? `${o.clipDir}${
                  o.clipDir.endsWith("/") ? "" : "/"
                }${selector.trim()}.png`
              : undefined,
            clip,
          });

          // use a dynamic property to inject - todo: set the config initially before this iteration to keep shape aligned.
          if (o.clip2Base64) {
            item.clipBase64 = buffer.toString("base64");
          }
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
