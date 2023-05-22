/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Australia Pty Ltd ABN 53 131 581 247                         |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */

_global.HTMLCS_Section508_Sniffs_H = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: function () {
    return ["table"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (table, _) {
    const headersAttr = HTMLCS.util.testTableHeaders(table);

    // Incorrect usage of headers - error; emit always.
    for (const wrongHeaders of headersAttr.wrongHeaders) {
      HTMLCS.addMessage(
        // todo: translations
        HTMLCS.ERROR,
        wrongHeaders.element,
        'Incorrect headers attribute on this td element. Expected "' +
          wrongHeaders.expected +
          '" but found "' +
          wrongHeaders.actual +
          '"',
        "IncorrectHeadersAttr"
      );
    }

    // Errors where headers are compulsory.
    if (headersAttr.required && !headersAttr.allowScope) {
      if (!headersAttr.used) {
        // Headers not used at all, and they are mandatory.
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          table,
          "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
          "MissingHeadersAttrs"
        );
      } else {
        // Missing TH IDs - error; emit at this stage only if headers are compulsory.
        if (headersAttr.missingThId.length > 0) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            table,
            "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
            "MissingHeaderIds"
          );
        }

        // Missing TD headers attributes - error; emit at this stage only if headers are compulsory.
        if (headersAttr.missingTd.length > 0) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            table,
            "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
            "IncompleteHeadersAttrs"
          );
        }
      }
    }
  },
};
