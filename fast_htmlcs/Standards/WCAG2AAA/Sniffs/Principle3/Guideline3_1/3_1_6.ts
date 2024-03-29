_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["ruby"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, _) {
    // todo: remove deprecated rb query
    const rb = element.querySelectorAll("rb");
    const rt = element.querySelectorAll("rt");

    if (rt.length === 0) {
      // Vary the message depending on whether an rb element exists. If it doesn't,
      // the presumption is that we are using HTML5 that uses the body of the ruby
      // element for the same purpose (otherwise, assume XHTML 1.1 with rb element).
      if (rb.length === 0) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation("3_1_6_H62.1.HTML5"),
          "H62.1.HTML5"
        );
      } else {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation("3_1_6_H62.1.XHTML11"),
          "H62.1.XHTML11"
        );
      }
    }

    if (element.querySelectorAll("rp").length === 0) {
      // No "ruby parentheses" tags for those user agents that don't support
      // ruby at all.
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        _global.HTMLCS.getTranslation("3_1_6_H62.2"),
        "H62.2"
      );
    }
  },
};
