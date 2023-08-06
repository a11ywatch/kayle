_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["iframe", "a", "area", "_top"],

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, top) {
    if (element === top) {
      this.testGenericBypassMsg(top);
    } else {
      switch (element.nodeName) {
        case "IFRAME":
          this.testIframeTitle(element);
          break;
        case "A":
        case "AREA":
          this.testSameDocFragmentLinks(element, top);
          break;
      }
    }
  },

  /**
   * Test for the presence of title attributes on the iframe element (technique H64).
   *
   * @param {DOMNode} element The element to test.
   *
   * @returns void
   */
  testIframeTitle: (element) => {
    if (element.nodeName === "IFRAME") {
      let hasTitle = false;

      if (element.hasAttribute("title") === true) {
        if (
          element.getAttribute("title") &&
          /^\s+$/.test(element.getAttribute("title")) === false
        ) {
          hasTitle = true;
        }
      }

      if (hasTitle === false) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation("2_4_1_H64.1"),
          "H64.1"
        );
      } else {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          element,
          _global.HTMLCS.getTranslation("2_4_1_H64.2"),
          "H64.2"
        );
      }
    }
  },

  /**
   * Throw a generic bypass blocks message.
   *
   * @param {DOMNode} top Top element of the testing source.
   *
   * @returns void
   */
  testGenericBypassMsg: (top) => {
    HTMLCS.addMessage(
      HTMLCS.NOTICE,
      top,
      _global.HTMLCS.getTranslation("2_4_1_G1,G123,G124,H69"),
      "G1,G123,G124,H69"
    );
  },

  /**
   * Test for document fragment links to IDs that do not exist.
   *
   * These are links of the form "<a href="#content">", where the ID "content" does
   * not exist. Area elements in image maps are also tested, as they are also
   * likely to contain these attributes.
   *
   * @param {DOMNode} element The element to test.
   * @param {DOMNode} top     Top element of the testing source.
   *
   * @returns void
   */
  testSameDocFragmentLinks: function (element, top) {
    if (element.hasAttribute("href") && HTMLCS.util.isFocusable(element)) {
      // has attribute checked string will always return
      const href = element.getAttribute("href").trim();

      if (href.length > 1 && href.charAt(0) === "#") {
        const id = href.substring(1);

        try {
          let doc: Document | (Element & { getElementById?() }) = top;

          if (doc.ownerDocument) {
            doc = doc.ownerDocument;
          }

          // First search for an element with the appropriate ID, then search for a
          // named anchor using the name attribute.
          let target =
            typeof doc.getElementById === "function"
              ? doc.getElementById(id)
              : null;

          if (target === null) {
            const _doc = HTMLCS.util.getElementWindow(top).document;
            const doctype = HTMLCS.util.getDocumentType(_doc);
            let nameSelector = "a";

            if (doctype && doctype.indexOf("html5") === -1) {
              nameSelector = "*";
            }

            target = doc.querySelector(nameSelector + '[name="' + id + '"]');
          }

          if (target === null || HTMLCS.util.contains(top, target) === false) {
            if (
              HTMLCS.isFullDoc(top) === true ||
              top.nodeName.toLowerCase() === "body"
            ) {
              HTMLCS.addMessage(
                HTMLCS.ERROR,
                element,
                _global.HTMLCS.getTranslation(
                  "2_4_1_G1,G123,G124.NoSuchID"
                ).replace(/\{\{id\}\}/g, id),
                "G1,G123,G124.NoSuchID"
              );
            } else {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                element,
                _global.HTMLCS.getTranslation(
                  "2_4_1_G1,G123,G124.NoSuchIDFragment"
                ).replace(/\{\{id\}\}/g, id),
                "G1,G123,G124.NoSuchIDFragment"
              );
            }
          }
        } catch (ex) {
          // Ignore error
        }
      }
    }
  },
};
