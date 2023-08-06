_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["form"],

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
      _global.HTMLCS.getTranslation("3_3_4_G98,G99,G155,G164,G168.LegalForms"),
      "G98,G99,G155,G164,G168.LegalForms"
    );
  },
};
