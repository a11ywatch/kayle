_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["object", "applet", "embed"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    HTMLCS.addMessage(
      HTMLCS.WARNING,
      element,
      _global.HTMLCS.getTranslation("2_1_2_F10"),
      "F10"
    );
  },
};
