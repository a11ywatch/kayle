import { writeFileSync } from "fs";
import assert from "assert";
import { kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { test, expect } from "@playwright/test";

test("fast_htmlcs audit drakeMock", async ({ page, browser }, testInfo) => {
  const startTime = performance.now();
  const results = await kayle({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
    html: drakeMock,
    origin: "https://www.drake.com",
  });
  const endTime = performance.now() - startTime;

  const { issues, pageUrl, documentTitle, meta, automateable } = results;

  console.log([{meta, automateable}, ["fast_htmlcs: time took", endTime]]);

  // valid list
  assert(Array.isArray(issues));
  assert(meta.errorCount === 12);
  assert(meta.warningCount === 36);
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(documentTitle);

  await page.close();

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
        runner: ["fast_htmlcs"],
      },
      null,
      2
    ),
    "utf8"
  );
});