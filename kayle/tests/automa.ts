import assert from "assert";
import { launch } from "puppeteer";
import { autoKayle, setLogging } from "kayle";
import { performance } from "perf_hooks";

setLogging(false);

// this will crawl until all pages are finished.
(async () => {
  const browser = await launch({ headless: "new", waitForInitialPage: false });
  const page = await browser.newPage();

  const startTime = performance.now();

  let warnings = 0;
  let errors = 0;

  const results = await autoKayle({
    page,
    browser,
    runners: ["axe"],
    includeWarnings: true,
    origin: "https://a11ywatch.com", // origin is the fake url in place of the raw content
    // store: `${process.cwd()}/_data/`, // create _data folder first
    cb: async function callback(result) {
      const { issues, pageUrl, documentTitle, meta } = result;
      console.log([`URL: ${pageUrl}`, meta]);

      assert(Array.isArray(issues));
      assert(typeof pageUrl === "string");
      assert(typeof documentTitle === "string");
      errors += meta.errorCount;
      warnings += meta.warningCount;

      if (pageUrl === "https://a11ywatch.com/?plan=l1") {
        // console.log(await page.content())

        console.log(issues);
      }
    },
  });

  const nextTime = performance.now() - startTime;
  console.log("time took", nextTime);

  assert(results.length >= 48);

  console.log(`Errors: ${errors} - Warnings: ${warnings}`);

  await browser.close();
})();
