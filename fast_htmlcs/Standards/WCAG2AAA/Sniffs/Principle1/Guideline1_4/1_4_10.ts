_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_10 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["_top", "pre", "meta"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, top) => {
    if (element === top) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        top,
        _global.HTMLCS.getTranslation(
          "1_4_10_C32,C31,C33,C38,SCR34,G206.Check"
        ),
        "C32,C31,C33,C38,SCR34,G206"
      );

      for (const x of HTMLCS.util.getAllElements(top, "*")) {
        if (
          window.getComputedStyle(x, null).getPropertyValue("position") ==
          "fixed"
        ) {
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            x,
            _global.HTMLCS.getTranslation(
              "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed"
            ),
            "C32,C31,C33,C38,SCR34,G206"
          );
        }
      }
    } else {
      const nodeName = element.nodeName;

      switch (nodeName) {
        case "PRE":
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            top,
            _global.HTMLCS.getTranslation(
              "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling"
            ),
            "C32,C31,C33,C38,SCR34,G206"
          );
          break;
        case "META":
          const content = element.getAttribute("content");
          const name = element.getAttribute("name");

          if (
            name === "viewport" &&
            !!content &&
            (content.indexOf("maximum-scale") > -1 ||
              content.indexOf("minimum-scale") > -1 ||
              content.indexOf("user-scalable=no") > -1 ||
              content.indexOf("user-scalable=0") > -1)
          ) {
            HTMLCS.addMessage(
              HTMLCS.WARNING,
              element,
              _global.HTMLCS.getTranslation(
                "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom"
              ),
              "C32,C31,C33,C38,SCR34,G206"
            );
          }
      }
    }
  },
};
