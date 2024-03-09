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

  const issueCodeReverseMap = {
    0: "unknown",
    1: "error",
    2: "warning",
    3: "notice",
  };

  // start of code score maps todo: use enums A = Axe, H = Htmlcs.

  // color contrast
  const A_1 = "color-contrast";
  const H_1 = "Principle1.Guideline1_4.1_4_3.G18.Fail";
  // alt element found
  const A_2 = "has-alt";
  const H_2 = "Principle1.Guideline1_1.1_1_1.H37";
  // empty element heading
  const A_3 = "empty-heading";
  const H_3 = "Principle1.Guideline1_3.1_3_1.H42.2";
  // empty iframe title
  const A_4 = "frame-title";
  const H_4 = "Principle2.Guideline2_4.2_4_1.H64.1";
  // empty link name
  const A_5 = "link-name";
  const H_5 = "Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId";
  // incorrect heading order
  const A_6 = "heading-order";
  const H_6 = "Principle1.Guideline1_3.1_3_1_A.G141";

  // oneshot web accessibility score map between runners fast_htmlcs and fast_axecore
  const scoreMap = new Map<string, [number, string]>([
    [A_1, [20, H_1]],
    [H_1, [20, A_1]],
    [A_2, [20, H_2]],
    [H_2, [20, A_2]],
    [A_3, [20, H_3]],
    [H_3, [20, A_3]],
    [A_4, [10, H_4]],
    [H_4, [10, A_4]],
    [A_5, [20, H_5]],
    [H_5, [20, A_5]],
    [A_6, [10, H_6]],
    [H_6, [10, A_6]],
  ]);
  // root html element
  let rootElement = null;
  // hidden elements
  let hiddenElements = null;

  // shape the issue
  const shapeIssue = (issue, cliped) => {
    let context = "";
    let selector = "";
    let clip;

    if (issue.element) {
      context = getElementContext(issue.element);
      selector = getElementSelector(issue.element);
      if (
        cliped &&
        !issue.bounds &&
        typeof issue.element.getBoundingClientRect === "function"
      ) {
        const { x, y, width, height } = issue.element.getBoundingClientRect();

        clip = {
          x,
          y,
          width,
          height,
        };
      }
    }

    const typeCode =
      issueCodeMap[
        issue.type ||
          (issue.value &&
            Array.isArray(issue.value) &&
            issue.value.length &&
            issue.value[0])
      ];

    return {
      context: context || issue.snippet,
      selector:
        selector || (issue.path && issue.path.dom ? issue.path.dom : ""),
      code: issue.code || issue.ruleId,
      type: issue.type || issueCodeReverseMap[typeCode],
      typeCode: typeCode || 0,
      message: issue.message,
      runner: issue.runner ? issue.runner : "kayle",
      runnerExtras: issue.runnerExtras,
      recurrence: issue.recurrence || 0,
      clip: issue.bounds
        ? {
            x: issue.bounds.left || 0,
            y: issue.bounds.top || 0,
            height: issue.bounds.height || 0,
            width: issue.bounds.width || 0,
          }
        : clip,
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
  const getElementSelector = (element: HTMLElement, initial?: boolean) => {
    if (!element || element.nodeName == "HTML") {
      return "";
    }

    if (element.id) {
      return "#" + element.id;
    }

    // return the direct body as primary element
    if (element.nodeName == "BODY") {
      return "body";
    }

    const elementSelector = getElementSelector(
      element.parentNode as HTMLElement,
      true
    );

    return `${
      !elementSelector && initial ? "html" : elementSelector
    }>:nth-child(${siblingPosition(element)})`;
  };

  // runner to get accessibility issues
  const runA11y = async (options) => {
    // determine if valid issue
    const isIssueNotIgnored = (issue) => {
      return !options.ignore.some(
        (element) =>
          element === issue.type || element === issue.code?.toLowerCase()
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
      !isIssueNotIgnored(issue) ||
      // IBM exclude errors - this check is quick but, we may want to look into conditional logic
      (issue.value &&
        Array.isArray(issue.value) &&
        issue.value.length >= 2 &&
        issue.value[1] === "PASS");

    // get issues with acc builder return counter
    const processIssues = (
      issues,
      acc,
      tracker,
      meta,
      missingAltIndexs: number[]
    ) => {
      for (const is of issues) {
        if (validateIssue(is)) {
          continue;
        }

        const issue = shapeIssue(is, options.clip);

        const errorType = issue.type === "error";

        if (issue.type === "warning") {
          meta.warningCount += issue.recurrence + 1;
        }

        if (issue.type === "notice") {
          meta.noticeCount += issue.recurrence + 1;
        }

        // replace WCAG from code
        const code =
          issue.code[0] === "W"
            ? issue.code.substring(issue.code.indexOf(".") + 1)
            : issue.code;

        if (scoreMap.has(code)) {
          const [accessScore, ref] = scoreMap.get(code);
          meta.accessScore -= accessScore;
          scoreMap.delete(ref);
          scoreMap.delete(code);
        }

        // In-place hybrid insert sorting
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
          meta.errorCount += issue.recurrence + 1;
          if (
            issue.code === "Principle1.Guideline1_1.1_1_1.H37" ||
            issue.code === "image-alt"
          ) {
            missingAltIndexs.push(tracker.errorPointer);
          }
          tracker.errorPointer++;
        }

        tracker.ic++;
      }
    };

    // Execute all of the runners and process issues parallel
    const runnerIssues = await Promise.all(
      options.runners.map((runner) => {
        return kayle.runners[runner](options, kayle).catch((e) => {
          if (e instanceof Error) {
            console.error(e);
          }
          return [];
        });
      })
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

    // pre-allocate array if multi runners
    const issues = new Array(runnerIssues.reduce((r, x) => r + x.length, 0));

    const tracker = {
      errorPointer: 0,
      ic: 0,
    };

    for (const runnerIssue of runnerIssues) {
      processIssues(runnerIssue, issues, tracker, meta, missingAltIndexs);
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
