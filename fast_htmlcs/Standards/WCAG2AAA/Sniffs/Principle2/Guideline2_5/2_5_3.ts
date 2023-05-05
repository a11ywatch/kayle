/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_3 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: function () {
    return ["_top", "a", "button", "label", "input"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, top: Element & { getElementById?(id: string) }) {
    if (element == top) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        top,
        _global.HTMLCS.getTranslation("2_5_3_F96.Check"),
        "F96"
      );
    } else {
      let visibleLabel = "";
      let accessibleName = "";
      let refNode = null;

      switch (element.nodeName) {
        case "A":
          visibleLabel = HTMLCS.util.getTextContent(element);
          accessibleName = HTMLCS.util.getAccessibleName(element, top);
          break;
        case "BUTTON":
          visibleLabel = HTMLCS.util.getTextContent(element);
          accessibleName = HTMLCS.util.getAccessibleName(element, top);
          break;
        case "LABEL":
          visibleLabel = HTMLCS.util.getTextContent(element);
          const labelFor = element.getAttribute("for");

          if (labelFor) {
            if (top.ownerDocument) {
              refNode = top.ownerDocument.getElementById(labelFor);
            } else {
              if (typeof top.getElementById === "function") {
                refNode = top.getElementById(labelFor);
              }
            }
            if (refNode) {
              accessibleName = HTMLCS.util.getAccessibleName(refNode, top);
            }
          }
          break;
        case "INPUT":
          if (element.getAttribute("type") === "submit") {
            visibleLabel = element.getAttribute("value");
          }
          accessibleName = HTMLCS.util.getAccessibleName(element, top);
          break;
      }
      if (!!visibleLabel && !!accessibleName) {
        const a = visibleLabel.replace(/[^A-Za-z]/g, "").toLowerCase();
        const b = accessibleName.replace(/[^A-Za-z]/g, "").toLowerCase();

        if (!!a && !!b && b.indexOf(a) === -1) {
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("2_5_3_F96.AccessibleName"),
            "F96"
          );
        }
      }
    }
  },
};