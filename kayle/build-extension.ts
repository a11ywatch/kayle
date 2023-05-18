// compiler the runners into a valid chrome extension
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { runnersJavascript } from "./build/runner-js";
import { cwd } from "process";
import { join } from "path";

const ext = join(cwd(), "chrome-extension");

// if the chrome directory does not exist create
if (!existsSync(ext)) {
  mkdirSync(ext);
}

const extensionRunner = runnersJavascript["kayle"];

// load basic extensions - TODO: allow creating extensions from languages
const extensionAxe = `function ar() { 
    ${runnersJavascript["axe"]} 
}`;

const extensionHtmlcs = `function hr() { 
    ${runnersJavascript["htmlcs"]} 
}`;

// the parts that allow extension to run and send
const extensionRawEnd = `
let axeLoaded = false;
let htmlcsLoaded = false;

// receiving audit request
window.addEventListener("kayle_send", async (event) => {
  for (const option of event.detail.options.runners) {
    if (option === "axe" && !axeLoaded) {
      ar()
      axeLoaded = true;
    }
    if (option === "htmlcs" && !htmlcsLoaded) {
      hr()
      htmlcsLoaded = true;
    }
  }

  // send reqeust data of audit
  window.dispatchEvent(new CustomEvent("kayle_receive", {
    detail: {
      name: 'kayle',
      data: await window.__a11y.run(event.detail.options)
    },
  }))
});
`;

writeFileSync(
  `${ext}/content-script.js`,
  `${extensionRunner}\n${extensionAxe}\n${extensionHtmlcs}\n${extensionRawEnd}`
);

const extensionManifest = `{
    "name": "Kayle",
    "version": "1.0.0",
    "description": "A web accessibility extension that can perform full audits and fast",
    "manifest_version": 2,
    "content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'",
    "permissions": [ "tabs" , "identity","http://localhost:9222/*"],
    "browser_action": {
        "default_title": "Kayle Accessibility",
        "default_popup": "popup.html"
    },
    "externally_connectable": {
        "matches": ["http://*/*", "https://*/*"]
    },
    "content_scripts": [
        {
            "matches": [
                "http://*/*",
                "https://*/*"
            ],
            "run_at": "document_start",
            "js": [
                "content-script.js"
            ]
        }
    ]
}`;

writeFileSync(`${ext}/manifest.json`, extensionManifest);
