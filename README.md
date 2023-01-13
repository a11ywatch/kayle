# a11y-js

A high performance web accessibility issue detector that runs around + 10,000x faster
than other headless runners with the option to connect to browsers over `CDP` or pure `JSDOM`.

You need to have an active instance of puppeteer running with a connection to get started or use the `a11y` method.

You can view the [pagemind](https://github.com/a11ywatch/pagemind) repo for more info on the usage when using the `CDP` default a11y.


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

## Linting

Straight forward linting. You can pass a url or valid html.

Linting is handled on the same machine not sandboxed.

```js
import { a11yLint } from "a11y-js"

await a11yLint("https://a11ywatch.com");

```

## Runners

a11y supports multiple test runners which return different results. The built-in test runners are:

- `axe`: run tests using [aXe-core][axe].
- `htmlcs` (default): run tests using [HTML CodeSniffer][htmlcs]
- `custom`: custom runners

## LICENSE

check the license file in the root of the project.
