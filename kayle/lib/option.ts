// handle configuration for methods
export function extractArgs(o) {
  const options = {
    browser: o.browser,
    page: o.page,
    cdpSession: o.cdpSession,
    timeout: o.timeout || 60000,
    // private
    _browserExtension: o._browserExtension,
    // sent to browser
    actions: o.actions || [],
    hideElements: o.hideElements,
    ignore: o.ignore || [],
    includeNotices: o.includeNotices,
    includeWarnings: o.includeWarnings,
    rootElement: o.rootElement,
    rules: o.rules || [],
    runners: o.runners || ["htmlcs"],
    standard: o.standard || "WCAG2AA",
    origin: o.origin,
    language: o.language || "en",
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
    !options.runners.some((runner) => runner === "axe" || runner === "htmlcs")
  ) {
    options.runners.push("htmlcs");
  }

  // todo: validate all options
  return options;
}
