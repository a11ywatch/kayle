// THIS FILE IS INJECTED INTO THE BROWSER RUNTIME PURE JS REQUIRED
// IIFE is here so we don't pollute the window
((exports) => {
  const a11y = (exports.__a11y = {
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
  const shapeIssue = (issue) => {
    let context = "";
    let selector = "";

    if (issue.element) {
      context = getElementContext(issue.element);
      selector = getElementSelector(issue.element);
    }

    return {
      context: context,
      selector: selector,
      code: issue.code,
      type: issue.type,
      typeCode: issueCodeMap[issue.type] || 0,
      message: issue.message,
      runner: issue.runner || "a11y",
      runnerExtras: issue.runnerExtras || {},
      recurrence: issue.recurrence || 0,
    };
  };

  // Truncate the html.
  const getElementContext = (element: Element) => {
    let outerHTML = element.outerHTML;

    if (!outerHTML) {
      return "";
    }

    if (element.innerHTML.length > 31) {
      outerHTML = outerHTML.replace(
        element.innerHTML,
        `${element.innerHTML.substring(0, 32)}...`
      );
    }

    if (outerHTML.length > 251) {
      outerHTML = `${outerHTML.substring(0, 251)}...`;
    }

    return outerHTML;
  };

  // valid element node
  const isElementNode = (element: Element) =>
    element.nodeType === window.Node.ELEMENT_NODE;

  // get css selelector
  const getElementSelector = (element, selectorParts = []) => {
    if (isElementNode(element)) {
      selectorParts.unshift(buildElementIdentifier(element));

      // recursive build selectors todo: maxticks
      if (!element.id && element.parentNode) {
        return getElementSelector(element.parentNode, selectorParts);
      }
    }

    return selectorParts.join(" > ");
  };

  // return siblings of element
  const getSiblings = (element) => {
    let dupSibling = 0;
    let siblingIndex = 0; // increment until sibling index found

    for (const node of element.parentNode.childNodes) {
      if (isElementNode(node)) {
        siblingIndex++;
      }
      if (node.tagName === element.tagName) {
        dupSibling += 1;
        // break loop on multi duplicates
        if (dupSibling === 2) {
          break;
        }
      }
    }

    return {
      siblingIndex,
      onlySibling: dupSibling <= 1,
    };
  };

  // build css slectors
  const buildElementIdentifier = (element) => {
    if (element.id) {
      return `${element.id[0] !== "#" ? "#" : ""}${element.id}`;
    }

    let identifier = element.tagName.toLowerCase();

    if (!element.parentNode) {
      return identifier;
    }

    const { onlySibling, siblingIndex } = getSiblings(element);

    if (!onlySibling) {
      identifier += `:nth-child(${siblingIndex + 1})`;
    }

    return identifier;
  };

  // runner to get accessibility issues
  async function runA11y(options) {
    // determine if valid issue
    const isIssueNotIgnored = (issue) => {
      return !options.ignore.some(
        (element) =>
          element === issue.type || element === issue.code.toLowerCase()
      );
    };

    // element test area
    const isElementInTestArea = (element) => {
      if (!rootElement) {
        rootElement = window.document.querySelector(options.rootElement);
      }
      return rootElement ? rootElement.contains(element) : true;
    };

    // outside hidden selectors
    const isElementOutsideHiddenArea = (element) => {
      if (!hiddenElements && typeof options.hideElements === "string") {
        hiddenElements = window.document.querySelectorAll(options.hideElements);
      }

      let found = true;

      if (hiddenElements && hiddenElements.length) {
        found = false;

        for (const ele of hiddenElements) {
          if (ele.contains(element)) {
            found = true;
            break;
          }
        }
      }

      return found;
    };

    // validate issue is correct
    const validateIssue = (issue) =>
      (options.rootElement && !isElementInTestArea(issue.element)) ||
      (options.hideElements && !isElementOutsideHiddenArea(issue.element)) ||
      !isIssueNotIgnored(issue);

    // handle issues from runner auto sort errors leading list
    const processIssues = (issues, meta, missingAltIndexs) => {
      // pre-allocate array
      const acc = new Array((issues && issues.length) || 0);
      // valid acc count
      let ic = 0;

      for (let i = 0; i < acc.length; i++) {

        if (validateIssue(issues[i])) {
          continue;
        }
        
        if (issues[i].type === "error") {
          const issue = issues[i];
          // missing alt capture index of array
          if (issue.code === "WCAG2AA.Principle1.Guideline1_1.1_1_1.H37") {
            missingAltIndexs.push(ic);
          }
          acc[ic] = shapeIssue(issue);
          ic++;
          meta.errorCount += (issue.recurrence ?? 0) + 1;
          meta.accessScore -= 2;
        } else {
          // move to end
          queueMicrotask(() => {
            const issue = issues[i];

            if (issue.type === "warning") {
              meta.warningCount += (issue.recurrence ?? 0) + 1;
            }
            if (issue.type === "notice") {
              meta.noticeCount += (issue.recurrence ?? 0) + 1;
            }
            acc[ic] = shapeIssue(issue);
            ic++;
          });
        }
      }

      acc.length = ic;

      return acc;
    };

    // get issues with acc builder return counter
    const processIssuesMulti = (issues, acc, ic, meta, missingAltIndexs) => {
      // valid acc count
      for (let i = 0; i < issues.length; i++) {
        if (validateIssue(issues[i])) {
          continue;
        }

        if (issues[i].type === "error") {
          const issue = issues[i];

          // missing alt capture index of array
          if (issue.code === "WCAG2AA.Principle1.Guideline1_1.1_1_1.H37") {
            missingAltIndexs.push(ic);
          }
          acc[ic] = shapeIssue(issue);
          ic++;
          meta.errorCount += (issue.recurrence ?? 0) + 1;
          meta.accessScore -= 2;
        } else {
          // move to end
          queueMicrotask(() => {
            const issue = issues[i];

            if (issue.type === "warning") {
              meta.warningCount += (issue.recurrence ?? 0) + 1;
            }
            if (issue.type === "notice") {
              meta.noticeCount += (issue.recurrence ?? 0) + 1;
            }
            acc[ic] = shapeIssue(issue);
            ic++;
          });
        }
      }

      return ic;
    };

    // Execute all of the runners and process issues parallel
    const runnerIssues = await Promise.all(
      options.runners.map((runner) =>
        a11y.runners[runner](options, a11y).catch((e) => {
          console.error(e);
          return [];
        })
      )
    );

    // meta information keep records shaped to numbers
    const meta = {
      errorCount: 0,
      warningCount: 0,
      noticeCount: 0,
      accessScore: 100,
    };

    // alt elements that require fixing
    const missingAltIndexs = [];

    // fast direct assign
    if (runnerIssues.length === 1) {
      return {
        documentTitle: window.document.title,
        pageUrl: window.location.href,
        issues: processIssues(runnerIssues[0], meta, missingAltIndexs),
        meta,
        // automateable indexs to capture
        automateable: {
          missingAltIndexs,
        },
      };
    }

    // pre-allocate array if multi runners
    const issues = new Array(
      runnerIssues.reduce((ac, cv) => ac + cv.length, 0)
    );

    let ic = 0;

    for (const is of runnerIssues) {
      // add runner issues pre-allocated
      ic = processIssuesMulti(is, issues, ic, meta, missingAltIndexs);
    }

    issues.length = ic;

    return {
      documentTitle: window.document.title,
      pageUrl: window.location.href,
      issues,
      meta,
      // automateable indexs to capture
      automateable: {
        missingAltIndexs,
      },
    };
  }
})(this);
