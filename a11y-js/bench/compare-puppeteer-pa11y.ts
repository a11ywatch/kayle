import { a11y } from "a11y-js";
import { launch } from "puppeteer";
import pa11y from "pa11y";
import { drakeMock } from "../tests/mocks/html-mock"; // static html of www.drake.com Jan 21, 2022

// difference between two numbers
const relativeDifference = (a: number, b: number) =>
  100 * Math.abs((a - b) / ((a + b) / 2));

// amount of iterations
const iterations = process.env.BENCH_COUNT
  ? parseInt(process.env.BENCH_COUNT, 10)
  : 20;

// pass in runners or default to htmlcs and axe-core fast custom scripts
const runners = process.env.RUNNERS
  ? process.env.RUNNERS.split(",")
  : ["htmlcs", "axe"];

async function launchBench() {
  const browser = await launch();
  const context = await browser.createIncognitoBrowserContext();

  let pa11yTime = 0;
  let a11yTime = 0;

  // pa11y
  const runFullPa11y = async () => {
    const page = await context.newPage();
    await page.setContent(drakeMock);

    const startTime = performance.now();

    // 28 issues found for www.drake.com using pa11y
    await pa11y("", {
      page,
      browser,
      runners,
      ignoreUrl: true,
    });

    pa11yTime += performance.now() - startTime;

    await page.close();
  };

  // a11y-js
  const runFullA11y = async () => {
    const page = await context.newPage();
    await page.setContent(drakeMock);

    const startTime = performance.now();

    // 44 issues found for www.drake.com using a11y-js
    await a11y({
      page,
      browser,
      runners,
    });

    a11yTime += performance.now() - startTime;

    await page.close();
  };

  const benchMethod = async (cb: () => Promise<void>, i = 0) => {
    await cb();
    if (i < iterations) {
      await benchMethod(cb, i + 1);
    }
  };

  const joinRunners = runners.join(",");

  console.log(`BENCH: a11y-js ${joinRunners} ${iterations}x`);
  // bench a11y-js axe-core
  await benchMethod(runFullA11y);
  console.log(`BENCH: pa11y ${joinRunners} ${iterations}x`);
  // bench axe-core
  await benchMethod(runFullPa11y);

  console.log(
    `Fastest is ${
      a11yTime < pa11yTime ? "a11y-js" : "pa11y"
    } by ${relativeDifference(
      a11yTime / iterations,
      pa11yTime / iterations
    ).toFixed(2)}%`
  );

  await context.close();
  await browser.close();
}

launchBench();
