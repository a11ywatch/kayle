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

  // root html element
  let rootElement = null;
  // hidden elements
  let hiddenElements = null;

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
      if (!rootElement) {
        rootElement = window.document.querySelector(options.rootElement);
      }

      return rootElement ? rootElement.contains(element) : true;
    }

    // outside hidden selectors
    function isElementOutsideHiddenArea(element) {
      if (!hiddenElements) {
        hiddenElements = window.document.querySelectorAll(options.hideElements);
      }
      let found = true;

      if (hiddenElements && hiddenElements.length) {
        found = false;
        for (let i = 0; i < hiddenElements.length; i++) {
          if (hiddenElements[i].contains(element)) {
            found = true;
            break;
          }
        }
      }
      return found;
    }

    // validate issue is correct
    function validateIssue(issue) {
      return (
        (options.rootElement && !isElementInTestArea(issue.element)) ||
        (options.hideElements && !isElementOutsideHiddenArea(issue.element)) ||
        !isIssueNotIgnored(issue)
      );
    }

    // handle issues from runner
    function processIssues(issues) {
      // pre-allocate array
      const acc = new Array(issues.length);
      // valid acc count
      let ic = 0;

      for (let i = 0; i < acc.length; i++) {
        const issue = issues[i];

        if (validateIssue(issue)) {
          continue;
        }

        acc[ic] = shapeIssue(issue);
        ic++;
      }

      acc.length = ic;

      return acc;
    }

    // mutate issues with acc builder return counter
    function processIssuesMut(issues, acc) {
      // valid acc count
      let ic = 0;

      for (let i = 0; i < issues.length; i++) {
        const issue = issues[i];

        if (validateIssue(issue)) {
          continue;
        }
        acc[ic] = shapeIssue(issue);
        ic++;
      }

      return ic;
    }

    // Execute all of the runners and process issues parallel
    const runnerIssues = await Promise.all(
      options.runners.map((runner) =>
        a11y.runners[runner](options, a11y).catch((e) => {
          console.error(e);
          return [];
        })
      )
    );

    // fast direct assign
    if (runnerIssues.length === 1) {
      return {
        documentTitle: window.document.title,
        pageUrl: window.location.href,
        issues: processIssues(runnerIssues[0]),
      };
    }

    // pre-allocate array if multi runners -- todo: constant checks up to 50 runners instead of reduce.
    const issues = runnerIssues.length
      ? new Array(runnerIssues.reduce((ac, cv) => ac + cv.length, 0))
      : [];

    let ic = 0;

    for (const is of runnerIssues) {
      // mutate runner issues pre-allocated
      ic += processIssuesMut(is, issues);
    }

    issues.length = ic;

    return {
      documentTitle: window.document.title,
      pageUrl: window.location.href,
      issues,
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

  // build css slectors
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
    // todo: combo filter check
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
