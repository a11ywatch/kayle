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

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1 = {
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
  process: function (element, top) {
    // Testing for elements that have explicit attributes for mouse-specific
    // events. Note: onclick is considered keyboard accessible, as it is actually
    // tied to the default action of a link or button - not merely a click.
    if (element === top) {
      // Cannot detect event listeners here so only onclick attributes are checked.
      for (const elem of HTMLCS.util.getAllElements(
        top,
        "*[onclick], *[onkeyup], *[onkeydown], *[onkeypress], *[onfocus], *[onblur]"
      )) {
        if (!HTMLCS.util.isKeyboardNavigable(elem)) {
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            elem,
            _global.HTMLCS.getTranslation("2_1_1_G90"),
            "G90"
          );
        }
      }

      for (const dblClickEl of HTMLCS.util.getAllElements(
        top,
        "*[ondblclick]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          dblClickEl,
          _global.HTMLCS.getTranslation("2_1_1_SCR20.DblClick"),
          "SCR20.DblClick"
        );
      }

      for (const moseOverEle of HTMLCS.util.getAllElements(
        top,
        "*[onmouseover]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          moseOverEle,
          _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseOver"),
          "SCR20.MouseOver"
        );
      }

      for (const mouseOutEle of HTMLCS.util.getAllElements(
        top,
        "*[onmouseout]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          mouseOutEle,
          _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseOut"),
          "SCR20.MouseOut"
        );
      }

      for (const mouseMoveEle of HTMLCS.util.getAllElements(
        top,
        "*[onmousemove]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          mouseMoveEle,
          _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseMove"),
          "SCR20.MouseMove"
        );
      }

      for (const mouseDownEle of HTMLCS.util.getAllElements(
        top,
        "*[onmousedown]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          mouseDownEle,
          _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseDown"),
          "SCR20.MouseDown"
        );
      }

      for (const mouseUpEle of HTMLCS.util.getAllElements(
        top,
        "*[onmouseup]"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          mouseUpEle,
          _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseUp"),
          "SCR20.MouseUp"
        );
      }
    }
  },
};
