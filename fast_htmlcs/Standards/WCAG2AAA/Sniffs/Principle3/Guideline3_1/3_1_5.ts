_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5 = {
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
      _global.HTMLCS.getTranslation("3_1_5_G86,G103,G79,G153,G160"),
      "G86,G103,G79,G153,G160"
    );
  },
};
