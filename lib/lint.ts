import { fetchHtml } from "./fetch";

// fall back run html codesniffer as linter
export const a11yLint = async (
  url: string,
  options: any,
  runnersJavascript: any
) => {
  let html = "";

  try {
    html = await fetchHtml(url);
  } catch (e) {
    console.error(e);
  }

  if (!html) {
    return Promise.resolve();
  }

  const { jsdom } = await import("jsdom");

  return new Promise((resolve) => {
    const { JSDOM } = jsdom;
    const vConsole = new jsdom.VirtualConsole();

    // Forward messages to the console.
    vConsole.on("log", function (message) {
      resolve(message);
    });

    const dom = new JSDOM(html, {
      runScripts: "dangerously",
      virtualConsole: vConsole,
    });

    const HTMLCS = runnersJavascript.a11y["htmlcs"];

    dom.window.eval(HTMLCS);
    dom.window.HTMLCS_RUNNER.run(options.standard ?? "WCAG2AA");
  });
};
