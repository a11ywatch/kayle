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
_global.HTMLCS.util = {
  /**
   * Returns true if the string is "empty" according to WCAG standards.
   *
   * We can test for whether the string is entirely composed of whitespace, but
   * WCAG standards explicitly state that non-breaking spaces (&nbsp;, &#160;)
   * are not considered "empty". So we need this function to filter out that
   * situation.
   *
   * @param {String} string The potentially empty string.
   *
   * @returns {Boolean}
   */
  isStringEmpty: function (string) {
    if (typeof string !== "string") {
      return true;
    }

    let empty = true;

    // fast check for non empty string or fallback to charchode nbsp find
    if (
      (string && string[0] !== " ") ||
      string.indexOf(String.fromCharCode(160)) !== -1
    ) {
      // Has an NBSP, therefore cannot be empty.
      empty = false;
    } else if (/^\s*$/.test(string) === false) {
      // Not spacing.
      empty = false;
    }

    return empty;
  },
  /**
   * Get the document type being tested.
   *
   * Possible values: html5, xhtml5, xhtml11, xhtml10, html401, html40
   * ... or empty string if it couldn't work out the doctype.
   *
   * This will only give the thumbs-up to the "strict" doctypes.
   *
   * @param {Document} The document being tested.
   *
   * @return {String}
   */
  getDocumentType: function (document) {
    let retval = null;
    let doctype = document.doctype;

    if (doctype) {
      let doctypeName = doctype.name;
      let publicId = doctype.publicId;
      let systemId = doctype.systemId;

      if (doctypeName === null) {
        doctypeName = "";
      }

      if (systemId === null) {
        systemId = "";
      }

      if (publicId === null) {
        publicId = "";
      }

      if (doctypeName === "HTML" || doctypeName === "html") {
        if (publicId === "" && systemId === "") {
          retval = "html5";
        } else if (
          publicId.indexOf("//DTD HTML 4.01") !== -1 ||
          systemId.indexOf("w3.org/TR/html4/strict.dtd") !== -1
        ) {
          retval = "html401";
        } else if (
          publicId.indexOf("//DTD HTML 4.0") !== -1 ||
          systemId.indexOf("w3.org/TR/REC-html40/strict.dtd") !== -1
        ) {
          retval = "html40";
        } else if (
          publicId.indexOf("//DTD XHTML 1.0 Strict") !== -1 &&
          systemId.indexOf("w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd") !== -1
        ) {
          retval = "xhtml10";
        } else if (
          publicId.indexOf("//DTD XHTML 1.1") !== -1 &&
          systemId.indexOf("w3.org/TR/xhtml11/DTD/xhtml11.dtd") !== -1
        ) {
          retval = "xhtml11";
        }
        if (systemId.indexOf("about:legacy-compat") !== -1) {
          // Some tools don't like the lack of doctype for XHTML5 so permit
          // an "about:legacy-compat" SYSTEM doctype.
          if (document.contentType === "application/xhtml+xml") {
            var htmlElement = document.querySelector("html");
            if (
              htmlElement.getAttribute("xmlns") ===
              "http://www.w3.org/1999/xhtml"
            ) {
              retval = "xhtml5";
            }
          }
        }
      }
    } else {
      // XHTML5 has no doctype (at all) normally, but it only counts if the
      // content type it was sent as is set correctly
      if (document.contentType === "application/xhtml+xml") {
        if (
          document.querySelector("html").getAttribute("xmlns") ===
          "http://www.w3.org/1999/xhtml"
        ) {
          retval = "xhtml5";
        }
      }
    }

    return retval;
  },
  /**
   * Get the window object relating to the passed element.
   *
   * @param {Node|Document} element The element (or document) to pass.
   *
   * @returns {Window}
   */
  getElementWindow: function (element) {
    const doc = element.ownerDocument || element;

    // @ts-ignore check for element window
    return doc.defaultView || doc.parentWindow;
  },
  /**
   * Returns true if the element has a valid aria label.
   *
   * @param {Node} element The element we are checking.
   *
   * @return {Boolean}
   */
  hasValidAriaLabel: function (element) {
    let found = false;

    if (element.hasAttribute("aria-labelledby")) {
      // Checking aria-labelled by where the label exists AND it has text available
      // to an accessibility API.
      const labelledByIds = element
        .getAttribute("aria-labelledby")
        .split(/\s+/);

      for (const id of labelledByIds) {
        const elem = document.getElementById(id);

        if (elem && /^\s*$/.test(this.getElementTextContent(elem)) === false) {
          found = true;
          break;
        }
      }
    } else if (element.hasAttribute("aria-label")) {
      // todo: remove regx
      found = /^\s*$/.test(element.getAttribute("aria-label")) === false;
    }

    return found;
  },

  /**
   * Return the appropriate computed style object for an element.
   *
   * It's accessed in different ways depending on whether it's IE or not.
   *
   * @param {Node} element An element with style.
   * @param {String} pseudo A pseudo element.
   *
   * @returns {Object}
   */
  style: function (element, pseudo) {
    return (
      element.currentStyle ||
      this.getElementWindow(element).getComputedStyle(element, pseudo || null)
    );
  },
  /**
   * Return true if an element is hidden visually.
   *
   * If the computed style of an element cannot be determined for some reason,
   * it is presumed it is NOT hidden.
   *
   * @param {Node} element The element that is hiding, or not.
   *
   * @returns {Boolean}
   */
  isVisuallyHidden: function (element) {
    // Handle titles in svg as a special visually hidden case (hidden by browsers but
    // available to accessibility apis.
    if (
      element.nodeName === "title" &&
      this.findParentNode(element, "svg") !== null
    ) {
      return true;
    }

    // Do not point to elem if its hidden. Use computed styles.
    let style = this.style(element);

    return !!(
      style !== null &&
      (style.visibility === "hidden" ||
        style.display === "none" ||
        parseInt(style.left, 10) + parseInt(style.width, 10) < 0 ||
        parseInt(style.top, 10) + parseInt(style.height, 10) < 0)
    );
  },
  /**
   * Returns true if the element is deliberately hidden from Accessibility APIs using ARIA hidden.
   *
   * Not: This is separate to isAccessibilityHidden() due to a need to check specifically for aria hidden.
   *
   * @param {Node} element The element to check.
   *
   * @return {Boolean}
   */
  isAriaHidden: function (element) {
    let testElement = element.parentElement;
    let hiddenElement = false;

    while (testElement) {
      if (
        // WAI-ARIA presentation role.
        element.hasAttribute("aria-hidden") &&
        element.getAttribute("aria-hidden") === "true"
      ) {
        hiddenElement = true;
        break;
      }

      testElement = testElement.parentElement;
    }

    return hiddenElement;
  },
  /**
   * Returns true if the element is deliberately hidden from Accessibility APIs.
   *
   * @param {Node} element The element to check.
   *
   * @return {Boolean}
   */
  isAccessibilityHidden: function (element) {
    let testElement = element.parentElement;
    let hiddenElement = false;

    while (testElement) {
      if (
        // WAI-ARIA presentation role.
        (element.hasAttribute("role") &&
          element.getAttribute("role") === "presentation") ||
        // WAI-ARIA hidden attribute.
        (element.hasAttribute("aria-hidden") &&
          element.getAttribute("aria-hidden") === "true")
      ) {
        hiddenElement = true;
        break;
      }

      testElement = testElement.parentElement;
    }

    return hiddenElement;
  },
  /**
   * Returns TRUE if the element is able to be focused todo: checkfor tabindex.
   *
   * @param {Node} element DOM Node to test.
   *
   * @return {Boolean}
   */
  isFocusable: function (element) {
    if (this.isDisabled(element) || this.isVisuallyHidden(element)) {
      return false;
    }

    const nodeName = element.nodeName;

    return (
      (nodeName === "A" &&
        element.hasAttribute("href") &&
        /^\s*$/.test(element.getAttribute("href")) === false) ||
      // Form elements.
      nodeName === "INPUT" ||
      nodeName === "SELECT" ||
      nodeName === "TEXTAREA" ||
      nodeName === "BUTTON" ||
      nodeName === "OBJECT"
    );
  },
  /**
   * Returns TRUE if the element is able to be focused by keyboard tabbing.
   *
   * @param {Node} element DOM Node to test.
   *
   * @return {Boolean}
   */
  isKeyboardTabbable: function (element) {
    if (element.hasAttribute("tabindex") === true) {
      return !(element.getAttribute("tabindex") === "-1");
    }
    return this.isFocusable(element);
  },
  /**
   * Returns TRUE if the element is able to be accessed via the keyboard.
   *
   * @param {Node} element DOM Node to test.
   *
   * @return {Boolean}
   */
  isKeyboardNavigable: function (element) {
    return (
      (element.hasAttribute("accesskey") &&
        /^\s*$/.test(element.getAttribute("accesskey")) === false) ||
      this.isKeyboardTabbable(element)
    );
  },
  /**
   * Return true if an element is disabled.
   *
   * If the computed style of an element cannot be determined for some reason,
   * it is presumed it is NOT hidden.
   *
   * @param {Node} element The element that is hiding, or not.
   *
   * @returns {Boolean}
   */
  isDisabled: (element) =>
    element.disabled || element.getAttribute("aria-disabled") === "true",
  /**
   * Return true if an element is in a document.
   *
   * @param {Node} element The element that is in a doc, or not.
   *
   * @returns {Boolean}
   */
  isInDocument: function (element) {
    // Check whether the element is in the document, by looking up its
    // DOM tree for a document object.
    let parent = element.parentNode;

    while (parent && parent.ownerDocument) {
      parent = parent.parentNode;
    } //end while

    // If we didn't hit a document, the element must not be in there.
    if (parent === null) {
      return false;
    }

    return true;
  },

  /**
   * Returns all elements that are visible to the accessibility API.
   *
   * @param {Node}   element  The parent element to search.
   * @param {String} selector Optional selector to pass to
   *
   * @return {Array}
   */
  getAllElements: function (element, selector) {
    const elements = (element || document).querySelectorAll(selector || "*");
    const visibleElements = new Array(elements.length);

    let visibleIndexs = 0;

    for (const elem of elements) {
      if (!this.isAccessibilityHidden(elem)) {
        visibleElements[visibleIndexs] = elem;
        visibleIndexs++;
      }
    }

    visibleElements.length = visibleIndexs;

    return visibleElements;
  },
  /**
   * Returns true if the passed child is contained by the passed parent.
   *
   * Uses either the IE contains() method or the W3C compareDocumentPosition()
   * method, as appropriate.
   *
   * @param {Node|Document} parent The parent element or document.
   * @param {Node|Document} child  The child.
   *
   * @returns {Boolean}
   */
  contains: function (parent, child) {
    let contained = false;

    // If the parent and the child are the same, they can't contain each
    // other.
    if (parent !== child) {
      if (!parent.ownerDocument) {
        // Parent is the document. Short-circuiting because contains()
        // doesn't exist on the document element.
        // We check whether the child can be contained, and whether the
        // child is in the same document as the parent.
        if (child.ownerDocument && child.ownerDocument === parent) {
          contained = true;
        }
      } else {
        if (parent.contains && parent.contains(child) === true) {
          contained = true;
        } else if (
          parent.compareDocumentPosition &&
          (parent.compareDocumentPosition(child) & 16) > 0
        ) {
          contained = true;
        }
      }
    }

    return contained;
  },
  /**
   * Returns true if the table passed is a layout table.
   *
   * If the passed table contains headings - through the use of the th
   * element - HTML_CodeSniffer will assume it is a data table. This is in line
   * with most other online checkers.
   *
   * @param {Node} table The table to check.
   *
   * @returns {Boolean}
   */
  isLayoutTable: (table) => table.querySelector("th") === null,
  /**
   * Convert a colour string to a structure with red/green/blue/alpha elements.
   *
   * Supports rgb() and hex colours (3, 4, 6 or 8 hex digits, optional "#").
   * Each red/green/blue element is in the range [0.0, 1.0].
   *
   * @param {String} colour The colour to convert.
   *
   * @returns {Object}
   */
  colourStrToRGB: function (color) {
    let colour:
      | string
      | { red: number; blue: number; green: number; alpha?: number } =
      color.toLowerCase();

    if (colour.substr(0, 3) === "rgb") {
      // rgb[a](0, 0, 0[, 0]) format.
      const matches = /^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(
        colour
      );

      colour = {
        // @ts-ignore
        red: matches[1] / 255,
        // @ts-ignore
        green: matches[2] / 255,
        // @ts-ignore
        blue: matches[3] / 255,
        alpha: 1.0,
      };

      if (matches[4]) {
        colour.alpha = parseFloat(/^,\s*(.*)$/.exec(matches[4])[1]);
      }
    } else {
      // Hex digit format.
      if (colour.charAt(0) === "#") {
        colour = colour.substring(1);
      }

      if (colour.length === 3) {
        colour = colour.replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3");
      }

      if (colour.length === 4) {
        colour = colour.replace(/^(.)(.)(.)(.)$/, "$1$1$2$2$3$3$4$4");
      }

      var alpha = 1; // Default if alpha is not specified

      if (colour.length === 8) {
        alpha = parseInt(colour.substr(6, 2), 16) / 255;
      }

      colour = {
        red: parseInt(colour.substr(0, 2), 16) / 255,
        green: parseInt(colour.substr(2, 2), 16) / 255,
        blue: parseInt(colour.substr(4, 2), 16) / 255,
        alpha,
      };
    }

    return colour;
  },
  /**
   * Calculate relative luminescence for a colour in the sRGB colour profile.
   *
   * Supports rgb() and hex colours. rgba() also supported but the alpha
   * channel is currently ignored.
   * Hex colours can have an optional "#" at the front, which is stripped.
   * Relative luminescence formula is defined in the definitions of WCAG 2.0.
   * It can be either three or six hex digits, as per CSS conventions.
   * It should return a value in the range [0.0, 1.0].
   *
   * @param {String} colour The color to calculate from.
   *
   * @returns {Number}
   */
  relativeLum: function (color) {
    let colour = color;

    if (colour.charAt) {
      colour = this.colourStrToRGB(colour);
    }

    const transformed = {
      red: 0,
      green: 0,
      blue: 0,
    };

    // @ts-ignore todo check colour iter
    for (const x in colour) {
      // @ts-ignore
      if (colour[x] <= 0.03928) {
        // @ts-ignore
        transformed[x] = colour[x] / 12.92;
      } else {
        // @ts-ignore
        transformed[x] = Math.pow((colour[x] + 0.055) / 1.055, 2.4);
      }
    }

    return (
      transformed.red * 0.2126 +
      transformed.green * 0.7152 +
      transformed.blue * 0.0722
    );
  },
  /**
   * Calculate the contrast ratio between two colours.
   *
   * Colours should be in rgb() or 3/6-digit hex format; order does not matter
   * (ie. it doesn't matter which is the lighter and which is the darker).
   * Values should be in the range [1.0, 21.0]... a ratio of 1.0 means "they're
   * exactly the same contrast", 21.0 means it's white-on-black or v.v.
   * Formula as per WCAG 2.0 definitions.
   *
   * @param {String} colour1 The first colour to compare.
   * @param {String} colour2 The second colour to compare.
   *
   * @returns {Number}
   */
  contrastRatio: function (colour1, colour2) {
    const ratio =
      (0.05 + this.relativeLum(colour1)) / (0.05 + this.relativeLum(colour2));

    return ratio < 1 ? 1 / ratio : ratio;
  },
  /**
   * Convert an RGB colour structure to a hex colour.
   *
   * The red/green/blue colour elements should be on a [0.0, 1.0] scale.
   * Colours that can be converted into a three Hex-digit string will be
   * converted as such (eg. rgb(34,34,34) => #222). Others will be converted
   * to a six-digit string (eg. rgb(48,48,48) => #303030).
   *
   * @param {Object} colour Structure with "red", "green" and "blue" elements.
   *
   * @returns {String}
   */
  RGBtoColourStr: function (colour) {
    let colourStr = "#";

    colour.red = Math.round(colour.red * 255);
    colour.green = Math.round(colour.green * 255);
    colour.blue = Math.round(colour.blue * 255);

    if (
      colour.red % 17 === 0 &&
      colour.green % 17 === 0 &&
      colour.blue % 17 === 0
    ) {
      // Reducible to three hex digits.
      colourStr += (colour.red / 17).toString(16);
      colourStr += (colour.green / 17).toString(16);
      colourStr += (colour.blue / 17).toString(16);
    } else {
      if (colour.red < 16) {
        colourStr += "0";
      }
      colourStr += colour.red.toString(16);

      if (colour.green < 16) {
        colourStr += "0";
      }
      colourStr += colour.green.toString(16);

      if (colour.blue < 16) {
        colourStr += "0";
      }
      colourStr += colour.blue.toString(16);
    }

    return colourStr;
  },

  /**
   * Convert an RGB colour into hue-saturation-value.
   *
   * This is used for calculations changing the colour (for colour contrast
   * purposes) to ensure that the hue is maintained.
   * The parameter accepts either a string (hex or rgb() format) or a
   * red/green/blue structure.
   * The returned structure has hue, saturation, and value components: the
   * latter two are in the range [0.0, 1.0]; hue is in degrees,
   * range [0.0, 360.0).
   * If there is no saturation then hue is technically undefined.
   *
   * @param {String|Object} colour A colour to convert.
   *
   * @returns {Object}
   */
  sRGBtoHSV: function (color) {
    const colour =
      typeof color === "string" && color.charAt
        ? this.colourStrToRGB(color)
        : color;

    const hsvColour = {
      hue: 0,
      saturation: 0,
      value: 0,
    };

    const maxColour = Math.max(colour.red, colour.green, colour.blue);
    const minColour = Math.min(colour.red, colour.green, colour.blue);
    const chroma = maxColour - minColour;

    if (chroma === 0) {
      hsvColour.value = colour.red;
    } else {
      hsvColour.value = maxColour;
      if (maxColour === colour.red) {
        hsvColour.hue = (colour.green - colour.blue) / chroma;
      } else if (maxColour === colour.green) {
        hsvColour.hue = 2.0 + (colour.blue - colour.red) / chroma;
      } else {
        hsvColour.hue = 4.0 + (colour.red - colour.green) / chroma;
      }

      hsvColour.hue = hsvColour.hue * 60.0;
      if (hsvColour.hue >= 360.0) {
        hsvColour.hue -= 360.0;
      }

      hsvColour.saturation = chroma / hsvColour.value;
    }

    return hsvColour;
  },

  /**
   * Convert a hue-saturation-value structure into an RGB structure.
   *
   * The hue element should be a degree value in the region of [0.0, 360.0).
   * The saturation and value elements should be in the range [0.0, 1.0].
   * Use RGBtoColourStr to convert back into a hex colour.
   *
   * @param {Object} hsvColour A HSV structure to convert.
   *
   * @returns {Object}
   */
  HSVtosRGB: function (hsvColour) {
    const colour = {
      red: 0,
      green: 0,
      blue: 0,
    };

    if (hsvColour.saturation === 0) {
      colour.red = hsvColour.value;
      colour.green = hsvColour.value;
      colour.blue = hsvColour.value;
    } else {
      const chroma = hsvColour.value * hsvColour.saturation;
      const minColour = hsvColour.value - chroma;
      const interHue = hsvColour.hue / 60.0;
      const interHueMod = interHue - 2 * Math.floor(interHue / 2);
      const interCol = chroma * (1 - Math.abs(interHueMod - 1));

      switch (Math.floor(interHue)) {
        case 0:
          colour.red = chroma;
          colour.green = interCol;
          break;
        case 1:
          colour.green = chroma;
          colour.red = interCol;
          break;
        case 2:
          colour.green = chroma;
          colour.blue = interCol;
          break;
        case 3:
          colour.blue = chroma;
          colour.green = interCol;
          break;
        case 4:
          colour.blue = chroma;
          colour.red = interCol;
          break;
        case 5:
          colour.red = chroma;
          colour.blue = interCol;
          break;
      }

      colour.red = colour.red + minColour;
      colour.green = colour.green + minColour;
      colour.blue = colour.blue + minColour;
    }

    return colour;
  },

  /**
   * Gets the text contents of an element.
   *
   * @param {Node}    element           The element being inspected.
   * @param {Boolean} [includeAlt=true] Include alt text from images.
   *
   * @returns {String} The text contents.
   */
  getElementTextContent: function (element, hasAlt) {
    let includeAlt = hasAlt;

    if (includeAlt === undefined) {
      includeAlt = true;
    }

    const nodeSize = element.childNodes.length;
    const nodes = new Array(nodeSize);

    for (var i = 0; i < nodeSize; i++) {
      nodes[i] = element.childNodes[i];
    }

    nodes.length = nodeSize;

    const text = new Array(nodeSize);

    text[0] = element.textContent;

    let nodeIndex = 1;

    while (nodes.length > 0) {
      var node = nodes.shift();

      // If it's an element, add any sub-nodes to the process list.
      if (node.nodeType === 1) {
        if (node.nodeName === "IMG") {
          // If an image, include the alt text unless we are blocking it.
          if (includeAlt === true && node.hasAttribute("alt") === true) {
            text[nodeIndex] = node.getAttribute("alt");
            nodeIndex++;
          }
        } else {
          for (let i = 0; i < node.childNodes.length; i++) {
            nodes[i] = node.childNodes[i];
          }
          nodes.length = node.childNodes.length;
        }
      } else if (node.nodeType === 3) {
        // Text node.
        text[nodeIndex] = node.nodeValue;

        nodeIndex++;
      }
    }

    text.length = nodeIndex;

    // Push the text nodes together and trim.
    return text.join("").replace(/^\s+|\s+$/g, "");
  },
  /**
   * Find a parent node matching a selector.
   *
   * @param {DOMNode} node     Node to search from.
   * @param {String}  selector The selector to search.
   *
   * @return DOMNode|null
   */
  findParentNode: function (node, selector) {
    if (node && node.matches(selector)) {
      return node;
    }

    while (node && node.parentNode) {
      node = node.parentNode as Element;

      if (node && node.matches(selector)) {
        return node;
      }
    }

    return null;
  },

  /**
   * Iterate parent nodes of an element.
   *
   * @param {DOMNode}  node Node to search from.
   * @param {Function} cb    Callback function providing each parent node.
   *
   * @return void
   */
  eachParentNode: function (node, cb) {
    while (node && node.parentNode) {
      cb(node);
      node = node.parentNode as Element;
    }
  },

  getChildrenForTable: function (table, childNodeName) {
    if (table.nodeName !== "TABLE") {
      return null;
    }

    const allRows = table.getElementsByTagName(childNodeName);
    const rows = new Array(allRows.length);

    let rowIndex = 0;

    // Filter out rows that don't belong to this table.
    for (const row of allRows) {
      if (this.findParentNode(row, "table") === table) {
        rows[rowIndex] = row;
        rowIndex++;
      }
    }

    rows.length = rowIndex;

    return rows;
  },
  /**
   * Test for the correct headers attributes on table cell elements.
   *
   * Return value contains the following elements:
   * - required (Boolean):   Whether header association at all is required.
   * - used (Boolean):       Whether headers attribute has been used on at least
   *                         one table data (td) cell.
   * - allowScope (Boolean): Whether scope is allowed to satisfy the association
   *                         requirement (ie. max one row/one column).
   * - correct (Boolean):    Whether headers have been correctly used.
   * - missingThId (Array):  Array of th elements without IDs.
   * - missingTd (Array):    Array of elements without headers attribute.
   * - wrongHeaders (Array): Array of elements where headers attr is incorrect.
   *                         Each is a structure with following keys: element,
   *                         expected [headers attr], actual [headers attr].
   * - isMultiLevelHeadersTable (Boolean): Whether this table has multi-level headers.
   *                                    See: https://www.w3.org/WAI/tutorials/tables/multi-level/
   *
   * @param {DOMNode} element Table element to test upon.
   *
   * @return {Object} The above return value structure.
   */
  testTableHeaders: function (element) {
    const retval = {
      required: true,
      used: false,
      correct: true,
      allowScope: true,
      missingThId: [],
      missingTd: [],
      wrongHeaders: [],
      isMultiLevelHeadersTable: false,
    };

    const rows = this.getChildrenForTable(element, "tr");
    const skipCells = [];

    // Header IDs already used.
    const headerIds = {
      rows: [],
      cols: [],
    };
    const multiHeaders = {
      rows: 0,
      cols: 0,
    };

    for (var rownum = 0; rownum < rows.length; rownum++) {
      const row = rows[rownum];
      let colnum = 0;

      for (const cell of row.childNodes) {
        if (cell.nodeType === 1) {
          // Skip columns that are skipped due to rowspan.
          if (skipCells[rownum]) {
            while (skipCells[rownum][0] === colnum) {
              skipCells[rownum].shift();
              colnum++;
            }
          }

          const nodeName = cell.nodeName;
          const rowspan = Number(cell.getAttribute("rowspan")) || 1;
          const colspan = Number(cell.getAttribute("colspan")) || 1;

          // If rowspanned, mark columns as skippable in the following
          // row(s).
          if (rowspan) {
            for (var i = rownum + 1; i < rownum + rowspan; i++) {
              if (!skipCells[i]) {
                skipCells[i] = [];
              }

              for (var j = colnum; j < colnum + colspan; j++) {
                skipCells[i].push(j);
              }
            }
          }

          if (nodeName === "TH") {
            const id = cell.getAttribute("id") || "";

            // Save the fact that we have a missing ID on the header.
            if (id === "") {
              retval.correct = false;
              retval.missingThId.push(cell);
            }

            if (rowspan && colspan) {
              // Multi-column AND multi-row header. Abandon all hope,
              // As it must span across more than one row+column
              retval.allowScope = false;
            } else if (retval.allowScope === true) {
              // If we haven't had a th in this column (row) yet,
              // record it. if we find another th in this column (row),
              // record that has multi-ths. If we already have a column
              // (row) with multi-ths, we cannot use scope.
              if (headerIds.cols[colnum] === undefined) {
                headerIds.cols[colnum] = 0;
              }

              if (headerIds.rows[rownum] === undefined) {
                headerIds.rows[rownum] = 0;
              }

              headerIds.rows[rownum] += colspan;
              headerIds.cols[colnum] += rowspan;
            }
          } else if (nodeName === "TD") {
            if (
              cell.hasAttribute("headers") === true &&
              /^\s*$/.test(cell.getAttribute("headers")) === false
            ) {
              retval.used = true;
            }
          }

          colnum += colspan;
        }
      }
    }

    for (const headerRow of headerIds.rows) {
      if (headerRow) {
        multiHeaders.rows++;
      }
    }

    for (const headerCol of headerIds.cols) {
      if (headerCol) {
        multiHeaders.cols++;
      }
    }

    if (multiHeaders.rows || multiHeaders.cols) {
      retval.allowScope = false;
      retval.isMultiLevelHeadersTable = true;
    } else if (
      retval.allowScope === true &&
      (multiHeaders.rows === 0 || multiHeaders.cols === 0)
    ) {
      // If only one column OR one row header.
      retval.required = false;
    }

    // Calculate expected heading IDs. If they are not there or incorrect, flag
    // them.
    for (const cell of this.getCellHeaders(element)) {
      const expected = cell.headers;

      if (cell.hasAttribute("headers") === false) {
        retval.correct = false;
        retval.missingTd.push(cell);
      } else {
        let actual = (cell.getAttribute("headers") || "").split(/\s+/);

        if (actual.length === 0) {
          retval.correct = false;
          retval.missingTd.push(cell);
        } else {
          actual = " " + actual.sort().join(" ") + " ";
          actual = actual
            .replace(/\s+/g, " ")
            .replace(/(\w+\s)\1+/g, "$1")
            .replace(/^\s*(.*?)\s*$/g, "$1");
          if (expected !== actual) {
            retval.correct = false;
            var val = {
              element: cell,
              expected: expected,
              actual: cell.getAttribute("headers") || "",
            };
            retval.wrongHeaders.push(val);
          }
        }
      }
    }

    return retval;
  },
  /**
   * Return expected cell headers from a table.
   *
   * Returns null if not a table.
   *
   * Returns an array of objects with two properties:
   * - cell (Object) - the TD element referred to,
   * - headers (String) - the normalised list of expected headers.
   *
   * Cells are returned in DOM order. This may mean cells in a tfoot (which
   * normally precedes tbody if used) would come before tbody cells.
   *
   * If there are missing IDs on relevant table header (th) elements, this
   * method won't complain about it - it will just return them as empty. Its
   * job is to take the IDs it can get, not to complain about it (see, eg. the
   * test in WCAG2's sniff 1_3_1). If there are no headers for a cell, it
   * won't be included.
   *
   * @param {Object} table The table to test.
   *
   * @returns {Array}
   */
  getCellHeaders: function (table) {
    if (typeof table !== "object" || table.nodeName !== "TABLE") {
      return null;
    }

    const skipCells = [];
    const headingIds = {
      rows: {},
      cols: {},
    };

    // List of cells and headers. Each item should be a two-property object:
    // a "cell" object, and a normalised string of "headers".
    const cells = [];

    const rows = this.getChildrenForTable(table, "tr");

    // Now determine the row and column headers for the table.
    // Go through once, first finding the th's to load up the header names,
    // then finding the td's to dump them off.
    for (const targetNode of ["TH", "TD"]) {
      for (let rownum = 0; rownum < rows.length; rownum++) {
        const row = rows[rownum];
        let colnum = 0;

        for (let item = 0; item < row.childNodes.length; item++) {
          const thisCell = row.childNodes[item];

          if (thisCell.nodeType === 1) {
            // Skip columns that are skipped due to rowspan.
            if (skipCells[rownum]) {
              while (skipCells[rownum][colnum]) {
                colnum++;
              }
            }

            const nodeName = thisCell.nodeName;
            const rowspan = Number(thisCell.getAttribute("rowspan")) || 1;
            const colspan = Number(thisCell.getAttribute("colspan")) || 1;

            // If rowspanned, mark columns as skippable in the following
            // row(s).
            if (rowspan) {
              for (var i = rownum + 1; i < rownum + rowspan; i++) {
                if (!skipCells[i]) {
                  skipCells[i] = [];
                }

                for (var j = colnum; j < colnum + colspan; j++) {
                  skipCells[i][j] = true;
                }
              }
            }

            if (nodeName === targetNode) {
              if (nodeName === "TH") {
                // Build up the cell headers.
                const id = thisCell.getAttribute("id") || "";

                for (var i = rownum; i < rownum + rowspan; i++) {
                  headingIds.rows[i] = headingIds.rows[i] || {
                    first: colnum,
                    ids: [],
                  };
                  headingIds.rows[i].ids.push(id);
                }

                for (var i = colnum; i < colnum + colspan; i++) {
                  headingIds.cols[i] = headingIds.cols[i] || {
                    first: rownum,
                    ids: [],
                  };
                  headingIds.cols[i].ids.push(id);
                }
              } else if (nodeName === "TD") {
                // Dump out the headers and cells.
                let exp = [];
                for (var i = rownum; i < rownum + rowspan; i++) {
                  for (var j = colnum; j < colnum + colspan; j++) {
                    if (headingIds.rows[i] && j >= headingIds.rows[i].first) {
                      exp = exp.concat(headingIds.rows[i].ids);
                    }
                    if (headingIds.cols[j] && i >= headingIds.cols[j].first) {
                      exp = exp.concat(headingIds.cols[j].ids);
                    }
                  }
                }

                if (exp.length > 0) {
                  // Sort and filter expected ids by unique value.
                  const filteredExp = exp
                    .sort()
                    .filter(function (value, index) {
                      return value.indexOf(index);
                    });

                  cells.push({
                    cell: thisCell,
                    headers: ` ${filteredExp.join(" ")} `
                      .replace(/\s+/g, " ")
                      .replace(/(\w+\s)\1+/g, "$1")
                      .replace(/^\s*(.*?)\s*$/g, "$1"),
                  });
                }
              }
            }

            colnum += colspan;
          }
        }
      }
    }

    // Build the column and row headers that we expect.
    return cells;
  },

  /**
   * Get the previous sibling element.
   *
   * This is a substitute for previousSibling where there are text, comment and
   * other nodes between elements.
   *
   * If tagName is null, immediate is ignored and effectively defaults to true: the
   * previous element will be returned regardless of what it is.
   *
   * @param {DOMNode} element           Element to start from.
   * @param {String}  [tagName=null]    Only match this tag. If null, match any.
   *                                    Not case-sensitive.
   * @param {Boolean} [immediate=false] Only match if the tag in tagName is the
   *                                    immediately preceding non-whitespace node.
   *
   * @returns {DOMNode} The appropriate node or null if none is found.
   */
  getPreviousSiblingElement: function (element, tagName, immediate) {
    if (tagName === undefined) {
      tagName = null;
    }

    if (immediate === undefined) {
      immediate = false;
    }

    let prevNode = element.previousSibling;

    while (prevNode !== null) {
      if (prevNode.nodeType === 3) {
        if (
          this.isStringEmpty(prevNode.nodeValue) === false &&
          immediate === true
        ) {
          // Failed. Immediate node requested and we got text instead.
          prevNode = null;
          break;
        }
      } else if (prevNode.nodeType === 1) {
        // If this an element, we break regardless. If it's an "a" node,
        // it's the one we want. Otherwise, there is no adjacent "a" node
        // and it can be ignored.
        if (tagName === null || prevNode.nodeName === tagName) {
          // Correct element, or we aren't picky.
          break;
        } else if (immediate === true) {
          // Failed. Immediate node requested and not correct tag name.
          prevNode = null;
          break;
        }

        break;
      }

      prevNode = prevNode.previousSibling;
    }

    return prevNode;
  },

  /**
   * Get the next sibling element.
   *
   * This is a substitute for nextSibling where there are text, comment and
   * other nodes between elements.
   *
   * If tagName is null, immediate is ignored and effectively defaults to true: the
   * next element will be returned regardless of what it is.
   *
   * @param {DOMNode} element           Element to start from.
   * @param {String}  [tagName=null]    Only match this tag. If null, match any.
   *                                    Not case-sensitive.
   * @param {Boolean} [immediate=false] Only match if the tag in tagName is the
   *                                    immediately following non-whitespace node.
   *
   * @returns {DOMNode} The appropriate node or null if none is found.
   */
  getNextSiblingElement: function (element, tagName, immediate) {
    if (tagName === undefined) {
      tagName = null;
    }

    if (immediate === undefined) {
      immediate = false;
    }

    let nextNode = element.nextSibling;

    while (nextNode !== null) {
      if (nextNode.nodeType === 3) {
        if (
          this.isStringEmpty(nextNode.nodeValue) === false &&
          immediate === true
        ) {
          // Failed. Immediate node requested and we got text instead.
          nextNode = null;
          break;
        }
      } else if (nextNode.nodeType === 1) {
        // If this an element, we break regardless. If it's an "a" node,
        // it's the one we want. Otherwise, there is no adjacent "a" node
        // and it can be ignored.
        if (tagName === null || nextNode.nodeName === tagName) {
          // Correct element, or we aren't picky.
          break;
        } else if (immediate === true) {
          // Failed. Immediate node requested and not correct tag name.
          nextNode = null;
          break;
        }

        break;
      }

      nextNode = nextNode.nextSibling;
    }

    return nextNode;
  },
  /**
   * Get the text content of a DOM node.
   *
   * @param {DOMNode} element           Element to process.
   *
   * @returns {String} The text content.
   */
  getTextContent: (element) => element.textContent || element.innerText,
  /**
   * Get the accessible name.
   *
   * @param {DOMNode} element Element to process.
   * @param {DOMNode} top     Scoped container element.
   *
   * @returns {String} The accessible name.
   */
  getAccessibleName: function (
    element,
    top: Element & { getElementById?(id: string) }
  ) {
    // See https://www.w3.org/TR/accname-1.1/#terminology
    if (this.isVisuallyHidden(element)) {
      return "";
    } else if (element.getAttribute("aria-labelledby")) {
      const parts = element.getAttribute("aria-labelledby").split(" ");
      const nameParts = new Array(parts.length);

      let partsIndex = 0;

      // fix element top document types to make sure correct interface
      if (top && typeof top.getElementById === "function") {
        for (const part of parts) {
          const nameElement = top.getElementById(part);

          if (nameElement) {
            nameParts[partsIndex] = nameElement.textContent;
            partsIndex++;
          }
        }
      }

      nameParts.length = partsIndex;

      return nameParts.join(" ");
    } else if (element.getAttribute("aria-label")) {
      return element.getAttribute("aria-label");
    } else if (element.getAttribute("title")) {
      if (
        element.getAttribute("role") !== "presentation" &&
        element.getAttribute("role") !== "none"
      ) {
        return element.getAttribute("aria-label");
      }
    }
    // Give up - we only test the 3 most obvious cases.
    return "";
  },
};
