# ✨ kayle

The blazing fast and accurate web accessibility engine.

## Getting Started

Install your browser automation lib [playwright](https://github.com/microsoft/playwright) or [puppeteer](https://github.com/puppeteer/puppeteer).

```sh
# npm i puppeteer or npm i playwright
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
  runners: ["htmlcs"] // options are  "htmlcs", "axe", and "ace". The order is from fastest to slowest. Defaults to htmlcs.
  origin: "https://a11ywatch.com",
  // html: "<html>...</html>"
});
```

It is recommended to use `htmlcs` as the runner or simply not declare a runner for the default.
We did a massive rewrite on htmlcs and it is extremely fast and stable.

When passing raw `html` try to also include the `origin` or the url, this sets `window.origin` and helps scripts that rely on it to work correctly or else relatives scripts will not work since the relative path does not exist on the locale machine.

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
  includeWarnings: true,
  origin: "https://a11ywatch.com",
  waitUntil: "domcontentloaded",
  cb: function callback(result) {
    console.log(result);
  },
});
```

```sh
# Output of time between runners with a realistic run - Rust/WASM is in the making and not yet ready.
# Measurement is only calculated from the runner and not the extra latency to get the page initially. View the `innate` test to see more detals.

# puppeteer - speed is stable across most versions
# Rust/WASM 10.863582968711853
# FAST_HTMLCS 29.915208011865616
# FAST_AXE 162.87204200029373
# ACE 512.5237080156803

# playwright - the speed depends on the version
# Rust/WASM TIME  10.163457989692688
# FAST_HTMLCS TIME 33.50962498784065
# FAST_AXE TIME 203.2565419971943
# ACE TIME 905.6748749911785
```

## Clips

You can include base64 images with the audits to get a visual of the exact location of the issue.

```ts
const results = await kayle({
  page,
  browser,
  includeWarnings: true,
  origin: "https://www.drake.com",
  waitUntil: "domcontentloaded",
  allowImages: true,
  clip: true, // get the clip cords to display in browser. Use clipDir or clip2Base64 to convert to image.
  clipDir: "./_data/drake.com", // optional: directory to store the clip as an image.
  clip2Base64: true, // optional: attach a base64 property of the clip
});
```

## Runners

`kayle` supports multiple test runners which return different results. The built-in test runners are:

- [`fast_axecore`](./fast_htmlcs/README.md): run tests using fork of [axe-core](./lib/runners/axe.ts).
- [`fast_htmlcs`](./fast_htmlcs/README.md): run tests using fork of [HTML CodeSniffer](./lib/runners/htmlcs.ts).
- `ace`: run tests using [IBM ACE](https://github.com/IBMa/equal-access/blob/master/accessibility-checker-engine/README.md)
- `custom`: custom runners using `injectRunner` util.

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
  browser: Partial<Browser>;
  page: Partial<Page>;
  // a custom cdp session. Useful for playwright persisting sessions.
  cdpSession?: Partial<CDPSession>;
  // configure if you know how the page will operate headless.
  waitUntil?: LifeCycleEvent;
  // actions to perform.
  actions?: string[];
  // ignore list of elements using css selectors.
  hideElements?: string;
  // ignore test cases WCAG.
  ignore?: string[];
  // include notices in results.
  includeNotices?: boolean;
  // include warnings in results.
  includeWarnings?: boolean;
  // the root element to test.
  rootElement?: string;
  // only allow WCAG RULES.
  rules?: string[];
  // axe or htmlcs - the forks.
  runners?: ("axe" | "htmlcs" | "ace")[];
  // the accessibility standard.
  standard?: Standard;
  // stop test that go beyond time.
  timeout?: number;
  // allow capturing the image visually to base64
  clip?: boolean;
  // store clips to a directory must have allowImages set or CDP reset of intercepts
  clipDir?: string;
  // store a clip to base64 on the issue
  clip2Base64?: boolean;
  // allow images to render.
  allowImages?: boolean;
  // the website url: include this even with static html to fetch assets correct.
  origin?: string;
  // the langauge to use.
  language?: string;
};
```

### Optional Features

1. adblock - You can enable Brave's adblock engine with [adblock-rs](https://github.com/brave/adblock-rust) by installing `npm i adblock-rs` to the project. This module needs to be manually installed and the env variable `KAYLE_ADBLOCK` needs to be set to `true`.

## Localization

[Locales](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n) supported by the runner using pre-compilition. In order to pre-compile the locales run `yarn build`. Some locales are only available in certain runners.

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

Checkout the [playwright-example](./kayle/tests/basic-playwright.spec.ts) or [puppeteer-example](./kayle/tests/basic.ts) for more information.

## Benchmarks

1. `fast_htmlcs` runs up to 110x base faster than HTML_CodeSniffer.
1. `fast_axecore` runs up to 250%-500% base faster than the original axe by default and scales the larger the website.

Currently `fast_htmlcs` runs around 50x faster than axe-core and has several differences of handling the way issues are found. They both capture different cases and is best to used together which this library handles efficiently.

If you use [`@playwright/axe-core`](https://playwright.dev/docs/next/accessibility-testing) you can swap it out with the following [playwright-axe-example](./kayle/tests/basic-axe-playwright.spec.ts) and get an increase in issues found and major performance boost of at least 100%. You can also include multiple runners to extend the issues beyond the basics in folds.

We have not tested IBM Ace for performance thoroughly yet but, from the surface the performance is about 40% slower than axe, if the runner seems to have issues we may fork it and add it to the `fast_` prefix. The perf drawbacks may be from the lib handling all locales in one script.

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

The `kayle` function also expects a field called `browserExtension` with the option set to `true`. Currently the extension handling is experimental reason for the name.

## Developing

In order to develop you need yarn v2 installed for the workspace.

Run the following to install on ^node@18

`corepack enable && corepack prepare yarn@stable --activate` and reload shell after.

Use the command `yarn build` to compile all the scripts for each locale.

## Rust Runner

We are building a rust based runner called [kayle_innate](./kayle_innate/) that can port to wasm that will take the audits into the nanoseconds - low milliseconds zone.

## Discord

If you want to chat about the project checkout our [Discord](https://discord.gg/ukmJcjQ5).

## About

This project took Axecore and HTMLCS from versions that were complete and semi-stable.
We patched and fixed a lot of bugs that increased the accuracy of tests passing and issues being found.
One of the main goals was to have the audit run quickly since we noticed some of the tests would take several seconds to complete. Right now, the project is moving forward based on performance and accuracy for ensuring minimal false positives.

## LICENSE

Check the license file in the root of each project.
