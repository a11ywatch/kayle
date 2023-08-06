_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5 = {
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
  process: (element, _) => {
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      element,
      _global.HTMLCS.getTranslation("2_4_5_G125,G64,G63,G161,G126,G185"),
      "G125,G64,G63,G161,G126,G185"
    );
  },
};
