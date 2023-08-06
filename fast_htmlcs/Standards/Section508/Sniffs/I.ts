_global.HTMLCS_Section508_Sniffs_I = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["frame", "iframe", "object"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, top) => {
    const nodeName = element.nodeName.toLowerCase();
    const titleEmpty =
      element.hasAttribute("title") &&
      HTMLCS.util.isStringEmpty(element.getAttribute("title"));

    if (titleEmpty === true) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        top,
        "This " +
          nodeName +
          " element is missing title text. Frames should be titled with text that facilitates frame identification and navigation.",
        "Frames"
      );
    }
  },
};
