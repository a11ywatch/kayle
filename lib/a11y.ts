import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig } from "./config";
import { runnersJavascript } from "./runner-js";

export type MetaInfo = {
  errorCount: number;
  warningCount: number;
  noticeCount: number;
  accessScore: number;
  possibleIssuesFixedByCdn: number;
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

// map of locales to use for axe
let localeMap = null;

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
          possibleIssuesFixedByCdn: 0,
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
 * Set the locale object for runtime handling.
 *
 * @param {String} [runner=""] - The runner being used.
 * @param {Object} [config={}] - Options to change the way tests run.
 * @returns {void}
 */
const setLocale = (runner: string, config: RunnerConfig) => {
  if (runner === "axe" && config.language) {
    if (!localeMap) {
      localeMap = require("./locales");
    }
    if (localeMap.hasOwnProperty(config.language)) {
      config.locale = localeMap[config.language];
    }
  }
};

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export async function a11y(o: Partial<RunnerConfig> = {}): Promise<Audit> {
  const config = extractArgs(o);
  const watcher = new Watcher();

  const results = await Promise.race([
    watcher.watch(config.timeout),
    auditPage(config),
  ]);

  if (results.docuementTitle || results.pageUrl) {
    clearTimeout(watcher.timer);
  }

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
  if (config.runners.length === 2) {
    return await Promise.all(
      ["a11y", config.runners[0], config.runners[1]].map((runner) => {
        setLocale(runner, config);

        return config.page.evaluate(runnersJavascript[runner]);
      })
    );
  }

  await Promise.all(
    ["a11y", config.runners[0]].map((runner) => {
      setLocale(runner, config);

      return config.page.evaluate(runnersJavascript[runner]);
    })
  );
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
      locale: config.locale,
    }
  );
}
