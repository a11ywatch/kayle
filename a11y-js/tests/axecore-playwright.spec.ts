import assert from "assert";
import { jmendezMock } from "./html-small-mock"; // static html of 11 issues
import { performance } from "perf_hooks";
import { test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// test @axe-core/playwright
test("can test page with axe using @axe-core/playwright", async ({
  page,
  //   browser,
}) => {
  // todo: playwright request interception
  // await setNetworkInterception(page);
  await page.setContent(jmendezMock);

  const startTime = performance.now();
  // todo: pass in custom axe-source from our pre-compiled locales to weigh out differences
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  const nextTime = performance.now() - startTime;

  const { url, incomplete, inapplicable } = accessibilityScanResults;

  console.log(incomplete);
  console.log(`Issue count ${incomplete.length}`);
  console.log(`Warning count ${inapplicable.length}`);

  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(incomplete));
  assert(typeof url === "string");

  await page.close();
});
