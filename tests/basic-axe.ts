import assert from "assert";
import puppeteer from "puppeteer";
import { a11y } from "../lib/a11y";
import { jmendezMock } from "./html-mock"; // static html of 11 issues
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch({
    dumpio: true,
    args: [
      "--headless",
      "--no-sandbox",
      "--no-first-run",
      "--disable-web-security",
      "--disable-features=site-per-process",
    ],
  });
  const page = await browser.newPage();
  await page.setContent(jmendezMock);

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await a11y({
    page,
    browser,
    runners: ["axe"],
    includeWarnings: true,
    origin: "https://jeffmendez.com",
  });
  const nextTime = performance.now() - startTime;

  console.log(issues);
  console.log(`Issue count ${issues.length}`);
  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
