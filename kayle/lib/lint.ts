import { fetchHtml } from "./fetch";
import { runnersJavascript } from "./runner-js";
import { RunnerConfig } from "./config";
import { extractArgs } from "./option";
import { JSDOM, VirtualConsole } from "jsdom";

let Console = null;
let DOM = null;

// fall back run as linter
export const kayleLint = async (
  source?: string, // url or html source
  o: Partial<RunnerConfig> = {},
  runner?: keyof typeof runnersJavascript,
  forward?: boolean, // forward messages to console
) => {
  const config = extractArgs(o);
  let html = source;
  let urlSource = false;

  if (source && source.startsWith("http")) {
    urlSource = true;
    try {
      html = await fetchHtml(source);
    } catch (e) {
      console.error(e);
    }
  }

  if (!html) {
    return Promise.resolve();
  }

  if (!DOM || !Console) {
    DOM = JSDOM;
    Console = VirtualConsole;
  }

  let vConsole = undefined;

  return new Promise(async (resolve) => {
    // Forward messages to the console.
    if (forward) {
      vConsole = new Console();
      vConsole.on("log", function (message) {
        console.log(message);
      });
    }

    const dom = new DOM(html, {
      url: urlSource ? source : undefined,
      runScripts: "dangerously",
      virtualConsole: vConsole,
    });

    dom.window.eval(runnersJavascript.kayle);
    dom.window.eval(
      runner ? runnersJavascript[runner] : runnersJavascript["htmlcs"],
    );

    const results = await dom.window.__a11y.run({
      hideElements: config.hideElements,
      ignore: config.ignore || [],
      rootElement: config.rootElement,
      rules: config.rules || [],
      runners: config.runners || ["htmlcs"],
      standard: config.standard || "WCAG2AA",
    });

    resolve({
      documentTitle: results.documentTitle,
      pageUrl: results.pageUrl,
      issues: results.issues || [],
    });
  });
};
