import { fetchHtml } from "./fetch";
import { runnersJavascript } from "./runner-js";
import { defaultOptions, RunnerConfig } from "./config";
import { extractArgs } from "./option";

const blank = "about:blank";

let Console = null;
let DOM = null;

// fall back run html codesniffer as linter
export const a11yLint = async (
  source?: string, // url or html source
  o: Partial<RunnerConfig> = {},
  runner?: keyof typeof runnersJavascript,
  forward?: boolean // forward messages to console
) => {
  const config = extractArgs(o, defaultOptions);
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
    const { JSDOM, VirtualConsole } = await import("jsdom");
    DOM = JSDOM;
    Console = VirtualConsole;
  }

  return new Promise(async (resolve) => {
    const vConsole = new Console();

    // Forward messages to the console.
    if (forward) {
      vConsole.on("log", function (message) {
        console.log(message);
      });
    }

    const dom = new DOM(html, {
      runScripts: "dangerously",
      virtualConsole: vConsole,
    });

    dom.window.eval(runnersJavascript.a11y);
    dom.window.eval(
      runner ? runnersJavascript[runner] : runnersJavascript["htmlcs"]
    );

    const results = await dom.window.__a11y.run({
      hideElements: config.hideElements,
      ignore: config.ignore || [],
      rootElement: config.rootElement,
      rules: config.rules ?? [],
      runners: config.runners ?? ["htmlcs"],
      standard: config.standard ?? "WCAG2AA",
    });

    resolve({
      documentTitle: results.documentTitle,
      pageUrl:
        results.pageUrl !== blank
          ? results.pageUrl
          : (urlSource && source) || blank,
      issues: results.issues || [],
    });
  });
};
