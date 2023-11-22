import puppeteer from "puppeteer";
import { innateBuilder, kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { _audit_not_ready } from "kayle_innate";

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
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
  });

  const mock = html
    .replace(
      "<title>Drake Industries | Custom, Durable, High-Quality Labels, Asset Tags and Custom Server Bezels</title>",
      ""
    )
    .replace(
      `<body class="   hs-content-id-8839032963 hs-site-page page " style="">`,
      `<body class="   hs-content-id-8839032963 hs-site-page page " style=""><form action="/something" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  </form>`
    );

  const startTime = performance.now();
  const audit = await _audit_not_ready(mock, css, false);
  const nextTime = performance.now() - startTime;
  console.log("Rust/WASM TIME ", nextTime);

  const st = performance.now();
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
  console.log("FAST_HTMLCS TIME", nt);

  const s = performance.now();
  await kayle({
    page,
    browser,
    runners: ["axe"],
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
    noIntercept: true,
  });
  const n = performance.now() - s;
  console.log("FAST_AXE TIME", n);

  const a = performance.now();
  await kayle({
    page,
    browser,
    runners: ["ace"],
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
    noIntercept: true,
  });
  const an = performance.now() - a;
  console.log("ACE TIME", an);
  console.log(`Rust Audit: `, audit);

  await browser.close();
})();
