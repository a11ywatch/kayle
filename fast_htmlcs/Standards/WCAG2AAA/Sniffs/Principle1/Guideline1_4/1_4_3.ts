_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["_top"],

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
          4.5,
          3.0
        );

      for (const failure of failures) {
        const element = failure.element;
        const required = failure.required;
        const recommend = failure.recommendation;
        const hasBgImg = failure.hasBgImage || false;
        const hasBgGradient = failure.hasBgGradient || false;
        const isAbsolute = failure.isAbsolute || false;
        const hasAlpha = failure.hasAlpha || false;

        let decimals = 2;
        let value =
          Math.round(failure.value * Math.pow(10, decimals)) /
          Math.pow(10, decimals);
        let code = "";

        // If the values would look identical, add decimals to the value.
        while (required === value) {
          decimals++;
          value =
            Math.round(failure.value * Math.pow(10, decimals)) /
            Math.pow(10, decimals);
        }

        if (required === 4.5) {
          code = "G18";
        } else if (required === 3.0) {
          code = "G145";
        }

        let recommendText: string[] | string = [];

        if (recommend) {
          if (recommend.fore.from !== recommend.fore.to) {
            recommendText.push(
              _global.HTMLCS.getTranslation(
                "1_4_3_G18_or_G145.Fail.Recomendation.Text"
              ).replace(/\{\{value\}\}/g, recommend.fore.to + "")
            );
          }
          if (recommend.back.from !== recommend.back.to) {
            recommendText.push(
              _global.HTMLCS.getTranslation(
                "1_4_3_G18_or_G145.Fail.Recomendation.Background"
              ).replace(/\{\{value\}\}/g, recommend.back.to + "")
            );
          }
        }

        // todo: prevent re-assign
        if (recommendText.length > 0) {
          recommendText =
            " " +
            _global.HTMLCS.getTranslation(
              "1_4_3_G18_or_G145.Fail.Recomendation"
            ) +
            " " +
            recommendText.join(", ") +
            ".";
        }

        if (hasBgGradient === true) {
          code += ".BgGradient";
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation(
              "1_4_3_G18_or_G145.BgGradient"
            ).replace(/\{\{required\}\}/g, required + ""),
            code
          );
        } else if (isAbsolute === true) {
          code += ".Abs";
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Abs").replace(
              /\{\{required\}\}/g,
              required + ""
            ),
            code
          );
        } else if (hasBgImg === true) {
          code += ".BgImage";
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.BgImage").replace(
              /\{\{required\}\}/g,
              required + ""
            ),
            code
          );
        } else if (hasAlpha === true) {
          code += ".Alpha";
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Alpha").replace(
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
            _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Fail")
              .replace(/\{\{required\}\}/g, required + "")
              .replace(/\{\{value\}\}/g, value + "") + recommendText,
            code
          );
        }
      }
    }
  },
};
