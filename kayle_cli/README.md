# kayle_cli

The kayle CLI, for web accessibility audits. [WIP]

## Requirements

Node.js is required.
Install puppeteer globally `npm i puppeteer -g`.

## Installation

If Rust is installed.

```sh
cargo install kayle_cli
# or with node.
npm install kayle_cli
```

## Getting Started

Pass in a list of urls to get the results.

```sh
The kayle CLI for web accessibility auditing

Usage: kayle_cli [OPTIONS] <COMMAND>

Commands:
  upgrade    Upgrade kayle and the dependencies required
  configure  Configure the audits
  help       Print this message or the help of the given subcommand(s)

Options:
  -s, --standard <STANDARD>
          The accessibility standard to run, WCAG2A, WCAG2AA, WCAG2AAA, and Section508
      --include-warnings <INCLUDE_WARNINGS>
          Include warnings in the audit [possible values: true, false]
      --include-notices <INCLUDE_NOTICES>
          Include notices in the audit [possible values: true, false]
  -r, --runners <RUNNERS>
          The accessibility runner to use htmlcs, axecore, or kayle
  -h, --help
          Print help
  -V, --version
          Print version
```

```sh
kayle_cli https://www.drake.com
{"documentTitle":"Drake Industries | Custom, Durable, High-Quality Labels, Asset Tags and Custom Server Bezels","pageUrl":"https://www.drake.com/","issues":[{"context":"<h5 class=\"normal\">\n<div class=\"span12 widget-span ...</h5>","selector":"body>:nth-child(2)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)>:nth-child(2)>:nth-child(1)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141","type":"error","typeCode":1,"message":"The heading structure is not logically nested. This h5 element should be an h2 to be properly nested.","runner":"htmlcs","recurrence":0},{"context":"<h5>Labels</h5>","selector":"#hs_cos_wrapper_module_1569856007055222>:nth-child(1)>:nth-child(2)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141","type":"error","typeCode":1,"message":"The heading structure is not logically nested. This h5 element should be an h3 to be properly nested.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/labels?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856007055222>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/name-plates?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856034269224>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/equipment-panel-overlays?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856037305225>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/membrane-switches?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856084644237>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/oem-bezel-re-branding?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856082608235>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a href=\"https://www.drake.com/safety?hsLang=en\">Learn more</a>","selector":"#hs_cos_wrapper_module_1569856080132233>:nth-child(1)>:nth-child(3)>:nth-child(1)","code":"WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail","type":"error","typeCode":1,"message":"This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.44:1. Recommendation:  change text colour to #00171d.","runner":"htmlcs","recurrence":0},{"context":"<a class=\"expandMenu\"><i></i><i></i><i></i></a>","selector":"#hs_cos_wrapper_module_14725592865174>:nth-child(1)","code":"WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId","type":"error","typeCode":1,"message":"Anchor element found with no link content and no name and/or ID attribute.","runner":"htmlcs","recurrence":0}],"meta":{"errorCount":9,"warningCount":0,"noticeCount":0,"accessScore":100},"automateable":{"missingAltIndexs":[]}}%   
```

## Todo

1. Configuration.
2. Allow Opt between puppeteer or playwright.