import assert from "assert";
import puppeteer from "puppeteer";
import { kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // uncomment to log values for debuging
  // page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await kayle({
    page,
    browser,
    runners: ["htmlcs", "axe"],
    includeWarnings: true,
    html: drakeMock,
    origin: "https://www.drake.com", // origin is the fake url in place of the raw content
  });
  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  // must return at least 44 errors or runner messed up.
  assert(meta.errorCount === 45);
  // must return at least 34 warnings or runner messed up.
  assert(meta.warningCount === 46);
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
