const runAxeAudit = async (options) => {
  const axeOptions = {
    runOnly: undefined,
    rules: undefined,
  };

  if (options.standard) {
    axeOptions.runOnly = a11yStandardToAxe();
  }

  axeOptions.rules = a11yRulesToAxe(
    Array.isArray(options.rules) ? options.rules : [],
    Array.isArray(options.ignore) ? options.ignore : [],
  );

  // @ts-ignore todo: fix origin crashing test in axe-core when set direct html
  window.axe.configure({
    allowedOrigins: window.origin === "null" ? [] : [window.origin],
  });

  async function runAxeCore() {
    return new Promise(async (resolve) => {
      // @ts-ignore
      const result = await window.axe.run(
        (options.rootElement &&
          window.document.querySelector(options.rootElement)) ||
          window.document,
        axeOptions,
      );

      const issues = [];

      for (const item of result.violations) {
        processViolation(item, issues);
      }

      for (const item of result.incomplete) {
        processIncomplete(item, issues);
      }

      resolve(issues);
    });
  }

  function a11yStandardToAxe() {
    if (options.standard === "WCAG2A") {
      return {
        type: "tags",
        values: ["wcag2a", "wcag21a", "best-practice"],
      };
    }
    // the rest of the standards
    return {
      type: "tags",
      values: ["wcag2a", "wcag21a", "wcag2aa", "wcag21aa", "best-practice"],
    };
  }

  function a11yRulesToAxe(rules, ignore) {
    //@ts-ignore
    const axeRuleIds = window.axe.getRules().reduce((allRules, rule) => {
      allRules[rule.ruleId.toLowerCase()] = true;
      return allRules;
    }, {});

    const axeRules = {};

    // Filter the rules based on the axeRuleIds then enable/disable them
    rules.forEach((rule) => {
      if (axeRuleIds[rule]) {
        axeRules[rule] = { enabled: true };
      }
    });
    ignore.forEach((rule) => {
      if (axeRuleIds[rule]) {
        axeRules[rule] = { enabled: false };
      }
    });

    return axeRules;
  }

  function processViolation(issue, issues) {
    return processIssue(issue, issues, "error");
  }

  function processIncomplete(issue, issues) {
    return processIssue(issue, issues, "warning");
  }

  function processIssue(axeIssue, issues, impact) {
    if (axeIssue.nodes && axeIssue.nodes.length) {
      for (const node of axeIssue.nodes) {
        issues.push({
          type: impact,
          code: axeIssue.id,
          message: axeIssue.help,
          element: window.document.querySelector(selectorToString(node.target)),
          runnerExtras: {
            description: axeIssue.description,
            impact: axeIssue.impact,
            helpUrl: axeIssue.helpUrl,
          },
          runner: "axe",
        });
      }
    }
  }

  function selectorToString(selectors) {
    return selectors
      .reduce((selectorParts, selector) => selectorParts.concat(selector), [])
      .join(" ");
  }

  // Configure and run aXe
  return await runAxeCore();
};

const axeRunner = {
  en: {
    scripts: [require.resolve("fast_axecore/axe.min.js")],
    run: runAxeAudit,
  },
};

// hard code locales to the list to axe-core/locales - not likely to update often
const axeLocales = [
  "ar",
  "da",
  "de",
  "es",
  "eu",
  "fr",
  "he",
  "ja",
  "ko",
  "nl",
  "pl",
  "no_NB",
  "pt_BR",
  "zh_CN",
];

for (const lang of axeLocales) {
  axeRunner[lang.replace("_", "-")] = {
    scripts: [require.resolve(`fast_axecore/axe.${lang}.min.js`)],
    run: runAxeAudit,
  };
}

// locale map
export { axeRunner, axeLocales };
