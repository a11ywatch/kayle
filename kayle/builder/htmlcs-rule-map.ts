import type { Rule, ParamList } from "./build-types";

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

  // TODO: PATCH RULES FROM INLINE TRANSLATIONS

  const description =
    rule[2] ||
    window.HTMLCS.getTranslation(`${rule[4]}_${rule[3]}`) ||
    window.HTMLCS.getTranslation(`${rule[4]}${rule[3]}`) ||
    "";

  return {
    ruleId:
      section508 || !description
        ? rule[3]
        : `${rule[4]}${directRuleAssignments.includes(rule[3]) ? "." : "_"}${rule[3]}`,
    description: description,
    helpUrl: section508
      ? []
      : helpLinks.map((r) => concatWcagLink(r.split(".")[0])),
    ruleType: rule[0],
  };
};
