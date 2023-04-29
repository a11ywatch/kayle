
export {};

// html elements for iframes
type HtmlEle = Element | Document | HTMLIFrameElement | HTMLBodyElement | HTMLDivElement | null;

type HTMLCS = {
    run(callback: void, content: string): void
    isFullDoc(content: string): boolean
    util: {
        getAllElements?(element: HtmlEle): HtmlEle[]
    }
}

type Snif = null | {
    testSemanticPresentationRole(element: Element): boolean
}

declare global {
    var _global: {
        HTMLCS: HTMLCS;
        translation: string
    },
    HTMLCS: HTMLCS;
    var HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1: Snif;
}