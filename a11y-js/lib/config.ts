type Standard = "WCAG2A" | "WCAG2AA" | "WCAG2AAA" | "SECTION508";

// runner configuration
export type RunnerConfig = {
  browser: any;
  page: any;
  actions?: string[];
  hideElements?: string;
  ignore?: string[];
  includeNotices?: boolean;
  includeWarnings?: boolean;
  rootElement?: string;
  rules?: string;
  runners?: string[];
  standard?: Standard;
  timeout?: number;
  origin?: string;
  language?: string;
};
