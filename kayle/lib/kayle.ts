import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig, _log } from "./config";
import { runnersJavascript, getRunner } from "./runner-js";
import { goToPage, setNetworkInterception } from "./utils/go-to-page";
import { Watcher } from "./watcher";

export type MetaInfo = {
  errorCount: number;
  warningCount: number;
  noticeCount: number;
  accessScore: number;
};

// exact issue information for page
export type Issue = {
  context: string;
  code: string;
  message: string;
  type: "error" | "warning" | "notice";
  typeCode: number;
  runner: "htmlcs" | "axe" | "a11ywatch";
  runnerExtras: Record<string, unknown>;
  recurrence: number;
  selector: string;
};

// indexs of automatable issues
export type Automatable = {
  // indexs of all missing alt tags.
  missingAltIndexs: number[];
};

// the main audit for a url
export type Audit = {
  automateable: Automatable;
  documentTitle: string;
  issues: Issue[];
  meta: MetaInfo;
  pageUrl: string;
};

export type RunnerConf = Partial<RunnerConfig & { html?: string }>;

// run accessibility audit
async function auditPage(config: RunnerConfig) {
  await Promise.all([runActionsList(config), injectRunners(config)]);

  return await audit(config);
}

// run actions
async function runActionsList(config: RunnerConfig) {
  for (const action of config.actions) {
    await runAction(config.browser, config.page, config, action);
  }
}

// inject runners
async function injectRunners(config: RunnerConfig) {
  // load axe first to avoid conflictions axe indexed as first item in array when multiple items exist
  return await Promise.all([
    config.page.evaluate(runnersJavascript["kayle"]),
    config.page.evaluate(getRunner(config.language, config.runners[0])),
    config.runners.length === 2
      ? config.page.evaluate(getRunner(config.language, config.runners[1]))
      : undefined,
  ]);
}

// perform audit
async function audit(config: RunnerConfig): Promise<Audit> {
  return await config.page.evaluate(
    (runOptions) => {
      // set top level app origin replicate
      if (runOptions.origin && window.origin === "null") {
        window.origin = runOptions.origin;
      }
      // @ts-ignore
      return window.__a11y.run(runOptions);
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
    }
  );
}

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] config - Options to change the way tests run.
 * @param {Boolean} [preventClose=false] preventClose - Prevent page page from closing on finish.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export async function kayle(
  o: RunnerConf = {},
  preventClose?: boolean
): Promise<Audit> {
  const navigate =
    typeof o.page.url === "function" &&
    o.page.url() === "about:blank" &&
    (o.origin || o.html);

  // navigate to a clean page
  if (navigate) {
    await goToPage(
      { page: o.page, html: o.html, timeout: o.timeout },
      o.origin
    );
  } else if (!o.noIntercept) {
    await setNetworkInterception(o.page);
  }

  const config = extractArgs(o);

  const watcher = new Watcher();

  const results = await Promise.race([
    watcher.watch(config.timeout),
    auditPage(config),
  ]);

  clearTimeout(watcher.timer);

  !preventClose && navigate && (await o.page.close());

  return results;
}
