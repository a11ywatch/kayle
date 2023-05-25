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

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2 = {
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
  process: function (_, top) {
    // Generic message for changes in language.
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      top,
      _global.HTMLCS.getTranslation("3_1_2_H58"),
      "H58"
    );

    // Alias the SC 3.1.1 object, which contains our "valid language tag" test.
    var sc3_1_1 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1;

    // Note, going one element beyond the end, so we can test the top element
    // (which doesn't get picked up by the above query). Instead of going off the
    // cliff of the collection, the last loop (i === langEls.length) checks the
    // top element.
    const langEls = HTMLCS.util.getAllElements(top, "*[lang]");

    let langEl = null;

    for (var i = 0; i <= langEls.length; i++) {
      if (i === langEls.length) {
        langEl = top;
      } else {
        langEl = langEls[i];
      }

      // Skip html nodes, they are covered by 3.1.1.
      if (!langEl.documentElement && langEl.nodeName !== "HTML") {
        if (langEl.hasAttribute("lang") === true) {
          if (
            sc3_1_1.isValidLanguageTag(langEl.getAttribute("lang")) === false
          ) {
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              langEl,
              _global.HTMLCS.getTranslation("3_1_2_H58.1.Lang"),
              "H58.1.Lang"
            );
          }
        }

        if (langEl.hasAttribute("xml:lang") === true) {
          if (
            sc3_1_1.isValidLanguageTag(langEl.getAttribute("xml:lang")) ===
            false
          ) {
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              langEl,
              _global.HTMLCS.getTranslation("3_1_2_H58.1.XmlLang"),
              "H58.1.XmlLang"
            );
          }
        }
      }
    }
  },
};
