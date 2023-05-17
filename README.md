# ✨ kayle

<img src="https://user-images.githubusercontent.com/8095978/236633334-f5234171-064e-4792-a21c-9e6c782ba9cc.jpg" height="50" align="right" padding="2px" />

Incredibly fast and precise web accessibility engine with 0 dependencies.

```sh
npm install kayle --save
```

```ts
import { kayle } from "kayle";

// Playwright 🎭 or Puppeteer 🤖
const page = await browser.newPage();

const results = await kayle({ page, browser, origin: "https://a11ywatch.com" });
```

If you need to run a full site-wide crawl import `autoKayle`.

```ts
import { autoKayle, setLogging } from "kayle";
import { chromium } from "playwright";

// enable kayle log output
setLogging(true);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const results = await autoKayle({
  page,
  browser,
  runners: ["htmlcs", "axe"],
  includeWarnings: true,
  origin: "https://a11ywatch.com",
  cb: function callback(result) {
    console.log(result);
  },
  // store: `${process.cwd()}/_data/`, // _data folder must exist first
});

for (const result of results) {
  console.log(result);
}
```

```js
// sample of results for an audit.
const results = {
  documentTitle: "A11yWatch: the web accessibility automation tool.",
  pageUrl: "https://a11ywatch.com",
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
      runnerExtras: {},
      recurrence: 5, // issue found 5 times against the page
    },
    {
      context: '<a href="https://a11ywatch.com/demo">Learn more</a>',
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
  noIntercept?: boolean; // skip setting up request interception.
};
```

## Runners

`kayle` supports multiple test runners which return different results. The built-in test runners are:

- [`kayle`](./kayle/README.md) core.
- [`fast_axecore`](./fast_htmlcs/README.md): run tests using fork of [axe-core](./lib/runners/axe.ts).
- [`fast_htmlcs`](./fast_htmlcs/README.md): run tests using fork of [HTML CodeSniffer](./lib/runners/htmlcs.ts).

## Linting

Straight forward linting. You can pass a url or valid html.

Linting is handled on the same machine not sandboxed. You also need to install `jsdom` before hand.

```js
import { kayleLint } from "kayle/build/lint";

await kayleLint("https://a11ywatch.com");
```

## Localization

[Locales](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) supported by the runner using pre-compiled locales. In order to pre-compile the locales run `./build.sh`. Some locales are only available in certain runners. Our goal is to unify the languages and eventually unify the runners in a way that we can get
the best aspects of testing without worrying about a `name`.

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

## Features

You can enable a high performance adblock detection by brave by installing `npm i adblock-rs` to the project. This module needs to be manually installed and the env variable `KAYLE_ADBLOCK` needs to be set to `true`.

## Testing

The [test-results](./test-results/) are checked in to avoid hindering performance on updates. The comparison between using `fast_htmlcs`, `fast_axecore`, and the metrics for the 3rd party `@axe-core/playwright`.

1. `yarn build:test`

Checkout the [playwright-example](./kayle/tests/basic-playwright.spec.ts) or [puppeteer](./kayle/tests/basic.ts) for more information.

## Benchmarks

1. `fast_htmlcs` runs up to 110 times base faster than htmlcs or HTML codesniffer.
1. `fast_axecore` runs up to 60%-100%+ base faster than the original axe by default and scales the larger the website.

Currently `fast_htmlcs` runs around 50x faster than axe-core and has several differences of handling the way issues are found. They both capture different cases and is best to used together which this library handles efficiently. We use [swc](https://swc.rs/) to minify the scripts for small bundle sizes under 142kb for HTMLCS compared to the original being 365kb.

If you use [`@playwright/axe-core`](https://playwright.dev/docs/next/accessibility-testing) you can swap it out with the following [playwright-axe-example](./kayle/tests/basic-axe-playwright.spec.ts) and get an increase in issues found and major performance boost of at least 100%. You can also include multiple runners to extend the issues beyond the basics in folds.

## Developing

In order to develop you need yarn v2 installed for the workspace.

Run the following to install on ^node@16.10

`corepack enable && corepack prepare yarn@stable --activate` and reload shell after.

Use the command `./build.sh` to compile all the scripts for each locale.

## AccessScore

Access score or `accessScore` is going to switch to a new algorithm that uses incompletion points. Depending on the incompletion a direct impact score will be negated starting from 100.

## Fast crawls

As we set the foundation to mark test cases that can pass and increase our target on automating accessibility we have a couple of layers that
can make a major difference to the project. The following will save drastic time and money if done.

1. Use a fast [crawler](https://github.com/a11ywatch/crawler) to gather all of the html to send to a web accessibility service that can perform audits like [pagemind](https://github.com/a11ywatch/pagemind) over CDP.

2. Pre-compile the scripts to the browser so that you are not sending it over the wire per request and simply performing the audit as a side effect for navigating like a chrome extension.

## About

This project took Axecore and HTMLCS from versions that were complete and semi-stable.
We patched and fixed a lot of bugs that increased the accuracy of tests passing and issues being found.
One of the main goals was to have the audit run quickly since we noticed some of the tests would take several seconds to
complete. The performance increases we made to the project were not only done at edge cases that would scale beyond
make the ability of auditing at the MS level for almost any website. Right now, the project is moving forward based on performance and accuracy for ensuring minimal to no false positives.

## Extension

We are packaging an extension that allows the script to be pre-loaded into the browser for the crawl.

## Discord

If you want to chat about the project checkout our [Discord](https://discord.gg/ukmJcjQ5).

## LICENSE

Check the license file in the root of each project.
The logo artwork goes to Riot Games.
