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

_global.HTMLCS_Section508_Sniffs_O = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["_top", "a", "area"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: (element, top) => {
    if (element === top) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        top,
        "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
        "SkipLinks"
      );
    } else {
      if (element.hasAttribute("href") === true) {
        let href = element.getAttribute("href").trim();

        if (href.length > 1 && href.charAt(0) === "#") {
          const id = href.substring(1);

          try {
            let doc: (Element & { getElementById?(id: string) }) | Document =
              top;

            if (doc.ownerDocument) {
              doc = doc.ownerDocument;
            }

            let target = null;

            // First search for an element with the appropriate ID, then search for a
            // named anchor using the name attribute.
            if (doc && typeof doc.getElementById === "function") {
              target = doc.getElementById(id);
              if (target === null) {
                target = doc.querySelector('a[name="' + id + '"]');
              }
            }

            if (
              target === null ||
              HTMLCS.util.contains(top, target) === false
            ) {
              if (HTMLCS.isFullDoc(top) === true || top.nodeName === "BODY") {
                HTMLCS.addMessage(
                  HTMLCS.ERROR,
                  element,
                  'This link points to a named anchor "' +
                    id +
                    '" within the document, but no anchor exists with that name.',
                  "NoSuchID"
                );
              } else {
                HTMLCS.addMessage(
                  HTMLCS.WARNING,
                  element,
                  'This link points to a named anchor "' +
                    id +
                    '" within the document, but no anchor exists with that name in the fragment tested.',
                  "NoSuchIDFragment"
                );
              }
            }
          } catch (ex) {
            // Ignore error
          }
        }
      }
    }
  },
};
