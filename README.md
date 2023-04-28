# a11y-js

Incredibly fast and accurate universal web accessibility evaluator for puppeteer or playwright 🏎️ 🌎.

Getting Started: checkout the [playwright-example](./a11y-js/tests/basic-playwright.spec.ts) or [puppeteer](./a11y-js/tests/basic.ts)

Over 150-1000% faster than other accessibility runners like `@axe-core/playwright` or `pa11y`. 
Also over 10-38% increased issue detection compared to `pa11y`.

```sh
npm i a11y-js --save
```

Requires node ^13

```js
import { a11y, goToPage } from "a11y-js"

// puppeteer or playwright page
const page = await browser.newPage();

// optional navigate with request interception. You can also already have an active page open.
await goToPage({ page, timeout: 15000 }, "https://www.drake.com")
// or use page.setContent("<html>...</html>") instead if you already have the content.

const results = await a11y({ page, browser, runners: ["htmlcs", "axe"], includeWarnings: true, ...extraConfigs })
```

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

## Configuration

The `extraConfigs` object has the following:

```ts
type RunnerConfig = {
  browser: Browser; // puppeteer or playwright Browser Object.
  page: Page; // puppeteer or playwright Page Object.
  actions?: string[]; // custom actions or actions from lib/actions
  hideElements?: string; // hide elements from rendering like modals using css.
  ignore?: string[]; // ignore certain rules from running.
  includeNotices?: boolean; // include notices
  includeWarnings?: boolean; // include warnings
  rootElement?: string; // the entry point.
  rules?: string; // what rules you want to include: default all.
  runners?: string[]; // type of runner to use axe, htmlcs, or custom
  standard?: Standard; // web accessibility standard WCAG2A, WCAG2AA, WCAG2AAA, or Section508
  timeout?: number; // timeout for running the audit.
  origin?: string; // the origin of the page.
  language?: string; // the language to use for testing and getting localized data in.
};

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

- [`a11y-js`](./a11y-js/README.md) core.
- [`fast_axecore`](./fast_htmlcs/README.md): run tests using [axe-core](./lib/runners/axe.ts).
- [`fast_htmlcs`](./fast_htmlcs/README.md): run tests using [HTML CodeSniffer](./lib/runners/htmlcs.ts)

If you run [@playwright/axe-core](./a11y-js/tests/axecore-playwright.spec.ts) vs [our custom axe-core](./a11y-js/tests/basic-axe-playwright.spec.ts) setup of axe the issues run over 90% faster over 20 runs by default with improved resolution of issues. The performance scales the larger the page.

For the mock test case used `@playwright/axe-core` found 2 errors while `fast_axecore` or our custom version of it found 6 errors using a small [sample mock](./a11y-js/tests/html-small-mock.ts).

## i18n

[Locales](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) supported by the runner using pre-compiled locales. In order to pre-compile the locales run `./build.sh`.

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

This project is the fastest web accessibility runner OSS. The `htmlcs` and `axe-core` handling of the runners runs faster due to bug fixes and improved optimizations. This library optimizes the scripts to take advtage of v8 and pre-compiles locales in separate scripts for blazing fast speeds.

- Playwright runs 100% faster than puppeteer.

## Testing

1. `npm run test`

## Benchmarks

1. `fast_htmlcs` runs over 100 times base faster than htmlcs or HTML codesniffer.
1. `fast_axecore` runs over 30%-100%+ base faster than the original axe by default and scales the larger the website.

Currently `fast_htmlcs` runs around 50x faster than axe-core and has several differences of handling the way issues are found. They both capture different cases and is best to used together which this library handles efficiently.

If you use [`@playwright/axe-core`](https://playwright.dev/docs/next/accessibility-testing) you can swap it out with the following [playwright-axe-example](./a11y-js/tests/basic-axe-playwright.spec.ts) and get an increase in issues found and major performance boost of at least 100%. You can also include multiple runners to extend the issues beyond the basics in folds.

### Compare Puppeteer - Pa11y Vs a11y-js

The current results using htmlcs for a small to large website range between 150-1000% faster.
Since pa11y does not allow testing against static html we needed to use a url which leads to latency.

Running `pa11y` using the url `https://www.drake.com` using both htmlcs and axe only 28 errors were found compared to `a11y-js` 44.

Bench ran `yarn bench:puppeteer:pa11y`.

The performance doubles when using playwright instead of puppeteer which is the reason for the range on the benchmarks below.
Pa11y does not support Playwright so the tests are ran only in puppeteer for that case.

#### htmlcs | fast_htmlcs

url: https://www.drake.com

BENCH: a11y-js htmlcs 20x
BENCH: pa11y htmlcs 20x

Fastest is a11y-js by 162-320%

#### axe-core | fast_axecore

url: https://www.drake.com

BENCH: a11y-js axecore 20x
BENCH: pa11y axecore 20x

Fastest is a11y-js by 150-300%

#### htmlcs & axecore

url: https://www.drake.com

BENCH: a11y-js htmlcs & axe 20x
BENCH: pa11y htmlcs & axe 20x

Fastest is a11y-js by 152-302%

## Developing

In order to develop you need yarn v2 installed for the workspace.

Run the following to install on ^node@16.10

`corepack enable && corepack prepare yarn@stable --activate` and reload shell after.

Use the command `./build.sh` to compile all the scripts for each locale.

## LICENSE

check the license file in the root of each project.