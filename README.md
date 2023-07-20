# ✨ kayle

Futuristic web accessibility engine.

## Getting Started 

Install your browser automation lib [playwright](https://github.com/microsoft/playwright) or [puppeteer](https://github.com/puppeteer/puppeteer).

```sh
npm install kayle --save
```

```ts
import { kayle } from "kayle";

// Playwright 🎭 or Puppeteer 🤖
const page = await browser.newPage();

// audit with a url or raw html
const results = await kayle({
  page,
  browser,
  origin: "https://a11ywatch.com",
  // html: "<html>...</html>"
});
```

When passing raw `html` try to also include the `origin` or the url, this sets `window.origin` and helps scripts that rely on it to work correctly.

If you need to run a full site-wide crawl import `autoKayle`.

```ts
import { autoKayle, setLogging } from "kayle";
import { chromium } from "playwright";

// enable kayle log output
setLogging(true);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// crawls are continued to the next page automatically fast!
const results = await autoKayle({
  page,
  browser,
  runners: ["htmlcs", "axe"],
  includeWarnings: true,
  origin: "https://a11ywatch.com",
  waitUntil: "domcontentloaded",
  cb: function callback(result) {
    console.log(result);
  },
});
```

## Runners

`kayle` supports multiple test runners which return different results. The built-in test runners are:

- [`kayle`](./kayle/README.md) core.
- [`fast_axecore`](./fast_htmlcs/README.md): run tests using fork of [axe-core](./lib/runners/axe.ts).
- [`fast_htmlcs`](./fast_htmlcs/README.md): run tests using fork of [HTML CodeSniffer](./lib/runners/htmlcs.ts).

## Linting

Straight forward linting without a browser. You can pass a url or valid html. Linting is handled on the same machine not sandboxed. You also need to install `jsdom` before hand ex: `yarn add jsdom`.

```js
import { kayleLint } from "kayle/build/lint";

await kayleLint("https://a11ywatch.com");
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

### Features

You can enable Brave's adblock engine with [adblock-rs](https://github.com/brave/adblock-rust) by installing `npm i adblock-rs` to the project. This module needs to be manually installed and the env variable `KAYLE_ADBLOCK` needs to be set to `true`.

## Localization

[Locales](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) supported by the runner using pre-compilition. In order to pre-compile the locales run `yarn build`. Some locales are only available in certain runners. All of the languages are split into individual scripts to scale.

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

## Testing

For the comparison between using `fast_htmlcs`, `fast_axecore`, and the metrics for the 3rd party `@axe-core/playwright`.

1. `yarn build:test`

Checkout the [playwright-example](./kayle/tests/basic-playwright.spec.ts) or [puppeteer](./kayle/tests/basic.ts) for more information.

## Benchmarks

1. `fast_htmlcs` runs up to 110 times base faster than htmlcs or HTML codesniffer.
1. `fast_axecore` runs up to 200%-400% base faster than the original axe by default and scales the larger the website.

Currently `fast_htmlcs` runs around 50x faster than axe-core and has several differences of handling the way issues are found. They both capture different cases and is best to used together which this library handles efficiently.

If you use [`@playwright/axe-core`](https://playwright.dev/docs/next/accessibility-testing) you can swap it out with the following [playwright-axe-example](./kayle/tests/basic-axe-playwright.spec.ts) and get an increase in issues found and major performance boost of at least 100%. You can also include multiple runners to extend the issues beyond the basics in folds.

## Performance Tips

As we set the foundation to mark test cases that can pass and increase our target on automating accessibility we have a couple of layers that can make a major difference to the project. The following will save drastic time and money if done.

1. Use a fast concurrent [crawler](https://github.com/a11ywatch/crawler) to gather all of the html to send to a web accessibility service that can perform audits like [pagemind](https://github.com/a11ywatch/pagemind) over CDP.

2. Use the pre-compiled browser extensions to avoid over the wire latency `yarn build:extension`.

## Browser Extension

If you want to compile a chrome extension for preloading scripts without needing to worry about bandwidth cost use the following to generate a custom extension to use.

First build the extension with the command:

1. `yarn build:extension`

Copy the contents into your directory to load using chromes `--load-extension` and enable the flag `--extensions-on-chrome-urls`.

View the [extension-test](kayle/tests/extension.ts) for an example on how to setup chrome with the generated extension.

Currently we only have english support for extensions. We can add different locales for the generated scripts by manually adjusting the targets.

If you want to test the extension use `yarn test:puppeteer:extension`.

The `kayle` function also expects a field called `_browserExtension` with the option set to `true`. Currently the extension handling is experimental reason for the name.

## Developing

In order to develop you need yarn v2 installed for the workspace.

Run the following to install on ^node@16.10

`corepack enable && corepack prepare yarn@stable --activate` and reload shell after.

Use the command `yarn build` to compile all the scripts for each locale.

## Discord

If you want to chat about the project checkout our [Discord](https://discord.gg/ukmJcjQ5).

## About

This project took Axecore and HTMLCS from versions that were complete and semi-stable.
We patched and fixed a lot of bugs that increased the accuracy of tests passing and issues being found.
One of the main goals was to have the audit run quickly since we noticed some of the tests would take several seconds to complete. Right now, the project is moving forward based on performance and accuracy for ensuring minimal false positives.

## LICENSE

Check the license file in the root of each project.
