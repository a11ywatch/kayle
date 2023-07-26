import assert from "assert";
import { chromium } from "@playwright/test";
import { kayle } from "kayle";
import { htmlAltMock } from "../mocks/html-alt-mock";
import { performance } from "perf_hooks";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const startTime = performance.now();
  const { issues, meta, automateable } = await kayle({
    includeWarnings: true,
    page,
    browser,
    runners: ["htmlcs"],
    html: htmlAltMock,
  });
  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);
  console.log(issues);

  // fixme: selectors should be unique across elements
  assert(issues[0].selector !== issues[1].selector);

  await browser.close();
})();
