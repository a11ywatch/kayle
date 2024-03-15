import assert from "assert";
import puppeteer from "puppeteer";
import { kayle } from "kayle";
import { a11ywatchMock } from "./mocks/html-tables-mock";
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

  const startTime = performance.now();
  const { meta, issues, automateable } = await kayle({
    page,
    browser,
    runners: ["htmlcs", "axe"],
    includeWarnings: true,
    html: a11ywatchMock,
    origin: "https://a11ywatch.com", // origin is the fake url in place of the raw content
  });
  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);
  console.log(issues);
  console.log("Issues:", issues.length);

  // valid list
  assert(meta.errorCount === 0);
  assert(meta.warningCount === 2);

  await browser.close();
})();
