import { kayle } from "kayle";
import { chromium } from "@playwright/test";
import { drakeMock } from "../tests/mocks/html-mock"; // static html of www.drake.com Jan 21, 2022

// amount of iterations
const iterations = process.env.BENCH_COUNT
  ? parseInt(process.env.BENCH_COUNT, 10)
  : 20;

async function launchBench() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  let duration = 0;

  // kayle axe
  const runPlaywright = async () => {
    const page = await context.newPage();
    await page.setContent(drakeMock);

    const startTime = performance.now();

    await kayle({
      page,
      browser,
      runners: ["axe"],
    });

    duration += performance.now() - startTime;

    await page.close();
  };

  const benchMethod = async (cb: () => Promise<void>, i = 0) => {
    await cb();
    if (i < iterations) {
      await benchMethod(cb, i + 1);
    }
  };

  // bench kayle fast_axecore
  await benchMethod(runPlaywright);

  const avg = duration / iterations;

  await context.close();
  await browser.close();

  console.log(
    JSON.stringify([
      {
        name: "Custom fast_axecore - OPS/S [MEDIUM:PAGE]",
        unit: "OPS/S",
        value: 1000 / avg,
      },
    ])
  );
}

launchBench();
