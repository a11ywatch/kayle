_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_4 = {
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
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      top,
      _global.HTMLCS.getTranslation("2_5_4.Check"),
      ""
    );

    if (element == top) {
      for (const allEle of HTMLCS.util.getAllElements(
        element,
        "*[ondevicemotion]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          allEle,
          _global.HTMLCS.getTranslation("2_5_4.Devicemotion"),
          ""
        );
      }
    }
  },
};
