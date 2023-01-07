import { readFileSync } from "fs";
import { axeRunner } from "./runners/axe";
import { htmlcsRunner } from "./runners/htmlcs";

function loadRunnerFile(run) {
  if (run === "htmlcs") {
    return htmlcsRunner;
  }
  if (run === "axe") {
    return axeRunner;
  }
  return require(run);
}

function loadRunnerScript(runner) {
  const mods = loadRunnerFile(runner);
  let bundle = "";

  for (const runnerScript of mods.scripts) {
    bundle += `\n\n${readFileSync(runnerScript, "utf-8")}`;
  }

  return `
				;${bundle};
				;window.__a11y.runners['${runner}'] = ${mods.run.toString()};
			`;
}

export const runnersJavascript = {
  a11y: readFileSync(`${__dirname}/runner.js`, "utf-8"),
  htmlcs: loadRunnerScript("htmlcs"),
  axe: loadRunnerScript("axe"),
};
