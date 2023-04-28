import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig } from "./config";
import { runnersJavascript } from "./runner-js";
import { setNetworkInterception } from "./utils/go-to-page"

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

// watcher cycle timeout
function Watcher() {
  this.timer = null;
}

// watch until timeout
Watcher.prototype.watch = function (timeout: number) {
  return new Promise((resolve) => {
    this.timer = setTimeout(() => {
      resolve({
        docuementTitle: "",
        pageUrl: "",
        meta: {
          errorCount: 0,
          warningCount: 0,
          noticeCount: 0,
          accessScore: 0,
        },
        automateable: {
          missingAltIndexs: [],
        },
        issues: [],
      });
    }, timeout);
  });
};

/**
 * Get the runner for the page.
 * @param {String} [language="en"] - The language.
 * @param {String} [runner=""] - The runner type.
 * @returns {String} Returns the runner javascript by locale.
 */
const getRunner = (language: string, runner: string) => {
  // if langauge exist get the runner type
  if (language) {
    if (runner === "axe") {
      const script = `axe_${language}`;

      if (runnersJavascript.hasOwnProperty(script)) {
        return runnersJavascript[script];
      }
    }

    if (runner === "htmlcs") {
      const script = `htmlcs_${language}`;

      if (runnersJavascript.hasOwnProperty(script)) {
        return runnersJavascript[script];
      }
    }
  }

  return runnersJavascript[runner];
};

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export async function a11y(o: Partial<RunnerConfig> = {}): Promise<Audit> {
  const config = extractArgs(o);

  await setNetworkInterception(config.page);

  const watcher = new Watcher();


  const results = await Promise.race([
    watcher.watch(config.timeout),
    auditPage(config),
  ]);

  clearTimeout(watcher.timer);

  return results;
}

// run accessibility audit
async function auditPage(config: RunnerConfig) {
  await Promise.all([runActionsList(config), injectRunners(config)]);

  return await audit(config);
}

async function runActionsList(config: RunnerConfig) {
  for (const action of config.actions) {
    await runAction(config.browser, config.page, config, action);
  }
}

async function injectRunners(config: RunnerConfig) {
  // load axe first to avoid conflictions axe indexed as first item in array when multiple items exist
  if (config.runners.length === 2) {
    return await Promise.all([
      config.page.evaluate(runnersJavascript["a11y"]),
      config.page.evaluate(getRunner(config.language, config.runners[0])),
      config.page.evaluate(getRunner(config.language, config.runners[1])),
    ]);
  }

  await Promise.all([
    config.page.evaluate(runnersJavascript["a11y"]),
    config.page.evaluate(getRunner(config.language, config.runners[0])),
  ]);
}

async function audit(config: RunnerConfig) {
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
