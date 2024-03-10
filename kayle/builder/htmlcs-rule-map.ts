import type { ParamList, Rule } from "./build-types";

// Hand stich the rules to map from htmlcs.
// We need to map the ruleId to the translation file key.

// map the rules to a detailed object
// the descriptions handling is not perfect and needs to handle split cases.
export const htmlcsRuleMap = (rule: ParamList) => {
  const rules: Rule[] = [];

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

  if (description.startsWith("HTMLCS.getTranslation(")) {
    description = eval(description);
  }

  const baseRule = `${rule[4]}${
    directRuleAssignments.includes(rule[3]) ? "." : "_"
  }${rule[3]}`;
  const baseRuleId =
    section508 || !description ? rule[3] || baseRule : baseRule;

  const inlineRule = inlineTranslation
    ? rule[2].replace("HTMLCS.getTranslation(", "").replace(")", "")
    : "";

  const _ruleId = inlineTranslation
    ? inlineRule.substring(1, inlineRule.length - 1)
    : baseRuleId;

  const ruleId = rule[5]
    ? `${rule[5].replace("_Guideline", ".Guideline")}.${_ruleId}`
    : _ruleId;

  const pattern = /(.{3})_or_(.{3})/;

  const [, leftPart, rightPart] = ruleId.match(pattern) || [];

  const ruleObj = {
    ruleId,
    description,
    helpUrl: section508
      ? []
      : helpLinks.map((r) => concatWcagLink(r.split(".")[0])),
    ruleType: rule[0] as "error" | "warning" | "notice",
  };

  // Check if both parts were found
  if (leftPart && rightPart) {
    ruleObj.ruleId = ruleId.replace(pattern, leftPart);
    rules.push(ruleObj);
    ruleObj.ruleId = ruleId.replace(pattern, rightPart);
    rules.push(ruleObj);
  } else {
    rules.push(ruleObj);
  }

  return rules;
};
