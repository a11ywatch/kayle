export const axeRunner = {
  scripts: [require.resolve("axe-core/axe.min.js")],
  run: async (options) => {
    async function runAxeCore() {
      // @ts-ignore
      const result = await window.axe.run(
        options.rootElement || window.document,
        getAxeOptions()
      );
      // todo: quick merge
      return [].concat(
        ...result.violations.map(processViolation),
        ...result.incomplete.map(processIncomplete)
      );
    }

    function getAxeOptions() {
      const axeOptions = { runOnly: undefined, rules: undefined };

      if (options.standard) {
        axeOptions.runOnly = a11yStandardToAxe();
      }

      axeOptions.rules = a11yRulesToAxe(
        Array.isArray(options.rules) ? options.rules : [],
        Array.isArray(options.ignore) ? options.ignore : []
      );

      return axeOptions;
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

    function processViolation(issue) {
      issue.type = "error";
      return processIssue(issue);
    }

    function processIncomplete(issue) {
      issue.type = "warning";
      return processIssue(issue);
    }

    function processIssue(axeIssue) {
      const issues = new Array(axeIssue.nodes.length)

      if (axeIssue.nodes.length) {
        let nodeIter = 0;
        for(const node of axeIssue.nodes) {
          issues[nodeIter] = {
            type: axeImpactToA11yLevel(axeIssue.impact),
            code: axeIssue.id,
            message: `${axeIssue.help} (${axeIssue.helpUrl})`,
            element: window.document.querySelector(selectorToString(node.target)),
            runnerExtras: {
              description: axeIssue.description,
              impact: axeIssue.impact,
              help: axeIssue.help,
              helpUrl: axeIssue.helpUrl,
            },
            runner: "axe",
          }
          nodeIter++;
        }
        issues.length = nodeIter;
      }

      return issues;
    }

    function selectorToString(selectors) {
      return selectors
        .reduce((selectorParts, selector) => selectorParts.concat(selector), [])
        .join(" ");
    }

    function axeImpactToA11yLevel(impact) {
      switch (impact) {
        case "critical":
        case "serious":
          return "error";
        case "moderate":
          return "warning";
        case "minor":
          return "notice";
        default:
          return "error";
      }
    }
    // Configure and run aXe
    return await runAxeCore();
  },
};
