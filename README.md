# kayle

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![CI](https://github.com/a11ywatch/kayle/actions/workflows/CI.yml/badge.svg)](https://github.com/a11ywatch/kayle/actions?query=workflow%3ABuild)
[![Discord chat][discord-badge]][discord-url]

A **fast** and **accurate** web accessibility engine.

- Leading in performance
- Asynchronous design
- Tested and **correct**
- Extensive production use
- Jampacked with features for accessibility testing
- Works with headless browsers like ([playwright](https://github.com/microsoft/playwright) and [puppeteer](https://github.com/puppeteer/puppeteer)) or raw markup

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
  runners: ["htmlcs"] // options are  "htmlcs" and "axe". The order is from fastest to slowest. Defaults to htmlcs.
  origin: "https://a11ywatch.com",
  // html: "<html>...</html>"
});
```

It is recommended to use `htmlcs` as the runner or simply not declare a runner for the default.
We did a massive rewrite on htmlcs and it is extremely fast and stable.

When passing raw `html` try to also include the `origin` or the url, this sets `window.origin` and helps scripts that rely on it to work correctly or else relatives scripts will not work since the relative path does not exist on the locale machine.

If you need to run a full site-wide crawl import `autoKayle` which uses Rust/Wasm to gather the links fast.

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

# playwright - the speed depends on the version
# Rust/WASM TIME  10.163457989692688
# FAST_HTMLCS TIME 33.50962498784065
# FAST_AXE TIME 203.2565419971943
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
- [`kayle`](./kayle_innate/README.md): run tests using the incomplete Rust/wasm [Kayle Innate](./kayle_innate).
- `custom`: custom runners using [`injectRunner`](./kayle/lib/runner-js.ts#l=57) util - library authors.

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
  runners?: ("axe" | "htmlcs")[];
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

## Browser Extension

If you want to compile a chrome extension for preloading scripts without needing to worry about bandwidth cost use the following to generate a custom extension to use.

First build the extension with the command:

1. `yarn build:extension`

Copy the contents into your directory to load using chromes `--load-extension` and enable the flag `--extensions-on-chrome-urls`.

View the [extension-test](kayle/tests/extension.ts) for an example on how to setup chrome with the generated extension.

Currently we only have english support for extensions. We can add different locales for the generated scripts by manually adjusting the targets.

If you want to test the extension use `yarn test:puppeteer:extension`.

The `kayle` function also expects a field called `browserExtension` with the option set to `true`. Currently the extension handling is experimental reason for the name.

## Rust Runner

We are building a rust based runner called [kayle_innate](./kayle_innate/) that can port to wasm that will take the audits into the nanoseconds - low milliseconds zone.

## Extend Runner

Extending a runner can be done with the following.

```ts
import { extendRunner, kayle } from "kayle"

// pure javascript required. No typescript!
  extendRunner(
    MainRunner.htmlcs,
    `
  // use console.log(JSON.stringify(Object.keys(window))) to see all of the objects to extend.
  // set the function HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2.process to a variable to re-use the logic prior in the call.

  // store the prior sniff in a variable to re-use the logic
  const prevHeadSniffCase = HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2.process;

  HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2.process = (element, _) => {
    // re-run the logic for the case
    prevHeadSniffCase(element, _);
    // log something to test if output ran
    console.log("Running extended head element case");
    // we can write a test here that should pass some logic. For now we just add a new error
    HTMLCS.addMessage(
        HTMLCS.ERROR,
        element,
        HTMLCS.getTranslation("2_4_2_H25.1.NoHeadEl"),
        "H25.1.NoHeadEl"
    );
  }

  // Add a new rule example - 4_1_4_1_4

  window["HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_4"] = {
    register: () => ["html"],
    process: (element, _) => {
        console.log("NEW Rule run!");
        HTMLCS.addMessage(
            HTMLCS.ERROR,
            element,
            "This is some new rule for something.",
            "H55.1.NoItem"
        );
    },
  };

  // push the new sniff to the list
  HTMLCS_WCAG2AAA.sniffs.push("Principle4.Guideline4_1.4_1_4");
  // register the new sniff rule to run
  HTMLCS.registerSniff("WCAG2AAA", "Principle4.Guideline4_1.4_1_4");
  `.trimStart()
  );

const results = await kayle({
  page,
  browser,
  runners: ["htmlcs", "htmlcs_extended"]
  origin: "https://a11ywatch.com",
});
```

## Custom Runner (library authors)

Below is an example on adding a new custom runner. Take a look at [HTMLCS](fast_htmlcs/HTMLCS.ts) and [HTMLCS_Runner](kayle/lib/runners/htmlcs.ts) setup for an example of how to setup the scripts, it could take a bit of time to get familiar. You can also overwride the base runners by taking the `runnersJavascript` object and appending to the script.

```ts
import { injectRunner, kayle } from "kayle"

// example of the custom script
injectRunner("htmlcs_extended", "./custom_htmlcs_script", "en")

const results = await kayle({
  page,
  browser,
  runners: ["htmlcs", "htmlcs_extended"]
  origin: "https://a11ywatch.com",
});
```

## CLI

The [kayle CLI](./kayle_cli/) is a work in progress.

```sh
npm install kayle_cli
# install the deps - you can swap puppeteer with playwright
kayle_cli --automation-lib puppeteer install
```

Audit a website url.

```sh
kayle_cli --automation-lib puppeteer https://www.somewebsite.com
```

## Testing

For the comparison between using `fast_htmlcs`, `fast_axecore`, and the metrics for the 3rd party `@axe-core/playwright`.

1. `yarn build:test`

Checkout the [playwright-example](./kayle/tests/basic-playwright.spec.ts) or [puppeteer-example](./kayle/tests/basic.ts) for more information.

## Benchmarks

1. `fast_htmlcs` runs up to 110x base faster than HTML_CodeSniffer.
1. `fast_axecore` runs up to 2.5x - 15x base faster than the original axe by default and scales the larger the website.

Currently `fast_htmlcs` runs around 50x faster than axe-core and has several differences of handling the way issues are found. They both capture different cases and is best to used together which this library handles efficiently.

If you use [`@playwright/axe-core`](https://playwright.dev/docs/next/accessibility-testing) you can swap it out with the following [playwright-axe-example](./kayle/tests/basic-axe-playwright.spec.ts) and get an increase in issues found and major performance boost of at least 100%. You can also include multiple runners to extend the issues beyond the basics in folds.

### Performance Tips

As we set the foundation to mark test cases that can pass and increase our target on automating accessibility we have a couple of layers that can make a major difference to the project. The following will save drastic time and money if done.

1. Use a fast concurrent [crawler](https://github.com/a11ywatch/crawler) to gather all of the html to send to a web accessibility service that can perform audits like [pagemind](https://github.com/a11ywatch/pagemind) over CDP.
2. Use the pre-compiled browser extensions to avoid over the wire latency `yarn build:extension`.

## Developing

In order to develop you need yarn v2 installed for the workspace.

Run the following to install on ^node@18

`corepack enable && corepack prepare yarn@stable --activate` and reload shell after.

Use the command `yarn build` to compile all the scripts for each locale.

## Discord

If you want to chat about the project checkout our [Discord][discord-url].

## About

This project took Axecore and HTMLCS from versions that were complete and semi-stable.
We patched and fixed a lot of bugs that increased the accuracy of tests passing and issues being found.
One of the main goals was to have the audit run quickly since we noticed some of the tests would take several seconds to complete. Right now, the project is moving forward based on performance and accuracy for ensuring minimal false positives.

## LICENSE

Check the license file in the root of each project.

[discord-badge]: https://img.shields.io/discord/860982761137111040.svg?logo=discord
[discord-url]: https://discord.gg/H82vceTBNu
