_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2 = {
  /**
   * Determines the elements to register for processing.
   *
   * Each element of the returned array can either be an element name, or "_top"
   * which is the top element of the tested code.
   *
   * @returns {Array} The list of elements.
   */
  get register() {
    return ["form"];
  },

  /**
   * Process the registered element.
   *
   * @param {DOMNode} element The element registered.
   * @param {DOMNode} top     The top element of the tested code.
   */
  process: function (element, _) {
    if (element.nodeName === "FORM") {
      this.checkFormSubmitButton(element);
    }
  },

  /**
   * Test for forms that don't have a submit button of some sort (technique H32).
   *
   * @param {DOMNode} form The form to test.
   */
  checkFormSubmitButton: (form) => {
    let ok = false;

    // Test for INPUT-based submit buttons. The type must be specified, as
    // the default for INPUT is text.
    const inputButtons = form.querySelectorAll(
      "input[type=submit], input[type=image]"
    );

    if (inputButtons.length > 0) {
      ok = true;
    } else {
      // Check for BUTTONs that aren't reset buttons, or normal buttons.
      // If they're blank or invalid, they are submit buttons.
      const buttonButtons = form.querySelectorAll("button");
      const nonSubmitButtons = form.querySelectorAll(
        "button[type=reset], button[type=button]"
      );
      if (buttonButtons.length > nonSubmitButtons.length) {
        ok = true;
      }
    }

    if (ok === false) {
      // Look for buttons with form attributes, outside of the form.
      if (form.id) {
        const externalButtons = document.querySelectorAll(
          "button[form], input[form][type=submit], input[form][type=image]"
        );

        for (const el of externalButtons) {
          // Check they aren't reset buttons, or normal buttons.
          switch (el.getAttribute("type")) {
            case "reset":
            case "button":
              continue;
            default:
          }

          // Confirm they are associated with the form.
          if (el.attributes["form"].value === form.id) {
            ok = true;
          }
        }
      }
    }

    if (ok === false) {
      HTMLCS.addMessage(
        HTMLCS.ERROR,
        form,
        _global.HTMLCS.getTranslation("3_2_2_H32.2"),
        "H32.2"
      );
    }
  },
};
