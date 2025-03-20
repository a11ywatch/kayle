import { chromium } from "playwright";
import { Standard, kayle, htmlcsLocales, axeLocales } from "kayle";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "node:fs";

import { format } from "prettier";
import { htmlcsRuleMap } from "./htmlcs-rule-map";
import { processParams } from "./build-htmlcs-params";
import type { Rule } from "./build-types";

(async () => {
  const dynamicParams = await processParams();
  const browser = await chromium.launch({ headless: true });

  // default config
  const pConfig = {
    singleQuote: false,
    semi: true,
    parser: "typescript",
  };

  const runBuildRules = async (language: string) => {
    const page = await browser.newPage();
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

    const fast_htmlcs_rules: Rule[] = [];
    const fast_axe_rules: Rule[] = [];

    // inject the scripts
    await kayle(
      {
        // @ts-ignore
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

    await Promise.all([
      page.evaluate((o) => {
        window.paramList = o.paramList;
        window.WCAGA = o.WCAGA;
        window.WCAGAA = o.WCAGAA;
        window.WCAGAAA = o.WCAGAAA;
      }, dynamicParams),
      page.addScriptTag({
        content: `window.htmlcsRuleMap = ${htmlcsRuleMap.toString()};`,
      }),
      page.addScriptTag({
        content: `window.htmlcsRuleMap = ${htmlcsRuleMap.toString()};`,
      }),
      page.exposeFunction("pushHtmlcsRule", (t: Rule[]) =>
        fast_htmlcs_rules.push(...t)
      ),
      page.exposeFunction("pushAxeRule", (t: Rule) => fast_axe_rules.push(t)),
    ]);

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

    const rs = new Set();

    await writeFile(
      `./lib/rules/${language}/htmlcs-rules.ts`,
      Buffer.from(
        await format(
          `/* ${DNE} */\nexport const htmlcsRules = ${JSON.stringify(
            fast_htmlcs_rules
              .filter((r) => {
                if (rs.has(r.ruleId)) {
                  return false;
                }

                rs.add(r.ruleId);

                return r.description;
              })
              .sort((a, b) => a.ruleId.localeCompare(b.ruleId))
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
            fast_axe_rules.sort((a, b) => a.ruleId.localeCompare(b.ruleId))
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

  await Promise.all(localesList.map(runBuildRules));

  const runnerImports =
    `
  export type Rule = {
    ruleId: string;
    description?: string;
    help?: string;
    helpUrl?: string | string[];
    tags?: string[];
    actIds?: string[];
    ruleType?: "error" | "warning" | "notice";
  };
  
  // import rule list with locales
  export const importRules = async (locale: ${localesList
    .map((l) => `"${l}"`)
    .join(
      " | "
    )}, runner: "htmlcs" | "axe", baseDir?: "string"): Promise<Rule[]> => {
    const rules = await import(` +
    "`${baseDir || './'}${locale.replace('-', '_')}/${runner === 'htmlcs' ? 'htmlcs' : 'axe'}-rules`" +
    `` +
    `);

    return rules.axeRules || rules.htmlcsRules
  }`;

  await writeFile(
    `./lib/rules/index.ts`,
    Buffer.from(
      await format(
        `${localesList
          .map((l) => {
            return `export { axeRules as axeRules${l.toUpperCase()} } from "./${l}/axe-rules";
          export { htmlcsRules as htmlcsRules${l.toUpperCase()} } from "./${l}/htmlcs-rules";
          `;
          })
          .join("")}
          
          ${runnerImports}
          `,
        pConfig
      )
    ),
    "utf8"
  );

  await browser.close();
})();
