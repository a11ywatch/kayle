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

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["html"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, _) => {
    // Find a head first.
    let head = null;

    for (const childNodes of element.childNodes) {
      if (childNodes.nodeName === "HEAD") {
        head = childNodes;
        break;
      }
    }

    if (head === null) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        _global.HTMLCS.getTranslation("2_4_2_H25.1.NoHeadEl"),
        "H25.1.NoHeadEl"
      );
    } else {
      let title = null;

      for (const childNode of head.childNodes) {
        if (childNode.nodeName === "TITLE") {
          title = childNode;
          break;
        }
      }

      if (title === null) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          head,
          _global.HTMLCS.getTranslation("2_4_2_H25.1.NoTitleEl"),
          "H25.1.NoTitleEl"
        );
      } else {
        if (/^\s*$/.test(title.innerHTML) === true) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            title,
            _global.HTMLCS.getTranslation("2_4_2_H25.1.EmptyTitle"),
            "H25.1.EmptyTitle"
          );
        } else {
          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            title,
            _global.HTMLCS.getTranslation("2_4_2_H25.2"),
            "H25.2"
          );
        }
      }
    }
  },
};
