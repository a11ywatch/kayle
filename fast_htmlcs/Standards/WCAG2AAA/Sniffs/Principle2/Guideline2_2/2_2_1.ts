_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["meta"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    // Meta refresh testing under H76/F41. Fails if a non-zero timeout is provided.
    // NOTE: H76 only lists criterion 3.2.5, but F41 also covers refreshes to
    // same page (no URL content), which is covered by non-adjustable timeouts
    // in criterion 2.2.1.
    if (
      element.hasAttribute("http-equiv") &&
      element.getAttribute("http-equiv").toLowerCase() === "refresh"
    ) {
      if (/^[1-9]\d*/.test(element.getAttribute("content"))) {
        if (/url=/i.test(element.getAttribute("content"))) {
          // Redirect.
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            element,
            _global.HTMLCS.getTranslation("2_2_1_F40.2"),
            "F40.2"
          );
        } else {
          // Just a refresh.
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            element,
            _global.HTMLCS.getTranslation("2_2_1_F41.2"),
            "F41.2"
          );
        }
      }
    }
  },
};
