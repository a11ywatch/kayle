import { RunnerConfig } from "./config";

export type IssueType = "error" | "warning" | "notice";

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
  type: IssueType;
  typeCode: number;
  // kayle is mapped from accessibility-rs
  runner: "htmlcs" | "axe" | "kayle";
  runnerExtras: Record<string, unknown>;
  recurrence: number;
  selector: string;
  // the position on the dom to use for screenshots, targets, and etc.
  clip?: Pick<DOMRect, "x" | "y" | "height" | "width">;
  // base64 image to display in browser.
  clipBase64?: string;
};

export type InnateIssue = {
  context: string;
  selectors: string[];
  code: string;
  issue_type: IssueType;
  type_code: number;
  message: string;
  runner: "accessibility-rs";
  runner_extras: { help_url: string; description: string; impact: string };
  recurrence: number;
  clip?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
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
