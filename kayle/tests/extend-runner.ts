import assert from "assert";
import puppeteer from "puppeteer";
import { Standard, kayle, extendRunner, MainRunner } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  if (process.env.LOG_ENABLED) {
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }
  const startTime = performance.now();

  // pure javascript required. No typescript!
  extendRunner(
    MainRunner.htmlcs,
    `
  // use console.log(JSON.stringify(Object.keys(window))) to see all of the objects to extend.
  // set the function HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2.process to a variable to re-use the logic prior in the call.

  // store the prior sniff in a variable to re-use the logic
  const prevHeadSniffCase = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2.process;

  HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2.process = (element, _) => {
    // re-run the logic for the case
    prevHeadSniffCase(element, _);
    // log something to test if output ran
    console.log("Running extended head element case");
    // we can write a test here that should pass some logic. For now we just add a new error
    HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        HTMLCS.getTranslation("2_4_2_H25.1.NoHeadEl"),
        "H25.1.NoHeadEl"
    );
  }
  
  // Add a new rule example - 4_1_4_1_4

  window["HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_4"] = {
    register: () => ["html"],
    process: (element, _) => {
        console.log("NEW Rule run!");
        HTMLCS.addMessage(
            HTMLCS.ERROR,
            element,
            "This is some new rule for something.",
            "H55.1.NoItem"
        );
    },
  };
  
  // push the new sniff to the list
  HTMLCS_WCAG2AAA.sniffs.push("Principle4.Guideline4_1.4_1_4");
  // register the new sniff rule to run
  HTMLCS.registerSniff("WCAG2AAA", "Principle4.Guideline4_1.4_1_4");
  `.trimStart()
  );

  const { issues, pageUrl, documentTitle, meta, automateable } = await kayle({
    page,
    browser,
    runners: [MainRunner.htmlcs],
    includeWarnings: true,
    standard: Standard.WCAG2AAA,
    origin: "https://www.drake.com",
    html: drakeMock,
  });
  const nextTime = performance.now() - startTime;

  console.log(`Issue count ${issues.length}`);
  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");
  // we should have two extra errors
  assert(meta.errorCount == 25);

  await browser.close();
})();
