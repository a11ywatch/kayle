import { extractArgs } from "./option";
import { runAction } from "./action";
import { RunnerConfig } from "./config";
import type { Browser, Page } from "puppeteer";
import { runnersJavascript } from "./runner-js";

type Controls = {
  page: Page;
  browser: Browser;
};

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export async function a11y(o: Partial<RunnerConfig> = {}) {
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
