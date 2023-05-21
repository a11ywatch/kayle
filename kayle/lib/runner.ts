// THIS FILE IS INJECTED INTO THE BROWSER RUNTIME PURE JS REQUIRED
// IIFE is here so we don't pollute the window
((exports) => {
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
      runner: issue.runner || "kayle",
      runnerExtras: issue.runnerExtras,
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

  // sibling position detection
  const siblingPosition = (node: Node) => {
    let i = 1;

    // todo: limit nodes to 1000
    while ((node = node.previousSibling)) {
      if (node.nodeType == 1) {
        i += 1;
      }
    }

    return i;
  };

  // get css selelector todo: shortest path https://patents.google.com/patent/CN105094940A/en
  const getElementSelector = (element: HTMLElement) => {
    if (!element) {
      return "";
    }

    if (element.id) {
      return "#" + element.id;
    }

    // return the direct body as primary element
    if (element.nodeName == "BODY") {
      return "body";
    }

    return `${getElementSelector(
      element.parentNode as HTMLElement
    )}>:nth-child(${siblingPosition(element)})`;
  };

  // runner to get accessibility issues
  const runA11y = async (options) => {
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

    // get issues with acc builder return counter
    const processIssuesMulti = (
      issues,
      acc,
      tracker,
      meta,
      missingAltIndexs: number[]
    ) => {
      // valid acc count
      for (const is of issues) {
        if (validateIssue(is)) {
          continue;
        }

        const issue = shapeIssue(is);
        if (issue.type === "error") {
          // missing alt capture index of array
          if (
            issue.code === "WCAG2AA.Principle1.Guideline1_1.1_1_1.H37" ||
            issue.code === "image-alt"
          ) {
            missingAltIndexs.push(tracker.ic);
          }
          meta.errorCount += (issue.recurrence ?? 0) + 1;
          meta.accessScore -= 2;
        }

        if (issue.type === "warning") {
          meta.warningCount += (issue.recurrence ?? 0) + 1;
        }

        if (issue.type === "notice") {
          meta.noticeCount += (issue.recurrence ?? 0) + 1;
        }

        const errorType = issue.type === "error";

        // Pivot swap first error item to first slot
        if (errorType && !tracker.errorPointer) {
          acc[tracker.ic] = acc[0];
          acc[0] = issue;
        } else if (tracker.errorPointer) {
          // get the item to the right of the last error
          const right = acc[tracker.errorPointer];

          // if the right hand is greater than the right we swap places
          if (right && right.type === "warning" && errorType) {
            acc[tracker.ic] = right;
            acc[tracker.errorPointer] = issue;
          } else {
            acc[tracker.ic] = issue;
          }
        } else {
          acc[tracker.ic] = issue;
        }

        // bump last point found
        if (errorType) {
          tracker.errorPointer++;
        }

        tracker.ic++;
      }
    };

    // Execute all of the runners and process issues parallel
    const runnerIssues = await Promise.all(
      options.runners.map((runner) => kayle.runners[runner](options, kayle))
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
    // multiple runners found
    const multiRunners = runnerIssues.length === 2;

    // pre-allocate array if multi runners
    const issues = new Array(
      multiRunners
        ? runnerIssues[0].length + runnerIssues[1].length
        : runnerIssues[0].length
    );

    const tracker = {
      errorPointer: 0,
      ic: 0,
    };

    // init index for runner
    processIssuesMulti(
      runnerIssues[0],
      issues,
      tracker, // init index
      meta,
      missingAltIndexs
    );

    // process second runner if found
    if (multiRunners) {
      processIssuesMulti(
        runnerIssues[1],
        issues,
        tracker,
        meta,
        missingAltIndexs
      );
    }

    issues.length = tracker.ic;

    return {
      documentTitle: window.document.title,
      pageUrl: window.location.href,
      issues,
      meta,
      automateable: {
        missingAltIndexs,
      },
    };
  };

  const kayle = (exports.__a11y = {
    run: runA11y,
    runners: {},
  });
})(this);
