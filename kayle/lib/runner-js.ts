import { readFileSync } from "fs";
import { axeRunner } from "./runners/axe";
import { htmlcsRunner } from "./runners/htmlcs";
import { aceRunner } from "./runners/ace";

const loadRunnerFile = (run, langauge) => {
  if (run === "htmlcs") {
    return htmlcsRunner[langauge || "en"];
  }

  if (run === "axe") {
    return axeRunner[langauge || "en"];
  }

  if (run === "ace") {
    return aceRunner[langauge || "en"];
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
  // expiremental
  // ace by IBM
  ace: loadRunnerScript("ace", ""),
};

// inject a new runner for testing
const injectRunner = (runner: string, path: string, lang: string) => {
  runnersJavascript[runner] = loadRunnerScript(path, lang ?? "");
};

/**
 * Get the runner for the page.
 * @param {String} [language="en"] - The language.
 * @param {String} [runner=""] - The runner type.
 * @returns {String} Returns the runner javascript by locale.
 */
const getRunner = (
  language: string,
  runner: keyof typeof runnersJavascript
) => {
  // if langauge exist get the runner type
  if (language) {
    const script = `${runner}_${language}`;

    if (typeof runnersJavascript[script] !== "undefined") {
      return runnersJavascript[script];
    }
  }

  return runnersJavascript[runner];
};

export type Runner = Exclude<
  keyof typeof runnersJavascript,
  | "kayle"
  | "htmlcs_es"
  | "htmlcs_ja"
  | "htmlcs_fr"
  | "htmlcs_it"
  | "htmlcs_nl"
  | "htmlcs_pl"
  | "htmlcs_zh_CN"
  | "axe_es"
  | "axe_ja"
  | "axe_fr"
  | "axe_da"
  | "axe_de"
  | "axe_he"
  | "axe_nl"
  | "axe_pl"
  | "axe_ko"
>;

export { runnersJavascript, getRunner, injectRunner };
