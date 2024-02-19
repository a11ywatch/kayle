# kayle_cli

The kayle CLI, for web accessibility audits.

## Requirements

Node.js is required.

## Installation

```sh
# with rust and cargo
cargo install kayle_cli
# or with node.
npm install kayle_cli
```

## Getting Started

Make sure you have an automation lib installed. Use the arg `--automation-lib` to switch from the default puppeteer to playwright.

```sh
# configure the audits
kayle_cli --automation-lib puppeteer --standard wcag2aa configure
# install the deps for auditing like puppeteer, kayle, and etc.
kayle_cli install
```

Pass in a list of urls to get the results.

```sh
The kayle CLI for web accessibility auditing

Usage: kayle_cli [OPTIONS] <COMMAND>

Commands:
  upgrade    Upgrade kayle and the dependencies required
  install    Install kayle and the dependencies required
  configure  Configure the audit to disk to re-use across runs
  help       Print this message or the help of the given subcommand(s)

Options:
  -s, --standard <STANDARD>
          The accessibility standard to run

          Possible values:
          - wcag2a:     WCAG2A
          - wcag2aa:    WCAG2AA
          - wcag2aaa:   WCAG2AAA
          - section508: Section508

      --include-warnings <INCLUDE_WARNINGS>
          Include warnings in the audit

          [possible values: true, false]

      --include-notices <INCLUDE_NOTICES>
          Include notices in the audit

          [possible values: true, false]

  -r, --runners <RUNNERS>
          The accessibility runner to use htmlcs, axecore, or kayle

          Possible values:
          - kayle:  Kayle
          - htmlcs: htmlcs
          - axe:    axe

  -w, --wait-for <WAIT_FOR>
          WaitFor event for content to exist

          Possible values:
          - load:              Waits till the window load event
          - domcontent-loaded: The dom loaded content first
          - commit:            Wait for the commit event. Playwright only
          - network-idle:      Waits till there are no more network connections for at least 500 ms. Playwright only
          - network-idle1:     Waits till there are no more network connections for at least 500 ms. Puppeteer only
          - network-idle2:     Waits till there are no more than 2 network connections for at least 500 ms. Puppeteer only

      --allow-images <ALLOW_IMAGES>
          Allow images to render, useful when setting clip option for bounding box

          [possible values: true, false]

      --clip <CLIP>
          Get the bounding box of an element

          [possible values: true, false]

      --clip-dir <CLIP_DIR>
          The directory to store clip images

      --clip-2-base64 <CLIP_2_BASE64>
          Convert the clip to a base64 image

          [possible values: true, false]

      --automation-lib <AUTOMATION_LIB>
          The automation lib to use either puppeteer or playwright

          Possible values:
          - puppeteer:  The puppeteer library. The Default
          - playwright: The playwright library by microsoft

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```

```sh
kayle_cli https://www.drake.com
{"documentTitle":"Drake Industries | Custom, Durable, High-Quality Labels, Asset Tags and Custom Server Bezels","pageUrl":"https://www.drake.com/","issues":[{"context":"<h5 class=\"normal\">\n<div class=\"span12 widget-span ...</h5>","selector":"body>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141","type":"error","typeCode":1,"message":"The heading structure is not logically nested. This h5 element should be an h2 to be properly nested.","runner":"htmlcs","recurrence":0},{"context":"<h5>Labels</h5>","selector":"#hs_cos_wrapper_module_1569856007055222>:nth-child(1)>:nth-child(2)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141","type":"error","typeCode":1,"message":"The heading structure is not logically nested. This h5 element should be an h3 to be properly nested.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/labels?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856007055222>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/name-plates?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856034269224>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/equipment-panel-overlays?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856037305225>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/membrane-switches?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856084644237>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/oem-bezel-re-branding?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856082608235>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/safety?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856080132233>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a class=\"expandMenu\"><i></i><i></i><i></i></a>","selector":"#hs_cos_wrapper_module_14725592865174>:nth-child(1)","code":"WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId","type":"error","typeCode":1,"message":"Anchor element found with no link content and no name and/or ID attribute.","runner":"htmlcs","recurrence":0}],"meta":{"errorCount":9,"warningCount":0,"noticeCount":0,"accessScore":100},"automateable":{"missingAltIndexs":[]}}%
```
