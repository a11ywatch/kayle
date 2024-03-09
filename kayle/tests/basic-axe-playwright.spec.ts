import assert from "assert";
import { writeFileSync } from "fs";
import { Standard, kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { test } from "@playwright/test";

test("fast_axecore audit drakeMock", async ({ page, browser }, testInfo) => {
  if (process.env.LOG_ENABLED) {
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }
  const startTime = performance.now();
  const results = await kayle({
    page,
    browser,
    runners: ["axe"],
    includeWarnings: true,
    standard: Standard.WCAG2AA,
    origin: "https://www.drake.com",
    html: drakeMock,
    waitUntil: "domcontentloaded",
  });
  const endTime = performance.now() - startTime;

  const { issues, pageUrl, documentTitle, meta, automateable } = results;

  console.log([{ meta, automateable }, ["fast_axecore: time took", endTime]]);

  // valid list
  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");
  assert(meta.warningCount === 9);
  assert(meta.errorCount === 31);

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
