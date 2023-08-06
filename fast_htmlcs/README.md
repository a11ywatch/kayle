# fast_htmlcs

This fork of HTML_CodeSniffer for performance and accuracy.

## What is Fast_Htmlcs?

Fast_Htmlcs is the fork of Htmlcs a JavaScript application that checks a HTML document
or source code, and detects violations of a defined presentation or accessibility
standard, such as Section508 or WCAG2.1. This library is being re-written to be the main accessibility default runner for kayle. Upon full re-write the library will change names to be complete.

## Standards included

By default, Fast_Htmlcs comes with standards that cover the three conformance
levels of the <abbr title="World Wide Web Consortium">W3C</abbr> [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/),
and the <abbr title="United States of America">U.S.</abbr> [Section 508](http://section508.gov/index.cfm?fuseAction=stdsdoc) legislation.
It also provides tools to write your own standards, which can be useful in situations
where you wish to enforce consistency across a web site.

## Using Fast_Htmlcs

Fast_Htmlcs can be called in multiple ways:

- Called directly in JavaScript source, Fast_Htmlcs will provide a list of known
  and potential violations to the calling script.
- Using as a Node.js module, installed with npm: `npm i --save fast_htmlcs`

## Command-Line processing

**Note:** These examples assume a built version of HTMLCS exported to `./build/HTMLCS.js`

### PhantomJS

You will need [PhantomJS](http://www.phantomjs.org/) installed if you wish to
use the contributed command-line script. PhantomJS provides a headless Webkit-based
browser to run the scripts in, so it should provide results that are similar to
recent (or slightly less than recent) versions of Safari.

See the `Contrib/PhantomJS/HTMLCS_Run.js` file for more information.

### Headless Google Chrome via Puppeteer

[Puppeteer](https://developers.google.com/web/tools/puppeteer/get-started) offers an
easy way to interact with the page via Google Chrome.

This example assumes that there is the latest version of Google Chrome installed,
hence only the `puppeteer-core` will be needed:

```sh
npm i puppeteer-core
```

The test script assumes a recent version of Node.js to be available.

```javascript
const puppeteer = require("puppeteer-core");

// Replace with the path to the chrome executable in your file system. This one assumes MacOSX.
const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// Replace with the url you wish to test.
const url = "https://a11ywatch.com";

(async () => {
  const browser = await puppeteer.launch({
    executablePath,
  });

  const page = await browser.newPage();

  page.on("console", (msg) => {
    console.log(msg.text());
  });

  await page.goto(url);

  await page.addScriptTag({
    path: "build/HTMLCS.js",
  });

  await page.evaluate(function () {
    HTMLCS_RUNNER.run("WCAG2AA");
  });

  await browser.close();
})();
```

### Node.js & JSDom

HTML_CodeSniffer requires a DOM to run, however, it is possible to run it entirely
server side without a headless browser using Node.js on arbitrary fragments of HTML using
an environment wrapper like [JSDom](https://github.com/jsdom/jsdom).

An example Node.js script:

```javascript
var jsdom = require("jsdom");
var { JSDOM } = jsdom;
var fs = require("fs");

var HTMLCS = fs.readFileSync("./build/HTMLCS.js", "utf-8");
var vConsole = new jsdom.VirtualConsole();

// Forward messages to the console.
vConsole.on("log", function (message) {
  console.log(message);
});

var dom = new JSDOM('<img src="test.png" />', {
  runScripts: "dangerously",
  virtualConsole: vConsole,
});

dom.window.eval(HTMLCS);
dom.window.HTMLCS_RUNNER.run("WCAG2AA");
```

## Translations

HTML*CodeSniffer supports \_very* basic string translations. The auditor will use the current language of the document it is being run in (e.g. `<html lang="en">`). A language code can be supplied if you need to tell HTML_CodeSniffer which language you want to use.

Example usage:

```javascript
HTMLCSAuditor.run("WCAG2AA", null, {
  lang: "pl",
});
```

**Note:** HTML_CodeSniffer only has English (default), French, and Polish languages.

If other language support is required a custom version can be built by adding more translations in `Translations/*.js` and using the grunt build process described above.

Traditional Chinese support is WIP. We have translations for simplified.

## License

Licensed under [the BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause).

License text also available in [the `license.txt` file](./license.txt).
