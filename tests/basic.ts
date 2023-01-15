import assert from 'assert';
import puppeteer from 'puppeteer'
import { a11y } from '../lib/a11y'

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.drake.com");

    const { issues, pageUrl, documentTitle} = await a11y({ page, browser, runners: ["htmlcs"] });

    console.log(issues);

    // valid list
    assert(Array.isArray(issues));
    assert(typeof pageUrl === "string");
    assert(typeof documentTitle === "string");

    await browser.close();
})()