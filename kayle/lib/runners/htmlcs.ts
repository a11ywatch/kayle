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
      window.require(["htmlcs"], (htmlcs) => {
        Object.keys(htmlcs).forEach((key) => {
          window[key] = htmlcs[key];
        });
        // @ts-ignore set the window runner
        window.HTMLCS = htmlcs.HTMLCS;
      });
    }

    // map standards to window
    if (
      !(
        !options.rules ||
        (options.rules && !options.rules.length) ||
        options.standard === "Section508"
      )
    ) {
      for (const rule of options.rules) {
        // @ts-ignore
        if (window.HTMLCS_WCAG2AAA.sniffs.includes(rule)) {
          window[`HTMLCS_${options.standard}`].sniffs[0].include.push(rule);
        } else {
          console.error(`${rule} is not a valid WCAG 2.1 rule`);
        }
      }
    }

    // @ts-ignore
    window.HTMLCS.process(
      options.standard || "WCAG2AA",
      (options.rootElement &&
        window.document.querySelector(options.rootElement)) ||
        window.document,
      (error) => {
        if (error) {
          return reject(error);
        }
        // @ts-ignore
        resolve(window.HTMLCS.getMessages());
      },
      (error) => reject(error),
      options.language
    );
  });
};

const htmlcsRunner = {
  en: {
    scripts: [require.resolve("fast_htmlcs/build/HTMLCS.js")],
    run,
  },
};

// hard code locales to the list to htmlcs locales not EN
const locales = ["ar", "fr", "es", "it", "ja", "nl", "pl", "zh_CN", "zh_TW"];

for (const lang of locales) {
  htmlcsRunner[lang.replace("_", "-")] = {
    scripts: [require.resolve(`fast_htmlcs/build/HTMLCS.${lang}.js`)],
    run,
  };
}

export { htmlcsRunner };
