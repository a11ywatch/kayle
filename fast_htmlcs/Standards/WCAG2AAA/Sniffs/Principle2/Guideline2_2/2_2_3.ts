_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3 = {
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
  process: (element, _) =>
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      element,
      _global.HTMLCS.getTranslation("2_2_3_G5"),
      "G5"
    ),
};
