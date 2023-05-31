# kayle

A high performance web accessibility engine.

If you want to use a browser make sure to have [playwright](https://github.com/microsoft/playwright) or [puppeteer](https://github.com/puppeteer/puppeteer) installed.

```sh
# install a browser automation lib first
# npm install @playwright/core
# or
# npm install puppeteer
npm i kayle --save
```

Requires node ^13

```js
import { kayle } from "kayle";

// browser code not shown. get a normal browser handle from puppeteer or playwright.
const page = await browser.newPage();

const results = await kayle({ page, browser, origin: "https://mywebsite.com" });
```

[kayle](./lib/kayle.ts) contains details about the page and accessibility issues:

```js
// sample of results for an audit.
const results = {
  documentTitle:
    "Drake Industries | Custom, Durable, High-Quality Labels, Asset Tags and Custom Server Bezels",
  pageUrl: "https://drake.com",
  issues: [
    {
      context: '<a class="expandMenu"><i></i><i></i><i></i></a>',
      selector: "#hs_cos_wrapper_module_14725592865174 > a",
      code: "WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId",
      type: "error",
      typeCode: 1,
      message:
        "Anchor element found with no link content and no name and/or ID attribute.",
      runner: "htmlcs",
      runnerExtras: null,
      recurrence: 5, // issue found 5 times against the page
    },
    {
      context:
        '<a href="https://www.drake.com/labels?hsLang=en">Learn more</a>',
      selector:
        "#hs_cos_wrapper_module_1569856007055222 > div > div:nth-child(3) > a",
      code: "color-contrast",
      type: "error",
      typeCode: 1,
      message: "Elements must have sufficient color contrast",
      recurrence: 0,
      runner: "axe",
      runnerExtras: {
        description:
          "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
        impact: "serious",
        helpUrl:
          "https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI",
      },
    },
    /// ...more issues
  ],
  meta: {
    errorCount: 11,
    warningCount: 15,
    noticeCount: 0,
    accessScore: 78,
    possibleIssuesFixedByCdn: 0,
  },
  automateable: { missingAltIndexs: [5, 22] },
};
```

Checkout the [playwright-example](./tests/basic-playwright.spec.ts) or [puppeteer](./tests/basic.ts) for more info.

## Runners

kayle supports multiple test runners which return different results. The built-in test runners are:

- `axe`: run tests using [axe-core](./lib/runners/axe.ts).
- `htmlcs` (default): run tests using [HTML CodeSniffer](./lib/runners/htmlcs.ts)
- `custom`: custom runners.

## Playwright/Puppeteer

`fast_htmlcs`: expect runs to finish between 8-40ms with static html and around 30-90ms without.
`fast_axecore`: expect runs to finish between 40-350ms with static html and around 30-90ms without.

We are working on making fast_axecore fast so it can run relatively near htmlcs.
If you are using puppeteer expect around 2x slower results.

## Linting

Straight forward linting. You can pass a url or valid html.

Linting is handled on the same machine not sandboxed.

```js
import { kayleLint } from "kayle/lint";

await kayleLint("https://a11ywatch.com");
```

## Testing

In order to run full e2e test first run `npm install puppeteer` or `npm install @playwright/test` to install chromium locally.
Run the command to compile test and run.

1. `npm run test`

## LICENSE

check the license file in the root of the project.
