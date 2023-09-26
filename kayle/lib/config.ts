import { Watcher } from "./watcher";
import type { Runner } from "./runner-js";

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

type Frame = {
  [x: string]: any;
};

type BrowserContext = {
  browser?(): Browser | null;
  close(): Promise<void>;
  pages?(): Partial<Page>[];
  targets?(): Target[];
  newCDPSession?(page: Partial<Page> | Frame): Partial<CDPSession>;
  overridePermissions?(
    origin: string,
    permissions: Permission[]
  ): Promise<void>;
};

// a type that impls the puppeteer/playwright browser
type Browser = {
  newPage(): Promise<any>; // todo: exact Page type split
  wsEndpoint?(): string;
  createIncognitoBrowserContext?(): Promise<BrowserContext | any>;
};

// a type that impls cdp target
type Target = {};

// dom lifecycles
type LifeCycleEvent =
  | "load"
  | "domcontentloaded"
  // playwright
  | "commit"
  // DISCOURAGED Do not use this method for testing, rely on web assertions instead.
  | "networkidle"
  // puppeteer
  | "networkidle0"
  | "networkidle2";

// wait for options
type WaitForOptions = {
  timeout?: number;
  waitUntil?: LifeCycleEvent | LifeCycleEvent[] | string;
};

// a type that impls the puppeteer/playwright page
type Page = {
  goto(url: string, options?: WaitForOptions): Promise<any | null>;
  setContent(html: string, options?: WaitForOptions): Promise<void>;
  close(o?: { runBeforeUnload?: boolean }): Promise<void>;
  browser?(): Browser;
  context?(): BrowserContext | null;
  target(): Target;
  // puppeteer
  _client?(): Partial<CDPSession>;
  // playwright
  _route?: string;
  _routes?: { url: string }[];
  route(
    path: string,
    intercept: (config: any, next: any) => Promise<void> | Promise<boolean>
  ): Promise<void>;
  setRequestInterception?(enable?: boolean): Promise<void>;
  listenerCount?(name: string): number;
  exposeFunction?(
    name: string,
    pptrFunction:
      | Function
      | {
          default: Function;
        }
  ): Promise<void>;
  addInitScript?(script: { content?: string }): Promise<void>;
  evaluateOnNewDocument?<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<{ identifier: string }>;
  evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;

  on(eventName: any, handler: (event: any, next?: any) => any): void;
  once(eventName: any, handler: (event: any, _?: any) => void): void;
  off(eventName: any, handler: (event: any, _?: any) => void): void;
  unroute?(eventName: any, handler: (event: any, _?: any) => void): void;
  url(): string;
  title(): Promise<string>;
  content(): Promise<string>;
  emulateCPUThrottling(factor: number | null): Promise<void>;
  screenshot(s: {
    path?: string;
    clip?: Pick<DOMRect, "x" | "y" | "width" | "height">;
  }): Promise<string | Buffer>;
};

export interface CDPSession {
  [x: string]: any;
}

// runner configuration
export type RunnerConfig = {
  browser: Partial<Browser>;
  page: Partial<Page>;
  cdpSession?: Partial<CDPSession>; // CDP session playwright in order to re-use and enable blocking urls and other features.
  // configure if you know how the page will operate headless
  waitUntil?: LifeCycleEvent;
  // audit
  actions?: string[];
  hideElements?: string;
  ignore?: string[];
  includeNotices?: boolean;
  includeWarnings?: boolean;
  rootElement?: string;
  rules?: string[];
  runners?: Runner[];
  standard?: keyof typeof Standard | Standard;
  timeout?: number;
  // allow capturing the image visually to base64
  clip?: boolean;
  // store clips to a directory must have allowImages set or CDP reset of intercepts
  clipDir?: string;
  // store a clip to base64 on the issue.
  clip2Base64?: boolean;
  // max amount of images to render.
  clipMax?: number;
  // allow images to render.
  allowImages?: boolean;
  // the website url: include this even with static html to fetch assets correct.
  origin?: string;
  // the langauge to use.
  language?: string;
  // prevent auto intercept request to prevent fetching resources.
  noIntercept?: boolean;
  // run as accesibility extension: Experimental. Must setup extensions with the browser before hand.
  browserExtension?: boolean;
  // watch config
  _watcher?: Watcher;
  // initial fake request ran to enable Js
  _initRequest?: boolean;
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

export enum Standard {
  WCAG2A = "WCAG2A",
  WCAG2AA = "WCAG2AA",
  WCAG2AAA = "WCAG2AAA",
  SECTION508 = "SECTION508",
}

export { Runner };
