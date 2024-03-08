import { RunnerConfig } from "../config";
import { sendCDPPageConfigurationEnable } from "./cdp-blocking";

/**
 * Block network based on resource type and url.
 * @param {Object} [o={}] - Intercept config for resourceType, request, and url.
 * @returns {Promise} Returns a promise void.
 */
export const setCDPIntercept = async (o: Partial<RunnerConfig>) => {
  const cdpSession = o.cdpSession
    ? o.cdpSession
    : o?.page?._client &&
      typeof o.page._client === "function" &&
      o.page._client();

  if (!cdpSession) {
    try {
      o.cdpSession = await o.page.context().newCDPSession(o.page);
    } catch (e) {
      console.error(e);
    }
  }

  await sendCDPPageConfigurationEnable(o.cdpSession ?? cdpSession, o);
};

// block expensive resources
export const setNetworkInterception = async (
  o: Partial<RunnerConfig>,
): Promise<boolean | void> => await setCDPIntercept(o);

/**
 * Navigate to a url or html page with network interception.
 * @param {{page: Page, timeout: Number, html: String}} [{page: page, timeout: 15000, html: "" }] - Object with the page and navigation timeout.
 * @param {String} [url=""] - The website url.
 * @returns {Promise<Boolean>} Returns if the page was navigated to successfully.
 */
export const goToPage = async (
  o: Partial<RunnerConfig & { html?: string }>,
): Promise<boolean> => {
  await setCDPIntercept(o);

  const { page, timeout, waitUntil, origin } = o;

  let valid = false;

  try {
    // open blank page fallback for proxy intercept
    const res = await page.goto(origin || "http://localhost", {
      timeout: timeout ?? 0,
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
