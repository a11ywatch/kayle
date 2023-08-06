import { readFileSync } from "fs";
import { axeRunner } from "./runners/axe";
import { htmlcsRunner } from "./runners/htmlcs";

const loadRunnerFile = (run, langauge) => {
  if (run === "htmlcs") {
    return htmlcsRunner[langauge || "en"];
  }

  if (run === "axe") {
    return axeRunner[langauge || "en"];
  }

  return require(run);
};

const loadRunnerScript = (runner, langauge) => {
  const mods = loadRunnerFile(runner, langauge);

  let bundle = "";

  for (const runnerScript of mods.scripts) {
    bundle += readFileSync(runnerScript, "utf-8");
  }

  return `${bundle};window.__a11y.runners['${runner}'] = ${mods.run.toString()};`;
};

// top level runners handle all scripts at runtime
const runnersJavascript = {
  kayle: readFileSync(`${__dirname}/runner.js`, "utf-8"),
  // htmlcs scripts in all locales
  htmlcs: loadRunnerScript("htmlcs", ""),
  htmlcs_es: loadRunnerScript("htmlcs", "es"),
  htmlcs_ja: loadRunnerScript("htmlcs", "ja"),
  htmlcs_fr: loadRunnerScript("htmlcs", "fr"),
  htmlcs_it: loadRunnerScript("htmlcs", "it"),
  htmlcs_nl: loadRunnerScript("htmlcs", "nl"),
  htmlcs_pl: loadRunnerScript("htmlcs", "pl"),
  htmlcs_zh_CN: loadRunnerScript("htmlcs", "zh-CN"),
  // htmlcs_zh_TN: loadRunnerScript("htmlcs", "zh-TN"),
  // axe scripts in all locales
  axe: loadRunnerScript("axe", "en"),
  axe_es: loadRunnerScript("axe", "es"),
  axe_ja: loadRunnerScript("axe", "ja"),
  axe_fr: loadRunnerScript("axe", "fr"),
  axe_da: loadRunnerScript("axe", "da"),
  axe_de: loadRunnerScript("axe", "de"),
  axe_he: loadRunnerScript("axe", "he"),
  axe_nl: loadRunnerScript("axe", "nl"),
  axe_pl: loadRunnerScript("axe", "pl"),
  axe_ko: loadRunnerScript("axe", "ko"),
  // axe_no_NB: loadRunnerScript("axe", "no-NB"),
  // axe_pt_BR: loadRunnerScript("axe", "pt-BR"),
};

/**
 * Get the runner for the page.
 * @param {String} [language="en"] - The language.
 * @param {String} [runner=""] - The runner type.
 * @returns {String} Returns the runner javascript by locale.
 */
const getRunner = (language: string, runner: string) => {
  // if langauge exist get the runner type
  if (language) {
    if (runner === "axe") {
      const script = `axe_${language}`;

      if (typeof runnersJavascript[script] !== "undefined") {
        return runnersJavascript[script];
      }
    }

    if (runner === "htmlcs") {
      const script = `htmlcs_${language}`;

      if (typeof runnersJavascript[script] !== "undefined") {
        return runnersJavascript[script];
      }
    }
  }

  return runnersJavascript[runner];
};

export { runnersJavascript, getRunner };
