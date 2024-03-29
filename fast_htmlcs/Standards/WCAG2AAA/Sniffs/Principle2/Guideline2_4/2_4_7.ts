_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = {
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
  process: (_, top) => {
    // Fire this notice if there appears to be an input field or link on the page
    // (which will be just about anything). Links are important because they can
    // still be tabbed to.
    if (top.querySelector("input, textarea, button, select, a") !== null) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        top,
        _global.HTMLCS.getTranslation("2_4_7_G149,G165,G195,C15,SCR31"),
        "G149,G165,G195,C15,SCR31"
      );
    }
  },
};
