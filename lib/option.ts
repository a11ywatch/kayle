// determine ignored
export function extractArgs(o, defaults) {
  const options = Object.assign({}, defaults, o ?? {});

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
  if(options.runners && !["axe", "htmlcs"].includes(options.runners)) {
    options.runners = ["htmlcs"];
  }

  return options;
}
