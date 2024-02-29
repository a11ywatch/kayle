_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_2 = {
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
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      top,
      _global.HTMLCS.getTranslation("2_5_2.SinglePointer_Check"),
      ""
    );

    if (element == top) {
      for (const mouseDown of HTMLCS.util.getAllElements(
        top,
        "*[onmousedown]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          mouseDown,
          _global.HTMLCS.getTranslation("2_5_2.Mousedown_Check"),
          ""
        );
      }
      for (const touchStart of HTMLCS.util.getAllElements(
        top,
        "*[ontouchstart]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          touchStart,
          _global.HTMLCS.getTranslation("2_5_2.Touchstart_Check"),
          ""
        );
      }
    }
  },
};
