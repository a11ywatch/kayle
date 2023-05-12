import assert from "assert";
import { chromium } from "playwright";
import { kayle } from "kayle";
import { htmlAltMock } from "../mocks/html-alt-mock";
import { performance } from "perf_hooks";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await kayle({
    page,
    browser,
    runners: ["htmlcs"],
    html: htmlAltMock,
  });
  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);
  console.log(issues);

  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
