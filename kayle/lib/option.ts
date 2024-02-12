import type { Watcher } from "./watcher";

// handle configuration for methods
export function extractArgs(o, watcher?: Watcher) {
  const options = {
    browser: o.browser,
    page: o.page,
    cdpSession: o.cdpSession,
    timeout: o.timeout || 60000,
    noIntercept: o.noIntercept,
    // private
    browserExtension: o.browserExtension,
    _watcher: watcher,
    // sent to browser
    actions: o.actions || [],
    hideElements: o.hideElements,
    ignore: o.ignore || [],
    includeNotices: o.includeNotices,
    includeWarnings: o.includeWarnings,
    rootElement: o.rootElement,
    rules: o.rules || [],
    // soon move default to kayle
    runners: o.runners || ["htmlcs"],
    standard: o.standard,
    origin: o.origin || (o.html && "http://localhost") || "",
    language: o.language || "en",
    // store clip tracking element position
    clip: o.clip,
    _kayleRunner: false,
    _includesBaseRunner: false,
  };

  // parse hidden elements into string
  if (options.hideElements && Array.isArray(options.hideElements)) {
    options.hideElements = options.hideElements.join(",");
  }

  if (options.ignore) {
    options.ignore = options.ignore.map((ignored) => ignored.toLowerCase());

    if (!options.includeNotices) {
      options.ignore.push("notice");
    }
    if (!options.includeWarnings) {
      options.ignore.push("warning");
    }
  }

  // default to a runner
  if (
    options.runners.forEach((runner, runnerIndex, ar) => {
      if (runner === "axe" || runner === "htmlcs") {
        options._includesBaseRunner = true;
      }
      if (runner === "kayle") {
        options._kayleRunner = true;
        ar.splice(runnerIndex, 1);
      }
    }) &&
    (options._includesBaseRunner || options._kayleRunner)
  ) {
    options.runners.push("htmlcs");
  }

  return options;
}
