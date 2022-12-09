import { readFileSync } from "fs";
import { axeRunner } from "./runners/axe";
import { htmlcsRunner } from "./runners/htmlcs";
import { extractArgs } from "./option";
import { runAction } from "./action";
import type { Browser, Page } from 'puppeteer'

const runnersJavascript = {
  a11y: readFileSync(`${__dirname}/runner.js`, "utf-8"),
  htmlcs: loadRunnerScript("htmlcs"),
  axe: loadRunnerScript("axe"),
};

// default config for runner
export const defaultOptions = {
  actions: [],
  browser: null,
  headers: {},
  hideElements: null,
  ignore: [],
  includeNotices: false,
  includeWarnings: false,
  rootElement: null,
  rules: [],
  runners: ["htmlcs"],
  standard: "WCAG2AA",
  timeout: 60000,
  viewport: {
    width: 1280,
    height: 1024,
  },
};

type Controls = {
  page: Page,
  browser: Browser
};

/**
 * Run accessibility tests for page.
 * @param {Object} [config={}] - Options to change the way tests run.
 * @returns {Promise} Returns a promise which resolves with results.
 */
export async function a11y(o: Partial<typeof defaultOptions> = {}) {
  const config = extractArgs(o, defaultOptions);

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
async function auditPage(config, controls: Controls) {
  await Promise.all([
    runActionsList(config, controls),
    injectRunners(config, controls),
  ]);

  return await audit(config, controls);
}

async function runActionsList(config, controls: Controls) {
  if (config.actions.length) {
    for (const action of config.actions) {
      await runAction(controls.browser, controls.page, config, action);
    }
  }
}

async function injectRunners(config, controls: Controls) {
  await controls.page.evaluate(runnersJavascript.a11y); // Inject the test runner

  for (const runner of config.runners) {
    await controls.page.evaluate(runnersJavascript[runner]);
  }
}

async function audit(config, controls: Controls) {
  return await controls.page.evaluate(
    (runOptions) => {
      // @ts-ignore
      return window.__a11y.run(runOptions);
    },
    {
      hideElements: config.hideElements,
      ignore: config.ignore,
      rootElement: config.rootElement,
      rules: config.rules,
      runners: config.runners,
      standard: config.standard,
    }
  );
}

function loadRunnerFile(run) {
  if (run === "htmlcs") {
    return htmlcsRunner;
  }
  if (run === "axe") {
    return axeRunner;
  }
  return require(run);
}

function loadRunnerScript(runner) {
  const mods = loadRunnerFile(runner);
  let bundle = "";

  for (const runnerScript of mods.scripts) {
    bundle += `\n\n${readFileSync(runnerScript, "utf-8")}`;
  }

  return `
				;${bundle};
				;window.__a11y.runners['${runner}'] = ${mods.run.toString()};
			`;
}
