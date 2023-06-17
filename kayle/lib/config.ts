type Permission =
  | "geolocation"
  | "midi"
  | "notifications"
  | "camera"
  | "microphone"
  | "background-sync"
  | "ambient-light-sensor"
  | "accelerometer"
  | "gyroscope"
  | "magnetometer"
  | "accessibility-events"
  | "clipboard-read"
  | "clipboard-write"
  | "payment-handler"
  | "persistent-storage"
  | "idle-detection"
  | "midi-sysex";

type Awaitable<T> = T | PromiseLike<T>;
type FlattenHandle<T> = T;
type InnerParams<T extends unknown[]> = {
  [K in keyof T]: FlattenHandle<T[K]>;
};
// eval function for puppeteer for playwright
type EvaluateFunc<T extends unknown[]> = (
  ...params: InnerParams<T>
) => Awaitable<unknown>;

type BrowserContext = {
  browser(): Browser;
  close(): Promise<void>;
  pages(): Promise<Page[]>;
  targets(): Target[];
  overridePermissions(origin: string, permissions: Permission[]): Promise<void>;
};

// a type that impls the puppeteer/playwright browser
type Browser = {
  newPage(): Promise<any>; // todo: exact Page type split
  wsEndpoint(): string;
  createIncognitoBrowserContext?(): Promise<BrowserContext | any>;
};

// a type that impls cdp target
type Target = {};

// dom lifecycles
type LifeCycleEvent =
  | "load"
  | "domcontentloaded"
  | "networkidle0"
  | "networkidle2";

// wait for options
type WaitForOptions = {
  timeout?: number;
  waitUntil?: LifeCycleEvent | LifeCycleEvent[] | string;
};

// a type that impls the puppeteer/playwright page
type Page = {
  // todo: use httpclase
  goto(url: string, options?: WaitForOptions): Promise<any | null>;
  setContent(html: string, options?: WaitForOptions): Promise<void>;
  close(o?: {runBeforeUnload?: boolean}): Promise<void>;
  browser(): Browser;
  target(): Target;
  // playwright
  _route?: string;
  _routes?: { url: string }[];
  route(
    path: string,
    intercept: (config: any, next: any) => Promise<boolean>
  ): Promise<void>;
  setRequestInterception?(enable?: boolean): Promise<void>;
  evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  on(eventName: any, handler: (event: any, next?: any) => any): void;
  once(eventName: any, handler: (event: any) => void): void;
  off(eventName: any, handler: (event: any) => void): void;
  url(): string;
  title(): Promise<string>;
  content(): Promise<string>;
  emulateCPUThrottling(factor: number | null): Promise<void>;
};

type Runner = "axe" | "htmlcs";
type Standard = "WCAG2A" | "WCAG2AA" | "WCAG2AAA" | "SECTION508";

// runner configuration
export type RunnerConfig = {
  browser: Partial<Browser>;
  page: Partial<Page>;
  // configure if you know how the page will operate headless
  waitUntil?: LifeCycleEvent;
  // audit
  actions?: string[];
  hideElements?: string;
  ignore?: string[];
  includeNotices?: boolean;
  includeWarnings?: boolean;
  rootElement?: string;
  rules?: string;
  runners?: Runner[];
  standard?: Standard;
  timeout?: number;
  // the website url: include this even with static html to fetch assets correct.
  origin?: string;
  // the langauge to use.
  language?: string;
  // prevent auto intercept request to prevent fetching resources.
  noIntercept?: boolean;
  // extension only run if accesibility extensions loaded: Experimental.
  _browserExtension?: boolean;
};

// log singleton
export const _log = { enabled: false };

/**
 * Enable or disable logging.
 * @param {Object} [enabled] enabled - Enable console logging.
 * @returns {void} Returns void.
 */
export function setLogging(enabled?: boolean): void {
  _log.enabled = enabled;
}
