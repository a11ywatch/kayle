// html elements for iframes
type HtmlEle =
  | Element
  | Document
  | HTMLIFrameElement
  | HTMLBodyElement
  | HTMLDivElement
  | null;

// red, green, blue object
type RGB = { red: number; blue: number; green: number; alpha?: number };
// hue and saturation
type HSV = { hue: number; saturation: number; value: number };

// pass fail table scopes
type RetVal = {
  required: boolean;
  used: boolean;
  correct: boolean;
  allowScope: boolean;
  missingThId: any[];
  missingTd: any[];
  wrongHeaders: any[];
  isMultiLevelHeadersTable: boolean;
};

// the injected global object for the runner
type HTMLCS = {
  ERROR: string;
  NOTICE: string;
  WARNING: string;
  run(callback: void, content: string): void;
  isFullDoc(content: string | Node): boolean;
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
    getElementWindow(element: Element): HTMLElement & { document?: Document };
    isAccessibilityHidden(element: Element): boolean;
    hasValidAriaLabel(element: Element): boolean;
    style(
      element: Element & { currentStyle?: ElementCSSInlineStyle },
      pseudo?: Element | string
    ): CSSStyleDeclaration;
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
    contrastRatio(a: string, b: string): number;
    RGBtoColourStr(colour: RGB): string;
    sRGBtoHSV(colour: string | RGB): HSV;
    HSVtosRGB(colour: HSV): RGB;
    getElementTextContent(element: Element, hasAlt?: boolean): string;
    findParentNode(node: Element, selector: string): Node;
    eachParentNode(node: Element, cb: (node: Element) => boolean): void;
    getChildrenForTable(table: Element, childNodeName: string): Element[];
    testTableHeaders(table: Element): RetVal;
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
    getAccessibleName(element: Element, top: Element): string;
  };
};

type TestContrastRatio = (
  element: Element,
  minContrast?: number,
  minLargeContrast?: number
) => {
  element: Element;
  value: number;
  required: number;
  recommendation: {
    fore: { to: number; from: number };
    back: { to: number; from: number };
  };
  hasBgImage: boolean;
  hasBgGradient?: boolean;
  isAbsolute: boolean;
  hasAlpha: boolean;
}[];

type Snif = null | {
  isValidLanguageTag?(element): boolean;
  testSemanticPresentationRole(element: Element): boolean;
  testHeadingOrder?(element: Element, typeCode: string): boolean;
  testLabelsOnInputs?(element: Element, top: Element, t: boolean): boolean;
  testContrastRatio?: TestContrastRatio;
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
  // removed for now until full standards mapped.
  getMsgInfo?(code: string): string | string[][];
};

// Guidelines to follow
type GuideLine = {
  _labelNames?: string[];
  register?: string[];
  process?(element: Element, top?: Element): void;
  // custom
  addNullAltTextResults?(top: Element): void;
  addMediaAlternativesResults?(element: Element): void;
  addProcessLinksMessages?(element: Element): void;
  checkFormSubmitButton?(element: Element): void;
  checkValidAttributes?(element: Element): void;
  checkNewWindowTarget?(element: Element): void;
  checkControlGroups?(element: Element): void;
  multiplyColour?(colour: string, multiplier: number): string;
  isValidLanguageTag?(langTag?: string): void;
  testSemanticPresentationRole?(element: Element): void;
  testContrastRatio?: TestContrastRatio;
  testEmptyDupeLabelForAttrs?(
    top: Element & { getElementById?(id: string): HTMLElement }
  );
  testColourComboFail?(element: HTMLElement): void;
  testLabelsOnInputs?(
    element: Element,
    top?: Element,
    muteErrors?: boolean
  ): boolean;
  testNullAltText?(top: Element): void;
  recommendColour?(back: string, fore: string, target: number): void;
  testMediaTextAlternatives?(element: Element): void;
  testPresentationMarkup?(element: Element): void;
  testNonSemanticHeading?(element: Element): void;
  testTableHeaders?(element: Element): void;
  testTableCaptionSummary?(element: Element): void;
  testFieldsetLegend?(element: Element): void;
  testKeyboard?(element: Element): void;
  testOptgroup?(element: Element): void;
  testRequiredFieldsets?(element: Element): void;
  testListsWithBreaks?(element: Element): void;
  testHeadingOrder?(element: Element, level: string): void;
  testEmptyHeading?(element: Element): void;
  testUnstructuredNavLinks?(element: Element): void;
  testIframeTitle?(element: Element): void;
  testGeneralTable?(element: Element): void;
  testGenericBypassMsg?(element: Element): void;
  testSameDocFragmentLinks?(element: Element, top: Element): void;
  processLinks?(element: Element): void;
  processFormControls?(element: Element): void;
  _testTableScopeAttrs?(element: Element): void;
};

declare global {
  var _global: {
    HTMLCS: HTMLCS;
    translation: {
      [key: string]: Record<string, unknown>;
    };
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1: any; // todo: remove any;
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
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_6: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_6: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_6: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_3: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_10: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_11: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_12: GuideLine;
    HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_13: GuideLine;
    HTMLCS_Section508_Sniffs_A: GuideLine;
    HTMLCS_Section508_Sniffs_B: GuideLine;
    HTMLCS_Section508_Sniffs_C: GuideLine;
    HTMLCS_Section508_Sniffs_D: GuideLine;
    HTMLCS_Section508_Sniffs_G: GuideLine;
    HTMLCS_Section508_Sniffs_H: GuideLine;
    HTMLCS_Section508_Sniffs_I: GuideLine;
    HTMLCS_Section508_Sniffs_J: GuideLine;
    HTMLCS_Section508_Sniffs_K: GuideLine;
    HTMLCS_Section508_Sniffs_L: GuideLine;
    HTMLCS_Section508_Sniffs_M: GuideLine;
    HTMLCS_Section508_Sniffs_N: GuideLine;
    HTMLCS_Section508_Sniffs_O: GuideLine;
    HTMLCS_Section508_Sniffs_P: GuideLine;
    HTMLCS_WCAG2A: RuleSet;
    HTMLCS_WCAG2AAA: RuleSet;
    HTMLCS_WCAG2AA: RuleSet;
    HTMLCS_Section508: RuleSet;
  };
  var HTMLCS: HTMLCS;
  var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1: any; // todo: remove any;
  var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1: Snif;
  var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast: Snif;
  var HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1: Snif;
  var HTMLCS_WCAG2A: RuleSet;
  var HTMLCS_WCAG2AAA: RuleSet;
}

export { RGB, HSV, Snif, HTMLCS, GuideLine };
