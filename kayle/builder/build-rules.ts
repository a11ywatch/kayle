import { chromium } from "playwright";
import { Standard, kayle } from "kayle";
import { writeFile } from "fs/promises";
import { format } from "prettier";
import { htmlcsRuleMap } from "./htmlcs-rule-map";
import { processParams } from "./build-htmlcs-params";
import type { Rule } from "./build-types";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

  const fast_htmlcs_rules: Rule[] = [];
  const fast_axe_rules: Rule[] = [];

  // inject the scripts
  await kayle(
    {
      page,
      browser,
      runners: ["htmlcs", "axe"],
      html: "<html><body>><h1>Build Rules list</h1></body></html>",
      standard: Standard.WCAG2AA,
      origin: "https://www.example.com",
    },
    true,
  );

  const paramList = await processParams();

  await page.evaluate((o) => {
    window.paramList = o;
  }, paramList);

  await page.addScriptTag({
    content: `window.htmlcsRuleMap = ${htmlcsRuleMap.toString()};`,
  });

  await page.exposeFunction("pushHtmlcsRule", (t: Rule) =>
    fast_htmlcs_rules.push(t),
  );

  await page.exposeFunction("pushAxeRule", (t: Rule) => fast_axe_rules.push(t));

  await page.evaluate(() => {
    for (const r of window.axe.getRules()) {
      window.pushAxeRule(r);
    }
    for (const k of window.paramList) {
      if (k && k.length >= 4) {
        window.pushHtmlcsRule(window.htmlcsRuleMap(k));
      }
    }
  });

  const pConfig = {
    singleQuote: true,
    semi: false,
    parser: "babel",
  };

  const DNE = "THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT";

  await writeFile(
    "./lib/rules/htmlcs-rules.ts",
    Buffer.from(
      await format(
        `/* ${DNE} */\nexport const htmlcsRules = ${JSON.stringify(
          fast_htmlcs_rules,
        )};`,
        pConfig,
      ),
    ),
    "utf8",
  );

  await writeFile(
    "./lib/rules/axe-rules.ts",
    Buffer.from(
      await format(
        `/* ${DNE} */\nexport const axeRules = ${JSON.stringify(
          fast_axe_rules,
        )};`,
        pConfig,
      ),
    ),
    "utf8",
  );

  await browser.close();
})();
