/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: "accesskeys",
    description: "Garantiza que cada valor para el atributo accesskey es único",
    help: "El valor del atributo accesskey debe ser único",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "area-alt",
    description:
      "Garantiza que los elementos <area> de los mapas de imágenes tienen texto alternativo",
    help: "Los elementos <area> activos deben tener texto alternativo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag244",
      "wcag412",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["c487ae"],
  },
  {
    ruleId: "aria-allowed-attr",
    description:
      "Garantiza que los atributos ARIA están permitidos para el rol de un elemento",
    help: "Los elementos solo deben usar atributos ARIA permitidos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5c01ea"],
  },
  {
    ruleId: "aria-allowed-role",
    description:
      "Garantiza que el atributo role tiene un valor apropiado para el elemento",
    help: "ARIA role debe ser apropiado para el elemento",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=es",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-command-name",
    description:
      "Ensures every ARIA button, link and menuitem has an accessible name",
    help: "ARIA commands must have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["97a4e1"],
  },
  {
    ruleId: "aria-dialog-name",
    description:
      "Ensures every ARIA dialog and alertdialog node has an accessible name",
    help: "ARIA dialog and alertdialog nodes should have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-hidden-body",
    description:
      "Garantiza que aria-hidden='true' no está presente en el 'body' del documento.",
    help: "aria-hidden='true' no debe estar presente en el 'body' del documento",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-hidden-focus",
    description:
      "Garantiza que los elementos 'aria-hidden' no contienen elementos que admitan el foco",
    help: "Los elementos 'ARIA hidden' no deben contener elementos que admitan el foco",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=es",
    tags: ["cat.name-role-value", "wcag2a", "wcag412"],
    actIds: ["6cfa84"],
  },
  {
    ruleId: "aria-input-field-name",
    description:
      "Garantiza que cada 'ARIA input field' tiene un nombre accesible",
    help: "Los 'ARIA input fields' tienen un nombre accesible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-meter-name",
    description: "Ensures every ARIA meter node has an accessible name",
    help: "ARIA meter nodes must have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-progressbar-name",
    description: "Ensures every ARIA progressbar node has an accessible name",
    help: "ARIA progressbar nodes must have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-required-attr",
    description:
      "Garantiza que los elementos con 'ARIA roles' tienen todos los atributos ARIA requeridos",
    help: "Deben proporcionarse los atributos ARIA requeridos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["4e8ab6"],
  },
  {
    ruleId: "aria-required-children",
    description:
      "Garantiza que los elementos con un 'ARIA role' que requieren 'child roles' los contienen",
    help: "Ciertos 'ARIA roles' deben contener determinados hijos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["bc4a75", "ff89c9"],
  },
  {
    ruleId: "aria-required-parent",
    description:
      "Garantiza que los elementos con un 'ARIA role' que requieren 'parent roles' están contenidos en ellos",
    help: "Ciertos 'ARIA roles' deben estar contenidos en determinados padres",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["ff89c9"],
  },
  {
    ruleId: "aria-roledescription",
    description:
      "Ensure aria-roledescription is only used on elements with an implicit or explicit role",
    help: "aria-roledescription must be on elements with a semantic role",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-roles",
    description:
      "Garantiza que todos los elementos con un atributo role usan un valor válido",
    help: "Los 'ARIA roles' usados deben cumplir los requisitos para valores válidos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["674b10"],
  },
  {
    ruleId: "aria-text",
    description:
      'Ensures "role=text" is used on elements with no focusable descendants',
    help: '"role=text" should have no focusable descendants',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=es",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-toggle-field-name",
    description:
      "Garantiza que cada 'ARIA toggle field' tiene un nombre accesible",
    help: "Los 'ARIA toggle fields' tienen un nombre accesible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-tooltip-name",
    description: "Ensures every ARIA tooltip node has an accessible name",
    help: "ARIA tooltip nodes must have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-treeitem-name",
    description: "Ensures every ARIA treeitem node has an accessible name",
    help: "ARIA treeitem nodes should have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=es",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-valid-attr-value",
    description:
      "Garantiza que todos los atributos ARIA tienen valores válidos",
    help: "Los atributos ARIA deben cumplir los requisitos para valores válidos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["6a7281"],
  },
  {
    ruleId: "aria-valid-attr",
    description:
      "Garantiza que los atributos que empiezan por aria- son atributos ARIA válidos",
    help: "Los atributos ARIA deben cumplir los requisitos para nombres válidos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=es",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5f99a7"],
  },
  {
    ruleId: "audio-caption",
    description: "Garantiza que los elementos <audio> tienen subtítulos",
    help: "Los elementos <audio> deben tener una pista de subtítulos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=es",
    tags: [
      "cat.time-and-media",
      "wcag2a",
      "wcag121",
      "section508",
      "section508.22.a",
    ],
    actIds: ["2eb176", "afb423"],
  },
  {
    ruleId: "autocomplete-valid",
    description:
      "Garantizar que el atributo autocomplete es correcto y adecuado para el campo de formulario",
    help: "El atributo autocomplete debe usarse correctamente",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=es",
    tags: ["cat.forms", "wcag21aa", "wcag135", "ACT"],
    actIds: ["73f2c2"],
  },
  {
    ruleId: "avoid-inline-spacing",
    description:
      "Garantizar que el espaciado de texto establecido mediante atributos style se puede ajustar con hojas de estilo personalizadas",
    help: "El espaciado de texto 'inline' debe poder ajustarse mediante hojas de estilo personalizadas",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=es",
    tags: ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
    actIds: ["24afc2", "9e45ec", "78fd32"],
  },
  {
    ruleId: "blink",
    description: "Garantiza que no se usan elementos <blink>",
    help: "Los elementos <blink> están obsoletos y no deben usarse",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=es",
    tags: [
      "cat.time-and-media",
      "wcag2a",
      "wcag222",
      "section508",
      "section508.22.j",
    ],
  },
  {
    ruleId: "button-name",
    description: "Garantiza que los botones tienen texto discernible",
    help: "Los botones deben tener texto discernible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=es",
    tags: [
      "cat.name-role-value",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["97a4e1", "m6b1q3"],
  },
  {
    ruleId: "bypass",
    description:
      "Garantiza que cada página tiene al menos un medio para que un usuario pueda saltarse la navegación y pasar directamente al contenido",
    help: "Las páginas deben tener medios para saltarse bloques repetidos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=es",
    tags: [
      "cat.keyboard",
      "wcag2a",
      "wcag241",
      "section508",
      "section508.22.o",
    ],
    actIds: ["cf77f2", "047fe0", "b40fd1", "3e12e1", "ye5d6e"],
  },
  {
    ruleId: "color-contrast-enhanced",
    description:
      "Garantiza que el contraste entre colores de primer plano y fondo cumple los límites de la ratio para contraste WCAG 2 AAA",
    help: "Los elementos deben tener un contraste de colores suficiente",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=es",
    tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
    actIds: ["09o5cg"],
  },
  {
    ruleId: "color-contrast",
    description:
      "Garantiza que el contraste entre colores de primer plano y fondo cumple los límites de la ratio para contraste WCAG 2 AA",
    help: "Los elementos deben tener un contraste de colores suficiente",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=es",
    tags: ["cat.color", "wcag2aa", "wcag143", "ACT"],
    actIds: ["afw4f7", "09o5cg"],
  },
  {
    ruleId: "css-orientation-lock",
    description:
      "Garantiza que el contenido no está bloqueado en ninguna orientación de pantalla específica, y que el contenido es manejable en cualquier orientación de pantalla",
    help: "Las 'CSS Media queries' no se usan para bloquear la orientación de pantalla",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=es",
    tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
    actIds: ["b33eff"],
  },
  {
    ruleId: "definition-list",
    description:
      "Garantiza que los elementos <dl> están estructurados correctamente",
    help: "Los elementos <dl> solo deben contener directamente grupos de <dt> y <dd> debidamente ordenados, o elementos <script> o <template>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=es",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "dlitem",
    description:
      "Garantiza que los elementos <dt> y <dd> están contenidos en un <dl>",
    help: "Los elementos <dt> y <dd> deben estar contenidos en un <dl>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=es",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "document-title",
    description:
      "Garantiza que cada documento HTML tiene un elemento <title> no vacío",
    help: "Los documentos deben tener elementos <title> para ayudar en la navegación",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=es",
    tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
    actIds: ["2779a5"],
  },
  {
    ruleId: "empty-heading",
    description: "Garantiza que los encabezados tienen texto discernible",
    help: "Los encabezados no deben estar vacíos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=es",
    tags: ["cat.name-role-value", "best-practice"],
    actIds: ["ffd0e9"],
  },
  {
    ruleId: "empty-table-header",
    description: "Ensures table headers have discernible text",
    help: "Table header text should not be empty",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=es",
    tags: ["cat.name-role-value", "best-practice"],
  },
  {
    ruleId: "focus-order-semantics",
    description:
      "Garantiza que los elementos en orden de foco tienen un rol apropiado",
    help: "Los elementos en orden de foco necesitan un rol apropiado para contenido interactivo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "best-practice", "experimental"],
  },
  {
    ruleId: "form-field-multiple-labels",
    description:
      "Garantiza que el campo de formulario no tiene múltiples elementos label",
    help: "El campo de formulario no debe tener múltiples elementos label",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=es",
    tags: ["cat.forms", "wcag2a", "wcag332"],
  },
  {
    ruleId: "frame-focusable-content",
    description:
      "Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",
    help: "Frames with focusable content must not have tabindex=-1",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["akn7bn"],
  },
  {
    ruleId: "frame-tested",
    description:
      "Garantiza que los elementos <iframe> y <frame> contienen el script axe-core",
    help: "Los marcos deben probarse con axe-core",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=es",
    tags: ["cat.structure", "review-item", "best-practice"],
  },
  {
    ruleId: "frame-title-unique",
    description:
      "Garantiza que los elementos <iframe> y <frame> contienen un atributo título único",
    help: "Los marcos deben tener un único atributo title",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=es",
    tags: ["cat.text-alternatives", "wcag412", "wcag2a"],
    actIds: ["4b1c6c"],
  },
  {
    ruleId: "frame-title",
    description:
      "Garantiza que los elementos <iframe> y <frame> contienen un atributo título no vacío",
    help: "Los marcos deben tener el atributo title",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.i",
    ],
    actIds: ["cae760"],
  },
  {
    ruleId: "heading-order",
    description:
      "Garantiza que el orden de los encabezados es semánticamente correcto",
    help: "El nivel de encabezados solo debería incrementarse en 1",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "hidden-content",
    description: "Informa a los usuarios sobre contenido oculto.",
    help: "El contenido oculto de la página no se puede analizar",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=es",
    tags: ["cat.structure", "experimental", "review-item", "best-practice"],
  },
  {
    ruleId: "html-has-lang",
    description: "Garantiza que cada documento HTML tiene un atributo lang",
    help: "El elemento <html> debe tener un atributo lang",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=es",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["b5c3f8"],
  },
  {
    ruleId: "html-lang-valid",
    description:
      "Garantiza que el atributo lang del elemento <html> tiene un valor válido",
    help: "El elemento <html> debe tener un valor válido para el atributo lang",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=es",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["bf051a"],
  },
  {
    ruleId: "html-xml-lang-mismatch",
    description:
      "Garantizar que en los elementos HTML con atributos tanto lang como xml:lang válidos haya concordancia en el idioma base de la página",
    help: "Los elementos HTML con lang y xml:lang deben tener el mismo idioma base",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=es",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["5b7ae0"],
  },
  {
    ruleId: "identical-links-same-purpose",
    description:
      "Ensure that links with the same accessible name serve a similar purpose",
    help: "Links with the same name must have a similar purpose",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=es",
    tags: ["cat.semantics", "wcag2aaa", "wcag249"],
    actIds: ["b20e66"],
  },
  {
    ruleId: "image-alt",
    description:
      "Garantiza que los elementos <img> tienen texto alternativo o un rol de none o presentation",
    help: "Las imágenes deben tener texto alternativo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag111",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["23a2a8"],
  },
  {
    ruleId: "image-redundant-alt",
    description:
      "Garantiza que la alternativa a la imagen no se repite como texto",
    help: "El texto alternativo de las imágenes no debe repetirse como texto",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=es",
    tags: ["cat.text-alternatives", "best-practice"],
  },
  {
    ruleId: "input-button-name",
    description: "Garantizar que los 'input buttons' tienen texto discernible",
    help: "Los 'Input buttons' deben tener texto discernible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=es",
    tags: [
      "cat.name-role-value",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["97a4e1"],
  },
  {
    ruleId: "input-image-alt",
    description:
      'Garantiza que los elementos <input type="image"> tienen texto alternativo',
    help: "Los 'image buttons' deben tener texto alternativo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag111",
      "wcag412",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["59796f"],
  },
  {
    ruleId: "label-content-name-mismatch",
    description:
      "Garantiza que, en los elementos etiquetados mediante su contenido, su texto visible debe formar parte de su nombre accesible",
    help: "Los elementos deben tener su texto visible como parte de su nombre accesible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=es",
    tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
    actIds: ["2ee8b8"],
  },
  {
    ruleId: "label-title-only",
    description:
      "Garantiza que cada elemento de formulario no está etiquetado únicamente mediante los atributos title o aria-describedby ",
    help: "Los elementos de formulario deben tener una etiqueta visible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=es",
    tags: ["cat.forms", "best-practice"],
  },
  {
    ruleId: "label",
    description: "Garantiza que cada elemento de formulario tiene una etiqueta",
    help: "Los elementos de formulario deben tener etiquetas",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=es",
    tags: [
      "cat.forms",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.n",
      "ACT",
    ],
    actIds: ["e086e5"],
  },
  {
    ruleId: "landmark-banner-is-top-level",
    description:
      "Garantiza que el punto de referencia banner está en el nivel superior",
    help: "El punto de referencia banner no debe estar contenido en otro punto de referencia",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-complementary-is-top-level",
    description:
      "Garantiza que el punto de referencia complementary o aside está en el nivel superior",
    help: "Aside no debe estar contenido en otro punto de referencia",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-contentinfo-is-top-level",
    description:
      "Garantiza que el punto de referencia contentinfo está en el nivel superior",
    help: "El punto de referencia contentinfo no debe estar contenido en otro punto de referencia",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-main-is-top-level",
    description:
      "Garantiza que el punto de referencia main está en el nivel superior",
    help: "El punto de referencia main no debe estar contenido en otro punto de referencia",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-banner",
    description:
      "Garantiza que el documento tiene, como mucho, un punto de referencia banner",
    help: "El documento no debe tener más de un punto de referencia banner",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-contentinfo",
    description:
      "Garantiza que el documento tiene, como mucho, un punto de referencia contentinfo",
    help: "El documento no debe tener más de un punto de referencia contentinfo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-main",
    description: "Ensures the document has at most one main landmark",
    help: "Document should not have more than one main landmark",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-one-main",
    description:
      "Garantiza que el documento solo tiene un punto de referencia main y que cada marco incorporado en la página tiene, como mucho, un punto de referencia main",
    help: "El documento debe tener un punto de referencia main",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-unique",
    description:
      "Los puntos de referencia deben tener una única combinación de role o role/label/title (es decir, un nombre accesible único)",
    help: "Garantiza que los puntos de referencia son únicos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "link-in-text-block",
    description: "Los enlaces pueden distinguirse sin depender del color",
    help: "Los enlaces deben distinguirse del texto adyacente por un medio que no dependa del color",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=es",
    tags: ["cat.color", "wcag2a", "wcag141"],
  },
  {
    ruleId: "link-name",
    description: "Garantiza que los enlaces tienen texto discernible",
    help: "Los enlaces deben tener texto discernible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=es",
    tags: [
      "cat.name-role-value",
      "wcag2a",
      "wcag412",
      "wcag244",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["c487ae"],
  },
  {
    ruleId: "list",
    description: "Garantiza que las listas están estructuradas correctamente",
    help: "<ul> y <ol> solo deben contener directamente elementos <li>, <script> o <template>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=es",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "listitem",
    description: "Garantiza que los elementos <li> se utilizan semánticamente",
    help: "Los elementos <li> deben estar contenidos en un <ul> o un <ol>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=es",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "marquee",
    description: "Garantiza que no se usan elementos <marquee>",
    help: "Los elementos <marquee> están obsoletos y no deben usarse",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=es",
    tags: ["cat.parsing", "wcag2a", "wcag222"],
  },
  {
    ruleId: "meta-refresh-no-exceptions",
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: "Delayed refresh must not be used",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=es",
    tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
    actIds: ["bisz58"],
  },
  {
    ruleId: "meta-refresh",
    description: 'Garantiza que no se usa <meta http-equiv="refresh">',
    help: "El refresco programado no debe existir",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=es",
    tags: ["cat.time-and-media", "wcag2a", "wcag221"],
    actIds: ["bc659a", "bisz58"],
  },
  {
    ruleId: "meta-viewport-large",
    description:
      'Garantizar que <meta name="viewport"> puede ampliarse en grado significativo',
    help: "Los usuarios deben poder hacer zum y ampliar el texto hasta 500%",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=es",
    tags: ["cat.sensory-and-visual-cues", "best-practice"],
  },
  {
    ruleId: "meta-viewport",
    description:
      'Garantiza que <meta name="viewport"> no impide la ampliación y el zum en el texto',
    help: "No debe impedirse el zum y la ampliación",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=es",
    tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
    actIds: ["b4f0c3"],
  },
  {
    ruleId: "nested-interactive",
    description:
      "Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",
    help: "Interactive controls must not be nested",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "wcag2a", "wcag412"],
    actIds: ["307n5z"],
  },
  {
    ruleId: "no-autoplay-audio",
    description:
      "Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",
    help: "<video> or <audio> elements must not play automatically",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=es",
    tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT"],
    actIds: ["80f0bf"],
  },
  {
    ruleId: "object-alt",
    description:
      "Garantiza que los elementos <object> tienen texto alternativo",
    help: "Los elementos <object> deben tener texto alternativo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag111",
      "section508",
      "section508.22.a",
    ],
    actIds: ["8fc3b6"],
  },
  {
    ruleId: "p-as-heading",
    description:
      "Garantizar que los elementos p no se usan para diseñar encabezados",
    help: "No se usa texto en negrita, cursiva o tamaño de fuente para dar estilo de encabezados a elementos p",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=es",
    tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
  },
  {
    ruleId: "page-has-heading-one",
    description:
      "Garantizar que la página, o al menos uno de sus marcos, contiene un encabezado de nivel 1",
    help: "La página debe contener un encabezado de nivel 1",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=es",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "presentation-role-conflict",
    description:
      "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",
    help: "Ensure elements marked as presentational are consistently ignored",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=es",
    tags: ["cat.aria", "best-practice", "ACT"],
    actIds: ["46ca7f"],
  },
  {
    ruleId: "region",
    description:
      "Garantiza que todo el contenido de la página está incluido en puntos de referencia",
    help: "Todo el contenido de la página debe estar incluido en puntos de referencia",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "role-img-alt",
    description:
      "Garantiza que los elementos [role='img'] tienen texto alternativo",
    help: "Los elementos [role='img'] tienen un texto alternativo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag111",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["23a2a8"],
  },
  {
    ruleId: "scope-attr-valid",
    description:
      "Garantiza que el atributo scope se usa correctamente en las tablas",
    help: "El atributo scope debería usarse correctamente",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=es",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "scrollable-region-focusable",
    description:
      "Los elementos que tienen contenido que puede desplazarse verticalmente (en 'scroll') deberían ser accesibles mediante el teclado",
    help: "Asegurar que la región de desplazamiento vertical ('scroll') tiene acceso por teclado",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["0ssw9k"],
  },
  {
    ruleId: "select-name",
    description: "Ensures select element has an accessible name",
    help: "Select element must have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=es",
    tags: [
      "cat.forms",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.n",
      "ACT",
    ],
    actIds: ["e086e5"],
  },
  {
    ruleId: "server-side-image-map",
    description:
      "Garantiza que no se usan mapas de imágenes del lado del servidor",
    help: "No deben usarse mapas de imágenes del lado del servidor",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag211",
      "section508",
      "section508.22.f",
    ],
  },
  {
    ruleId: "skip-link",
    description:
      "Garantizar que todos los enlaces de salto ('skip') tienen un destino que admite el foco",
    help: "El destino del enlace de salto ('skip') debería existir y admitir el foco",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "svg-img-alt",
    description:
      "Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
    help: "<svg> elements with an img role must have an alternative text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag111",
      "section508",
      "section508.22.a",
      "ACT",
    ],
    actIds: ["7d6734"],
  },
  {
    ruleId: "tabindex",
    description:
      "Garantiza que los valores del atributo tabindex no son mayores que 0",
    help: "Los elementos no deberían tener un tabindex mayor que 0",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=es",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "table-duplicate-name",
    description:
      "Garantizar que las tablas no tienen el mismo summary y caption",
    help: "El elemento <caption> no debería contener el mismo texto que el atributo summary",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=es",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "table-fake-caption",
    description:
      "Garantizar que las tablas con título usan el elemento <caption>.",
    help: "Las celdas de datos o de encabezados no deberían usarse para dar título a una tabla de datos.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=es",
    tags: [
      "cat.tables",
      "experimental",
      "wcag2a",
      "wcag131",
      "section508",
      "section508.22.g",
    ],
  },
  {
    ruleId: "target-size",
    description: "Ensure touch target have sufficient size and space",
    help: "All touch targets must be 24px large, or leave sufficient space",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=es",
    tags: ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
  },
  {
    ruleId: "td-has-header",
    description:
      "Garantizar que cada celda de datos no vacía de una tabla grande tiene uno o más encabezados de tabla",
    help: "Todos los elementos td no vacíos de una tabla mayor que 3 por 3 deben tener un encabezado de tabla asociado",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=es",
    tags: [
      "cat.tables",
      "experimental",
      "wcag2a",
      "wcag131",
      "section508",
      "section508.22.g",
    ],
  },
  {
    ruleId: "td-headers-attr",
    description:
      "Garantizar que cada celda que use los encabezados en una tabla haga referencia a otra celda de esa tabla",
    help: "Todas las celdas de un elemento table que usen el atributo headers deben hacer referencia solo a otras celdas de esa misma tabla",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=es",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["a25f45"],
  },
  {
    ruleId: "th-has-data-cells",
    description:
      "Garantizar que cada encabezado de tabla en una tabla de datos hace referencia a celdas de datos",
    help: "Todos los elementos th y elementos con role=columnheader/rowheader deben tener las celdas de datos que describen",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=es",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["d0f69e"],
  },
  {
    ruleId: "valid-lang",
    description: "Garantiza que los atributos lang tienen valores válidos",
    help: "El atributo lang debe tener un valor válido",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=es",
    tags: ["cat.language", "wcag2aa", "wcag312", "ACT"],
    actIds: ["de46e4"],
  },
  {
    ruleId: "video-caption",
    description: "Garantiza que los elementos <video> tienen subtítulos",
    help: "Los elementos <video> deben tener subtítulos",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=es",
    tags: [
      "cat.text-alternatives",
      "wcag2a",
      "wcag122",
      "section508",
      "section508.22.a",
    ],
    actIds: ["eac66b"],
  },
];
