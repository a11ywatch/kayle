import assert from "assert";
import puppeteer from "puppeteer";
import { a11y, setNetworkInterception } from "a11y-js";
import { drakeMock } from "./mocks/html-mock";
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

  await setNetworkInterception(page);
  await page.setContent(drakeMock);

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await a11y({
    page,
    browser,
    runners: ["htmlcs", "axe"],
    includeWarnings: true,
    language: "ja",
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
  assert(
    issues[issues.length - 1].message ===
      "この要素のテキストまたは背景は透明部分を含みます。テキストと背景のコントラスト比が少なくとも4.5:1であることを確認してください。"
  );
  await browser.close();
})();
