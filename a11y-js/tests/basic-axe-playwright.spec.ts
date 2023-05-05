import assert from "assert";
import { writeFileSync } from "fs";
import { a11y, setNetworkInterception } from "a11y-js";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { test, expect } from "@playwright/test";

test("fast_axecore audit drakeMock", async ({ page, browser }, testInfo) => {
  await setNetworkInterception(page);
  await page.setContent(drakeMock);
  // page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

  const startTime = performance.now();
  const results = await a11y({
    page,
    browser,
    runners: ["axe"],
    includeWarnings: true,
    origin: "https://www.drake.com",
  });
  const endTime = performance.now() - startTime;

  const { issues, pageUrl, documentTitle, meta, automateable } = results;

  // console.log(issues);
  console.log(meta);
  console.log(automateable);
  console.log("time took", endTime);

  // valid list
  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");
  assert(meta.warningCount === 10);
  assert(meta.errorCount === 34);

  await expect(page).toHaveTitle(documentTitle);

  await page.close();

  writeFileSync(
    testInfo.outputPath("axe-core.json"),
    JSON.stringify(results, null, 2),
    "utf8"
  );

  writeFileSync(
    testInfo.outputPath("axe-core_stats.json"),
    JSON.stringify(
      {
        mock: "[drakeMock]",
        htmlSize: drakeMock.length,
        duration: endTime,
        errors: meta.errorCount,
        warnings: meta.warningCount,
        runner: ["fast_axecore"],
      },
      null,
      2
    ),
    "utf8"
  );
});
