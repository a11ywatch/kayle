import assert from "assert";
import puppeteer from "puppeteer";
import { autoKayle, setLogging } from "kayle";
import { performance } from "perf_hooks";

setLogging(true);

// this will crawl untill all pages are finished.
(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const startTime = performance.now();
  const results = await autoKayle({
    page,
    browser,
    runners: ["htmlcs", "axe"],
    includeWarnings: true,
    origin: "https://a11ywatch.com", // origin is the fake url in place of the raw content
    store: `${process.cwd()}/_data/`, // create _data folder first
  });
  const nextTime = performance.now() - startTime;
  console.log("time took", nextTime);

  for (const result of results) {
    const { issues, pageUrl, documentTitle, meta } = result;
    console.log([`URL: ${pageUrl}`, meta]);
    assert(Array.isArray(issues));
    assert(typeof pageUrl === "string");
    assert(typeof documentTitle === "string");
  }

  assert(results.length >= 48);

  await browser.close();
})();
