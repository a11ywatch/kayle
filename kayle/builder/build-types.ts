export type Rule = {
  ruleId: string;
  description?: string;
  help?: string;
  helpUrl?: string | string[];
  tags?: string[];
  actIds?: string[];
  ruleType?: "error" | "warning" | "notice";
};

export type ParamList = string[];

declare global {
  interface Window {
    HTMLCS: any;
    axe: any;
    pushHtmlcsRule: (r: Rule) => void;
    pushAxeRule: (r: Rule) => void;
    htmlcsRuleMap: (t: ParamList) => Rule;
    paramList: ParamList[];
  }
}

window.HTMLCS = window.HTMLCS || {};
