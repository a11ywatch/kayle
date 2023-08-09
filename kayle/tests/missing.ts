// test critical missing alt, input label, and etc.

import assert from "assert";
import puppeteer from "puppeteer";
import { kayle } from "kayle";
import { performance } from "perf_hooks";

const defaultHTML = `<!DOCTYPE html>
<html>
  <body>
    <h1>Testing Accessibility</h1>
    <p>Is this inclusive?</p>
    <input type="text" value="something"></input>
    <img src="/something" type="text" />
  </body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  if (process.env.LOG_ENABLED) {
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }
  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await kayle({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
    html: defaultHTML,
    origin: "http://www.myspace.com", // origin is the fake url in place of the raw content
  });
  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  assert(Array.isArray(issues));
  assert(meta.errorCount === 5);
  assert(meta.warningCount === 0);
  assert(meta.accessScore === 100); // TODO: add alt missing to access scoring

  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
