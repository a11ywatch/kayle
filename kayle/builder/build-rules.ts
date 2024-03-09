import { chromium } from "playwright";
import { Standard, kayle, htmlcsLocales, axeLocales } from "kayle";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "node:fs";

import { format } from "prettier";
import { htmlcsRuleMap } from "./htmlcs-rule-map";
import { processParams } from "./build-htmlcs-params";
import type { Rule } from "./build-types";

(async () => {
  const browser = await chromium.launch({ headless: true });

  const pConfig = {
    singleQuote: true,
    semi: false,
    parser: "babel",
  };

  const runBuildRules = async (language: string) => {
    const page = await browser.newPage();

    const fast_htmlcs_rules: Rule[] = [];
    const fast_axe_rules: Rule[] = [];

    // inject the scripts
    await kayle(
      {
        page,
        browser,
        runners: ["htmlcs", "axe"],
        html: "<html><body><h1>Build Rules list</h1></body></html>",
        standard: Standard.WCAG2AA,
        origin: "https://www.example.com",
        language,
      },
      true
    );

    const paramList = await processParams();

    await page.evaluate((o) => {
      window.paramList = o;
    }, paramList);

    await page.addScriptTag({
      content: `window.htmlcsRuleMap = ${htmlcsRuleMap.toString()};`,
    });

    await page.exposeFunction("pushHtmlcsRule", (t: Rule) =>
      fast_htmlcs_rules.push(t)
    );

    await page.exposeFunction("pushAxeRule", (t: Rule) =>
      fast_axe_rules.push(t)
    );

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

    if (!existsSync(`./lib/rules/${language}`)) {
      await mkdir(`./lib/rules/${language}`);
    }

    const DNE = "THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT";

    await writeFile(
      `./lib/rules/${language}/htmlcs-rules.ts`,
      Buffer.from(
        await format(
          `/* ${DNE} */\nexport const htmlcsRules = ${JSON.stringify(
            fast_htmlcs_rules.filter((r) => r.description)
          )};`,
          pConfig
        )
      ),
      "utf8"
    );

    await writeFile(
      `./lib/rules/${language}/axe-rules.ts`,
      Buffer.from(
        await format(
          `/* ${DNE} */\nexport const axeRules = ${JSON.stringify(
            fast_axe_rules
          )};`,
          pConfig
        )
      ),
      "utf8"
    );

    await page.close({
      runBeforeUnload: true,
    });
  };

  const localesList: string[] = Array.from(
    new Set(htmlcsLocales.concat(axeLocales))
  );

  localesList.push("en");

  await Promise.all(localesList.map((r) => runBuildRules(r)));

  await writeFile(
    `./lib/rules/index.ts`,
    Buffer.from(
      await format(
        localesList
          .map((l) => {
            return `export { axeRules as axeRules${l.toUpperCase()} } from "./${l}/axe-rules";
          export { htmlcsRules as htmlcsRules${l.toUpperCase()} } from "./${l}/htmlcs-rules";`;
          })
          .join(""),
        pConfig
      )
    ),
    "utf8"
  );

  await browser.close();
})();
