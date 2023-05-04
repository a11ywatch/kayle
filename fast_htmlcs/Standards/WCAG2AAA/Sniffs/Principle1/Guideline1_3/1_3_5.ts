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

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_5 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  register: () => ["_top", "input", "select", "textarea"],

  /**
   * Checks that the values of the autocomplete attribute are values listed in the HTML 5.2 spec.
   *
   * @param {DOMNode} element The element registered.
   */
  checkValidAttributes: function (element) {
    const valid_attributes = [
      "additional-name",
      "address-level1",
      "address-level2",
      "address-level3",
      "address-level4",
      "address-line1",
      "address-line2",
      "address-line3",
      "bday",
      "bday-year",
      "bday-day",
      "bday-month",
      "billing",
      "cc-additional-name",
      "cc-csc",
      "cc-exp",
      "cc-exp-month",
      "cc-exp-year",
      "cc-family-name",
      "cc-given-name",
      "cc-name",
      "cc-number",
      "cc-type",
      "country",
      "country-name",
      "current-password",
      "email",
      "family-name",
      "fax",
      "given-name",
      "home",
      "honorific-prefix",
      "honorific-suffix",
      "impp",
      "language",
      "mobile",
      "name",
      "new-password",
      "nickname",
      "off",
      "on",
      "organization",
      "organization-title",
      "pager",
      "photo",
      "postal-code",
      "sex",
      "shipping",
      "street-address",
      "tel-area-code",
      "tel",
      "tel-country-code",
      "tel-extension",
      "tel-local",
      "tel-local-prefix",
      "tel-local-suffix",
      "tel-national",
      "transaction-amount",
      "transaction-currency",
      "url",
      "username",
      "work",
    ];

    var valuesStr = element.getAttribute("autocomplete");

    if (typeof valuesStr !== "string") {
      return;
    }

    var values = valuesStr.split(" ");

    var hasFaultyValue = false;

    for (var i = 0; i < values.length; i++) {
      values[i] = values[i].trim();
      var x = values[i];
      if (valid_attributes.indexOf(x) === -1 && x.indexOf("section-") !== 0) {
        hasFaultyValue = true;
      }
    }

    if (hasFaultyValue === true) {
      HTMLCS.addMessage(
        HTMLCS.WARNING,
        element,
        _global.HTMLCS.getTranslation("1_3_5_H98.FaultyValue").replace(
          /\{\{valuesStr\}\}/g,
          valuesStr
        ),
        "H98"
      );
    }
  },

  /**
   * Checks that the values of the autocomplete attribute match the right control groups.
   *
   * This uses the logic from the followingtable in the HTML 5.2 spec:
   * https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute
   *
   * @param {DOMNode} element The element registered.
   */
  checkControlGroups: function (element) {
    const textFields = [
      "name",
      "honorific-prefix",
      "given-name",
      "additional-name",
      "family-name",
      "honorific-suffix",
      "nickname",
      "organization-title",
      "username",
      "organization",
      "address-line1",
      "address-line2",
      "address-line3",
      "address-level4",
      "address-level3",
      "address-level2",
      "address-level1",
      "country",
      "country-name",
      "postal-code",
      "cc-name",
      "cc-given-name",
      "cc-additional-name",
      "cc-family-name",
      "cc-number",
      "cc-csc",
      "cc-type",
      "transaction-currency",
      "language",
      "sex",
      "tel-country-code",
      "tel-national",
      "tel-area-code",
      "tel-local",
      "tel-local-prefix",
      "tel-local-suffix",
      "tel-extension",
    ];
    const isText =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "text") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "search") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const multilineFields = ["street-address"];
    const isMultiline =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const passwordFields = ["new-password", "current-password"];
    const isPassword =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "text") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "search") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "password") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const urlFields = ["url", "photo", "impp"];
    const isUrl =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "text") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "search") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "email") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const telFields = ["tel"];
    const isTel =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "text") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "search") ||
      (element.tagName === "INPUT" && element.getAttribute("type") === "tel") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const numericFields = [
      "cc-exp-month",
      "cc-exp-year",
      "transaction-amount",
      "bday-day",
      "bday-month",
      "bday-year",
    ];
    const isNumeric =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "text") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "search") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "number") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const monthFields = ["cc-exp"];
    const isMonth =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "text") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "search") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "month") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const dateFields = ["bday"];
    const isDate =
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "hidden") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "text") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "search") ||
      (element.tagName === "INPUT" &&
        element.getAttribute("type") === "date") ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT";

    const values = element.getAttribute("autocomplete").split(" ");

    for (var i = 0; i < values.length; i++) {
      values[i] = values[i].trim();
      var x = values[i];
      if (textFields.indexOf(x) > -1 && !isText) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Text"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
      if (multilineFields.indexOf(x) > -1 && !isMultiline) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Multiline"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
      if (passwordFields.indexOf(x) > -1 && !isPassword) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Password"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
      if (urlFields.indexOf(x) > -1 && !isUrl) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Url"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
      if (telFields.indexOf(x) > -1 && !isTel) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Telephone"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
      if (numericFields.indexOf(x) > -1 && !isNumeric) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Numeric"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
      if (monthFields.indexOf(x) > -1 && !isMonth) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Month"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
      if (dateFields.indexOf(x) > -1 && !isDate) {
        HTMLCS.addMessage(
          HTMLCS.ERROR,
          element,
          _global.HTMLCS.getTranslation(
            "1_3_5_H98.InvalidAutoComplete_Date"
          ).replace(/\{\{x\}\}/g, x),
          "H98"
        );
      }
    }
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, top) {
    if (element === top) {
      for (const ele of HTMLCS.util.getAllElements(element, "*[autocomplete]")) {
        this.checkValidAttributes(ele);
        this.checkControlGroups(ele);
      }
    } else {
      HTMLCS.addMessage(
        HTMLCS.NOTICE,
        element,
        _global.HTMLCS.getTranslation("1_3_5_H98.Purpose"),
        "H98"
      );
      // See table in https://www.w3.org/TR/html52/sec-forms.html#the-input-element
      const types_to_skip = [
        "hidden",
        "checkbox",
        "radio",
        "file",
        "submit",
        "image",
        "reset",
        "button",
      ];
      if (types_to_skip.indexOf(element.getAttribute("type")) > -1) {
        // Skip any further validation for input types where the autocomplete attribute does not apply, or where the autocomplete element wears the "autofill anchor mantle".
        return;
      }
      if (element.hasAttribute("autocomplete") === false) {
        HTMLCS.addMessage(
          HTMLCS.NOTICE,
          element,
          _global.HTMLCS.getTranslation("1_3_5_H98.MissingAutocomplete"),
          "H98"
        );
      }
    }
  },
};
