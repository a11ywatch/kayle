_global.HTMLCS = new (function () {
  const _standards = new Map();
  const _tags = new Map();
  const _duplicates = new Map();

  let _standard = "";
  let _currentSniff = null;
  /*
   *  Message type constants.
   */
  this.ERROR = "error";
  this.WARNING = "warning";
  this.NOTICE = "notice";
  this.lang = "en";
  // results
  this.messages = [];

  /**
   * Loads the specified standard and run the sniffs.
   *
   * @param {String}      standard     The name of the standard to load.
   * @param {String|Node} content      An HTML string or a DOM node object.
   * @param {Function}    callback     The function that will be called when the testing is completed.
   * @param {Function}    failCallback The fail callback which will be called if the standard load has failed.
   * @param {String}      language     The language to use for text output.
   */
  this.process = function (
    standard,
    content,
    callback,
    failCallback,
    language
  ) {
    if (!content) {
      return false;
    }
    _standards.size && _standards.clear();
    _tags.size && _tags.clear();
    _duplicates.size && _duplicates.clear();

    this.messages = [];

    if (typeof _global.translation[language] !== "undefined") {
      this.lang = language;
    }

    if (_standards.has(_getStandardPath(standard))) {
      HTMLCS.run(callback, content);
    } else {
      this.loadStandard(
        standard,
        function () {
          HTMLCS.run(callback, content);
        },
        failCallback
      );
    }
  };

  /**
   * Gets a translation for a text value.
   *
   * @param {String} text The text to get the translation for.
   *
   * @return {String}
   */
  this.getTranslation = (text) => _global.translation[this.lang][text];

  /**
   * Loads the specified standard and its sniffs.
   *
   * @param {String} standard The name of the standard to load.
   * @param {Function} callback The function to call once the standard is loaded.
   * @param {Function} failCallback The function to call on failure.
   */
  this.loadStandard = (standard, callback, failCallback) => {
    if (!standard) {
      return;
    }

    _includeStandard(
      standard,
      function () {
        _standard = standard;
        callback.call(this);
      },
      failCallback,
      undefined
    );
  };

  /**
   * Runs the sniffs for the loaded standard.
   *
   * @param {Function}    callback The function to call once all sniffs are completed.
   * @param {String|Node} content  An HTML string or a DOM node object.
   */
  this.run = function (callback, content) {
    let element = null;
    let loadingFrame = false;

    // todo: remove iframe handling
    if (typeof content === "string") {
      loadingFrame = true;

      let elementFrame = document.createElement("iframe");
      elementFrame.style.display = "none";
      elementFrame = document.body.insertBefore(elementFrame, null);

      if (elementFrame.contentDocument) {
        element = elementFrame.contentDocument;
      } else if (element.contentWindow) {
        element = elementFrame.contentWindow.document;
      }

      // @ts-ignore
      elementFrame.load = function () {
        this.onreadystatechange = null;
        this.onload = null;

        if (!HTMLCS.isFullDoc(content)) {
          element = element.querySelector("body");
        }

        // todo: remove converting elements to array
        const elements = HTMLCS.util.getAllElements(element);

        elements.unshift(element);

        _run(elements, element, callback);
      };

      // Satisfy IE which doesn't like onload being set dynamically.
      // @ts-ignore
      elementFrame.onreadystatechange = function () {
        if (/^(complete|loaded)$/.test(this.readyState) === true) {
          this.onreadystatechange = null;
          this.load();
        }
      };

      // @ts-ignore
      elementFrame.onload = elementFrame.load;

      if (!HTMLCS.isFullDoc(content) && content.indexOf("<body") === -1) {
        element.write('<div id="__HTMLCS-source-wrap">' + content + "</div>");
      } else {
        element.write(content);
      }

      element.close();
    } else {
      element = content;
    }

    if (!element) {
      return callback.call(this);
    }

    // Run the sniffs.
    if (!loadingFrame) {
      // Get all the elements in the parent element.
      // Add the parent element too, which will trigger "_top" element codes.
      const elements = HTMLCS.util.getAllElements(element);

      elements.unshift(element);
      _run(elements, element, callback || function () {});
    }
  };

  /**
   * Returns true if the content passed appears to be from a full document.
   *
   * With string content, we consider a full document as the presence of <html>,
   * or <head> + <body> elements. For an element, only the 'html' element (the
   * document element) is accepted.
   *
   * @param {String|Node} content An HTML string or a DOM node object.
   *
   * @returns {Boolean}
   */
  this.isFullDoc = (content) => {
    let fullDoc = false;

    if (typeof content === "string") {
      if (
        ["<html", "<HTML", "<!DOCTYPE html>"].some((ht) =>
          content.startsWith(ht)
        )
      ) {
        fullDoc = true;
      } else if (
        content.indexOf("<head") !== -1 &&
        content.indexOf("<body") !== -1
      ) {
        fullDoc = true;
      }
    } else if (
      content &&
      (content.nodeName === "HTML" || content.documentElement)
    ) {
      fullDoc = true;
    }

    return fullDoc;
  };

  /**
   * Adds a message.
   *
   * @param {Number}  type        The type of the message.
   * @param {Node}    element     The element that the message is related to.
   * @param {String}  msg         The message string.
   * @param {String}  code        Unique code for the message.
   * @param {Number}  recurrence  The amount of times this issue re-appeared.
   * @param {Object}  [data]      Extra data to store for the message.
   */
  this.addMessage = (type, element, msg, code, data) => {
    const ccode = _getMessageCode(code);
    const textId = ccode + element.outerHTML;
    const pos = _duplicates.get(textId);

    if (typeof pos === "undefined") {
      // track the position to use to update the prior message on duplicates.
      _duplicates.set(textId, this.messages.length);
      this.messages.push({
        type: type,
        element: element,
        message: msg,
        code: ccode,
        data: data,
        recurrence: 0,
        runner: "htmlcs",
      });
    } else {
      this.messages[pos].recurrence = this.messages[pos].recurrence + 1;
    }
  };

  /**
   * Runs the sniffs in the loaded standard for the specified element.
   *
   * @param {Node}     element    The element to test.
   * @param {Node}     topElement The top element of the processing.
   * @param {Function} [callback] The function to call once all tests are run.
   */
  const _run = (elements, topElement: Element, callback) => {
    while (elements && elements.length > 0) {
      const element = elements.shift();
      const tagName =
        element === topElement ? "_top" : element.tagName.toLowerCase();
      const tag = _tags.get(tagName);

      if (tag && tag.length > 0) {
        _processSniffs(element, tag, topElement, undefined);
      }
    }

    // Due to filtering of presentation roles for general sniffing these need to be handled
    // separately. The 1.3.1 sniff needs to run to detect any incorrect usage of the presentation
    // role.
    const presentationElements = topElement.querySelectorAll(
      '[role="presentation"]'
    );

    if (presentationElements) {
      _currentSniff = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
      for (const element of presentationElements) {
        _currentSniff.testSemanticPresentationRole(element);
      }
    }

    if (callback instanceof Function === true) {
      callback.call(this);
    }
  };

  /**
   * Process the sniffs.
   *
   * @param {Node}     element    The element to test.
   * @param {Array}    sniffs     Array of sniffs.
   * @param {Node}     topElement The top element of the processing.
   * @param {Function} [callback] The function to call once the processing is completed.
   */
  const _processSniffs = (element, sniffs, topElement, callback) => {
    // todo: look into remove array for direct assign
    while (sniffs && sniffs.length > 0) {
      const sniff = sniffs.shift();

      _currentSniff = sniff;

      if (sniff.useCallback) {
        // If the useCallback property is set:
        // - Process the sniff.
        // - Recurse into ourselves with remaining sniffs, with no callback.
        // - Clear out the list of sniffs (so they aren't run again), so the
        //   callback (if not already recursed) can run afterwards.
        sniff.process(element, topElement, function () {
          _processSniffs(element, sniffs, topElement, undefined);
          sniffs = [];
        });
      } else {
        // Process the sniff.
        sniff.process(element, topElement);
      }
    }

    if (callback instanceof Function) {
      callback.call(this);
    }
  };

  // return the standard used
  const _getRuleset = (part) =>
    part === "SECTION508"
      ? _global.HTMLCS_Section508
      : _global[`HTMLCS_${part}`];
  /**
   * Includes the specified standard file.
   *
   * @param {String}   standard The name of the standard.
   * @param {Function} callback The function to call once the standard is included.
   * @param {Object}   options  The options for the standard (e.g. exclude sniffs).
   */
  const _includeStandard = (
    standard: string,
    callback,
    failCallback,
    options
  ) => {
    const localStandard = _getStandardPath(standard);
    // See if the ruleset object is already included (eg. if minified).
    const parts = localStandard.split("/");
    const part = parts[parts.length - 2];
    const ruleSet = _getRuleset(part);

    if (ruleSet) {
      this.registerStandard(standard, part, callback, failCallback, options);
    } else {
      _includeScript(
        _standard,
        function () {
          // Script is included now register the standard.
          this.registerStandard(
            _standard,
            part,
            callback,
            failCallback,
            options
          );
        },
        failCallback
      );
    }
  };

  /**
   * Registers the specified standard and its sniffs.
   *
   * @param {String}   standard The name of the standard.
   * @param {Function} callback The function to call once the standard is registered.
   * @param {Object}   options  The options for the standard (e.g. exclude sniffs).
   */
  this.registerStandard = (standard, part, callback, failCallback, options) => {
    // Get a copy of the ruleset object.
    const oldRuleSet = _getRuleset(part);

    const ruleSet = {
      sniffs: [],
    };

    for (const x in oldRuleSet) {
      if (typeof oldRuleSet[x] !== "undefined") {
        ruleSet[x] = oldRuleSet[x];
      }
    }

    // include the new rules for the standard
    _standards.set(standard, ruleSet);

    // Process the options.
    if (options) {
      if (options.include && options.include.length > 0) {
        // Included sniffs.
        ruleSet.sniffs = options.include;
      }

      if (options.exclude && options.exclude.length > 0) {
        // Excluded sniffs.
        for (const exclude of options.exclude) {
          const index = ruleSet.sniffs.find(exclude);

          if (index >= 0) {
            ruleSet.sniffs.splice(index, 1);
          }
        }
      }
    }

    // Register the sniffs for this standard.
    _registerSniffs(standard, ruleSet.sniffs, callback, failCallback);
  };

  /**
   * Registers the sniffs for the specified standard.
   *
   * @param {String}   standard The name of the standard.
   * @param {Array}    sniffs   List of sniffs to register.
   * @param {Function} callback The function to call once the sniffs are registered.
   */
  const _registerSniffs = (standard, sniffs, callback, failCallback) => {
    if (!sniffs || sniffs.length === 0) {
      return callback.call(this);
    }

    // Include and register sniffs.
    _loadSniffFile(
      standard,
      sniffs.shift(),
      function () {
        _registerSniffs(standard, sniffs, callback, failCallback);
      },
      failCallback
    );
  };

  /**
   * Includes the sniff's JS file and registers it.
   *
   * @param {String}        standard The name of the standard.
   * @param {String|Object} sniff    The sniff to register, can be a string or
   *                                 and object specifying another standard.
   * @param {Function}      callback The function to call once the sniff is included and registered.
   */
  const _loadSniffFile = (standard, sniff, callback, failCallback) => {
    if (typeof sniff === "string") {
      const sniffObj = _getSniff(standard, sniff);

      const cb = () => {
        this.registerSniff(standard, sniff);
        callback.call(this);
      };

      // Already loaded.
      if (sniffObj) {
        cb();
      } else {
        // for browser usage at runtime non node.js
        _includeScript(_getSniffPath(standard, sniff), cb, failCallback);
      }
    } else {
      // Including a whole other standard.
      _includeStandard(
        sniff.standard,
        function () {
          callback.call(this);
        },
        failCallback,
        {
          exclude: sniff.exclude,
          include: sniff.include,
        }
      );
    }
  };

  /**
   * Registers the specified sniff.
   *
   * @param {String} standard The name of the standard.
   * @param {String} sniff    The name of the sniff.
   */
  this.registerSniff = (standard: string, sniff: string) => {
    const sniffObj = _getSniff(standard, sniff);

    // Call the register method of the sniff, it should return an array of tags.
    if (sniffObj && "register" in sniffObj) {
      for (const wtag of sniffObj.register) {
        const tag = _tags.get(wtag);

        if (!tag) {
          _tags.set(wtag, [sniffObj]);
        } else {
          tag.push(sniffObj);
        }
      }
    }
  };

  /**
   * Returns the path to the sniff file.
   *
   * @param {String} standard The name of the standard.
   * @param {String} sniff    The name of the sniff.
   *
   * @returns {String} The path to the JS file of the sniff.
   */
  const _getSniffPath = (standard, sniff) => {
    const parts = standard.split("/");
    parts.pop();
    return parts.join("/") + "/Sniffs/" + sniff.replace(/\./g, "/") + ".js";
  };

  /**
   * Returns the path to a local standard.
   *
   * @param {String} standard The name of the standard.
   *
   * @returns {String} The path to the local standard.
   */
  const _getStandardPath = (standard: string) =>
    "Standards/" + standard + "/ruleset.js";

  /**
   * Returns the sniff object.
   *
   * @param {String} standard The name of the standard.
   * @param {String} sniff    The name of the sniff.
   *
   * @returns {Object} The sniff object.
   */
  const _getSniff = (standard, sniff: string) => {
    const name = `HTMLCS_${standard}_Sniffs_${sniff.split(".").join("_")}`;
    const sniffSet = _global[name] || window[name];

    if (!sniffSet) {
      return null;
    }

    sniffSet._name = sniff;

    return sniffSet;
  };

  /**
   * Returns the full message code.
   *
   * A full message code includes the standard name, the sniff name and the given code.
   * @param code String - The message code.
   *
   * @returns {String} The full message code.
   */
  const _getMessageCode = (code) =>
    _standard + "." + _currentSniff._name + "." + code;

  /**
   * Includes the specified JS file.
   *
   * @param {String}   src      The URL to the JS file.
   * @param {Function} callback The function to call once the script is loaded.
   */
  const _includeScript = (src, callback, failCallback) => {
    const script = document.createElement("script");

    script.onload = function () {
      script.onload = null;
      // @ts-ignore
      script.onreadystatechange = null;
      callback.call(this);
    };

    script.onerror = function () {
      script.onload = null;
      // @ts-ignore
      script.onreadystatechange = null;
      if (failCallback) {
        failCallback.call(this);
      }
    };

    // @ts-ignore
    script.onreadystatechange = function () {
      if (/^(complete|loaded)$/.test(this.readyState) === true) {
        // @ts-ignore
        script.onreadystatechange = null;
        // @ts-ignore
        script.onload();
      }
    };

    script.src = src;

    document.head
      ? document.head.appendChild(script)
      : document.getElementsByTagName("head")[0].appendChild(script);
  };
})();
