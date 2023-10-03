// test critical missing alt, input label, and etc.

import assert from "assert";
import puppeteer from "puppeteer";
import { kayle } from "kayle";
import { performance } from "perf_hooks";

const defaultHTML = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta charset="UTF-8" />
<title>Hello</title>
</head>
<body>
<p>Hello</p>
</body>
</html>`;

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
    runners: ["axe"],
    includeWarnings: true,
    html: defaultHTML,
    origin: "http://www.example.com", // origin is the fake url in place of the raw content
  });
  const nextTime = performance.now() - startTime;

  console.log(issues);
  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  //   assert(Array.isArray(issues));
  //   assert(meta.errorCount === 5);
  //   assert(meta.warningCount === 0);
  //   assert(meta.accessScore === 100); // TODO: add alt missing to access scoring

  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
