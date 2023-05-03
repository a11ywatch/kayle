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
  testHeadingOrder?(element: Element, typeCode: string): boolean;
};

type Rule = {
  standard: string;
  include: string[];
};

// a rule to follow
type RuleSet = {
  name: string;
  description: string;
  sniffs: Rule[] | string[];
  getMsgInfo(code: string): string | string[][];
};

// a guideline
type GuideLine = {
  _labelNames?: string[];
  register(): string[];
  process(element: Element, top?: Element): void;
};

declare global {
  var _global: {
      HTMLCS: HTMLCS;
      translation: {
        [key: string]: Record<string, unknown>;
      };
      // todo: remove any;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1: any;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A: GuideLine;
      HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA: GuideLine;
      HTMLCS_WCAG2A: RuleSet;
      HTMLCS_WCAG2AAA: RuleSet;
      HTMLCS_WCAG2AA: RuleSet;
    },
    HTMLCS: HTMLCS;
  var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1: Snif;
  var HTMLCS_WCAG2A: RuleSet;
  var HTMLCS_WCAG2AA: RuleSet;
  var HTMLCS_WCAG2AAA: RuleSet;
}

export { RGB, HSV, Snif, HTMLCS };
