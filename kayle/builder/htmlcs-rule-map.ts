import type { ParamList } from "./build-types";

// Hand stich the rules to map from htmlcs.
// We need to map the ruleId to the translation file key.

// map the rules to a detailed object
// the descriptions handling is not perfect and needs to handle split cases.
export const htmlcsRuleMap = (rule: ParamList) => {
  const concatWcagLink = (l: string) =>
    `https://www.w3.org/TR/WCAG20-TECHS/${l}`;

  const helpLinks = rule[3] ? rule[3].split(",") : [];
  const section508 = !!rule[2];

  // translations that do not use _ to concat
  const directRuleAssignments = [
    "Check",
    "SinglePointer_Check",
    "AccessibleName",
    "Mousedown_Check",
    "Touchstart_Check",
    "Devicemotion",
  ];

  const inlineTranslation =
    rule[2] && rule[2].startsWith("HTMLCS.getTranslation");

  let description = "";

  try {
    description =
      (inlineTranslation && eval(rule[2])) ||
      rule[2] ||
      window.HTMLCS.getTranslation(`${rule[4]}_${rule[3]}`) ||
      window.HTMLCS.getTranslation(`${rule[4]}${rule[3]}`) ||
      "";
  } catch (_e) {}

  const baseRule = `${rule[4]}${
    directRuleAssignments.includes(rule[3]) ? "." : "_"
  }${rule[3]}`;
  const baseRuleId =
    section508 || !description ? rule[3] || baseRule : baseRule;

  const inlineRule = inlineTranslation
    ? rule[2].replace("HTMLCS.getTranslation(", "").replace(")", "")
    : "";

  const ruleId = inlineTranslation
    ? inlineRule.substring(1, inlineRule.length - 1)
    : baseRuleId;

  return {
    ruleId: rule[5]
      ? `${rule[5].replace("_Guideline", ".Guideline")}.${ruleId}`
      : ruleId,
    description,
    helpUrl: section508
      ? []
      : helpLinks.map((r) => concatWcagLink(r.split(".")[0])),
    ruleType: rule[0],
  };
};
