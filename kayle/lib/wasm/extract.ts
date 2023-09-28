import { get_document_links } from "kayle_innate";
import type { RunnerConfig } from "../config";

/**
 * Gather all links for a web page.
 * @param {Object} [config={}] config - The page and browser object from playwright or puppeteer.
 * @param {string} [target=false] target - The target base absolute url to treat relative links and extract to: set to empty string to include all links.
 * @returns {Promise} Returns a promise which resolves with links.
 */
export async function extractLinks(config: RunnerConfig, target?: string) {
  const htmlContent = await config.page.content();
  const domain = typeof target === "string" ? target : config.page.url();
  return get_document_links(htmlContent, domain !== "about:blank" ? domain : "");
}
