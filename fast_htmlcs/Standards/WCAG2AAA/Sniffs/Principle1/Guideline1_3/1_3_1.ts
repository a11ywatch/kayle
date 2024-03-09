_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1 = {
  _labelNames: null,

  get register() {
    return [
      "_top",
      "p",
      "div",
      "input",
      "select",
      "textarea",
      "button",
      "table",
      "fieldset",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, top) {
    const nodeName = element.nodeName;

    if (element === top) {
      this.testPresentationMarkup(top);
      this.testEmptyDupeLabelForAttrs(top);
    } else {
      switch (nodeName) {
        case "INPUT":
        case "TEXTAREA":
        case "BUTTON":
          this.testLabelsOnInputs(element, top);
          break;

        case "FORM":
          this.testRequiredFieldsets(element);
          break;

        case "SELECT":
          this.testLabelsOnInputs(element, top);
          this.testOptgroup(element);
          break;

        case "P":
        case "DIV":
          this.testNonSemanticHeading(element);
          this.testListsWithBreaks(element);
          this.testUnstructuredNavLinks(element);
          break;

        case "TABLE":
          this.testGeneralTable(element);
          this.testTableHeaders(element);
          this.testTableCaptionSummary(element);
          break;

        case "FIELDSET":
          this.testFieldsetLegend(element);
          break;

        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
          this.testEmptyHeading(element);
          break;
      }
    }
  },

  /**
   * Test elements for presentation roles that also contain semantic child elements.
   *
   * @param {DOMNode} element The element to test.
   */
  testSemanticPresentationRole: function (element) {
    if (
      !HTMLCS.util.isAriaHidden(element) &&
      element.hasAttribute("role") &&
      element.getAttribute("role") === "presentation" &&
      !(
        element.nodeName === "DIV" ||
        element.nodeName === "SPAN" ||
        element.nodeName === "B" ||
        element.nodeName === "I"
      )
    ) {
      const childElements = element.querySelectorAll(
        "*:not(" + ["div", "span", "b", "i"].join("):not(") + ")"
      );
      const children = new Array(childElements.length);
      let childIterator = 0;

      for (const child of childElements) {
        if (!child.hasAttribute("role")) {
          children[childIterator] = child;
          childIterator++;
        }
      }

      children.length = childIterator;

      if (childIterator) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation("1_3_1_F92,ARIA4"),
          "F92,ARIA4"
        );
      }
    }
  },

  /**
   * Top-level test for labels that have no for attribute, or duplicate ones.
   *
   * @param {DOMNode} top The top element of the tested code.
   */
  testEmptyDupeLabelForAttrs: function (top) {
    // todo: use set
    this._labelNames = {};
    let refNode = null;

    for (const lb of top.getElementsByTagName("label")) {
      const labelFor = lb.getAttribute("for");

      if (labelFor !== null && labelFor !== "") {
        if (this._labelNames[labelFor] && this._labelNames[labelFor] !== null) {
          this._labelNames[labelFor] = null;
        } else {
          this._labelNames[labelFor] = lb;

          if (top.ownerDocument) {
            refNode = top.ownerDocument.getElementById(labelFor);
          } else {
            refNode = top.getElementById(labelFor);
          }

          if (refNode === null) {
            let level = HTMLCS.ERROR;
            let msg = _global.HTMLCS.getTranslation("1_3_1_H44.NonExistent");
            let code = "H44.NonExistent";

            if (HTMLCS.isFullDoc(top) === true || top.nodeName === "BODY") {
              level = HTMLCS.WARNING;
              msg = _global.HTMLCS.getTranslation(
                "1_3_1_H44.NonExistentFragment"
              );
              code = "H44.NonExistentFragment";
            }
            HTMLCS.addMessage(level, lb, msg, code);
          } else {
            const nodeName = refNode && refNode.nodeName;
            if (
              !(
                nodeName === "INPUT" ||
                nodeName === "SELECT" ||
                nodeName === "TEXTAREA" ||
                nodeName === "BUTTON" ||
                nodeName === "KEYGEN" ||
                nodeName === "METER" ||
                nodeName === "OUTPUT" ||
                nodeName === "PROGRESS"
              )
            ) {
              HTMLCS.addMessage(
                HTMLCS.WARNING,
                lb,
                _global.HTMLCS.getTranslation("1_3_1_H44.NotFormControl"),
                "H44.NotFormControl"
              );
            }
          }
        }
      }
    }
  },

  /**
   * Test for appropriate labels on inputs.
   *
   * The appropriate WCAG2 techniques test is failure F68.
   * This test uses the September 2014 version of the technique:
   * http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F68
   *
   * For all input elements of type "radio", "checkbox", "text", "file" or "password",
   * and all textarea and select elements in the Web page:
   *
   * 1. Check that the visual design uses a text label that identifies the purpose of the control
   * 2. Check that these input elements have a programmatically determined label associated in one
   *    of the following ways:
   *    (a) the text label is contained in a label element that is correctly associated to the
   *        respective input element via the label's for attribute (the id given as value in the
   *        for attribute matches the id of the input element).
   *    (b) the control is contained within a label element that contains the label text.
   *    (c) the text label is correctly programmatically associated with the input element via the
   *        aria-labelledby attribute (the id given as value in the aria-labelledby attribute
   *        matches the id of the input element).
   *    (d) the [label] is programmatically determined through the value of either its
   *        aria-label or title attributes.
   *
   * This changed in March 2014. Before then, only 2(a) was permitted or 2(d) (title attribute only).
   * Notably, labels made through wrapping an element in a label attribute were not permitted.
   *
   * Associated techniques: H44 (LABEL element), H65 (title attribute),
   * ARIA6/ARIA14 (aria-label), ARIA9/ARIA16 (aria-labelledby).
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  testLabelsOnInputs: function (element, _, muteErrors) {
    let inputType = element.nodeName;

    if (inputType === "INPUT") {
      if (element.hasAttribute("type")) {
        inputType = element.getAttribute("type").toLowerCase();
      } else {
        inputType = "text";
      }
    }

    let hasLabel: boolean | Record<string, any> = false;

    // this isnt really needed as an object
    const addToLabelList = function (found) {
      if (!hasLabel) {
        hasLabel = {};
      }
      hasLabel[found] = true;
    };

    // Firstly, work out whether it needs a label.
    let needsLabel = false;

    if (inputType === "select" || inputType === "textarea") {
      needsLabel = true;
    } else if (
      /^(radio|checkbox|text|file|password)$/.test(inputType) === true
    ) {
      needsLabel = true;
    }

    if (element.getAttribute("hidden") !== null) {
      needsLabel = false;
    }

    // Find an explicit label.
    if (
      element.ownerDocument.querySelector('label[for="' + element.id + '"]')
    ) {
      addToLabelList("explicit");
    }

    // Find an implicit label.
    let foundImplicit = false;

    if (element.parentNode) {
      HTMLCS.util.eachParentNode(element, function (parent) {
        if (parent.nodeName === "LABEL") {
          foundImplicit = true;
        }
        return foundImplicit;
      });
    }

    if (foundImplicit) {
      addToLabelList("implicit");
    }

    // Find a title attribute.
    if (element.hasAttribute("title")) {
      if (/^\s*$/.test(element.getAttribute("title")) === true && needsLabel) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          element,
          _global.HTMLCS.getTranslation("1_3_1_H65"),
          "H65"
        );
      } else {
        addToLabelList("title");
      }
    }

    // Find an aria-label attribute.
    if (element.hasAttribute("aria-label")) {
      if (!HTMLCS.util.hasValidAriaLabel(element)) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          element,
          _global.HTMLCS.getTranslation("1_3_1_ARIA6"),
          "ARIA6"
        );
      } else {
        addToLabelList("aria-label");
      }
    }

    // Find an aria-labelledby attribute.
    if (element.hasAttribute("aria-labelledby")) {
      if (!HTMLCS.util.hasValidAriaLabel(element)) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          element,
          _global.HTMLCS.getTranslation("1_3_1_ARIA16,ARIA9").replace(
            /\{\{id\}\}/g,
            element.getAttribute("aria-labelledby")
          ),
          "ARIA16,ARIA9"
        );
      } else {
        addToLabelList("aria-labelledby");
      }
    }

    if (!(muteErrors === true)) {
      if (hasLabel !== false && !needsLabel) {
        // Note that it is okay for buttons to have aria-labelledby or
        // aria-label, or title. The former two override the button text,
        // while title is a lower priority than either: the button text,
        // and in submit/reset cases, the localised name for the words
        // "Submit" and "Reset".
        // http://www.w3.org/TR/html-aapi/#accessible-name-and-description-calculation
        if (inputType === "hidden") {
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_3_1_F68.Hidden"),
            "F68.Hidden"
          );
        } else if (element.getAttribute("hidden") !== null) {
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_3_1_F68.HiddenAttr"),
            "F68.HiddenAttr"
          );
        }
      } else if (hasLabel === false && needsLabel) {
        // Needs label.
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation("1_3_1_F68"),
          "F68"
        );
      }
    }

    return hasLabel;
  },

  /**
   * Test for the use of presentational elements (technique H49).
   *
   * In HTML4, certain elements are considered presentational code. In HTML5, they
   * are redefined (based on "they are being used, so they shouldn't be
   * deprecated") so they can be considered "somewhat" semantic. They should still
   * be considered a last resort.
   *
   * @param [DOMNode] top The top element of the tested code.
   */
  testPresentationMarkup: (top) => {
    // In HTML4, the following were marked as presentational:
    // b, i, u, s, strike, tt, big, small, center, font
    // In HTML5, the following were repurposed as pseudo-semantic:
    // b, i, u, s, small
    const doctype = HTMLCS.util.getDocumentType(
      HTMLCS.util.getElementWindow(top).document
    );

    if (doctype && (doctype === "html5" || doctype === "xhtml5")) {
      for (const tag of HTMLCS.util.getAllElements(
        top,
        "strike, tt, big, center, font"
      )) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          tag,
          _global.HTMLCS.getTranslation("1_3_1_H49."),
          "H49." +
            tag.nodeName.substring(0, 1).toUpperCase() +
            tag.nodeName.substring(1).toLowerCase()
        );
      }

      // Align attributes, too.
      for (const tag of HTMLCS.util.getAllElements(top, "*[align]")) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          tag,
          "Align attributes .",
          "H49.AlignAttr"
        );
      }
    } else {
      for (const tag of HTMLCS.util.getAllElements(
        top,
        "b, i, u, s, strike, tt, big, small, center, font"
      )) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          tag,
          _global.HTMLCS.getTranslation("1_3_1_H49.Semantic"),
          "H49." +
            tag.nodeName.substring(0, 1).toUpperCase() +
            tag.nodeName.substring(1).toLowerCase()
        );
      }

      // Align attributes, too.
      for (const tag of HTMLCS.util.getAllElements(top, "*[align]")) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          tag,
          _global.HTMLCS.getTranslation("1_3_1_H49.AlignAttr.Semantic"),
          "H49.AlignAttr"
        );
      }
    }
  },

  /**
   * Test for the possible use of non-semantic headings (technique H42).
   *
   * Test for P|DIV > STRONG|EM|other inline styling, when said inline
   * styling tag is the only element in the tag. It could possibly be a header
   * that should be using h1..h6 tags instead.
   *
   * @param [DOMNode] element The paragraph or DIV element to test.
   */
  testNonSemanticHeading: function (element) {
    // Test for P|DIV > STRONG|EM|other inline styling, when said inline
    // styling tag is the only element in the tag. It could possibly a header
    // that should be using h1..h6 tags instead.
    const tag = element.nodeName;

    if (tag === "P" || tag === "DIV") {
      const children = element.childNodes;

      if (children.length === 1 && children[0].nodeType === 1) {
        if (/^(STRONG|EM|B|I|U)$/.test(children[0].nodeName) === true) {
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_3_1_H42"),
            "H42"
          );
        }
      }
    }
  },

  /**
   * Test for the correct association of table data cells with their headers.
   *
   * This is actually a two-part test, using either the scope attribute (H63) or
   * the headers attribute (H43). Which one(s) are required or appropriate
   * depend on the types of headings available:
   * - If only one row or one column header, no association is required.
   * - If one row AND one column headers, scope or headers is suitable.
   * - If multi-level headers of any type, use of headers (only) is required.
   *
   * This test takes the results of two tests - one of headers and one of scope -
   * and works out which error messages should apply given the above type of table.
   *
   * Invalid or incorrect usage of scope or headers are always reported when used,
   * and cases where scope/headers are used on some of the table but not all is
   * also thrown.
   *
   * @param {DOMNode} table The table element to evaluate.
   *
   * @return void
   */
  testTableHeaders: function (table) {
    let scopeAttr = this._testTableScopeAttrs(table);

    // Invalid scope attribute - emit always if scope tested.
    for (const invalid of scopeAttr.invalid) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        invalid,
        _global.HTMLCS.getTranslation("1_3_1_H63.3"),
        "H63.3"
      );
    }

    // TDs with scope attributes are obsolete in HTML5 - emit warnings if
    // scope tested, but not as errors as they are valid HTML4.
    for (const obsoleteTd of scopeAttr.obsoleteTd) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        obsoleteTd,
        _global.HTMLCS.getTranslation("1_3_1_H63.2"),
        "H63.2"
      );
    }

    const headersAttr = HTMLCS.util.testTableHeaders(table);

    if (headersAttr.allowScope) {
      if (scopeAttr.missing.length === 0) {
        // If all scope attributes are set, let them be used, even if the
        // attributes are in error. If the scope attrs are fixed, the table
        // will be legitimate.
        headersAttr.required === false;
      }
    } else {
      if (scopeAttr.used === true) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H43.ScopeAmbiguous"),
          "H43.ScopeAmbiguous"
        );
        scopeAttr = null;
      }
    }

    if (headersAttr.isMultiLevelHeadersTable) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        table,
        _global.HTMLCS.getTranslation("1_3_1_H43.IncorrectAttrNotice"),
        "H43.IncorrectAttr"
      );
    } else {
      // Incorrect usage of headers - error; emit always.
      for (const wrongHeader of headersAttr.wrongHeaders) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          wrongHeader.element,
          _global.HTMLCS.getTranslation("1_3_1_H43.IncorrectAttr")
            .replace(/\{\{expected\}\}/g, wrongHeader.expected)
            .replace(/\{\{actual\}\}/g, wrongHeader.actual),
          "H43.IncorrectAttr"
        );
      }
    }

    // Errors where headers are compulsory.
    if (headersAttr.required && !headersAttr.allowScope) {
      if (!headersAttr.used) {
        // Headers not used at all, and they are mandatory.
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H43.HeadersRequired"),
          "H43.HeadersRequired"
        );
      } else {
        // Missing TH IDs - error; emit at this stage only if headers are compulsory.
        if (headersAttr.missingThId.length > 0) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            table,
            _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeaderIds"),
            "H43.MissingHeaderIds"
          );
        }

        // Missing TD headers attributes - error; emit at this stage only if headers are compulsory.
        if (headersAttr.missingTd.length > 0) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            table,
            _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeadersAttrs"),
            "H43.MissingHeadersAttrs"
          );
        }
      }
    }

    // Errors where either is permitted, but neither are done properly (missing
    // certain elements).
    // If they've only done it one way, presume that that is the way they want
    // to continue. Otherwise provide a generic message if none are done or
    // both have been done incorrectly.
    if (
      headersAttr.required === true &&
      headersAttr.allowScope === true &&
      headersAttr.correct === false &&
      scopeAttr.correct === false
    ) {
      if (!scopeAttr.used && !headersAttr.used) {
        // Nothing used at all.
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H43,H63"),
          "H43,H63"
        );
      } else if (
        !scopeAttr.used &&
        (headersAttr.missingThId.length > 0 || headersAttr.missingTd.length > 0)
      ) {
        // Headers attribute is used, but not all th elements have ids.
        if (headersAttr.missingThId.length > 0) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            table,
            _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeaderIds"),
            "H43.MissingHeaderIds"
          );
        }

        // Headers attribute is used, but not all td elements have headers attrs.
        if (headersAttr.missingTd.length > 0) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            table,
            _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeadersAttrs"),
            "H43.MissingHeadersAttrs"
          );
        }
      } else if (scopeAttr.missing.length > 0 && headersAttr.used === false) {
        // Scope is used rather than headers, but not all th elements have them.
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H63.1"),
          "H63.1"
        );
      } else if (
        scopeAttr.missing.length > 0 &&
        (headersAttr.missingThId.length > 0 || headersAttr.missingTd.length > 0)
      ) {
        // Both are used and both were done incorrectly. Provide generic message.
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H43,H63"),
          "H43,H63"
        );
      }
    }
  },

  /**
   * Test for the correct scope attributes on table cell elements.
   *
   * Return value contains the following elements:
   * - used (Boolean):       Whether scope has been used on at least one cell.
   * - correct (Boolean):    Whether scope has been correctly used (obsolete
   *                         elements do not invalidate this).
   * - missing (Array):      Array of th elements that have no scope attribute.
   * - invalid (Array):      Array of elements with incorrect scope attributes.
   * - obsoleteTd (Array):   Array of elements where we should throw a warning
   *                         about scope on td being obsolete in HTML5.
   *
   * @param {DOMNode} element Table element to test upon.
   *
   * @return {Object} The above return value structure.
   */
  _testTableScopeAttrs: function (table) {
    const elements = {
      th: table.getElementsByTagName("th"),
      td: table.getElementsByTagName("td"),
    };

    // Types of errors:
    // - missing:    Errors that a th does not contain a scope attribute.
    // - invalid:    Errors that the scope attribute is not a valid value.
    // - obsoleteTd: Warnings that scopes on tds are obsolete in HTML5.
    const retval = {
      used: false,
      correct: true,
      missing: [],
      invalid: [],
      obsoleteTd: [],
    };

    // index key
    for (const tagType in elements) {
      for (const element of elements[tagType]) {
        let scope = "";

        if (element.hasAttribute("scope") === true) {
          retval.used = true;
          if (element.getAttribute("scope")) {
            scope = element.getAttribute("scope");
          }
        }

        if (element.nodeName === "TH") {
          if (/^\s*$/.test(scope)) {
            // Scope empty or just whitespace.
            retval.correct = false;
            retval.missing.push(element);
          } else if (/^(row|col|rowgroup|colgroup)$/.test(scope) === false) {
            // Invalid scope value.
            retval.correct = false;
            retval.invalid.push(element);
          }
        } else {
          if (scope !== "") {
            // Scope attribute found on TD element. This is obsolete in
            // HTML5. Does not make it incorrect.
            retval.obsoleteTd.push(element);

            // Test for an invalid scope value regardless.
            if (/^(row|col|rowgroup|colgroup)$/.test(scope) === false) {
              retval.correct = false;
              retval.invalid.push(element);
            }
          }
        }
      }
    }

    return retval;
  },

  /**
   * Test table captions and summaries (techniques H39, H73).
   *
   * @param {DOMNode} table Table element to test upon.
   */
  testTableCaptionSummary: function (table) {
    const captionEl = table.getElementsByTagName("caption");
    let summary = table.getAttribute("summary") || "";
    let caption = "";

    if (captionEl.length > 0) {
      caption = captionEl[0].innerHTML.replace(/^\s*(.*?)\s*$/g, "$1");
    }

    // In HTML5, Summary no longer exists, so only run this for older versions.
    const doctype = HTMLCS.util.getDocumentType(table.ownerDocument);

    if (doctype && doctype.indexOf("html5") === -1) {
      summary = summary.replace(/^\s*(.*?)\s*$/g, "$1");
      if (summary !== "") {
        if (HTMLCS.util.isLayoutTable(table) === true) {
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            table,
            _global.HTMLCS.getTranslation("1_3_1_H73.3.LayoutTable"),
            "H73.3.LayoutTable"
          );
        } else {
          if (caption === summary) {
            HTMLCS.addMessage(
              HTMLCS.ERROR,
              table,
              _global.HTMLCS.getTranslation("1_3_1_H39,H73.4"),
              "H39,H73.4"
            );
          }

          HTMLCS.addMessage(
            HTMLCS.NOTICE,
            table,
            _global.HTMLCS.getTranslation("1_3_1_H73.3.Check"),
            "H73.3.Check"
          );
        }
      } else {
        if (HTMLCS.util.isLayoutTable(table) === false) {
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            table,
            _global.HTMLCS.getTranslation("1_3_1_H73.3.NoSummary"),
            "H73.3.NoSummary"
          );
        }
      }
    }

    if (caption !== "") {
      if (HTMLCS.util.isLayoutTable(table) === true) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H39.3.LayoutTable"),
          "H39.3.LayoutTable"
        );
      } else {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H39.3.Check"),
          "H39.3.Check"
        );
      }
    } else {
      if (HTMLCS.util.isLayoutTable(table) === false) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          table,
          _global.HTMLCS.getTranslation("1_3_1_H39.3.NoCaption"),
          "H39.3.NoCaption"
        );
      }
    }
  },

  /**
   * Test for fieldsets without legends (technique H71)
   *
   * @param {DOMNode} fieldset Fieldset element to test upon.
   */
  testFieldsetLegend: function (fieldset) {
    const legend = fieldset.querySelector("legend");

    if (legend === null || legend.parentNode !== fieldset) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        fieldset,
        _global.HTMLCS.getTranslation("1_3_1_H71.NoLegend"),
        "H71.NoLegend"
      );
    }
  },

  /**
   * Test for select fields without optgroups (technique H85).
   *
   * It won't always be appropriate, so the error is emitted as a warning.
   *
   * @param {DOMNode} select Select element to test upon.
   */
  testOptgroup: function (select) {
    if (select.querySelector("optgroup") === null) {
      // Optgroup isn't being used.
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        select,
        _global.HTMLCS.getTranslation("1_3_1_H85.2"),
        "H85.2"
      );
    }
  },

  /**
   * Test for radio buttons and checkboxes with same name in a fieldset.
   *
   * One error will be fired at a form level, rather than firing one for each
   * violating group of inputs (as there could be many).
   *
   * @param {DOMNode} form The form to test.
   *
   * @returns void
   */
  testRequiredFieldsets: function (form) {
    const usedNames = {};

    for (const option of form.querySelectorAll(
      "input[type=radio], input[type=checkbox]"
    )) {
      let fieldset = null;
      let optionName = null;

      if (option.hasAttribute("name")) {
        optionName = option.getAttribute("name");

        // Now find if we are in a fieldset. Stop at the top of the DOM, or
        // at the form element.
        fieldset = option.parentNode;

        while (
          fieldset.nodeName !== "FIELDSET" &&
          fieldset !== null &&
          fieldset !== form
        ) {
          fieldset = fieldset.parentNode;
        }

        if (fieldset.nodeName !== "FIELDSET") {
          // Record that this name is used, but there is no fieldset.
          fieldset = null;
        }
      }

      if (usedNames[optionName] === undefined) {
        usedNames[optionName] = fieldset;
      } else if (fieldset === null || fieldset !== usedNames[optionName]) {
        // Multiple names detected = should be in a fieldset.
        // Either first instance or this one wasn't in a fieldset, or they
        // are in different fieldsets.
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          form,
          _global.HTMLCS.getTranslation("1_3_1_H71.SameName"),
          "H71.SameName"
        );
        break;
      }
    }
  },

  /**
   * Test for paragraphs that appear manually bulleted or numbered (technique H48).
   *
   * @param {DOMNode} element The element to test upon.
   */
  testListsWithBreaks: function (element) {
    const firstBreak = element.querySelector("br");
    const items = [];

    // If there is a br tag, go break up the element and see what each line
    // starts with.
    if (firstBreak !== null) {
      // todo: pre-allocate
      const nodes = [];

      // Convert child nodes NodeList into an array. todo: pre-allocate
      for (const node of element.childNodes) {
        nodes.push(node);
      }

      let thisItem = [];

      while (nodes.length > 0) {
        const subel = nodes.shift();

        if (subel.nodeType === 1) {
          // Element node.
          if (subel.nodeName === "BR") {
            // Line break. Join and trim what we have now.
            items.push(thisItem.join(" ").replace(/^\s*(.*?)\s*$/g, "$1"));
            thisItem = [];
          } else {
            // TODO: reverse shift to prevent logic
            // Shift the contents of the sub element in, but in reverse.
            for (let i = subel.childNodes.length - 1; i >= 0; --i) {
              nodes.unshift(subel.childNodes[i]);
            }
          }
        } else if (subel.nodeType === 3) {
          // Text node.
          thisItem.push(subel.nodeValue);
        }
      }

      if (thisItem.length > 0) {
        items.push(thisItem.join(" ").replace(/^\s*(.*?)\s*$/g, "$1"));
      }

      for (const item of items) {
        if (/^[-*]\s+/.test(item) === true) {
          // Test for "- " or "* " cases.
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_3_1_H48.1"),
            "H48.1"
          );
          break;
        }
        if (/^\d+[:/\-.]?\s+/.test(item) === true) {
          // Test for "1 " cases (or "1. ", "1: ", "1- ").
          HTMLCS.addMessage(
            HTMLCS.WARNING,
            element,
            _global.HTMLCS.getTranslation("1_3_1_H48.2"),
            "H48.2"
          );
          break;
        }
      }
    }
  },
  testHeadingOrder: function (top) {
    let lastHeading = 0;

    for (const heading of HTMLCS.util.getAllElements(
      top,
      "h1, h2, h3, h4, h5, h6"
    )) {
      const headingNum = parseInt(heading.nodeName.substring(1));

      const headingNumStr = headingNum + "";

      if (headingNum - lastHeading > 1) {
        if (lastHeading === 0) {
          // If last heading is empty, we are at document top and we are
          // expecting a H1, generally speaking.
          HTMLCS.addMessage(
            HTMLCS.ERROR,
            heading,
            _global.HTMLCS.getTranslation("1_3_1_G141_a").replace(
              /\{\{headingNum\}\}/g,
              headingNumStr
            ),
            "G141"
          );
        }

        HTMLCS.addMessage(
          HTMLCS.ERROR,
          heading,
          _global.HTMLCS.getTranslation("1_3_1_G141_b")
            .replace(/\{\{headingNum\}\}/g, headingNumStr)
            .replace(/\{\{properHeadingNum\}\}/g, lastHeading + 1 + ""),
          "G141"
        );
      }

      lastHeading = headingNum;
    }
  },

  /**
   * Test for headings with no text, which should either be filled, or tags removed.
   *
   * @param {DOMNode} element The element to test.
   *
   * @returns void
   */
  testEmptyHeading: function (element) {
    if (
      /^\s*$/.test(HTMLCS.util.getElementTextContent(element, true)) === true
    ) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        _global.HTMLCS.getTranslation("1_3_1_H42.2"),
        "H42.2"
      );
    }
  },

  /**
   * Test for the presence of a list around common navigation links (H48).
   *
   * @param {DOMNode} element The element to test.
   *
   * @returns void
   */
  testUnstructuredNavLinks: function (element) {
    let linksLength = 0;

    for (const childNodes of element.childNodes) {
      if (childNodes.nodeType === 1 && childNodes.nodeName === "A") {
        linksLength++;
        break;
      }
    }

    if (linksLength) {
      // Going to throw a warning here, mainly because we cannot easily tell
      // whether it is just a paragraph with multiple links, or a navigation
      // structure.
      let parent = element.parentNode;

      while (
        parent !== null &&
        parent.nodeName !== "UL" &&
        parent.nodeName !== "OL"
      ) {
        parent = parent.parentNode;
      }

      if (parent === null) {
        HTMLCS.addMessage(
          HTMLCS.WARNING,
          element,
          _global.HTMLCS.getTranslation("1_3_1_H48"),
          "H48"
        );
      }
    }
  },

  /**
   * Provide generic messages for tables depending on what type of table they
   * are - layout or data.
   *
   * @param {DOMNode} table The table element to test.
   *
   * @returns void
   */
  testGeneralTable: function (table) {
    if (HTMLCS.util.isLayoutTable(table) === true) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        table,
        _global.HTMLCS.getTranslation("1_3_1_LayoutTable"),
        "LayoutTable"
      );
    } else {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        table,
        _global.HTMLCS.getTranslation("1_3_1_DataTable"),
        "DataTable"
      );
    }
  },
};
