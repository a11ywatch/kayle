// html elements for iframes
type HtmlEle =
  | Element
  | Document
  | HTMLIFrameElement
  | HTMLBodyElement
  | HTMLDivElement
  | null;

type RGB = { red: number; blue: number; green: number; alpha?: number };
type HSV = { hue: number; saturation: number; value: number };

type HTMLCS = {
  ERROR: string;
  NOTICE: string;
  WARNING: string;
  run(callback: void, content: string): void;
  isFullDoc(content: string): boolean;
  addMessage(
    message: string,
    element: Element,
    translation: string,
    code: string
  ): void;
  getTranslation(translation: string): string;
  util: {
    getAllElements?(element: HtmlEle, selector?: string): Element[];
    isStringEmpty(string): boolean;
    getDocumentType(document: Document): string;
    getElementWindow(element: Element): HTMLElement;
    isAccessibilityHidden(element: Element): boolean;
    hasValidAriaLabel(element: Element): boolean;
    style(
      element: Element & { currentStyle?: ElementCSSInlineStyle },
      pseudo: Element
    ): boolean;
    isVisuallyHidden(element: Element): boolean;
    isAriaHidden(element: Element): boolean;
    isFocusable(element: Element): boolean;
    isKeyboardTabbable(element: Element): boolean;
    isKeyboardNavigable(element: Element): boolean;
    isDisabled(element: Element & { disabled?: boolean }): boolean;
    isInDocument(element: Element): boolean;
    contains(parent: Node | Document, child: Node | Document): boolean;
    isLayoutTable(element: Element): boolean;
    colourStrToRGB(colour: string): RGB;
    relativeLum(colour: string): number;
    contrastRatio(a: number, b: number): number;
    RGBtoColourStr(colour: RGB): string;
    sRGBtoHSV(colour: string | RGB): HSV;
    HSVtosRGB(colour: HSV): RGB;
    getElementTextContent(element: Element, hasAlt?: boolean): string;
    findParentNode(node: Element, selector: string): Node;
    eachParentNode(node: Element, cb: (node: Element) => void): void;
    getChildrenForTable(table: Element, childNodeName: string): Element[];
    testTableHeaders(table: Element): void;
    getCellHeaders(tableCell: Element): Element[];
    getPreviousSiblingElement(
      element: Element,
      tagName: string,
      immediate?: boolean
    ): ChildNode | Element;
    getNextSiblingElement(
      element: Element,
      tagName: string,
      immediate?: boolean
    ): ChildNode | Element;
    getTextContent(element: Element & { innerText?: string }): string;
    getAccessibleName(element: Element, top: Document): string;
  };
};

type Snif = null | {
  testSemanticPresentationRole(element: Element): boolean;
};

declare global {
  var _global: {
      HTMLCS: HTMLCS;
      translation: {
        [key: string]: Record<string, unknown>;
      };
      // todo: remove any;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1: any;
    },
    HTMLCS: HTMLCS;
  var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1: Snif;
}

export { RGB, HSV, Snif, HTMLCS };
