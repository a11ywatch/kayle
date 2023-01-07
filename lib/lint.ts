import { fetchHtml } from "./fetch";
import { runnersJavascript } from "./runner-js";
import { defaultOptions, RunnerConfig } from "./config";
import { extractArgs } from "./option";

// fall back run html codesniffer as linter
export const a11yLint = async (
  source?: string, // url or html source
  o: Partial<RunnerConfig> = {},
  runner?: keyof typeof runnersJavascript,
  forward?: boolean // forward messages to console
) => {
  const config = extractArgs(o, defaultOptions);

  let html = source;

  if (source && source.startsWith("http")) {
    try {
      html = await fetchHtml(source);
    } catch (e) {
      console.error(e);
    }
  }

  if (!html) {
    return Promise.resolve();
  }

  const jsdom = await import("jsdom");

  return new Promise(async (resolve) => {
    const { JSDOM } = jsdom;
    const vConsole = new jsdom.VirtualConsole();

    // Forward messages to the console.
    if (forward) {
      vConsole.on("log", function (message) {
        console.log(message);
      });
    }

    const dom = new JSDOM(html, {
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

    resolve(results);
  });
};
