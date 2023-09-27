const run = async (options) => {
  return new Promise((resolve, reject) => {
    if (
      // @ts-ignore
      typeof window.define === "function" &&
      // @ts-ignore
      window.define.amd &&
      typeof window.require === "function"
    ) {
      // @ts-ignore module load
      window.require(["accessibility-checker-engine"], (ace) => {
        Object.keys(ace).forEach((key) => {
          window[key] = ace[key];
        });
        // @ts-ignore set the window runner
        window.ace = ace;
      });
    }

    // @ts-ignore
    const checker = new ace.Checker();

    checker
      .check(
        (options.rootElement &&
          window.document.querySelector(options.rootElement)) ||
          window.document,
        ["IBM_Accessibility", options.standard]
      )
      .then((report) => {
        resolve(report.results);
      });
  });
};

const aceRunner = {
  en: {
    scripts: [require.resolve("accessibility-checker-engine/ace.js")],
    run,
  },
};

// // hard code locales to the list to htmlcs locales not EN
// const locales = ["fr", "es", "it", "ja", "nl", "pl", "zh_CN", "zh_TW"];

// for (const lang of locales) {
//   ibmRunner[lang.replace("_", "-")] = {
//     scripts: [require.resolve(`fast_htmlcs/build/HTMLCS.${lang}.js`)],
//     run,
//   };
// }

export { aceRunner };
