_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["link"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    // Check for the correct location. HTML4 states "it may only appear in the
    // HEAD element". HTML5 states it appears "wherever metadata content is
    // expected", which only includes the head element.
    if (element.parentNode.nodeName !== "HEAD") {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        _global.HTMLCS.getTranslation("2_4_8_H59.1"),
        "H59.1"
      );
    }

    // Check for mandatory elements.
    if (
      !element.hasAttribute("rel") ||
      !element.getAttribute("rel") ||
      /^\s*$/.test(element.getAttribute("rel")) === true
    ) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        _global.HTMLCS.getTranslation("2_4_8_H59.2a"),
        "H59.2a"
      );
    }

    if (
      !element.hasAttribute("href") ||
      !element.getAttribute("href") ||
      /^\s*$/.test(element.getAttribute("href")) === true
    ) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        _global.HTMLCS.getTranslation("2_4_8_H59.2b"),
        "H59.2b"
      );
    }
  },
};
