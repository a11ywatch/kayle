_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["a"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, _) {
    if (element.nodeName === "A") {
      this.checkNewWindowTarget(element);
    }
  },

  /**
   * Test for links that open in new windows but don't warn users (technique H83).
   *
   * @param {DOMNode} link The link to test.
   */
  checkNewWindowTarget: (link) => {
    if (link.hasAttribute("target")) {
      const target = link.getAttribute("target") || "";

      if (target === "_blank" && /new window/i.test(link.innerHTML) === false) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          link,
          _global.HTMLCS.getTranslation("3_2_5_H83.3"),
          "H83.3"
        );
      }
    }
  },
};
