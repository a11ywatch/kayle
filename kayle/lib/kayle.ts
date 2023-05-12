import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig } from "./config";
import { runnersJavascript, getRunner } from "./runner-js";
import { goToPage, setNetworkInterception } from "./utils/go-to-page";
import { Watcher } from "./watcher";
import { writeFile } from "fs/promises";

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

let extractLinks;

// on autoKayle link find callback
declare function callback(audit: Audit): Audit;
declare function callback(audit: Audit): Promise<Audit>;

/**
 * Run accessibility tests for page auto running until all pages complete.
 * @param {Object} [config={}] config - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with array of results.
 */
export async function autoKayle(
  o: RunnerConf & { log?: boolean; store?: string; cb?: typeof callback } = {},
  ignoreSet?: Set<String>,
  _results?: Audit[]
): Promise<Audit[]> {
  // pre init list
  if (!_results) {
    _results = [];
  }

  const result = await kayle(o, true);

  _results.push(result);

  if (o.cb && typeof o.cb === "function") {
    await o.cb(result);
  }

  // auto run links until finished.
  if (!extractLinks) {
    extractLinks = (await import("./wasm/extract")).extractLinks;
  }

  if (!ignoreSet) {
    ignoreSet = new Set();
  }

  const links: string[] = await extractLinks(o);

  // persist html file to disk
  if (o.store) {
    await writeFile(
      `${o.store}/${encodeURIComponent(o.page.url())}`,
      await o.page.content()
    );
  }

  await o.page.close();

  await Promise.all(
    links.map(async (link) => {
      if (ignoreSet.has(link)) {
        return await Promise.resolve();
      }

      if (_log) {
        console.log(`Running: ${link}`);
      }

      ignoreSet.add(link);

      return await autoKayle(
        {
          ...o,
          page: await o.browser.newPage(),
          html: null,
          origin: link,
        },
        ignoreSet,
        _results
      );
    })
  );

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
