import { a11y } from "a11y-js";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { drakeMock } from "../tests/html-mock"; // static html of www.drake.com Jan 21, 2022

// difference between two numbers
const relativeDifference = (a: number, b: number) =>
  100 * Math.abs((a - b) / ((a + b) / 2));

// amount of iterations
const iterations = process.env.BENCH_COUNT
  ? parseInt(process.env.BENCH_COUNT, 10)
  : 20;

async function launchBench() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  let axeBuilderTime = 0;
  let a11yAxeTime = 0;

  // @axe-core/playwright
  const runPlaywrightAxeCore = async () => {
    const page = await context.newPage();
    await page.setContent(drakeMock);

    const startTime = performance.now();

    await new AxeBuilder({ page }).analyze();

    axeBuilderTime += performance.now() - startTime;

    await page.close();
  };

  // a11y-js axe
  const runPlaywright = async () => {
    const page = await context.newPage();
    await page.setContent(drakeMock);

    const startTime = performance.now();

    await a11y({
      page,
      browser,
      runners: ["axe"],
      includeWarnings: false,
    });

    a11yAxeTime += performance.now() - startTime;

    await page.close();
  };

  const benchMethod = async (cb: () => Promise<void>, i = 0) => {
    await cb();
    if (i < iterations) {
      await benchMethod(cb, i + 1);
    }
  };

  console.log(`BENCH: a11y-js axe-core ${iterations}x`);
  // bench a11y-js axe-core
  await benchMethod(runPlaywright);
  console.log(`BENCH: @axe-core/playwright ${iterations}x`);
  // bench axe-core
  await benchMethod(runPlaywrightAxeCore);

  const fastestLib =
    a11yAxeTime < axeBuilderTime ? "a11y-js" : "@axe-core/playwright";
  const a11yAxeAVG = a11yAxeTime / iterations;
  const axeAVG = axeBuilderTime / iterations;

  console.log(
    `Fastest is ${fastestLib} by ${relativeDifference(a11yAxeAVG, axeAVG)}%`
  );

  console.log(
    `a11y-js:axe-core x ${a11yAxeAVG / 1000} ops (${iterations} runs sampled)`
  );
  console.log(
    `@axe-core/playwright x ${axeAVG / 1000} ops (${iterations} runs sampled)`
  );

  await context.close();
  await browser.close();
}

launchBench();
