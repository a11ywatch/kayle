export { axeRules as axeRulesAR } from "./ar/axe-rules";
export { htmlcsRules as htmlcsRulesAR } from "./ar/htmlcs-rules";
export { axeRules as axeRulesFR } from "./fr/axe-rules";
export { htmlcsRules as htmlcsRulesFR } from "./fr/htmlcs-rules";
export { axeRules as axeRulesES } from "./es/axe-rules";
export { htmlcsRules as htmlcsRulesES } from "./es/htmlcs-rules";
export { axeRules as axeRulesIT } from "./it/axe-rules";
export { htmlcsRules as htmlcsRulesIT } from "./it/htmlcs-rules";
export { axeRules as axeRulesJA } from "./ja/axe-rules";
export { htmlcsRules as htmlcsRulesJA } from "./ja/htmlcs-rules";
export { axeRules as axeRulesNL } from "./nl/axe-rules";
export { htmlcsRules as htmlcsRulesNL } from "./nl/htmlcs-rules";
export { axeRules as axeRulesPL } from "./pl/axe-rules";
export { htmlcsRules as htmlcsRulesPL } from "./pl/htmlcs-rules";
export { axeRules as axeRulesKO } from "./ko/axe-rules";
export { htmlcsRules as htmlcsRulesKO } from "./ko/htmlcs-rules";
export { axeRules as axeRulesZH_CN } from "./zh_CN/axe-rules";
export { htmlcsRules as htmlcsRulesZH_CN } from "./zh_CN/htmlcs-rules";
export { axeRules as axeRulesZH_TW } from "./zh_TW/axe-rules";
export { htmlcsRules as htmlcsRulesZH_TW } from "./zh_TW/htmlcs-rules";
export { axeRules as axeRulesDA } from "./da/axe-rules";
export { htmlcsRules as htmlcsRulesDA } from "./da/htmlcs-rules";
export { axeRules as axeRulesDE } from "./de/axe-rules";
export { htmlcsRules as htmlcsRulesDE } from "./de/htmlcs-rules";
export { axeRules as axeRulesEU } from "./eu/axe-rules";
export { htmlcsRules as htmlcsRulesEU } from "./eu/htmlcs-rules";
export { axeRules as axeRulesHE } from "./he/axe-rules";
export { htmlcsRules as htmlcsRulesHE } from "./he/htmlcs-rules";
export { axeRules as axeRulesNO_NB } from "./no_NB/axe-rules";
export { htmlcsRules as htmlcsRulesNO_NB } from "./no_NB/htmlcs-rules";
export { axeRules as axeRulesPT_BR } from "./pt_BR/axe-rules";
export { htmlcsRules as htmlcsRulesPT_BR } from "./pt_BR/htmlcs-rules";
export { axeRules as axeRulesEN } from "./en/axe-rules";
export { htmlcsRules as htmlcsRulesEN } from "./en/htmlcs-rules";

export type Rule = {
  ruleId: string;
  description?: string;
  help?: string;
  helpUrl?: string | string[];
  tags?: string[];
  actIds?: string[];
  ruleType?: "error" | "warning" | "notice";
};

// import rule list with locales
export const importRules = async (
  locale:
    | "ar"
    | "fr"
    | "es"
    | "it"
    | "ja"
    | "nl"
    | "pl"
    | "ko"
    | "zh_CN"
    | "zh_TW"
    | "da"
    | "de"
    | "eu"
    | "he"
    | "no_NB"
    | "pt_BR"
    | "en",
  runner: "htmlcs" | "axe",
  baseDir?: "string",
): Promise<Rule[]> => {
  const rules = await import(
    `${baseDir || "./"}${locale.replace("-", "_")}/${
      runner === "htmlcs" ? "htmlcs" : "axe"
    }-rules`
  );

  return rules.axeRules || rules.htmlcsRules;
};
