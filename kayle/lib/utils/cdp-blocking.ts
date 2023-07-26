import { CDPSession, KAYLE_PERFORMANCE_MODE } from "../config";
import { skippedResources } from "./resource-ignore";

// CDP block list of domains to ignore resources
const blockedResourceUrls = KAYLE_PERFORMANCE_MODE
  ? Object.keys(skippedResources)
  : null;

// perform native cdp blocking
export const sendCDPPageConfigurationEnable = async (client: CDPSession) => {
  if (!client || (client && !client.on)) {
    return;
  }
  try {
    await Promise.all([
      client.send("Network.setBlockedURLs", {
        urls: blockedResourceUrls,
      }),
      // todo: handle all events from resource ignore
      //   client.send("Fetch.enable", {
      //     patterns: [
      //       {
      //         resourceType: "Image",
      //         requestStage: "Request",
      //       },
      //     ],
      //   }),
      //   client.send("Console.disable"),
      //   client.send("Network.setBypassServiceWorker", { bypass: true }),
      //   client.send("Page.setBypassCSP", { enabled: true }),
    ]);
  } catch (e) {
    console.error(e);
  }

  //   client.on("Fetch.requestPaused", async (e) => {
  //     const imageResource = e.resourceType === "Image";

  //     if (imageResource || (e.request && e.request.url && e.request.url.endsWith(".ico"))) {
  //       await client.send("Fetch.fulfillRequest", {
  //         requestId: e.requestId,
  //         responseCode: 200,
  //         body: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==",
  //       });
  //     } else {
  //       await client.send("Fetch.continueRequest", {
  //         requestId: e.requestId,
  //       });
  //     }
  //   });
};

// reset CDP settings in order to get images and etc
export const sendCDPPageConfigurationReset = async (client: CDPSession) => {
  if (!client) {
    return;
  }

  try {
    await Promise.all([
      client.send("Console.enable"),
      client.send("Network.setBypassServiceWorker", { bypass: false }),
      client.send("Page.setBypassCSP", { enabled: false }),
    ]);
  } catch (e) {
    console.error(e);
  }
  client.on("Fetch.requestPaused", async (e) => {
    await client.send("Fetch.continueRequest", {
      requestId: e.requestId,
    });
  });
};
