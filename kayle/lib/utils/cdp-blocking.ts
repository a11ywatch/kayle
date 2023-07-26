import { RunnerConf } from "../common";
import { CDPSession, KAYLE_PERFORMANCE_MODE } from "../config";
import { adEngine } from "./adblock";
import { blockedResourcePatterns, skippedResources } from "./resource-ignore";

// CDP block list of domains to ignore resources
const blockedResourceUrls = KAYLE_PERFORMANCE_MODE
  ? Object.keys(skippedResources)
  : null;

export const blockFilter = async (
  e: any,
  client: CDPSession,
  o: Partial<RunnerConf>,
  allowImage?: boolean
) => {
  const resourceType = e.resourceType;
  const url = e.request && e.request.url && e.request.url;

  if (
    !allowImage &&
    (resourceType === "Image" || (url && url.endsWith(".ico")))
  ) {
    return await client.send("Fetch.fulfillRequest", {
      requestId: e.requestId,
      responseCode: 200,
      body: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==",
    });
  }

  // Block Request
  if (
    resourceType === "Script" ||
    resourceType === "XHR" ||
    resourceType === "Stylesheet" ||
    resourceType === "Font"
  ) {
    if (!url || (url && !e.request?.headers?.Referer.startsWith(o.origin))) {
      return await client.send("Fetch.failRequest", {
        requestId: e.requestId,
        errorReason: "Aborted",
      });
    }
  }

  if (
    adEngine &&
    url &&
    resourceType === "Script" &&
    (url.startsWith("https://") || url.startsWith("http://")) &&
    adEngine.check(url, new URL(url).origin, resourceType, true)
  ) {
    return await client.send("Fetch.failRequest", {
      requestId: e.requestId,
      errorReason: "Aborted",
    });
  }

  return await client.send("Fetch.continueRequest", {
    requestId: e.requestId,
  });
};

// perform native cdp blocking
export const sendCDPPageConfigurationEnable = async (
  client: CDPSession,
  o: Partial<RunnerConf>
) => {
  if (!client || (client && !client.on)) {
    return;
  }

  try {
    await Promise.all([
      client.send("Network.setBlockedURLs", {
        urls: blockedResourceUrls,
      }),
      client.send("Fetch.enable", {
        patterns: blockedResourcePatterns,
      }),
      client.send("Page.enable"),
      client.on("Page.frameRequestedNavigation", (e) => {
        if (
          e.reason == "scriptInitiated" &&
          e.url &&
          e.disposition === "currentTab"
        ) {
          // clear test - script may contain infinite re-navigation if cleared and executed
          // we should instead track the url and set to block the transition.
          if (o._watcher && o._watcher.timer) {
            return clearTimeout(o._watcher.timer);
          }
        }
      }),
    ]);
  } catch (e) {
    console.error(e);
  }

  client.on(
    "Fetch.requestPaused",
    async (e) => await blockFilter(e, client, o)
  );
};

// reset CDP settings in order to get images and etc
export const sendCDPPageConfigurationReset = async (
  client: CDPSession,
  o: Partial<RunnerConf>,
  allowImages?: boolean
) => {
  if (!client || (client && !client.on)) {
    return;
  }

  // try {
  //   await Promise.all([
  //     //   client.send("Console.enable"),
  //     //   client.send("Network.setBypassServiceWorker", { bypass: false }),
  //     //   client.send("Page.setBypassCSP", { enabled: false }),
  //   ]);
  // } catch (e) {
  //   console.error(e);
  // }

  client.on("Fetch.requestPaused", async (e) => {
    await blockFilter(e, client, o, allowImages);
  });
};
