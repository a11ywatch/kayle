export const htmlcsRunner = {
  scripts: [require.resolve("html_codesniffer_fork/build/HTMLCS.js")],
  run: async (options) => {
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
        options.rootElement && window.document.querySelector(options.rootElement) || window.document,
        (error) => {
          if (error) {
            return reject(error);
          }
          // @ts-ignore
          resolve(window.HTMLCS.getMessages());
        },
        (error) => reject(error)
      );
    });
  },
};
