import puppeteer from "puppeteer";
import { join } from "path";
import { cwd } from "process";
import assert from "assert";
import { kayle } from "kayle";
import { jmendezMock } from "./mocks/html-small-mock";
import { performance } from "perf_hooks";

(async () => {
  // project root directory loading extension
  const ext = join(cwd(), "chrome-extension");

  const browser = await puppeteer.launch({
    headless: "new",
    dumpio: true,
    ignoreDefaultArgs: ["--disable-extensions"],
    args: [
      `--load-extension=${ext}`, // <- runs on every page with extensions on chrome urls
      "--extensions-on-chrome-urls",
    ],
  });

  const page = await browser.newPage();
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

  const startTime = performance.now();

  const { issues, meta, automateable } = await kayle(
    {
      page,
      browser,
      runners: ["htmlcs", "axe"],
      includeWarnings: true,
      html: jmendezMock,
      origin: "https://jeffmendez.com", // origin is the fake url in place of the raw content
      _browserExtension: true, // enable the extension
    },
    true
  );

  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));

  await browser.close();
})();
