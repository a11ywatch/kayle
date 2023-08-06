_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3 = {
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
  process: (_, top) => {
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      top,
      _global.HTMLCS.getTranslation("3_1_3_H40,H54,H60,G62,G70"),
      "H40,H54,H60,G62,G70"
    );
  },
};
