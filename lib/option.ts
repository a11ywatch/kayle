// handle configuration for methods
export function extractArgs(o) {
  const options = {
    actions: o.actions || [],
    browser: o.browser,
    page: o.page,
    hideElements: o.hideElements,
    ignore: o.ignore || [],
    includeNotices: o.includeNotices,
    includeWarnings: o.includeWarnings,
    rootElement: o.rootElement,
    rules: o.rules || [],
    runners: o.runners || ["htmlcs"],
    standard: o.standard || "WCAG2AA",
    timeout: o.timeout || 60000,
    origin: o.origin,
  };

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
