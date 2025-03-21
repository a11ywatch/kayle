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
    permissions: Permission[],
  ): Promise<void>;
};

// a type that impls the puppeteer/playwright browser
type Browser = {
  newPage(): Promise<any>; // todo: exact Page type split
  wsEndpoint?(): string;
  createIncognitoBrowserContext?(): Promise<BrowserContext | any>;
};

declare abstract class JSHandle<T = unknown> {}
declare abstract class ElementHandle<
  ElementType extends Node = Element,
> extends JSHandle<ElementType> {}

// a type that impls cdp target
type Target = {
  createCDPSession?(): Promise<CDPSession>;
};

// dom lifecycles
export type LifeCycleEvent =
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
export type WaitForOptions = {
  timeout?: number;
  waitUntil?: LifeCycleEvent | LifeCycleEvent[] | string;
};

declare interface WaitTimeoutOptions {
  /**
   * Maximum wait time in milliseconds. Pass 0 to disable the timeout.
   *
   * The default value can be changed by using the
   * {@link Page.setDefaultTimeout} method.
   *
   * @defaultValue `30000`
   */
  timeout?: number;
}

declare interface WaitForNetworkIdleOptions extends WaitTimeoutOptions {
  /**
   * Time (in milliseconds) the network should be idle.
   *
   * @defaultValue `500`
   */
  idleTime?: number;
  /**
   * Maximum number concurrent of network connections to be considered inactive.
   *
   * @defaultValue `0`
   */
  concurrency?: number;
}

// playwright mouse actions
type DefaultMouseActions =
  | {
      delay?: number;
      clickCount?: number;
      button?: "left" | "right" | "middle";
    }
  | number;

type Point = {
  x?: number;
  y?: number;
};

// puppeteer mouse events
type MouseActions = {
  dragAndDrop?(
    source: Point,
    target: Point,
    options?: {
      delay?: number;
    },
  ): Promise<void>;

  up?(
    source: number | Readonly<DefaultMouseActions> | unknown,
    target?: number,
  ): Promise<void>;

  down?(
    source: number | Readonly<DefaultMouseActions> | unknown,
    target?: number,
  ): Promise<void>;
  move?(source: number, target: number): Promise<void>;
  wheel?(
    deltaX: number | Readonly<{ x: number; y: number }> | unknown,
    deltaY?: number,
  ): Promise<void>;
  reset?(): Promise<void>;
  click?(
    source: number,
    target: number,
    options?: {
      delay?: number;
      clickCount?: number;
      button?: "left" | "right" | "middle";
    },
  ): Promise<void>;
  dblclick?(
    source: number,
    target: number,
    options?: {
      delay?: number;
      clickCount?: number;
      button?: "left" | "right" | "middle";
    },
  ): Promise<void>;
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
    intercept: (config: any, next: any) => Promise<void> | Promise<boolean>,
  ): Promise<void>;
  setRequestInterception?(enable?: boolean): Promise<void>;
  listenerCount?(name: string): number;
  exposeFunction?(
    name: string,
    pptrFunction:
      | Function
      | {
          default: Function;
        },
  ): Promise<void>;
  addInitScript?(script: { content?: string }): Promise<void>;
  evaluateOnNewDocument?<
    Params extends unknown[],
    Func extends (...args: Params) => unknown = (...args: Params) => unknown,
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<{ identifier: string }>;
  evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,
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
  addStyleTag(options: {
    content?: string;
    path?: string;
    url?: string;
  }): Promise<ElementHandle>;
  dragAndDrop?(
    source: string,
    target: string,
    options?: {
      force?: boolean;
      noWaitAfter?: boolean;
      strict?: boolean;
      trial?: boolean;
      timeout?: number;
      sourcePosition?: { x: number; y: number };
      targetPosition?: { x: number; y: number };
    },
  ): Promise<void>;
  mouse?: Partial<MouseActions>;
  emulateCPUThrottling(factor: number | null): Promise<void>;
  screenshot(s: {
    path?: string;
    clip?: Pick<DOMRect, "x" | "y" | "width" | "height">;
  }): Promise<string | Buffer>;
  pdf(s: {
    path?: string;
    displayHeaderFooter?: boolean;
    footerTemplate?: string;
    headerTemplate?: string;
    height?: string | number;
    width?: string | number;
    omitBackground?: boolean;
    outline?: boolean;
    preferCSSPageSize?: boolean;
    // a number between 0.1 - 2.
    scale?: number;
    tagged?: boolean;
    timeout?: number;
    landscape?: boolean;
  }): Promise<string | Buffer>;
  getByRole?(
    role: string,
    o?: Record<string, string>,
  ): { click?(): Promise<void> };
  waitForSelector?(
    role: string,
    o?: Record<string, string>,
  ): Partial<
    | unknown
    | {
        click(): Promise<void>;
        dispose(): Promise<void>;
        hover(): Promise<void>;
      }
  >;
  waitForLoadState?(s: string): Promise<void>;
  waitForNetworkIdle?(options?: WaitForNetworkIdleOptions): Promise<void>;
  waitForNavigation?(options?: WaitForOptions): Promise<any>;
  waitForResponse?(
    urlOrPredicate: string | any,
    options?: WaitTimeoutOptions,
  ): Promise<any>;
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
  // ignore codes from the run. Can be either an exact code + ruleid ex: WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail or general "warning", "error", "notice".
  ignore?: string[];
  // include notices in the results.
  includeNotices?: boolean;
  // include warnings in the results.
  includeWarnings?: boolean;
  // the root element to start the test in.
  rootElement?: string;
  // extra rules to run.
  rules?: string[];
  // the test runner.
  runners?: Runner[];
  // the access standard WCAGA, WCAGAA, WCAGAAA, or SECTION508
  standard?: keyof typeof Standard | Standard;
  // the timeout to stop the test in ms. Usually a good idea to set to 30000 for 30s
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
  /// Dismiss all dialogs that appear. By default it will dismiss all dialogs.
  dialogHandle?: { action?: "dismiss" | "accept"; promptText?: string };
  /// Check the HTML content for the initial response in order to determine if extra actions are required. Example bypassing cloudflare waf.
  smart_check?: boolean;
  // watch config
  _watcher?: Watcher;
  // initial fake request ran to enable Js
  _initRequest?: boolean;
  // the incomplete kayle wasm runner
  _kayleRunner?: boolean;
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

export const enum MainRunner {
  htmlcs = "htmlcs",
  axe = "axe",
}
