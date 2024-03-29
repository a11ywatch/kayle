_global.HTMLCS_Section508_Sniffs_N = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["form"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    if (element.nodeName === "FORM") {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        element,
        "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
        "Errors"
      );
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        element,
        "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
        "Labels"
      );
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        element,
        "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
        "KeyboardNav"
      );
    }
  },
};
