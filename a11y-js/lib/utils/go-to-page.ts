import { blockedResourceTypes, skippedResources } from "./resource-ignore";
import type { RunnerConfig } from "../config";

type Request = {
  isInterceptResolutionHandled?(): boolean;
  continue(): Promise<void>;
  abort(): Promise<void>;
};

/**
 * Block network based on resource type and url.
 * @param {Object} [req={}] - Intercept config for resourceType, request, and url.
 * @param {Boolean} [allowImage=false] - All the image to continue - useful on reload intercept.
 * @returns {Promise} Returns a promise void.
 */
const blocknet = async (
  {
    resourceType,
    request,
    url,
  }: {
    resourceType: string;
    request: Request;
    url: string;
  },
  allowImage?: boolean
) => {
  // ignore intercepted request
  if (
    request.isInterceptResolutionHandled &&
    typeof request.isInterceptResolutionHandled === "function" &&
    request.isInterceptResolutionHandled()
  ) {
    return await Promise.resolve();
  }

  // allow images upon reload intercepting.
  if (resourceType === "image" && allowImage) {
    return await request.continue();
  }

  if (blockedResourceTypes.hasOwnProperty(resourceType)) {
    return await request.abort();
  }

  if (url && resourceType === "script") {
    const urlBase = url.split("?");
    const splitBase = urlBase.length ? urlBase[0].split("#") : [];
    const requestUrl = splitBase.length ? splitBase[0] : "";

    if (skippedResources.hasOwnProperty(requestUrl)) {
      return await request.abort();
    }
  }

  return await request.continue();
};

// http request shaped partial for puppeteer or playwright
type HttpRequest = {
  url?(): string;
  resourceType?(): string;
  request?(): { resourceType(): string };
};

// block expensive network resources from the page
export const networkBlock = async (
  request: Partial<HttpRequest> & Request,
  req?: any,
  allowImage?: boolean
) => {
  const { resourceType, url } = request.request
    ? { resourceType: request.request().resourceType(), url: req.url() }
    : {
        resourceType: request.resourceType(),
        url: request.url(),
      };

  return await blocknet({ resourceType, request, url }, allowImage);
};

// block expensive resources
export const setNetworkInterception = async (page): Promise<boolean> => {
  // playwright
  if (!page.setRequestInterception) {
    if (
      page._route &&
      (!page._routes.length ||
        !page._routes.some((route) => route.url === "**/*"))
    ) {
      return await page.route("**/*", networkBlock);
    }
    return
  }
  // if request listeners are not set add interception
  if (!page.listenerCount("request")) {
    try {
      await page.setRequestInterception(true);
      page.on("request", networkBlock);

      return true;
    } catch (e) {
      return false;
    }
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
