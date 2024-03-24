import { innateBuilder, kayle } from "kayle";
import { drakeMock } from "./mocks/html-mock";
import { performance } from "perf_hooks";
import { test } from "@playwright/test";
import { audit } from "kayle_innate";

test("kayle_innate, fast_htmlcs and fast_axecore audit drakeMock profiling compare", async ({
  page,
  browser,
}, _) => {
  if (process.env.LOG_ENABLED) {
    page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));
  }

  const { html, css } = await innateBuilder({
    page,
    browser,
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
  });
  const mock = html.replace(
    "<title>Drake Industries | Custom, Durable, High-Quality Labels, Asset Tags and Custom Server Bezels</title>",
    "",
  );
  const startTime = performance.now();
  await audit(mock, css, false);
  const nextTime = performance.now() - startTime;
  console.log("Rust/WASM TIME ", nextTime);

  const st = performance.now();
  await kayle({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
    noIntercept: true,
  });
  const nt = performance.now() - st;
  console.log("FAST_HTMLCS TIME", nt);

  const s = performance.now();
  await kayle({
    page,
    browser,
    runners: ["axe"],
    includeWarnings: true,
    origin: "https://www.drake.com",
    html: drakeMock,
    noIntercept: true,
  });
  const n = performance.now() - s;
  console.log("FAST_AXE TIME", n);
});
