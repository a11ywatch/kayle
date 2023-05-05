import assert from "assert";
import { writeFileSync } from "fs";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("@axe-core/playwright audit drakeMock", async ({
  page,
  //   browser,
}, testInfo) => {
  await page.setContent(drakeMock);

  const startTime = performance.now();
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  const endTime = performance.now() - startTime;

  const { url, incomplete, violations } =
    accessibilityScanResults;

  // console.log(incomplete);
  console.log(`Issue count ${violations.length}`);
  console.log(`Warning count ${incomplete.length}`);
  console.log("time took", endTime);

  // valid list
  assert(Array.isArray(incomplete));
  assert(typeof url === "string");

  await page.close();

  writeFileSync(
    testInfo.outputPath("@axe-core_playwright.json"),
    JSON.stringify(accessibilityScanResults, null, 2),
    "utf8"
  );
  writeFileSync(
    testInfo.outputPath("@axe-core_playwright_stats.json"),
    JSON.stringify(
      {
        mock: "[drakeMock]",
        htmlSize: drakeMock.length,
        duration: endTime,
        errors: violations.length,
        warnings: incomplete.length,
        runner: ["@axe-core/playwright"],
      },
      null,
      2
    ),
    "utf8"
  );
});
