import type { RunnerConfig } from "../config";

// get all the css of the document to send to rust
export const getAllCss = async (config: RunnerConfig) => {
  return await config.page.evaluate(() => {
    return [...document.styleSheets]
      .map((styleSheet) => {
        try {
          return [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
        } catch (e) {
          console.log("Access to stylesheet %s is denied.", styleSheet.href);
        }
      })
      .filter(Boolean)
      .join("\n");
  });
};
