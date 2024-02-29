_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A = {
  _labelNames: null,

  get register() {
    return ["_top"];
  },
  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, top) => {
    if (element === top) {
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testHeadingOrder(
        top,
        HTMLCS.ERROR
      );
    }
  },
};
