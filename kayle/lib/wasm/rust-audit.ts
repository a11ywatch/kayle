// import { runActionsList } from "../action";
import { getAllCss } from "./css";
import type { RunnerConf } from "../common";
import { goToPage, setNetworkInterception } from "../utils/go-to-page";
import { RunnerConfig } from "../config";
import { Watcher } from "../watcher";
import { extractArgs } from "../option";
import { runActionsList } from "../action";

// get the configs required for a rust based audit
export const innateBuilder = async (o: RunnerConf) => {
  const watcher = new Watcher();
  const config = extractArgs(o, watcher);

  const navigate =
    config.page.url() === "about:blank" && (config.origin || o.html);

  if (navigate) {
    await goToPage(config);
  } else if (!config.noIntercept) {
    await setNetworkInterception(config);
  }

  await runActionsList(config as RunnerConfig);
  const html = await config.page.content();
  const css = await getAllCss(config as RunnerConfig);

  return {
    html,
    css,
  };
};
