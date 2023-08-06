_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["object", "embed", "applet", "bgsound", "audio", "video"],

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
      _global.HTMLCS.getTranslation("1_4_2_F23"),
      "F23"
    );
  },
};
