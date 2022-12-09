// THIS FILE IS INJECTED INTO THE BROWSER RUNTIME PURE JS REQUIRED
// IIFE is here so we don't pollute the window
((exports) => {
  const a11y = (exports.__a11y = {
    getElementContext,
    getElementSelector,
    run: runA11y,
    runners: {},
  });

  // issue names
  const issueCodeMap = {
    unknown: 0,
    error: 1,
    warning: 2,
    notice: 3,
  };

  // shape the issue
  function shapeIssue(issue) {
    let context = "";
    let selector = "";

    if (issue.element) {
      context = getElementContext(issue.element);
      selector = getElementSelector(issue.element);
    }

    return {
      code: issue.code,
      type: issue.type,
      typeCode: issueCodeMap[issue.type] || 0,
      message: issue.message,
      context: context,
      selector: selector,
      runner: issue.runner || "a11y",
      runnerExtras: issue.runnerExtras || {},
      recurrence: issue.recurrence || 0,
    };
  }

  // runner to get accessibility issues
  async function runA11y(options) {
    // determine if valid issue
    function isIssueNotIgnored(issue) {
      return !options.ignore.some(
        (element) =>
          element === issue.type || element === issue.code.toLowerCase()
      );
    }

    // element test area
    function isElementInTestArea(element) {
      const rootElement = window.document.querySelector(options.rootElement);
      return rootElement ? rootElement.contains(element) : true;
    }

    // outside hidden selectors
    function isElementOutsideHiddenArea(element) {
      const hiddenElements = window.document.querySelectorAll(
        options.hideElements
      );

      if (hiddenElements.length) {
        return !Array.from(hiddenElements).some((hiddenElement) =>
          hiddenElement.contains(element)
        );
      }
      return true;
    }

    // handle issues from runner
    function processIssues(issues) {
      const n = issues.length;
      // pre-allocate array
      const acc = new Array(n);

      // valid acc count
      let ic = 0;
      for (let i = 0; i < n; i++) {
        const issue = issues[i];

        if (
          (options.rootElement && !isElementInTestArea(issue.element)) ||
          (options.hideElements &&
            !isElementOutsideHiddenArea(issue.element)) ||
          !isIssueNotIgnored(issue)
        ) {
          continue;
        }
        acc[ic] = shapeIssue(issue);
        ic++;
      }

      acc.length = ic;

      return acc;
    }

    // Set up the issues set
    const pageIssues = [];

    // Execute all of the runners and process issues
    for (const runner of options.runners) {
      const runnerIssues = await a11y.runners[runner](options, a11y);

      pageIssues.push(...runnerIssues);
    }

    return {
      documentTitle: window.document.title,
      pageUrl: window.location.href,
      issues: processIssues(pageIssues),
    };
  }

  // Truncate the html.
  function getElementContext(element) {
    let outerHTML = element.outerHTML;
    let innerHTML = "";
    if (!outerHTML) {
      return "";
    }
    if (element.innerHTML.length > 31) {
      innerHTML = `${element.innerHTML.substring(0, 31)}...`;
      outerHTML = outerHTML.replace(element.innerHTML, innerHTML);
    }
    if (outerHTML.length > 251) {
      outerHTML = `${outerHTML.substring(0, 250)}...`;
    }
    return outerHTML;
  }

  // get css selelector
  function getElementSelector(element, selectorParts = []) {
    if (isElementNode(element)) {
      selectorParts.unshift(buildElementIdentifier(element));
      if (!element.id && element.parentNode) {
        return getElementSelector(element.parentNode, selectorParts);
      }
    }
    return selectorParts.join(" > ");
  }

  // build css sslectors
  function buildElementIdentifier(element) {
    if (element.id) {
      return `#${element.id}`;
    }
    let identifier = element.tagName.toLowerCase();
    if (!element.parentNode) {
      return identifier;
    }
    const siblings = getSiblings(element);
    const childIndex = siblings.indexOf(element);
    if (!isOnlySiblingOfType(element, siblings) && childIndex !== -1) {
      identifier += `:nth-child(${childIndex + 1})`;
    }
    return identifier;
  }

  // return siblings of element
  function getSiblings(element) {
    return Array.from(element.parentNode.childNodes).filter(isElementNode);
  }

  // check if sibling is only type
  function isOnlySiblingOfType(element, siblings) {
    return (
      siblings.filter((sibling) => sibling.tagName === element.tagName)
        .length <= 1
    );
  }

  // valid element node
  function isElementNode(element) {
    return element.nodeType === window.Node.ELEMENT_NODE;
  }
})(this);
