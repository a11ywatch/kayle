_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["_top"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, top) => {
    if (element === top) {
      // todo: set
      const usedIds = {};

      for (const elewithId of HTMLCS.util.getAllElements(top, "*[id]")) {
        const id = elewithId.getAttribute("id");

        if (/^\s*$/.test(id) === true) {
          continue;
        }

        if (usedIds[id] !== undefined) {
          // F77 = "Failure of SC 4.1.1 due to duplicate values of type ID".
          // Appropriate technique in HTML is H93.
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            elewithId,
            _global.HTMLCS.getTranslation("4_1_1_F77").replace(
              /\{\{id\}\}/g,
              id
            ),
            "F77"
          );
        } else {
          usedIds[id] = true;
        }
      }
    }
  },
};
