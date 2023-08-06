_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["object", "embed", "applet", "video"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, _) {
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      element,
      _global.HTMLCS.getTranslation("1_2_2_G87,G93"),
      "G87,G93"
    );
  },
};
