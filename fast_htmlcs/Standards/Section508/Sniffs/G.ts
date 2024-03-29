_global.HTMLCS_Section508_Sniffs_G = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["table"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    // If no table headers, emit notice about the table.
    if (HTMLCS.util.isLayoutTable(element)) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        element,
        "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
        "TableHeaders"
      );
    }
  },
};
