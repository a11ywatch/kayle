import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig } from "./config";
import { runnersJavascript } from "./runner-js";
import type { Browser, Page } from "puppeteer";

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

// headless controls
type Controls = {
  page: Page;
  browser: Browser;
};

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export async function a11y(o: Partial<RunnerConfig> = {}): Promise<Audit> {
  const config = extractArgs(o);

  // control headless
  const controls: Controls = {
    page: config.page,
    browser: config.browser,
  };

  let timer: ReturnType<typeof setTimeout> = null;

  return Promise.race([
    new Promise((resolve) => {
      timer = setTimeout(resolve, config.timeout);
      // todo: return the shape on timeout error
      return null;
    }),
    auditPage(config, controls)
      .then((value) => {
        clearTimeout(timer);
        return value;
      })
      .catch((_) => {
        // console.error(e)
      }),
  ]);
}

// run accessibility audit
async function auditPage(config: RunnerConfig, controls: Controls) {
  await Promise.all([
    runActionsList(config, controls),
    injectRunners(config, controls),
  ]);

  return await audit(config, controls);
}

async function runActionsList(config: RunnerConfig, controls: Controls) {
  for (const action of config.actions) {
    await runAction(controls.browser, controls.page, config, action);
  }
}

async function injectRunners(config: RunnerConfig, controls: Controls) {
  await Promise.all(
    ["a11y", ...config.runners].map((runner) =>
      controls.page.evaluate(runnersJavascript[runner])
    )
  );
}

async function audit(config: RunnerConfig, controls: Controls) {
  return await controls.page.evaluate(
    (runOptions) => {
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
    }
  );
}
