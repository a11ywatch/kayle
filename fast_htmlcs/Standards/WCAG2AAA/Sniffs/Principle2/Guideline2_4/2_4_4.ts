_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["a"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    if (element.hasAttribute("title")) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        element,
        _global.HTMLCS.getTranslation("2_4_4_H77,H78,H79,H80,H81,H33"),
        "H77,H78,H79,H80,H81,H33"
      );
    } else {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        element,
        _global.HTMLCS.getTranslation("2_4_4_H77,H78,H79,H80,H81"),
        "H77,H78,H79,H80,H81"
      );
    }
  },
};
