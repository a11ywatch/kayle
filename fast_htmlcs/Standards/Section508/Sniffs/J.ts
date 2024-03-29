_global.HTMLCS_Section508_Sniffs_J = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["_top"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (_, top) => {
    // The term in Sec. 508 is "flicker" rather than flash.
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      top,
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
      "Flicker"
    );
  },
};
