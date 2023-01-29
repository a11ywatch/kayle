import assert from "assert";
import puppeteer from "puppeteer";
import { a11y } from "../lib/a11y";
import { drakeMock } from "./html-mock"; // static html of 11 issues
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(drakeMock);

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await a11y({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
  });
  const nextTime = performance.now() - startTime;

  console.log(issues);
  console.log(issues.length);
  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
