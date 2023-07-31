import { RunnerConf } from "../common";
import { CDPSession, _log } from "../config";
import { adEngine } from "./adblock";
import { blockedResourcePatterns, skippedResources } from "./resource-ignore";

// CDP block list of domains to ignore resources
const blockedResourceUrls = Object.keys(skippedResources);

export const blockFilter = async (
  e: any,
  client: CDPSession,
  o: Partial<RunnerConf>
) => {
  const resourceType = e.resourceType;

  if (resourceType === "Document" && o.html && !o._initRequest) {
    o._initRequest = true;
    return await client.send("Fetch.fulfillRequest", {
      requestId: e.requestId,
      responseCode: 200,
      body: Buffer.from(o.html).toString("base64"),
    });
  } else if (!o.html && !o._initRequest) {
    o._initRequest = true;
  }

  const url = e.request && e.request.url;

  if (
    (!o.allowImages && resourceType === "Image") ||
    (resourceType === "Script" &&
      adEngine &&
      url &&
      (url.startsWith("https://") || url.startsWith("http://")) &&
      adEngine.check(url, new URL(url).origin, resourceType, true))
  ) {
    return await client.send("Fetch.failRequest", {
      requestId: e.requestId,
      errorReason: "Aborted",
    });
  }

  // allow interceptions if first request continued
  if (o._initRequest) {
    return await client.send("Fetch.continueRequest", {
      requestId: e.requestId,
    });
  }
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
    await Promise.allSettled([
      client.send("Network.setBlockedURLs", {
        urls: blockedResourceUrls,
      }),
      client.send("Fetch.enable", {
        patterns: blockedResourcePatterns,
      }),
      client.send("Page.enable"),
      client.send("Preload.disable"),
      client.send("ServiceWorker.disable"),
      !_log.enabled ? client.send("Runtime.discardConsoleEntries") : undefined,
    ]);
  } catch (e) {
    console.error(e);
  }

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
  });

  client.on("Fetch.requestPaused", async (e) => {
    try {
      await blockFilter(e, client, o);
    } catch (e) {
      _log.enabled && console.error(e);
    }
  });
};

// reset CDP settings in order to get images and etc
export const sendCDPPageConfigurationReset = async (
  client: CDPSession,
  o: Partial<RunnerConf>,
  allowImages?: boolean,
  all?: boolean // reset all CDP
) => {
  if (!client || (client && !client.on)) {
    return;
  }

  // reset the initial html fetch
  if (o.html) {
    o._initRequest = false;
  }

  if (all) {
    try {
      await Promise.allSettled([
        client.send("Page.disable"),
        client.send("Preload.enable"),
        client.send("Fetch.disable"),
        client.send("ServiceWorker.enable"),
        !_log.enabled
          ? client.send("Runtime.discardConsoleEntries")
          : undefined,
      ]);
    } catch (e) {
      console.error(e);
    }
  }
};
