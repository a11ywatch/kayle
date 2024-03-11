import puppeteer from "puppeteer";
import { kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";

// setup test for rust wasm auditing
(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  if (process.env.LOG_ENABLED) {
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }
  const mock = drakeMock
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
  // run kayle with a real browser against the page.
  const issues = await kayle({
    page,
    browser,
    runners: ["kayle"],
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: mock,
  });
  const nextTime = performance.now() - startTime;
  console.log("Kayle Innate TIME ", nextTime);
  console.log(issues);

  await browser.close();
})();
