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
      runners: runners.length && runners[0] ? runners : ["htmlcs"],
      includeWarnings: args[3] === "true",
      includeNotices: args[2] === "true",
      standard: args[1] || Standard.WCAG2AA,
      origin: args[0],
    });
    
    stdout.write(JSON.stringify(audit));
    process.exit();
})();
"###;
