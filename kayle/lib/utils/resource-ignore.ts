// list of domains that we ignore scripts from loading
export const skippedResources = {
  quantserve: null,
  adzerk: null,
  doubleclick: null,
  adition: null,
  exelator: null,
  sharethrough: null,
  "cdn.api.twitter": null,
  "google-analytics": null,
  googletagmanager: null,
  usefathom: null,
  google: null,
  fontawesome: null,
  facebook: null,
  analytics: null,
  optimizely: null,
  clicktale: null,
  mixpanel: null,
  zedo: null,
  clicksor: null,
  tiqcdn: null,
  livereload: null,
  "cdn.jsdelivr.net": null,
  "googlesyndication.com": null,
  "adservice.google.com": null,
  "client.crisp.chat": null,
  "widget.intercom.io": null,
};

// used for puppeteer playwright all interceptions
export const blockedResourceTypes = {
  media: null,
  font: null,
  texttrack: null,
  object: null,
  beacon: null,
  csp_report: null,
  websocket: null,
  // script: null,
  preflight: null,
  image: null,
  imageset: null,
  ping: null,
};

// link of resources [https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-ResourceType]
export const blockedResourceTypesCDP = new Set<string>([
  "Media",
  "Font",
  "CSPViolationReport",
  "XHR",
  "Image",
  "Fetch",
  "Ping",
  "Other",
  "Script",
  "Stylesheet",
]);

export const blockedResourcePatterns = Array.from(blockedResourceTypesCDP).map(
  (resource) => ({
    resourceType: resource,
    requestStage: "Request",
  })
);
