/// kayle script using puppeteer to drive the browser
pub const SCRIPT_EXECUTION: &'static str = r###"
const { argv, stdout } = require('node:process');
const puppeteer = require('puppeteer');
const { kayle, Standard } = require('kayle');

const args = argv.slice(1);

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });    
    const page = await browser.newPage();
    
    if (process.env.LOG_ENABLED) {
      page.on("console", (msg) => console.log(msg.text()));
    }
    
    const runners = args[4].split(",");

    const audit = await kayle({
      page,
      browser,
      origin: args[0],
      standard: args[1] || Standard.WCAG2AA,
      includeNotices: args[2] === "true",
      includeWarnings: args[3] === "true",
      runners: runners.length && runners[0] ? runners : ["htmlcs"],
      waitUntil: args[5],
      allowImages: args[6] === "true",
      clip: args[7] === "true",
      clipDir: args[8],
      clip2Base64: args[9],
    });
    
    stdout.write(JSON.stringify(audit));
    process.exit();
})();
"###;
