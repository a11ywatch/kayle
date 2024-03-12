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
    try {
      description = eval(description);
    } catch (_e) {}
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

  const ruleId =
    rule[5] && (inlineRule || !rule[2])
      ? `${rule[5].replace("_Guideline", ".Guideline")}.${_ruleId}`
      : _ruleId;

  const pattern = /(.{3})_or_(.{3})/;

  const [, leftPart, rightPart] = ruleId.match(pattern) || [];

  const ruleObj = {
    ruleId: ruleId.replace("'", ""),
    description,
    helpUrl: section508
      ? []
      : helpLinks.map((r) => concatWcagLink(r.split(".")[0])),
    ruleType: rule[0] as "error" | "warning" | "notice",
    tags: [] as string[],
  };

  // invalid rule
  if (!ruleObj.description || ruleObj.description === "msg") {
    return;
  }

  const getTags = (rid: string) => {
    const _rid = rid.split(".");
    const sl = _rid[2] || "";
    const ruleTarget =
      rid.length >= 3 ? `${_rid[0]}.${_rid[1]}.${sl.substring(0, 5)}` : _rid[0];

    return [
      ruleTarget.startsWith("Principle") ? "" : "Section508",
      window.WCAGA.includes(ruleTarget) ? "WCAGA" : "",
      window.WCAGAA.includes(ruleTarget) ? "WCAGAA" : "",
      window.WCAGAAA.includes(ruleTarget) ? "WCAGAAA" : "",
    ].filter(Boolean);
  };

  // Check if both parts were found
  if (leftPart && rightPart) {
    ruleObj.ruleId = ruleId.replace(pattern, leftPart).replace("'", "");
    ruleObj.tags = getTags(ruleObj.ruleId);
    rules.push(ruleObj);

    ruleObj.ruleId = ruleId.replace(pattern, rightPart).replace("'", "");
    ruleObj.tags = getTags(ruleObj.ruleId);

    rules.push(ruleObj);
  } else {
    ruleObj.tags = getTags(ruleObj.ruleId);

    rules.push(ruleObj);
  }

  return rules;
};
