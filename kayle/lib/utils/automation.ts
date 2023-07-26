// determine if running playwright
export const isPlaywright = (page) => !page.setRequestInterception;
// determine if running puppeteer
export const isPuppeteer = (page) => !!page.setRequestInterception;
