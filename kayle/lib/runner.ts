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

    // handle issues from runner auto sort errors leading list
    const processIssues = (issues, meta, missingAltIndexs: number[]) => {
      // pre-allocate array
      const acc = new Array((issues && issues.length) || 0);
      // valid acc count
      let ic = 0;

      for (let i = 0; i < acc.length; i++) {
        const issue = issues[i];

        if (validateIssue(issue)) {
          continue;
        }

        if (issue.type === "error") {
          // missing alt capture index of array
          if (
            issue.code === "WCAG2AA.Principle1.Guideline1_1.1_1_1.H37" ||
            issue.code === "image-alt"
          ) {
            missingAltIndexs.push(ic);
          }

          acc[ic] = shapeIssue(issue);
          ic++;
          meta.errorCount += (issue.recurrence ?? 0) + 1;
          meta.accessScore -= 2;
        } else {
          // move to end
          queueMicrotask(() => {
            acc[ic] = shapeIssue(issues[i]);
            const issue = acc[ic];

            if (issue.type === "warning") {
              meta.warningCount += (issue.recurrence ?? 0) + 1;
            }

            if (issue.type === "notice") {
              meta.noticeCount += (issue.recurrence ?? 0) + 1;
            }

            ic++;
          });
        }
      }

      acc.length = ic;

      return acc;
    };

    // get issues with acc builder return counter
    const processIssuesMulti = async (
      issues,
      acc,
      ic: number,
      meta,
      missingAltIndexs: number[]
    ) => {
      // valid acc count
      for (let i = 0; i < issues.length; i++) {
        const issue = issues[i];

        if (await validateIssue(issue)) {
          continue;
        }

        if (issue.type === "error") {
          // missing alt capture index of array
          if (
            issue.code === "WCAG2AA.Principle1.Guideline1_1.1_1_1.H37" ||
            issue.code === "image-alt"
          ) {
            missingAltIndexs.push(ic);
          }
          acc[ic] = await shapeIssue(issue);
          ic++;
          meta.errorCount += (issue.recurrence ?? 0) + 1;
          meta.accessScore -= 2;
        } else {
          // move to end
          queueMicrotask(async () => {
            const issue = await shapeIssue(issues[i]);

            if (issue.type === "warning") {
              meta.warningCount += (issue.recurrence ?? 0) + 1;
            }

            if (issue.type === "notice") {
              meta.noticeCount += (issue.recurrence ?? 0) + 1;
            }

            acc[ic] = issue;

            ic++;
          });

          continue;
        }
      }

      return ic;
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

    // fast direct assign
    if (runnerIssues.length === 1) {
      return {
        documentTitle: window.document.title,
        pageUrl: window.location.href,
        issues: processIssues(runnerIssues[0], meta, missingAltIndexs),
        meta,
        automateable: {
          missingAltIndexs,
        },
      };
    }

    // pre-allocate array if multi runners
    const issues = new Array(
      runnerIssues.length === 2
        ? runnerIssues[0].length + runnerIssues[1].length
        : runnerIssues[0].length
    );

    // init index for runner
    let ic = 0;

    for (const is of runnerIssues) {
      ic = await processIssuesMulti(is, issues, ic, meta, missingAltIndexs);
    }

    issues.length = ic;
    // wait for issue to complete from microTask
    await issues;

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
