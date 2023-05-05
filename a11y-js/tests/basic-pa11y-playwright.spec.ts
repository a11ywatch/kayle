import { writeFileSync } from "fs";
import assert from "assert";
import pa11y from "pa11y";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { test, expect } from "@playwright/test";

test("pa11y htmlcs audit drakeMock", async ({ page, browser }, testInfo) => {
  await page.setContent(drakeMock);

  page.removeListener = (_, __) => {
    return page;
  };

  // @ts-ignore patch page for pa11y
  page.setUserAgent = (_: string) => {
    return "";
  };
  // @ts-ignore patch page for pa11y
  page.setViewport = (_: string) => {
    return "";
  };

  const startTime = performance.now();
  const results = await pa11y("", {
    page,
    browser,
    runners: ["htmlcs", "axe"],
    includeWarnings: true,
    ignoreUrl: true,
  });
  const endTime = performance.now() - startTime;

  const { issues, pageUrl, documentTitle } = results;

  let errorCount = 0;
  let warningCount = 0;

  // iterate and build all issues
  for (const issue of issues) {
    if (issue.type === "error") {
      errorCount++;
    }
    if (issue.type === "warning") {
      warningCount++;
    }
  }

  console.log("time took", endTime);
  console.log({ errorCount: errorCount, warningCount: warningCount, noticeCount: 0, accessScore: undefined })

  // valid list
  assert(Array.isArray(issues));
  assert(errorCount === 29);
  assert(warningCount === 53);
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(documentTitle);

  await page.close();

  writeFileSync(
    testInfo.outputPath("pa11y_htmlcs.json"),
    JSON.stringify(results, null, 2),
    "utf8"
  );

  writeFileSync(
    testInfo.outputPath("pa11y_htmlcs_stats.json"),
    JSON.stringify(
      {
        mock: "[drakeMock]",
        htmlSize: drakeMock.length,
        duration: endTime,
        errors: errorCount,
        warnings: warningCount,
        runner: ["htmlcs", "axe"],
      },
      null,
      2
    ),
    "utf8"
  );
});
