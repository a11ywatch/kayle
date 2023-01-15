import type { Browser, Page } from "puppeteer";

type Standard = "WCAG2A" | "WCAG2AA" | "WCAG2AAA" | "SECTION508";

// runner configuration
export type RunnerConfig = {
  actions?: string[];
  browser: Browser;
  page: Page;
  headers?: Record<string, unknown>;
  hideElements?: boolean;
  ignore?: string[];
  includeNotices?: boolean;
  includeWarnings?: boolean;
  rootElement?: string;
  rules?: string;
  runners?: string[];
  standard?: Standard;
  timeout?: number;
  viewport: {
    width?: number;
    height?: number;
  };
};
