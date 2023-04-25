const runAudit = async (options) => {
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

  return new Promise((resolve, reject) => {
    // @ts-ignore
    window.HTMLCS.process(
      options.standard,
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
    run: runAudit,
  },
};

// hard code locales to the list to htmlcs locales not EN
const locales = ["fr", "es", "it", "ja", "nl", "pl", "zh_CN", "zh_TW"];

for (const lang of locales) {
  htmlcsRunner[lang.replace("_", "-")] = {
    scripts: [require.resolve(`fast_htmlcs/build/HTMLCS.${lang}.js`)],
    run: runAudit,
  };
}

export { htmlcsRunner };