import { blockedResourceTypes, skippedResources } from "./resource-ignore";
import { adEngine } from "./adblock";
import { RunnerConfig, KAYLE_PERFORMANCE_MODE } from "../config";
import { isPlaywright } from "./automation";
import { sendCDPPageConfigurationEnable } from "./cdp-blocking";

type Request = {
  isInterceptResolutionHandled?(): boolean;
  continue(): Promise<void>;
  abort(): Promise<void>;
};

type NetworkResource = {
  resourceType: string;
  request: Request;
  url: string;
  domain?: string;
};

/**
 * Block network based on resource type and url.
 * @param {Object} [req={}] - Intercept config for resourceType, request, and url.
 * @param {Boolean} [allowImage=false] - All the image to continue - useful on reload intercept.
 * @returns {Promise} Returns a promise void.
 */
const blocknet = async (
  { resourceType, request, url }: NetworkResource,
  allowImage?: boolean
) => {
  // ignore intercepted request
  if (
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

  if (
    url &&
    resourceType === "script" &&
    (url.startsWith("https://") || url.startsWith("http://"))
  ) {
    if (skippedResources.hasOwnProperty(new URL(url).hostname)) {
      return await request.abort();
    }
  }

  if (
    adEngine &&
    typeof adEngine.check === "function" &&
    (url.startsWith("https://") || url.startsWith("http://")) &&
    adEngine.check(url, new URL(url).origin, resourceType, true)
  ) {
    return await request.abort();
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

export const setCDPIntercept = async (o: Partial<RunnerConfig>) => {
  if (KAYLE_PERFORMANCE_MODE) {
    const cdpSession = o.cdpSession
      ? o.cdpSession
      : o?.page?._client &&
        typeof o.page._client === "function" &&
        o.page._client();

    if (!cdpSession) {
      o.cdpSession = await o.page.context().newCDPSession(o.page);
    }

    await sendCDPPageConfigurationEnable(o.cdpSession ?? cdpSession, o);
  }
};

// block expensive resources
export const setNetworkInterception = async (
  o: Partial<RunnerConfig>
): Promise<boolean | void> => {
  // await setCDPIntercept(o);

  const { page } = o;

  // playwright
  if (isPlaywright(page)) {
    if (
      !page._route ||
      (page._route &&
        (!page._routes.length ||
          !page._routes.some((route) => route.url === "**/*")))
    ) {
      return await page.route("**/*", networkBlock);
    }
    // interception is disabled
    return;
  }

  // if request listeners are not set add interception
  if (!page.listenerCount("request")) {
    try {
      await page.setRequestInterception(true);
      page.on("request", networkBlock);
    } catch (e) {
      //
    }
  }
};

// playwright detect if all route
const isAllRoute = (route) => route.url === "**/*";

// set RAW HTML CONTENT
const setHtmlIntercept = async (
  o: Partial<RunnerConfig> & { html?: string }
) => {
  const { page, html } = o;
  let firstRequest = false;

  const blockNetwork = async (request, res) => {
    // initial page navigation request intercept with custom HTML
    if (!firstRequest) {
      firstRequest = true;
      const data = {
        status: 200,
        contentType: "text/html",
        body: html,
      };

      if (request.respond) {
        return await request.respond(data);
      }

      return await request.fulfill(data);
    } else {
      return await networkBlock(request, res);
    }
  };

  try {
    if (isPlaywright(page)) {
      if (
        !page._route ||
        (page._route &&
          (!page._routes.length || !page._routes.some(isAllRoute)))
      ) {
        await page.route("**/*", blockNetwork);
      }
    } else {
      await page.setRequestInterception(true);
      page.on("request", blockNetwork);
    }
  } catch (e) {
    //
  }
};

/**
 * Navigate to a url or html page with network interception.
 * @param {{page: Page, timeout: Number, html: String}} [{page: page, timeout: 15000, html: "" }] - Object with the page and navigation timeout.
 * @param {String} [url=""] - The website url.
 * @returns {Promise<Boolean>} Returns if the page was navigated to successfully.
 */
export const goToPage = async ({
  page,
  timeout,
  html,
  waitUntil,
  noIntercept,
  cdpSession,
  origin,
}: Partial<RunnerConfig & { html?: string }>): Promise<boolean> => {
  if (html) {
    await setHtmlIntercept({
      page,
      html,
      timeout,
      noIntercept,
      cdpSession,
      origin,
    });
  } else if (!noIntercept) {
    await setNetworkInterception({
      page,
      timeout,
      waitUntil,
      noIntercept,
      cdpSession,
      origin,
    });
  }

  let valid = false;

  try {
    // open blank page fallback for proxy intercept
    const res = await page.goto(origin ?? "http://localhost", {
      timeout: timeout || 0,
      waitUntil: waitUntil ?? "domcontentloaded",
    });
    if (res) {
      valid = res.status() === 304 || res.ok();
    }
  } catch (e) {
    // page does not exist
  }

  return valid;
};
