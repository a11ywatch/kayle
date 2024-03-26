import assert from "assert";
import puppeteer from "puppeteer";
import { Standard, kayle } from "kayle";
import { performance } from "perf_hooks";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: true,
    args: [
      "--disable-extensions",
      "--disable-component-extensions-with-background-pages",
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-client-side-phishing-detection",
      "--disable-sync",
      "--metrics-recording-only",
      "--disable-default-apps",
      "--mute-audio",
      "--no-default-browser-check",
      "--no-first-run",
      "--disable-gpu",
      "--disable-gpu-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-backgrounding-occluded-windows",
      "--disable-renderer-backgrounding",
      "--disable-background-timer-throttling",
      "--disable-ipc-flooding-protection",
      "--password-store=basic",
      "--use-mock-keychain",
      "--force-fieldtrials=*BackgroundTracing/default/",
      "--disable-hang-monitor",
      "--disable-prompt-on-repost",
      "--disable-domain-reliability",
      "--disable-features=InterestFeedContentSuggestions,PrivacySandboxSettings4,AutofillServerCommunication,CalculateNativeWinOcclusion,OptimizationHints,AudioServiceOutOfProcess,IsolateOrigins,site-per-process,ImprovedCookieControls,LazyFrameLoading,GlobalMediaControls,DestroyProfileOnBrowserClose,MediaRouter,DialMediaRouteProvider,AcceptCHFrame,AutoExpandDetailsElement,CertificateTransparencyComponentUpdater,AvoidUnnecessaryBeforeUnloadCheckSync,Translate",
    ],
  });
  const page = await browser.newPage();

  page.on("console", (msg) => console.log("PAGE LOG:", msg.text()));

  const startTime = performance.now();
  const { issues, pageUrl, documentTitle, meta, automateable } = await kayle({
    page,
    browser,
    runners: ["htmlcs"],
    includeWarnings: true,
    standard: Standard.WCAG2AA,
    origin: "https://shop.bbc.com",
    smart_check: true,
  });
  const nextTime = performance.now() - startTime;

  console.log(meta);
  console.log(automateable);
  console.log("time took", nextTime);

  // valid list
  assert(Array.isArray(issues));
  assert(meta.errorCount <= 7);
  assert(typeof pageUrl === "string");
  assert(typeof documentTitle === "string");

  await browser.close();
})();
