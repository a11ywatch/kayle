/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: 'accesskeys',
    description: '',
    help: "Værdien for attributten 'accesskey' skal være unik",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'area-alt',
    description: '',
    help: 'Aktive <area> elementer skal have alternativ tekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=da',
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
    description: '',
    help: 'Elementer må kun bruge tilladte ARIA-attributter',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5c01ea'],
  },
  {
    ruleId: 'aria-allowed-role',
    description: '',
    help: "ARIA-attributten 'role' skal være passende for elementet",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=da',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-command-name',
    description:
      'Ensures every ARIA button, link and menuitem has an accessible name',
    help: 'ARIA commands must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['97a4e1'],
  },
  {
    ruleId: 'aria-dialog-name',
    description:
      'Ensures every ARIA dialog and alertdialog node has an accessible name',
    help: 'ARIA dialog and alertdialog nodes should have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-hidden-body',
    description: '',
    help: "aria-hidden='true' må ikke bruges på dokumentets <body> element",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-hidden-focus',
    description: '',
    help: "Elementer med ARIA-'hidden' må ikke indeholde fokuserbare elementer",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=da',
    tags: ['cat.name-role-value', 'wcag2a', 'wcag412'],
    actIds: ['6cfa84'],
  },
  {
    ruleId: 'aria-input-field-name',
    description: '',
    help: 'ARIA-input-felter skal have et tilgængeligt navn',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-meter-name',
    description: 'Ensures every ARIA meter node has an accessible name',
    help: 'ARIA meter nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-progressbar-name',
    description: 'Ensures every ARIA progressbar node has an accessible name',
    help: 'ARIA progressbar nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-required-attr',
    description: '',
    help: 'Krævede ARIA-attributter skal være angivet',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['4e8ab6'],
  },
  {
    ruleId: 'aria-required-children',
    description: '',
    help: 'Bestemte ARIA-roller skal indeholde specifikke under-elementer',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['bc4a75', 'ff89c9'],
  },
  {
    ruleId: 'aria-required-parent',
    description: '',
    help: 'Bestemte ARIA-roller skal være under-element til specifikke over-elementer',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['ff89c9'],
  },
  {
    ruleId: 'aria-roledescription',
    description: '',
    help: "Brug 'aria-roledescription' på elementer med en semantisk rolle",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-roles',
    description: '',
    help: 'ARIA-roller skal have en korrekt værdi',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['674b10'],
  },
  {
    ruleId: 'aria-text',
    description:
      'Ensures "role=text" is used on elements with no focusable descendants',
    help: '"role=text" should have no focusable descendants',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=da',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-toggle-field-name',
    description: '',
    help: 'ARIA afkrydsningsfelter skal have et tilgængeligt navn',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-tooltip-name',
    description: 'Ensures every ARIA tooltip node has an accessible name',
    help: 'ARIA tooltip nodes must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-treeitem-name',
    description: 'Ensures every ARIA treeitem node has an accessible name',
    help: 'ARIA treeitem nodes should have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=da',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-valid-attr-value',
    description: '',
    help: 'ARIA-attributter skal have en korrekt værdi',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['6a7281'],
  },
  {
    ruleId: 'aria-valid-attr',
    description: '',
    help: 'ARIA-attributter skal have et korrekt navn',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=da',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5f99a7'],
  },
  {
    ruleId: 'audio-caption',
    description: '',
    help: "<audio> elementer skal have en transskription ('captions track')",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=da',
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
    description: '',
    help: "Attributten 'autocomplete' skal benyttes korrekt",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=da',
    tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
    actIds: ['73f2c2'],
  },
  {
    ruleId: 'avoid-inline-spacing',
    description: '',
    help: 'Inline tekst-afstande skal være justerbare med brugerdefinerede stylesheets',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=da',
    tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
    actIds: ['24afc2', '9e45ec', '78fd32'],
  },
  {
    ruleId: 'blink',
    description: '',
    help: 'Elementet <blink> er udfaset og må ikke bruges',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=da',
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
    description: '',
    help: 'Knapper skal have forståelig (dvs. detekterbar) tekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=da',
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
    description: '',
    help: 'Sider skal have en metode til at springe over gentaget indhold',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=da',
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
    description: '',
    help: 'Elementer skal have tilstrækkelig farvekontrast',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=da',
    tags: ['cat.color', 'wcag2aaa', 'wcag146', 'ACT'],
    actIds: ['09o5cg'],
  },
  {
    ruleId: 'color-contrast',
    description: '',
    help: 'Elementer skal have tilstrækkelig farvekontrast',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=da',
    tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT'],
    actIds: ['afw4f7', '09o5cg'],
  },
  {
    ruleId: 'css-orientation-lock',
    description: '',
    help: "'CSS Media queries' bør ikke bruges til at låse skærmretningen ('orientation')",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=da',
    tags: ['cat.structure', 'wcag134', 'wcag21aa', 'experimental'],
    actIds: ['b33eff'],
  },
  {
    ruleId: 'definition-list',
    description: '',
    help: '<dl> elementer må kun direkte indeholde velsorterede <dt> og <dd> grupper, <script> eller <template> elementer',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=da',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'dlitem',
    description: '',
    help: '<dt> og <dd> elementer skal være under-element til et <dl> element',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=da',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'document-title',
    description: '',
    help: 'Dokumenter skal have et <title> element for at bidrage til nemmere navigation',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=da',
    tags: ['cat.text-alternatives', 'wcag2a', 'wcag242', 'ACT'],
    actIds: ['2779a5'],
  },
  {
    ruleId: 'empty-heading',
    description: '',
    help: 'Overskrifter må ikke være tomme',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=da',
    tags: ['cat.name-role-value', 'best-practice'],
    actIds: ['ffd0e9'],
  },
  {
    ruleId: 'empty-table-header',
    description: 'Ensures table headers have discernible text',
    help: 'Table header text should not be empty',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=da',
    tags: ['cat.name-role-value', 'best-practice'],
  },
  {
    ruleId: 'focus-order-semantics',
    description: '',
    help: "Elementer i fokus-rækkefølgen bør have en 'role'-attribut, som er passende for det interaktive indhold",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'best-practice', 'experimental'],
  },
  {
    ruleId: 'form-field-multiple-labels',
    description: '',
    help: 'Form-feltet bør ikke have flere label-elementer',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=da',
    tags: ['cat.forms', 'wcag2a', 'wcag332'],
  },
  {
    ruleId: 'frame-focusable-content',
    description:
      'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
    help: 'Frames with focusable content must not have tabindex=-1',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['akn7bn'],
  },
  {
    ruleId: 'frame-tested',
    description: '',
    help: 'Frame-elementer skal være testet med axe-core',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=da',
    tags: ['cat.structure', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'frame-title-unique',
    description: '',
    help: "Frame-elementer skal have en unik 'title'-attribut",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=da',
    tags: ['cat.text-alternatives', 'wcag412', 'wcag2a'],
    actIds: ['4b1c6c'],
  },
  {
    ruleId: 'frame-title',
    description: '',
    help: "Frame-elementer skal have 'title'-attribut",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=da',
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
    description: '',
    help: 'Overskriftsniveauer bør kun ændres sekventielt',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'hidden-content',
    description: '',
    help: 'Skjult indhold på siden kan ikke analyseres',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=da',
    tags: ['cat.structure', 'experimental', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'html-has-lang',
    description: '',
    help: "<html> elementet skal have en 'lang'-attribut",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=da',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['b5c3f8'],
  },
  {
    ruleId: 'html-lang-valid',
    description: '',
    help: "<html> elementet skal have en korrekt værdi for 'lang'-attributten",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=da',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['bf051a'],
  },
  {
    ruleId: 'html-xml-lang-mismatch',
    description: '',
    help: "<html> elementer med 'lang' og 'xml:lang' skal have det samme basesprog",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=da',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['5b7ae0'],
  },
  {
    ruleId: 'identical-links-same-purpose',
    description:
      'Ensure that links with the same accessible name serve a similar purpose',
    help: 'Links with the same name must have a similar purpose',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'wcag2aaa', 'wcag249'],
    actIds: ['b20e66'],
  },
  {
    ruleId: 'image-alt',
    description: '',
    help: 'Billeder skal have en alternativ tekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=da',
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
    description: '',
    help: 'Alternativ tekst til billeder (alt-tekst) bør ikke gentages som brødtekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=da',
    tags: ['cat.text-alternatives', 'best-practice'],
  },
  {
    ruleId: 'input-button-name',
    description: '',
    help: 'Input-knapper skal have en forståelig tekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=da',
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
    description: '',
    help: 'Billed-knapper skal have en alternativ tekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=da',
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
    description: '',
    help: 'Elementers synlige tekst skal være del af deres tilgængelige navn',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'wcag21a', 'wcag253', 'experimental'],
    actIds: ['2ee8b8'],
  },
  {
    ruleId: 'label-title-only',
    description: '',
    help: 'Form-elementer bør have en synlig label',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=da',
    tags: ['cat.forms', 'best-practice'],
  },
  {
    ruleId: 'label',
    description: '',
    help: 'Form-elementer skal have labels',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=da',
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
    description: '',
    help: "Et 'banner'-landmark må ikke være indeholdt i et andet landmark",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-complementary-is-top-level',
    description: '',
    help: "Et 'aside'- eller 'complimentary'-landmark må ikke være indeholdt i et andet landmark",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-contentinfo-is-top-level',
    description: '',
    help: "Et 'contentinfo'-landmark må ikke være indeholdt i et andet landmark",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-main-is-top-level',
    description: '',
    help: "Et 'main'-landmark må ikke være indeholdt i et andet landmark",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-banner',
    description: '',
    help: "Dokumentet må ikke have mere end ét 'banner'-landmark",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-contentinfo',
    description: '',
    help: "Dokumentet må ikke have mere end ét 'contentinfo'-landmark",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-main',
    description: 'Ensures the document has at most one main landmark',
    help: 'Document should not have more than one main landmark',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-one-main',
    description: '',
    help: "Dokumentet skal have ét 'main'-landmark",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-unique',
    description: '',
    help: 'Sikrer at landmarks er unikke',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'link-in-text-block',
    description: '',
    help: 'Links skal være fremtrædende fra den omkringliggende tekst på en måde, som ikke afhænger af farve',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=da',
    tags: ['cat.color', 'wcag2a', 'wcag141'],
  },
  {
    ruleId: 'link-name',
    description: '',
    help: 'Links skal have forståelig (detekterbar) tekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=da',
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
    description: '',
    help: '<ul> og <ol> må kun direkte indeholde <li>, <script> eller <template> elementer',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=da',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'listitem',
    description: '',
    help: '<li> elementer skal være indeholdt i et <ul> eller <ol> element',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=da',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'marquee',
    description: '',
    help: '<marquee> elementer er udfaset og må ikke bruges',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=da',
    tags: ['cat.parsing', 'wcag2a', 'wcag222'],
  },
  {
    ruleId: 'meta-refresh-no-exceptions',
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=da',
    tags: ['cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325'],
    actIds: ['bisz58'],
  },
  {
    ruleId: 'meta-refresh',
    description: '',
    help: "Tidsindstillet 'refresh' må ikke bruges",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=da',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag221'],
    actIds: ['bc659a', 'bisz58'],
  },
  {
    ruleId: 'meta-viewport-large',
    description: '',
    help: 'Brugere bør kunne zoome og skalere tekst op til 500%',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=da',
    tags: ['cat.sensory-and-visual-cues', 'best-practice'],
  },
  {
    ruleId: 'meta-viewport',
    description: '',
    help: 'Zoom og skalering må ikke være slået fra',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=da',
    tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
    actIds: ['b4f0c3'],
  },
  {
    ruleId: 'nested-interactive',
    description:
      'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
    help: 'Interactive controls must not be nested',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'wcag2a', 'wcag412'],
    actIds: ['307n5z'],
  },
  {
    ruleId: 'no-autoplay-audio',
    description:
      'Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio',
    help: '<video> or <audio> elements must not play automatically',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=da',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag142', 'ACT'],
    actIds: ['80f0bf'],
  },
  {
    ruleId: 'object-alt',
    description: '',
    help: '<object> elementer skal have en alternativ tekst',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=da',
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
    description: '',
    help: 'Fremhævelse med fed, kursiv og skriftstørrelse (font-size) må ikke bruges til at style <p> elementer som en overskrift',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
  },
  {
    ruleId: 'page-has-heading-one',
    description: '',
    help: 'Siden skal indeholde en overskrift på øverste niveau',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=da',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'presentation-role-conflict',
    description:
      'Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them',
    help: 'Ensure elements marked as presentational are consistently ignored',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=da',
    tags: ['cat.aria', 'best-practice', 'ACT'],
    actIds: ['46ca7f'],
  },
  {
    ruleId: 'region',
    description: '',
    help: 'Alt indhold på siden skal være indeholdt i landmarks',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'role-img-alt',
    description: '',
    help: "Elementer med 'role' attributværdien 'img' skal have en alternativ tekst",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=da',
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
    description: '',
    help: "'scope'-attributten skal bruges korrekt i tabeller",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=da',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'scrollable-region-focusable',
    description: '',
    help: 'Sørg for, at en scrollbar region er tilgængeligt via keyboard',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['0ssw9k'],
  },
  {
    ruleId: 'select-name',
    description: 'Ensures select element has an accessible name',
    help: 'Select element must have an accessible name',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=da',
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
    description: '',
    help: "Såkaldte 'server-side image-maps' må ikke bruges",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=da',
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
    description: '',
    help: "Et 'skip-link' skal pege på et eksisterende og fokuserbart element",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'svg-img-alt',
    description:
      'Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text',
    help: '<svg> elements with an img role must have an alternative text',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=da',
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
    description: '',
    help: "Elementer bør ikke have et 'tabindex' højere end 0",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=da',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'table-duplicate-name',
    description: '',
    help: "Elementet <caption> bør ikke indeholde samme tekst som 'summary'-attributten",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=da',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'table-fake-caption',
    description: '',
    help: 'Data- eller overskrifts-celler bør ikke bruges til at beskrive indholdet af en data-tabel',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=da',
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
      'https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=da',
    tags: ['wcag22aa', 'wcag258', 'cat.sensory-and-visual-cues'],
  },
  {
    ruleId: 'td-has-header',
    description: '',
    help: 'Alle ikke-tomme <td> elementer i en tabel større end 3x3 bør have en tabeloverskrift (<th>)',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=da',
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
    description: '',
    help: "Alle celler i en tabel, som  bruger 'header'-attributten må kun referere til andre celler i samme tabel",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=da',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['a25f45'],
  },
  {
    ruleId: 'th-has-data-cells',
    description: '',
    help: "Alle <th> elementer og elementer med 'role=columnheader/rowheader' skal referere til de data-celler, som de beskriver",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=da',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['d0f69e'],
  },
  {
    ruleId: 'valid-lang',
    description: '',
    help: "'lang'-attributten skal have en korrekt værdi",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=da',
    tags: ['cat.language', 'wcag2aa', 'wcag312', 'ACT'],
    actIds: ['de46e4'],
  },
  {
    ruleId: 'video-caption',
    description: '',
    help: "<video> elementer skal have undertekster ('captions')",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=da',
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
