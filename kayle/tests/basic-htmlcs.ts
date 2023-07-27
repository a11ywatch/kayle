import assert from "assert";
import puppeteer from "puppeteer";
import { kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";

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
    origin: "https://www.drake.com",
    html: drakeMock,
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
