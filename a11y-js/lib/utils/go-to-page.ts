import { blockedResourceTypes, skippedResources } from "./resource-ignore";
import type { RunnerConfig } from "../config";

// block expensive network resources from the page
export const networkBlock = (request, allowImage?: boolean) => {
  const resourceType = request.resourceType();

  // allow images upon reload intercepting.
  if (resourceType === "image" && allowImage) {
    return request.continue();
  }

  if (blockedResourceTypes.hasOwnProperty(resourceType)) {
    return request.abort();
  }

  const url = request.url();

  if (url && resourceType === "script") {
    const urlBase = url.split("?");
    const splitBase = urlBase.length ? urlBase[0].split("#") : [];
    const requestUrl = splitBase.length ? splitBase[0] : "";

    if (skippedResources.hasOwnProperty(requestUrl)) {
      return request.abort();
    }
  }

  return request.continue();
};

// block expensive resources
export const setNetworkInterception = async (page): Promise<boolean> => {
  if (!page.setRequestInterception) {
    return false;
  }
  try {
    await page.setRequestInterception(true);
    page.on("request", networkBlock);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Navigate to a url with network interception.
 * @param {{page: Page, timeout: number}} [{page: page, timeout: 15000 }] - Object with the page and navigation timeout.
 * @param {String} [url=""] - The website url.
 * @returns {Promise<Boolean>} Returns if the page was navigated to successfully.
 */
export const goToPage = async (
  { page, timeout }: Partial<RunnerConfig>,
  url: string
): Promise<boolean> => {
  let valid = false;

  // todo: lazy import interception between playwright/puppeteer/etc or split util
  await setNetworkInterception(page);

  return new Promise(async (resolve) => {
    try {
      const res = await page.goto(url, {
        timeout: timeout || 0,
        waitUntil: "domcontentloaded",
      });
      if (res) {
        valid = res.status() === 304 || res.ok();
      }
    } catch (e) {
      // page does not exist
    }

    resolve(valid);
  });
};
