import { adblock } from "../data/list";

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
  hubspot: null,
};

// link of resources [https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-ResourceType]
const blockedResourceTypesCDP = new Set<string>([
  "Image",
  "Document",
]);

// we only need to block scripts if adblock is enabled.
if (adblock) {
  blockedResourceTypesCDP.add("Script");
}

// request interception setup CDP
const blockedResourcePatterns = Array.from(blockedResourceTypesCDP).map(
  (resource) => ({
    resourceType: resource,
    requestStage: "Request",
  })
);

export { blockedResourceTypesCDP, blockedResourcePatterns };
