import puppeteer from "puppeteer";
import { innateBuilder, kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { audit } from "kayle_innate";

// setup test for rust wasm auditing
(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  if (process.env.LOG_ENABLED) {
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }
  const { html, css } = await innateBuilder({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
  });
  const startTime = performance.now();
  // 8 - after building end engine optimized most likely will be at 12 ms
  await audit(html, css);
  const nextTime = performance.now() - startTime;
  console.log("Rust/WASM TIME ", nextTime);

  const st = performance.now();
  // 28 ms
  await kayle({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
    noIntercept: true,
  });
  const nt = performance.now() - st;
  console.log("JS TIME", nt);

  await browser.close();
})();
