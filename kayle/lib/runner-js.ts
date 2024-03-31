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
  htmlcs_ar: loadRunnerScript("htmlcs", "ar"),
  htmlcs_es: loadRunnerScript("htmlcs", "es"),
  htmlcs_ja: loadRunnerScript("htmlcs", "ja"),
  htmlcs_fr: loadRunnerScript("htmlcs", "fr"),
  htmlcs_it: loadRunnerScript("htmlcs", "it"),
  htmlcs_nl: loadRunnerScript("htmlcs", "nl"),
  htmlcs_pl: loadRunnerScript("htmlcs", "pl"),
  htmlcs_ko: loadRunnerScript("htmlcs", "ko"),
  "htmlcs_zh-CN": loadRunnerScript("htmlcs", "zh-CN"),
  "htmlcs_zh-TW": loadRunnerScript("htmlcs", "zh-TW"),
  // axe scripts in all locales
  axe: loadRunnerScript("axe", "en"),
  axe_ar: loadRunnerScript("axe", "ar"),
  axe_es: loadRunnerScript("axe", "es"),
  axe_ja: loadRunnerScript("axe", "ja"),
  axe_fr: loadRunnerScript("axe", "fr"),
  axe_da: loadRunnerScript("axe", "da"),
  axe_de: loadRunnerScript("axe", "de"),
  axe_he: loadRunnerScript("axe", "he"),
  axe_nl: loadRunnerScript("axe", "nl"),
  axe_pl: loadRunnerScript("axe", "pl"),
  axe_ko: loadRunnerScript("axe", "ko"),
  axe_zh_CN: loadRunnerScript("axe", "zh-CN"),
  // axe_zh_TW: loadRunnerScript("axe", "zh-TW"),
  // axe_no_NB: loadRunnerScript("axe", "no-NB"),
  "axe_pt-BR": loadRunnerScript("axe", "pt-BR"),
};

/**
 * Inject a new runner for testing
 * @param {String} [runner="custom_name"] - The custom runner name.
 * @param {String} [path=""] - The path of the file for the runner script.
 * @param {String} [lang=""] - The language of the runner script.
 * @returns {void}
 */
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
  runner: keyof typeof runnersJavascript,
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
  | "htmlcs_ar"
  | "htmlcs_es"
  | "htmlcs_ja"
  | "htmlcs_fr"
  | "htmlcs_it"
  | "htmlcs_ko"
  | "htmlcs_nl"
  | "htmlcs_pl"
  | "htmlcs_zh-CN"
  | "htmlcs_zh-TW"
  | "axe_ar"
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

/**
 * Extend the base of a runner with custom code.
 * @param {String} [runner=""] - The custom runner to extend.
 * @param {String} [script=""] - The custom javascript.
 * @param {String} [lang=""] - The target langauge for the script.
 * @returns {void}
 */
const extendRunner = (runner: Runner, script: string, lang?: string) => {
  const runnerType = `${runner}${lang ? `_${lang}` : ""}`;
  const runnerCode = runnersJavascript[runnerType];

  runnersJavascript[runnerType] = `${runnerCode}${script};`;
};

export { runnersJavascript, getRunner, injectRunner, extendRunner };
