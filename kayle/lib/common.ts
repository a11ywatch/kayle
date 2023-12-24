import { RunnerConfig } from "./config";

export type MetaInfo = {
  errorCount: number;
  warningCount: number;
  noticeCount: number;
  accessScore: number;
};
// exact issue information for page
export type Issue = {
  context: string;
  code: string;
  message: string;
  type: "error" | "warning" | "notice";
  typeCode: number;
  runner: "htmlcs" | "axe" | "a11ywatch";
  runnerExtras: Record<string, unknown>;
  recurrence: number;
  selector: string;
  // the position on the dom to use for screenshots, targets, and etc.
  clip?: DOMRect;
  // base64 image to display in browser.
  clipBase64?: string;
};
// indexs of automatable issues
export type Automatable = {
  // indexs of all missing alt tags.
  missingAltIndexs: number[];
};
// the main audit for a url
export type Audit = {
  automateable: Automatable;
  documentTitle: string;
  issues: Issue[];
  meta: MetaInfo;
  pageUrl: string;
};

// configs that change how the audit behaves
export type RunnerConf = Partial<RunnerConfig & { html?: string }>;
