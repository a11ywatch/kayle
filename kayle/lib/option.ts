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

  // swap axe position for conflictions on script eval order
  if (options.runners.length === 2 && options.runners[1] === "axe") {
    options.runners[1] = options.runners[0];
    options.runners[0] = "axe";
  }
  // todo: validate all options
  return options;
}
