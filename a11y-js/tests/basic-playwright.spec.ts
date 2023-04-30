import { writeFileSync } from "fs";
import assert from "assert";
import { a11y, setNetworkInterception } from "a11y-js";
import { drakeMock } from "./html-mock"; // static html of 11 issues
import { performance } from "perf_hooks";
import { test, expect } from "@playwright/test";

test("fast_htmlcs audit drakeMock", async ({ page, browser }, testInfo) => {
  await setNetworkInterception(page);
  await page.setContent(drakeMock);

  const startTime = performance.now();
  const results = await a11y({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
  });
  const endTime = performance.now() - startTime;

  const { issues, pageUrl, documentTitle, meta, automateable } = results;

  console.log(issues);
  console.log(`Issue count ${issues.length}`);
  console.log(meta);
  console.log(automateable);
  console.log("time took", endTime);

  // valid list
  assert(Array.isArray(issues));
  // must return at least 11 errors or runner messed up.
  assert(meta.errorCount === 11);
  // must return at least 15 warnings or runner messed up.
  assert(meta.warningCount === 15);
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
