// default config for runner
export const defaultOptions = {
  actions: [],
  browser: null,
  page: null,
  headers: {},
  hideElements: null,
  ignore: [],
  includeNotices: false,
  includeWarnings: false,
  rootElement: null,
  rules: [],
  runners: ["htmlcs"],
  standard: "WCAG2AA",
  timeout: 60000,
  viewport: {
    width: 1280,
    height: 1024,
  },
};

// runner configuration
export type RunnerConfig = typeof defaultOptions;
