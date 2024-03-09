/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: 'accesskeys',
    description: 'Ensures every accesskey attribute value is unique',
    help: 'accesskey attribute value should be unique',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'area-alt',
    description: 'Ensures <area> elements of image maps have alternate text',
    help: 'Active <area> elements must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag244',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['c487ae'],
  },
  {
    ruleId: 'aria-allowed-attr',
    description: "Ensures ARIA attributes are allowed for an element's role",
    help: 'Elements must only use allowed ARIA attributes',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5c01ea'],
  },
  {
    ruleId: 'aria-allowed-role',
    description:
      'Ensures role attribute has an appropriate value for the element',
    help: 'ARIA role should be appropriate for the element',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-command-name',
    description:
      'Ensures every ARIA button, link and menuitem has an accessible name',
    help: 'ARIA commands must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['97a4e1'],
  },
  {
    ruleId: 'aria-dialog-name',
    description:
      'Ensures every ARIA dialog and alertdialog node has an accessible name',
    help: 'ARIA dialog and alertdialog nodes should have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-hidden-body',
    description:
      "Ensures aria-hidden='true' is not present on the document body.",
    help: "aria-hidden='true' must not be present on the document body",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-hidden-focus',
    description:
      'Ensures aria-hidden elements are not focusable nor contain focusable elements',
    help: 'ARIA hidden element must not be focusable or contain focusable elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI',
    tags: ['cat.name-role-value', 'wcag2a', 'wcag412'],
    actIds: ['6cfa84'],
  },
  {
    ruleId: 'aria-input-field-name',
    description: 'Ensures every ARIA input field has an accessible name',
    help: 'ARIA input fields must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-meter-name',
    description: 'Ensures every ARIA meter node has an accessible name',
    help: 'ARIA meter nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-progressbar-name',
    description: 'Ensures every ARIA progressbar node has an accessible name',
    help: 'ARIA progressbar nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-required-attr',
    description:
      'Ensures elements with ARIA roles have all required ARIA attributes',
    help: 'Required ARIA attributes must be provided',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['4e8ab6'],
  },
  {
    ruleId: 'aria-required-children',
    description:
      'Ensures elements with an ARIA role that require child roles contain them',
    help: 'Certain ARIA roles must contain particular children',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['bc4a75', 'ff89c9'],
  },
  {
    ruleId: 'aria-required-parent',
    description:
      'Ensures elements with an ARIA role that require parent roles are contained by them',
    help: 'Certain ARIA roles must be contained by particular parents',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['ff89c9'],
  },
  {
    ruleId: 'aria-roledescription',
    description:
      'Ensure aria-roledescription is only used on elements with an implicit or explicit role',
    help: 'aria-roledescription must be on elements with a semantic role',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-roles',
    description: 'Ensures all elements with a role attribute use a valid value',
    help: 'ARIA roles used must conform to valid values',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['674b10'],
  },
  {
    ruleId: 'aria-text',
    description:
      'Ensures "role=text" is used on elements with no focusable descendants',
    help: '"role=text" should have no focusable descendants',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-toggle-field-name',
    description: 'Ensures every ARIA toggle field has an accessible name',
    help: 'ARIA toggle fields must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-tooltip-name',
    description: 'Ensures every ARIA tooltip node has an accessible name',
    help: 'ARIA tooltip nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-treeitem-name',
    description: 'Ensures every ARIA treeitem node has an accessible name',
    help: 'ARIA treeitem nodes should have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-valid-attr-value',
    description: 'Ensures all ARIA attributes have valid values',
    help: 'ARIA attributes must conform to valid values',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['6a7281'],
  },
  {
    ruleId: 'aria-valid-attr',
    description:
      'Ensures attributes that begin with aria- are valid ARIA attributes',
    help: 'ARIA attributes must conform to valid names',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5f99a7'],
  },
  {
    ruleId: 'audio-caption',
    description: 'Ensures <audio> elements have captions',
    help: '<audio> elements must have a captions track',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI',
    tags: [
      'cat.time-and-media',
      'wcag2a',
      'wcag121',
      'section508',
      'section508.22.a',
    ],
    actIds: ['2eb176', 'afb423'],
  },
  {
    ruleId: 'autocomplete-valid',
    description:
      'Ensure the autocomplete attribute is correct and suitable for the form field',
    help: 'autocomplete attribute must be used correctly',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI',
    tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
    actIds: ['73f2c2'],
  },
  {
    ruleId: 'avoid-inline-spacing',
    description:
      'Ensure that text spacing set through style attributes can be adjusted with custom stylesheets',
    help: 'Inline text spacing must be adjustable with custom stylesheets',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI',
    tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
    actIds: ['24afc2', '9e45ec', '78fd32'],
  },
  {
    ruleId: 'blink',
    description: 'Ensures <blink> elements are not used',
    help: '<blink> elements are deprecated and must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI',
    tags: [
      'cat.time-and-media',
      'wcag2a',
      'wcag222',
      'section508',
      'section508.22.j',
    ],
  },
  {
    ruleId: 'button-name',
    description: 'Ensures buttons have discernible text',
    help: 'Buttons must have discernible text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI',
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['97a4e1', 'm6b1q3'],
  },
  {
    ruleId: 'bypass',
    description:
      'Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content',
    help: 'Page must have means to bypass repeated blocks',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI',
    tags: [
      'cat.keyboard',
      'wcag2a',
      'wcag241',
      'section508',
      'section508.22.o',
    ],
    actIds: ['cf77f2', '047fe0', 'b40fd1', '3e12e1', 'ye5d6e'],
  },
  {
    ruleId: 'color-contrast-enhanced',
    description:
      'Ensures the contrast between foreground and background colors meets WCAG 2 AAA contrast ratio thresholds',
    help: 'Elements must have sufficient color contrast',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI',
    tags: ['cat.color', 'wcag2aaa', 'wcag146', 'ACT'],
    actIds: ['09o5cg'],
  },
  {
    ruleId: 'color-contrast',
    description:
      'Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds',
    help: 'Elements must have sufficient color contrast',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI',
    tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT'],
    actIds: ['afw4f7', '09o5cg'],
  },
  {
    ruleId: 'css-orientation-lock',
    description:
      'Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations',
    help: 'CSS Media queries must not lock display orientation',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI',
    tags: ['cat.structure', 'wcag134', 'wcag21aa', 'experimental'],
    actIds: ['b33eff'],
  },
  {
    ruleId: 'definition-list',
    description: 'Ensures <dl> elements are structured correctly',
    help: '<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'dlitem',
    description: 'Ensures <dt> and <dd> elements are contained by a <dl>',
    help: '<dt> and <dd> elements must be contained by a <dl>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'document-title',
    description:
      'Ensures each HTML document contains a non-empty <title> element',
    help: 'Documents must have <title> element to aid in navigation',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI',
    tags: ['cat.text-alternatives', 'wcag2a', 'wcag242', 'ACT'],
    actIds: ['2779a5'],
  },
  {
    ruleId: 'empty-heading',
    description: 'Ensures headings have discernible text',
    help: 'Headings should not be empty',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI',
    tags: ['cat.name-role-value', 'best-practice'],
    actIds: ['ffd0e9'],
  },
  {
    ruleId: 'empty-table-header',
    description: 'Ensures table headers have discernible text',
    help: 'Table header text should not be empty',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI',
    tags: ['cat.name-role-value', 'best-practice'],
  },
  {
    ruleId: 'focus-order-semantics',
    description:
      'Ensures elements in the focus order have a role appropriate for interactive content',
    help: 'Elements in the focus order should have an appropriate role',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI',
    tags: ['cat.keyboard', 'best-practice', 'experimental'],
  },
  {
    ruleId: 'form-field-multiple-labels',
    description: 'Ensures form field does not have multiple label elements',
    help: 'Form field must not have multiple label elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI',
    tags: ['cat.forms', 'wcag2a', 'wcag332'],
  },
  {
    ruleId: 'frame-focusable-content',
    description:
      'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
    help: 'Frames with focusable content must not have tabindex=-1',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['akn7bn'],
  },
  {
    ruleId: 'frame-tested',
    description:
      'Ensures <iframe> and <frame> elements contain the axe-core script',
    help: 'Frames should be tested with axe-core',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI',
    tags: ['cat.structure', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'frame-title-unique',
    description:
      'Ensures <iframe> and <frame> elements contain a unique title attribute',
    help: 'Frames must have a unique title attribute',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI',
    tags: ['cat.text-alternatives', 'wcag412', 'wcag2a'],
    actIds: ['4b1c6c'],
  },
  {
    ruleId: 'frame-title',
    description:
      'Ensures <iframe> and <frame> elements have an accessible name',
    help: 'Frames must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.i',
    ],
    actIds: ['cae760'],
  },
  {
    ruleId: 'heading-order',
    description: 'Ensures the order of headings is semantically correct',
    help: 'Heading levels should only increase by one',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'hidden-content',
    description: 'Informs users about hidden content.',
    help: 'Hidden content on the page should be analyzed',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI',
    tags: ['cat.structure', 'experimental', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'html-has-lang',
    description: 'Ensures every HTML document has a lang attribute',
    help: '<html> element must have a lang attribute',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['b5c3f8'],
  },
  {
    ruleId: 'html-lang-valid',
    description:
      'Ensures the lang attribute of the <html> element has a valid value',
    help: '<html> element must have a valid value for the lang attribute',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['bf051a'],
  },
  {
    ruleId: 'html-xml-lang-mismatch',
    description:
      'Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page',
    help: 'HTML elements with lang and xml:lang must have the same base language',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['5b7ae0'],
  },
  {
    ruleId: 'identical-links-same-purpose',
    description:
      'Ensure that links with the same accessible name serve a similar purpose',
    help: 'Links with the same name must have a similar purpose',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI',
    tags: ['cat.semantics', 'wcag2aaa', 'wcag249'],
    actIds: ['b20e66'],
  },
  {
    ruleId: 'image-alt',
    description:
      'Ensures <img> elements have alternate text or a role of none or presentation',
    help: 'Images must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['23a2a8'],
  },
  {
    ruleId: 'image-redundant-alt',
    description: 'Ensure image alternative is not repeated as text',
    help: 'Alternative text of images should not be repeated as text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI',
    tags: ['cat.text-alternatives', 'best-practice'],
  },
  {
    ruleId: 'input-button-name',
    description: 'Ensures input buttons have discernible text',
    help: 'Input buttons must have discernible text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI',
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['97a4e1'],
  },
  {
    ruleId: 'input-image-alt',
    description: 'Ensures <input type="image"> elements have alternate text',
    help: 'Image buttons must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'wcag412',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['59796f'],
  },
  {
    ruleId: 'label-content-name-mismatch',
    description:
      'Ensures that elements labelled through their content must have their visible text as part of their accessible name',
    help: 'Elements must have their visible text as part of their accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI',
    tags: ['cat.semantics', 'wcag21a', 'wcag253', 'experimental'],
    actIds: ['2ee8b8'],
  },
  {
    ruleId: 'label-title-only',
    description:
      'Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes',
    help: 'Form elements should have a visible label',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI',
    tags: ['cat.forms', 'best-practice'],
  },
  {
    ruleId: 'label',
    description: 'Ensures every form element has a label',
    help: 'Form elements must have labels',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI',
    tags: [
      'cat.forms',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.n',
      'ACT',
    ],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'landmark-banner-is-top-level',
    description: 'Ensures the banner landmark is at top level',
    help: 'Banner landmark should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-complementary-is-top-level',
    description: 'Ensures the complementary landmark or aside is at top level',
    help: 'Aside should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-contentinfo-is-top-level',
    description: 'Ensures the contentinfo landmark is at top level',
    help: 'Contentinfo landmark should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-main-is-top-level',
    description: 'Ensures the main landmark is at top level',
    help: 'Main landmark should not be contained in another landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-banner',
    description: 'Ensures the document has at most one banner landmark',
    help: 'Document should not have more than one banner landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-contentinfo',
    description: 'Ensures the document has at most one contentinfo landmark',
    help: 'Document should not have more than one contentinfo landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-main',
    description: 'Ensures the document has at most one main landmark',
    help: 'Document should not have more than one main landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-one-main',
    description: 'Ensures the document has a main landmark',
    help: 'Document should have one main landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-unique',
    description:
      'Landmarks should have a unique role or role/label/title (i.e. accessible name) combination',
    help: 'Ensures landmarks are unique',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'link-in-text-block',
    description:
      'Ensure links are distinguished from surrounding text in a way that does not rely on color',
    help: 'Links must be distinguishable without relying on color',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI',
    tags: ['cat.color', 'wcag2a', 'wcag141'],
  },
  {
    ruleId: 'link-name',
    description: 'Ensures links have discernible text',
    help: 'Links must have discernible text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI',
    tags: [
      'cat.name-role-value',
      'wcag2a',
      'wcag412',
      'wcag244',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['c487ae'],
  },
  {
    ruleId: 'list',
    description: 'Ensures that lists are structured correctly',
    help: '<ul> and <ol> must only directly contain <li>, <script> or <template> elements',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'listitem',
    description: 'Ensures <li> elements are used semantically',
    help: '<li> elements must be contained in a <ul> or <ol>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'marquee',
    description: 'Ensures <marquee> elements are not used',
    help: '<marquee> elements are deprecated and must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI',
    tags: ['cat.parsing', 'wcag2a', 'wcag222'],
  },
  {
    ruleId: 'meta-refresh-no-exceptions',
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI',
    tags: ['cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325'],
    actIds: ['bisz58'],
  },
  {
    ruleId: 'meta-refresh',
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh under 20 hours must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag221'],
    actIds: ['bc659a', 'bisz58'],
  },
  {
    ruleId: 'meta-viewport-large',
    description:
      'Ensures <meta name="viewport"> can scale a significant amount',
    help: 'Users should be able to zoom and scale the text up to 500%',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI',
    tags: ['cat.sensory-and-visual-cues', 'best-practice'],
  },
  {
    ruleId: 'meta-viewport',
    description:
      'Ensures <meta name="viewport"> does not disable text scaling and zooming',
    help: 'Zooming and scaling must not be disabled',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI',
    tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
    actIds: ['b4f0c3'],
  },
  {
    ruleId: 'nested-interactive',
    description:
      'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
    help: 'Interactive controls must not be nested',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI',
    tags: ['cat.keyboard', 'wcag2a', 'wcag412'],
    actIds: ['307n5z'],
  },
  {
    ruleId: 'no-autoplay-audio',
    description:
      'Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
    help: '<video> or <audio> elements must not play automatically',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag142', 'ACT'],
    actIds: ['80f0bf'],
  },
  {
    ruleId: 'object-alt',
    description: 'Ensures <object> elements have alternate text',
    help: '<object> elements must have alternate text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
    ],
    actIds: ['8fc3b6'],
  },
  {
    ruleId: 'p-as-heading',
    description:
      'Ensure bold, italic text and font-size is not used to style <p> elements as a heading',
    help: 'Styled <p> elements must not be used as headings',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI',
    tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
  },
  {
    ruleId: 'page-has-heading-one',
    description:
      'Ensure that the page, or at least one of its frames contains a level-one heading',
    help: 'Page should contain a level-one heading',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'presentation-role-conflict',
    description:
      'Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them',
    help: 'Ensure elements marked as presentational are consistently ignored',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI',
    tags: ['cat.aria', 'best-practice', 'ACT'],
    actIds: ['46ca7f'],
  },
  {
    ruleId: 'region',
    description: 'Ensures all page content is contained by landmarks',
    help: 'All page content should be contained by landmarks',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'role-img-alt',
    description: "Ensures [role='img'] elements have alternate text",
    help: "[role='img'] elements must have an alternative text",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['23a2a8'],
  },
  {
    ruleId: 'scope-attr-valid',
    description: 'Ensures the scope attribute is used correctly on tables',
    help: 'scope attribute should be used correctly',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'scrollable-region-focusable',
    description:
      'Ensure elements that have scrollable content are accessible by keyboard',
    help: 'Scrollable region must have keyboard access',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['0ssw9k'],
  },
  {
    ruleId: 'select-name',
    description: 'Ensures select element has an accessible name',
    help: 'Select element must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI',
    tags: [
      'cat.forms',
      'wcag2a',
      'wcag412',
      'section508',
      'section508.22.n',
      'ACT',
    ],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'server-side-image-map',
    description: 'Ensures that server-side image maps are not used',
    help: 'Server-side image maps must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag211',
      'section508',
      'section508.22.f',
    ],
  },
  {
    ruleId: 'skip-link',
    description: 'Ensure all skip links have a focusable target',
    help: 'The skip-link target should exist and be focusable',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'svg-img-alt',
    description:
      'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
    help: '<svg> elements with an img role must have an alternative text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag111',
      'section508',
      'section508.22.a',
      'ACT',
    ],
    actIds: ['7d6734'],
  },
  {
    ruleId: 'tabindex',
    description: 'Ensures tabindex attribute values are not greater than 0',
    help: 'Elements should not have tabindex greater than zero',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'table-duplicate-name',
    description:
      'Ensure the <caption> element does not contain the same text as the summary attribute',
    help: 'tables should not have the same summary and caption',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'table-fake-caption',
    description: 'Ensure that tables with a caption use the <caption> element.',
    help: 'Data or header cells must not be used to give caption to a data table.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI',
    tags: [
      'cat.tables',
      'experimental',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g',
    ],
  },
  {
    ruleId: 'target-size',
    description: 'Ensure touch target have sufficient size and space',
    help: 'All touch targets must be 24px large, or leave sufficient space',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI',
    tags: ['wcag22aa', 'wcag258', 'cat.sensory-and-visual-cues'],
  },
  {
    ruleId: 'td-has-header',
    description:
      'Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers',
    help: 'Non-empty <td> elements in larger <table> must have an associated table header',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI',
    tags: [
      'cat.tables',
      'experimental',
      'wcag2a',
      'wcag131',
      'section508',
      'section508.22.g',
    ],
  },
  {
    ruleId: 'td-headers-attr',
    description:
      'Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table',
    help: 'Table cells that use the headers attribute must only refer to cells in the same table',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['a25f45'],
  },
  {
    ruleId: 'th-has-data-cells',
    description:
      'Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe',
    help: 'Table headers in a data table must refer to data cells',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['d0f69e'],
  },
  {
    ruleId: 'valid-lang',
    description: 'Ensures lang attributes have valid values',
    help: 'lang attribute must have a valid value',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI',
    tags: ['cat.language', 'wcag2aa', 'wcag312', 'ACT'],
    actIds: ['de46e4'],
  },
  {
    ruleId: 'video-caption',
    description: 'Ensures <video> elements have captions',
    help: '<video> elements must have captions',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI',
    tags: [
      'cat.text-alternatives',
      'wcag2a',
      'wcag122',
      'section508',
      'section508.22.a',
    ],
    actIds: ['eac66b'],
  },
]
