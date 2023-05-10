import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig } from "./config";
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

type RunnerConf = Partial<RunnerConfig & { html?: string }>;

let _log = false;

/**
 * Enable or disable logging.
 * @param {Object} [enabled] enabled - Enable console logging.
 * @returns {void} Returns void.
 */
export function setLogging(enabled?: boolean): void {
  _log = enabled;
}

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] config - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export async function kayle(
  o: RunnerConf = {},
  automa?: boolean
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

  !automa && navigate && (await o.page.close());

  return results;
}

let extractLinks;

/**
 * Run accessibility tests for page auto running until all pages complete.
 * @param {Object} [config={}] config - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with array of results.
 */
export async function autoKayle(
  o: RunnerConf & { log?: boolean } = {},
  ignoreSet?: Set<String>,
  _results?: Audit[]
): Promise<Audit[]> {
  // pre init list
  if (!_results) {
    _results = [];
  }

  const result = await kayle(o, true);
  _results.push(result);

  // auto run links until finished.
  if (!extractLinks) {
    extractLinks = (await import("./wasm/extract")).extractLinks;
  }

  if (!ignoreSet) {
    ignoreSet = new Set();
  }

  const links = await extractLinks(o);

  await o.page.close();

  for (const link of links) {
    if (ignoreSet.has(link)) {
      continue;
    }

    if (_log) {
      console.log(`Running: ${link}`);
    }

    ignoreSet.add(link);

    const page = await o.browser.newPage();
    await autoKayle(
      {
        ...o,
        page,
        html: undefined,
        origin: link,
      },
      ignoreSet,
      _results
    );
  }

  return _results;
}

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
