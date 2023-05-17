import puppeteer from "puppeteer";
import { join } from "path";
import { cwd } from "process";

import assert from "assert";
import { kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";

(async () => {
  // project root directory loading extension
  const ext = join(cwd(), "chrome-extension");
  
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: [
      `--load-extension=${ext}`, // <- runs on every page with extensions on chrome urls
      "--extensions-on-chrome-urls"
    ]
  });

  const page = await browser.newPage();

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await kayle(
    {
      page,
      browser,
      runners: ["htmlcs", "axe"],
      includeWarnings: true,
      html: drakeMock,
      origin: "https://www.drake.com", // origin is the fake url in place of the raw content
    },
    true
  );
  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  // must return at least 44 errors or runner messed up.
  assert(meta.errorCount >= 45);
  // must return at least 34 warnings or runner messed up.
  assert(meta.warningCount === 46);
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await page.screenshot({ path: "./screenshot.png" });

  await browser.close();
})();
