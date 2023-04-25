# a11y-js

High performance universal web accessibility evaluation using [`CDP`](https://chromedevtools.github.io/devtools-protocol/) or [`JSDOM`](https://github.com/jsdom/jsdom).

This package is the fastest most efficient web accessibility auditer available OSS with runners pre-compiled for usage.

Getting Started:

```sh
npm i a11y-js --save
```

Requires node ^13

```js
import { a11y } from "a11y-js"

// navigate to the page prior to active instance
await page.goTo("https://mywebsite.com")
const results = await a11y({ page, browser, ...extraConfigs })
```

a11y contains details about the page and accessibility issues:

```js
// sample of results for an audit.
const results = {
  documentTitle: 'Drake Industries | Custom, Durable, High-Quality Labels, Asset Tags and Custom Server Bezels',
  pageUrl: 'https://drake.com',
  issues: [
    {
      context: '<a class="expandMenu"><i></i><i></i><i></i></a>',
      selector: '#hs_cos_wrapper_module_14725592865174 > a',
      code: 'WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId',
      type: 'error',
      typeCode: 1,
      message: 'Anchor element found with no link content and no name and/or ID attribute.',
      runner: 'htmlcs',
      runnerExtras: {},
      recurrence: 5 // issue found 5 times against the page
    },
    {
        context: '<a href="https://www.drake.com/labels?hsLang=en">Learn more</a>',
        selector: '#hs_cos_wrapper_module_1569856007055222 > div > div:nth-child(3) > a',
        code: 'color-contrast',
        type: 'error',
        typeCode: 1,
        message: 'Elements must have sufficient color contrast',
        recurrence: 0,
        runner: 'axe',
        runnerExtras: {
            description: 'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
            impact: 'serious',
            helpUrl: 'https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI'
        }
    },
    /// ...more issues
  ],
  meta: {
    errorCount: 11,
    warningCount: 15,
    noticeCount: 0,
    accessScore: 78,
    possibleIssuesFixedByCdn: 0
  },
  automateable: { missingAltIndexs: [5,22] }
}
```

## Linting

Straight forward linting. You can pass a url or valid html.

Linting is handled on the same machine not sandboxed.

```js
import { a11yLint } from "a11y-js"

await a11yLint("https://a11ywatch.com");

```

## Runners

a11y supports multiple test runners which return different results. The built-in test runners are:

- `axe`: run tests using [axe-core](./lib/runners/axe.ts).
- `fast_htmlcs` (default): run tests using [HTML CodeSniffer](./lib/runners/htmlcs.ts)
- `custom`: custom runners

## i18n

[Locales](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) supported by the runner injected at runtime using pre-compiled locales. In order to pre-compile the locales run `./build.sh`.

1. da ("Danish")
1. de ("German")
1. es ("Spanish")
1. ja ("Japanese")
1. eu ("Basque")
1. fr ("French")
1. he ("Hebrew")
1. nl ("Dutch")
1. no_NB ("Norwegian")
1. pl ("Polish Poland")
1. pt_BR ("Portuguese Brazil")
1. zh-CN ("Chinese-Simplified")
1. zh-TW ("Chinese-Traditional")

## Performance

1. This project is the fastest web accessibility runner OSS. The `htmlcs` and `axe-core` handling of the runners runs 
between 400 - 100,000x faster than the standalone methods. This library optimizes the scripts to take advtage of v8 and pre-compiles locales in separate scripts for blazing fast speeds.

## Testing

In order to run full e2e test first run `npm install puppeteer` to install chromium locally.
Run the command to compile test and run.

1. `npm run test`

## Developing

In order to develop you need yarn v2 installed for the workspace.

Run the following to install on ^node@16.10

`corepack enable && corepack prepare yarn@stable --activate`.

Use the command `./build.sh` to compile all the scripts for each locale.

## Notes

1. You need to have an active page object and browser with a connection to get started or use the [a11yLint](./lib/lint.ts) method.

1. Using CDP provides more accuracy for issues. Look at JSDOM as a quick linter and CDP as e2e.

## LICENSE

check the license file in the root of the project.