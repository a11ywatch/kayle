_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["_top"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, top) => {
    if (element === top) {
      const failures =
        HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(
          top,
          7.0,
          4.5
        );

      for (const failure of failures) {
        const required = failure.required;
        const recommend = failure.recommendation;
        const hasBgImg = failure.hasBgImage || false;
        const isAbsolute = failure.isAbsolute || false;
        const hasBgGradient = failure.hasBgGradient || false;
        const element = failure.element;

        let code = "";
        let decimals = 2;
        let value =
          Math.round(failure.value * Math.pow(10, decimals)) /
          Math.pow(10, decimals);

        // If the values would look identical, add decimals to the value.
        while (required === value) {
          decimals++;
          value =
            Math.round(failure.value * Math.pow(10, decimals)) /
            Math.pow(10, decimals);
        }

        if (required === 4.5) {
          code = "G18";
        } else if (required === 7.0) {
          code = "G17";
        }

        let recommendText: string | string[] = [];

        if (recommend) {
          if (recommend.fore.from !== recommend.fore.to) {
            recommendText.push(
              _global.HTMLCS.getTranslation(
                "1_4_6_G18_or_G17.Fail.Recomendation.Text"
              ).replace(/\{\{value\}\}/g, recommend.fore.to + "")
            );
          }
          if (recommend.back.from !== recommend.back.to) {
            recommendText.push(
              _global.HTMLCS.getTranslation(
                "1_4_6_G18_or_G17.Fail.Recomendation.Background"
              ).replace(/\{\{value\}\}/g, recommend.back.to + "")
            );
          }
        }

        if (recommendText.length > 0) {
          recommendText =
            " " +
            _global.HTMLCS.getTranslation(
              "1_4_6_G18_or_G17.Fail.Recomendation"
            ) +
            " " +
            recommendText.join(", ") +
            ".";
        }

        if (hasBgGradient) {
          code += ".BgGradient";
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation(
              "1_4_6_G18_or_G145.BgGradient"
            ).replace(/\{\{required\}\}/g, required + ""),
            code
          );
        } else if (isAbsolute) {
          code += ".Abs";
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Abs").replace(
              /\{\{required\}\}/g,
              required + ""
            ),
            code
          );
        } else if (hasBgImg) {
          code += ".BgImage";
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.BgImage").replace(
              /\{\{required\}\}/g,
              required + ""
            ),
            code
          );
        } else {
          code += ".Fail";
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            element,
            _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Fail")
              .replace(/\{\{required\}\}/g, required + "")
              .replace(/\{\{value\}\}/g, value + "") + recommendText,
            code
          );
        }
      }
    }
  },
};
