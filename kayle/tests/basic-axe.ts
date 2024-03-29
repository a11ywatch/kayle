import assert from "assert";
import puppeteer from "puppeteer";
import { Standard, kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  if (process.env.LOG_ENABLED) {
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }
  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await kayle({
    page,
    browser,
    runners: ["axe"],
    includeWarnings: true,
    standard: Standard.WCAG2AA,
    origin: "https://www.drake.com",
    html: drakeMock,
  });
  const endTime = performance.now() - startTime;

  console.log([{ meta, automateable }, ["fast_axecore: time took", endTime]]);

  // valid list
  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
