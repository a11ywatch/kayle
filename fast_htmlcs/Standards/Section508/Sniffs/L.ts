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

_global.HTMLCS_Section508_Sniffs_L = {
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
    if (element === top) {
      this.addProcessLinksMessages(top);
      this.testKeyboard(top);
    }
  },

  addProcessLinksMessages: function (top) {
    var errors = this.processLinks(top);
    for (var i = 0; i < errors.emptyNoId.length; i++) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        errors.emptyNoId[i],
        "Anchor element found with no link content and no name and/or ID attribute.",
        "EmptyAnchorNoId"
      );
    }

    for (var i = 0; i < errors.placeholder.length; i++) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        errors.placeholder[i],
        "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
        "PlaceholderAnchor"
      );
    }

    for (var i = 0; i < errors.noContent.length; i++) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        errors.noContent[i],
        "Anchor element found with a valid href attribute, but no link content has been supplied.",
        "NoContentAnchor"
      );
    }
  },

  processLinks: function (top) {
    const errors = {
      empty: [],
      emptyWithName: [],
      emptyNoId: [],
      noHref: [],
      placeholder: [],
      noContent: [],
    };

    for (const element of HTMLCS.util.getAllElements(top, "a")) {
      var hrefFound = false;
      var content = HTMLCS.util.getElementTextContent(element);

      /*
            var nameFound = false;
            if ((element.hasAttribute('title') === true) && (/^\s*$/.test(element.getAttribute('title')) === false)) {
                nameFound = true;
            } else if (/^\s*$/.test(content) === false) {
                nameFound = true;
            }
            */

      if (
        element.hasAttribute("href") === true &&
        /^\s*$/.test(element.getAttribute("href")) === false
      ) {
        hrefFound = true;
      }

      if (hrefFound === false) {
        // No href. We don't want these because, although they are commonly used
        // to create targets, they can be picked up by screen readers and
        // displayed to the user as empty links. A elements are defined by H91 as
        // having an (ARIA) role of "link", and using them as targets are
        // essentially misusing them. Place an ID on a parent element instead.
        if (/^\s*$/.test(content) === true) {
          // Also no content. (eg. <a id=""></a> or <a name=""></a>)
          if (element.hasAttribute("id") === true) {
            errors.empty.push(element);
          } else if (element.hasAttribute("name") === true) {
            errors.emptyWithName.push(element);
          } else {
            errors.emptyNoId.push(element);
          }
        } else {
          // Giving a benefit of the doubt here - if a link has text and also
          // an ID, but no href, it might be because it is being manipulated by
          // a script.
          if (
            element.hasAttribute("id") === true ||
            element.hasAttribute("name") === true
          ) {
            errors.noHref.push(element);
          } else {
            // HTML5 allows A elements with text but no href, "for where a
            // link might otherwise have been placed, if it had been relevant".
            // Hence, thrown as a warning, not an error.
            errors.placeholder.push(element);
          }
        } //end if
      } else {
        if (/^\s*$/.test(content) === true) {
          // Href provided, but no content.
          // We only fire this message when there are no images in the content.
          // A link around an image with no alt text is already covered in SC
          // 1.1.1 (test H30).
          if (element.querySelectorAll("img").length === 0) {
            errors.noContent.push(element);
          }
        } //end if
      } //end if
    }

    return errors;
  },

  /**
   * Process mouse-specific functions.
   *
   * @param {DOMNode} top The top element of the tested code.
   */
  testKeyboard: function (top) {
    // Testing for elements that have explicit attributes for mouse-specific
    // events. Note: onclick is considered keyboard accessible, as it is actually
    // tied to the default action of a link or button - not merely a click.
    for (const dblClick of HTMLCS.util.getAllElements(top, "*[ondblclick]")) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        dblClick,
        "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
        "DblClick"
      );
    }

    for (const mouseOver of HTMLCS.util.getAllElements(top, "*[onmouseover]")) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        mouseOver,
        "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
        "MouseOver"
      );
    }

    for (const mouseOut of HTMLCS.util.getAllElements(top, "*[onmouseout]")) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        mouseOut,
        "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
        "MouseOut"
      );
    }

    for (const mouseMove of HTMLCS.util.getAllElements(top, "*[onmousemove]")) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        mouseMove,
        "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
        "MouseMove"
      );
    }

    for (const mouseDown of HTMLCS.util.getAllElements(top, "*[onmousedown]")) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        mouseDown,
        "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
        "MouseDown"
      );
    }

    for (const mouseUp of HTMLCS.util.getAllElements(top, "*[onmouseup]")) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        mouseUp,
        "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
        "MouseUp"
      );
    }
  },
};
