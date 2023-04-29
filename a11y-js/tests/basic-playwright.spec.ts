import assert from "assert";
import { a11y, setNetworkInterception } from "a11y-js";
import { jmendezMock } from "./html-small-mock"; // static html of 11 issues
import { performance } from "perf_hooks";
import { test, expect } from "@playwright/test";

test("can test page with custom htmlcs", async ({ page, browser }) => {
  await setNetworkInterception(page);
  await page.setContent(jmendezMock);

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await a11y({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
  });
  const nextTime = performance.now() - startTime;

  console.log(issues);
  console.log(`Issue count ${issues.length}`);
  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(documentTitle);

  await page.close();
});
