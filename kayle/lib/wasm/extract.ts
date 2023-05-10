import { radiant_blast } from "kayle_innate";
import type { RunnerConfig } from "../config";

/**
 * Gather all links for a web page.
 * @param {Object} [config={}] config - The page and browser object from playwright or puppeteer.
 * @returns {Promise} Returns a promise which resolves with links.
 */
export async function extractLinks(config: RunnerConfig) {
  const htmlContent = await config.page.content();

  return radiant_blast(htmlContent);
}
