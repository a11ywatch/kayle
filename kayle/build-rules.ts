import { chromium } from "playwright";
import { Standard, kayle } from "kayle";
import { writeFile } from "fs/promises";
import { format } from "prettier";

type Rule = {
  ruleId: string;
  description?: string;
  help?: string;
  helpUrl?: string;
  tags?: string[];
  actIds?: string[];
};

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

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

  await page.exposeFunction("pushHtmlcsRule", (t: Rule) => {
    fast_htmlcs_rules.push(t);
  });

  await page.exposeFunction("pushAxeRule", (t: Rule) => {
    fast_axe_rules.push(t);
  });

  await page.evaluate(() => {
    // @ts-ignore
    for (const r of window.axe.getRules()) {
      // @ts-ignore we need to get the rules description and urls.
      window.pushAxeRule(r);
    }
    for (const k of Object.keys(window)) {
      if (k.startsWith("HTMLCS_WCAG2AAA_Sniffs_Principle")) {
        // @ts-ignore
        window.pushHtmlcsRule({
          ruleId: k,
        });
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
