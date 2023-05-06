import { writeFileSync } from "fs";
import assert from "assert";
import { a11y, setNetworkInterception } from "a11y-js";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { test, expect } from "@playwright/test";

test("fast_htmlcs and fast_axecore audit drakeMock", async ({ playwright }, testInfo) => {
  const browser = await playwright.chromium.launch()
  const incognitoBrowser = await browser.newContext();
  const page = await incognitoBrowser.newPage();

  await setNetworkInterception(page);
  await page.setContent(drakeMock);

  const startTime = performance.now();
  const results = await a11y({
    page,
    browser: incognitoBrowser,
    runners: ["htmlcs", "axe"],
    includeWarnings: true,
  });
  const endTime = performance.now() - startTime;

  const { issues, pageUrl, documentTitle, meta, automateable } = results;

  // console.log(issues);
  console.log(meta);
  console.log(automateable);
  console.log("a11y-js(fast_htmlcs, fast_axecore): time took", endTime);

  // valid list
  assert(Array.isArray(issues));
  assert(meta.errorCount === 45);
  assert(meta.warningCount === 35);
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(documentTitle);

  await page.close();
  await incognitoBrowser.close();
  await browser.close();

  writeFileSync(
    testInfo.outputPath("htmlcs.json"),
    JSON.stringify(results, null, 2),
    "utf8"
  );

  writeFileSync(
    testInfo.outputPath("htmlcs_stats.json"),
    JSON.stringify(
      {
        mock: "[drakeMock]",
        htmlSize: drakeMock.length,
        duration: endTime,
        errors: meta.errorCount,
        warnings: meta.warningCount,
        runner: ["fast_htmlcs", "fast_axecore"],
      },
      null,
      2
    ),
    "utf8"
  );
});
