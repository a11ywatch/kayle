_global.HTMLCS_Section508_Sniffs_A = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["_top", "img", "object", "bgsound", "audio"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, top) {
    if (element === top) {
      this.addNullAltTextResults(top);
      this.addMediaAlternativesResults(top);
    } else {
      const nodeName = element.nodeName;

      if (
        nodeName === "OBJECT" ||
        nodeName === "BGSOUND" ||
        nodeName === "AUDIO"
      ) {
        // Audio transcript notice. Yes, this is in A rather than B, since
        // audio is not considered "multimedia" (roughly equivalent to a
        // "synchronised media" presentation in WCAG 2.1). It is non-text,
        // though, so a transcript is required.
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          element,
          "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
          "Audio"
        );
      }
    }
  },

  /**
   * Test for missing or null alt text in certain elements.
   *
   * Tested elements are:
   * - IMG elements
   * - INPUT elements with type="image" (ie. image submit buttons).
   * - AREA elements (ie. in client-side image maps).
   *
   * @param {DOMNode} element The element to test.
   *
   * @returns {Object} A structured list of errors.
   */
  testNullAltText: function (top) {
    const errors = {
      img: {
        generalAlt: [],
        missingAlt: [],
        ignored: [],
        nullAltWithTitle: [],
        emptyAltInLink: [],
      },
      inputImage: {
        generalAlt: [],
        missingAlt: [],
      },
      area: {
        generalAlt: [],
        missingAlt: [],
      },
    };

    for (const element of HTMLCS.util.getAllElements(
      top,
      'img, area, input[type="image"]'
    )) {
      let linkOnlyChild = false;
      let missingAlt = false;
      let nullAlt = false;

      if (element.parentNode.nodeName === "A") {
        const prevNode = HTMLCS.util.getPreviousSiblingElement(element, null);
        const nextNode = HTMLCS.util.getNextSiblingElement(element, null);

        if (prevNode === null && nextNode === null) {
          let textContent = element.parentNode.textContent;

          if (element.parentNode.textContent !== undefined) {
            textContent = element.parentNode.textContent;
          } else {
            // @ts-ignore Keep IE8 happy.
            textContent = element.parentNode.innerText;
          }

          if (HTMLCS.util.isStringEmpty(textContent) === true) {
            linkOnlyChild = true;
          }
        }
      }

      if (element.hasAttribute("alt") === false) {
        missingAlt = true;
      } else if (
        !element.getAttribute("alt") ||
        HTMLCS.util.isStringEmpty(element.getAttribute("alt")) === true
      ) {
        nullAlt = true;
      }

      // Now determine which test(s) should fire.
      switch (element.nodeName) {
        case "IMG":
          if (
            linkOnlyChild === true &&
            (missingAlt === true || nullAlt === true)
          ) {
            // Img tags cannot have an empty alt text if it is the
            // only content in a link (as the link would not have a text
            // alternative).
            errors.img.emptyAltInLink.push(element.parentNode);
          } else if (missingAlt === true) {
            errors.img.missingAlt.push(element);
          } else if (nullAlt === true) {
            if (
              element.hasAttribute("title") === true &&
              HTMLCS.util.isStringEmpty(element.getAttribute("title")) === false
            ) {
              // Title attribute present and not empty. This is wrong when
              // an image is marked as ignored.
              errors.img.nullAltWithTitle.push(element);
            } else {
              errors.img.ignored.push(element);
            }
          } else {
            errors.img.generalAlt.push(element);
          }
          break;

        case "INPUT":
          // Image submit buttons.
          if (missingAlt === true || nullAlt === true) {
            errors.inputImage.missingAlt.push(element);
          } else {
            errors.inputImage.generalAlt.push(element);
          }
          break;

        case "AREA":
          // Area tags in a client-side image map.
          if (missingAlt === true || nullAlt === true) {
            errors.area.missingAlt.push(element);
          } else {
            errors.inputImage.generalAlt.push(element);
          }
          break;

        default:
          // No other tags defined.
          break;
      }
    }

    return errors;
  },

  /**
   * Driver function for the null alt text tests.
   *
   * This takes the generic result given by the alt text testing functions
   * (located in WCAG 2.1 SC 1.1.1), and converts them into Section 508-specific
   * messages.
   *
   * @param {DOMNode} element The element to test.
   */
  addNullAltTextResults: function (top) {
    const errors = this.testNullAltText(top);

    for (const emptyAltInLink of errors.img.emptyAltInLink) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        emptyAltInLink,
        "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
        "Img.EmptyAltInLink"
      );
    }

    for (const nullAltWithTitle of errors.img.nullAltWithTitle) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        nullAltWithTitle,
        "Img element with empty alt text must have absent or empty title attribute.",
        "Img.NullAltWithTitle"
      );
    }

    for (const ignored of errors.img.ignored) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        ignored,
        "Img element is marked so that it is ignored by Assistive Technology.",
        "Img.Ignored"
      );
    }

    for (const missingAlt of errors.img.missingAlt) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        missingAlt,
        "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
        "Img.MissingAlt"
      );
    }

    for (const generalAlt of errors.img.generalAlt) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        generalAlt,
        "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
        "Img.GeneralAlt"
      );
    }

    for (const missingAlt of errors.inputImage.missingAlt) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        missingAlt,
        "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
        "InputImage.MissingAlt"
      );
    }

    for (const generalAlt of errors.inputImage.generalAlt) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        generalAlt,
        "Ensure that the image submit button's alt text identifies the purpose of the button.",
        "InputImage.GeneralAlt"
      );
    }

    for (const missingAlt of errors.area.missingAlt) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        missingAlt,
        "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
        "Area.MissingAlt"
      );
    }

    for (const generalAlt of errors.area.generalAlt) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        generalAlt,
        "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
        "Area.GeneralAlt"
      );
    }
  },

  testMediaTextAlternatives: function (top) {
    const errors = {
      object: {
        missingBody: [],
        generalAlt: [],
      },
      applet: {
        missingBody: [],
        missingAlt: [],
        generalAlt: [],
      },
    };

    for (const element of HTMLCS.util.getAllElements(top, "object")) {
      const childObject = element.querySelector("object");

      // If we have an object as our alternative, skip it. Pass the blame onto
      // the child.
      if (childObject === null) {
        const textAlt = HTMLCS.util.getElementTextContent(element, true);
        if (textAlt === "") {
          errors.object.missingBody.push(element);
        } else {
          errors.object.generalAlt.push(element);
        }
      }
    }

    for (const element of HTMLCS.util.getAllElements(top, "applet")) {
      // Test firstly for whether we have an object alternative.
      const childObject = element.querySelector("object");
      let hasError = false;

      // If we have an object as our alternative, skip it. Pass the blame onto
      // the child. (This is a special case: those that don't understand APPLET
      // may understand OBJECT, but APPLET shouldn't be nested.)
      if (childObject === null) {
        const textAlt = HTMLCS.util.getElementTextContent(element, true);
        if (HTMLCS.util.isStringEmpty(textAlt) === true) {
          errors.applet.missingBody.push(element);
          hasError = true;
        }
      }

      const altAttr = element.getAttribute("alt") || "";

      if (HTMLCS.util.isStringEmpty(altAttr)) {
        errors.applet.missingAlt.push(element);
        hasError = true;
      }

      if (!hasError) {
        // No error? Remind of obligations about equivalence of alternatives.
        errors.applet.generalAlt.push(element);
      }
    }

    return errors;
  },

  /**
   * Driver function for the media alternative (object/applet) tests.
   *
   * This takes the generic result given by the media alternative testing function
   * (located in WCAG 2.1 SC 1.1.1), and converts them into Section
   * 508-specific messages.
   *
   * @param {DOMNode} element The element to test.
   */
  addMediaAlternativesResults: function (top) {
    const errors =
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1.testMediaTextAlternatives(
        top
      );

    for (const missingBody of errors.object.missingBody) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        missingBody,
        "Object elements must contain a text alternative after all other alternatives are exhausted.",
        "Object.MissingBody"
      );
    }

    for (const generalAlt of errors.object.generalAlt) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        generalAlt,
        "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
        "Object.GeneralAlt"
      );
    }

    for (const missingBody of errors.applet.missingBody) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        missingBody,
        "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
        "Applet.MissingBody"
      );
    }

    for (const missingAlt of errors.applet.missingAlt) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        missingAlt,
        "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
        "Applet.MissingAlt"
      );
    }

    for (const generalAlt of errors.applet.generalAlt) {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        generalAlt,
        "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
        "Applet.GeneralAlt"
      );
    }
  },
};
