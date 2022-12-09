# a11y

a11y is a high performance web accessibility issue detector that runs around + 10,000x faster
than other headless runners.

You need to have an active instance of puppeteer running with a connection to get started.
This library does not open a new browser for you. The script used for detection runs very fast. 

You can view the [pagemind](https://github.com/a11ywatch/pagemind) repo for more info on the usage.


Getting Started:

```sh
npm i a11y-puppeteer --save
```

Requires node ^13

```js
import { a11y } from "a11y-puppeteer"

// navigate to the page prior to active instance
await page.goTo("https://mywebsite.com")
const results = await a11y({ page, browser, ...extraConfigs })
```

a11y resolves with an array of objects, containing details about the page and accessibility issues:

```js
{
    documentTitle: 'The title of the page',
    pageUrl: 'The URL that a11y was run against',
    issues: [
        {
            code: 'WCAG2AA.Principle1.Guideline1_1.1_1_1.H30.2',
            context: '<a href="https://example.com/"><img src="example.jpg" alt=""/></a>',
            message: 'Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.',
            selector: 'html > body > p:nth-child(1) > a',
            type: 'error',
            typeCode: 1,
            runner: "a11y",
            recurrence: 0
        }
        // more issues...
    ]
}
```

## Runners

a11y supports multiple test runners which return different results. The built-in test runners are:

- `axe`: run tests using [aXe-core][axe].
- `htmlcs` (default): run tests using [HTML CodeSniffer][htmlcs]

## About

This project started as fork of pa11y out of performance needs.

## LICENSE

check the license file in the root of the project.
