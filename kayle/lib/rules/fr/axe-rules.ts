/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: "accesskeys",
    description:
      "Vérifier que chaque valeur de l’attribut accesskey est unique",
    help: "La valeur de l’attribut accesskey doit être unique",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "area-alt",
    description:
      "Vérifier que les éléments <area> d’une image réactive ont une alternative textuelle",
    help: "Les éléments <area> actifs doivent avoir une alternative textuelle",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=fr",
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
      "Vérifier que les attributs ARIA sont autorisés pour le rôle d’un élément",
    help: "Les éléments doivent seulement utiliser les attributs ARIA autorisés",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5c01ea"],
  },
  {
    ruleId: "aria-allowed-role",
    description:
      "Vérifier que l’attribut role a une valeur valide pour cet élément",
    help: "Le rôle ARIA doit être valide pour cet élément",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=fr",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-command-name",
    description:
      'Vérifier que chaque "button", "link" et "menuitem" ARIA a un nom accessible',
    help: "Les commandes ARIA doivent avoir un nom accessible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["97a4e1"],
  },
  {
    ruleId: "aria-dialog-name",
    description:
      'Vérifier que chaque nœud ARIA "dialog" et "alertdialog" a un nom accessible',
    help: 'Les nœuds ARIA "dialog" and "alertdialog" doivent avoir un nom accessible',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-hidden-body",
    description:
      "Vérifier qu’aria-hidden='true' n’est pas présent sur le corps du document (élément body)",
    help: "aria-hidden='true' ne doit pas être présent sur <body>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-hidden-focus",
    description:
      "Vérifier qu’aria-hidden n’est pas assigné aux éléments qui reçoivent le focus au clavier",
    help: "aria-hidden n’est pas assigné aux éléments qui reçoivent le focus au clavier",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=fr",
    tags: ["cat.name-role-value", "wcag2a", "wcag412"],
    actIds: ["6cfa84"],
  },
  {
    ruleId: "aria-input-field-name",
    description:
      "Vérifier que chaque champ de formulaire avec ARIA est doté d’un intitulé accessible",
    help: "Les champs de formulaire ARIA ont un intitulé accessible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-meter-name",
    description: 'Vérifier que chaque nœud ARIA "meter" a un nom accessible',
    help: 'Les nœuds ARIA "meter" doivent avoir un nom accessible',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-progressbar-name",
    description:
      'Vérifier que chaque nœud ARIA "progressbar" a un nom accessible',
    help: 'Les nœuds ARIA "progressbar" doivent avoir un nom accessible',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-required-attr",
    description:
      "Vérifier que les éléments avec des rôles ARIA ont les attributs ARIA requis",
    help: "Les attributs ARIA requis doivent être présents",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["4e8ab6"],
  },
  {
    ruleId: "aria-required-children",
    description:
      "Vérifier que les éléments avec un rôle ARIA comportent aussi des rôles pour les descendants directs",
    help: "Certains rôles ARIA doivent comporter des descendants directs spécifiques",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["bc4a75", "ff89c9"],
  },
  {
    ruleId: "aria-required-parent",
    description:
      "Vérifier que les éléments avec un rôle ARIA requérant des rôles parents y sont contenus",
    help: "Certains rôles ARIA doivent être contenus par des parents spécifiques",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["ff89c9"],
  },
  {
    ruleId: "aria-roledescription",
    description:
      "Vérifier qu’aria-roledescription n’est utilisé que sur des éléments qui ont un rôle implicite ou explicite",
    help: "Utiliser aria-roledescription sur les éléments dont le rôle a une valeur sémantique",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-roles",
    description:
      "Vérifier que les éléments avec un attribut role utilisent une valeur valide",
    help: "Les rôles ARIA doivent se conformer aux valeurs valides",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["674b10"],
  },
  {
    ruleId: "aria-text",
    description:
      'Vérifier que "role=text" est uniquement utilisé sur des éléments sans descendants focalisables',
    help: '"role=text" ne doit pas avoir de descendant focalisable',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=fr",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-toggle-field-name",
    description:
      "Vérifier que chaque champ de basculement ARIA a un libellé accessible",
    help: "Les champs de basculement ARIA ont un libellé accessible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-tooltip-name",
    description: 'Vérifier que chaque nœud ARIA "tooltip" a un nom accessible',
    help: 'Les nœuds ARIA "tooltip" doivent avoir un nom accessible',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-treeitem-name",
    description: 'Vérifier que chaque nœud ARIA "treeitem" a un nom accessible',
    help: 'Les nœuds ARIA "treeitem" doivent avoir un nom accessible',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=fr",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-valid-attr",
    description:
      "Vérifier que les attributs commençant par aria- sont des attributs ARIA valides",
    help: "Les attributs ARIA doivent se conformer aux noms valides",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5f99a7"],
  },
  {
    ruleId: "aria-valid-attr-value",
    description:
      "Vérifier que tous les attributs ARIA comportent des valeurs valides",
    help: "Les attributs ARIA doivent comporter des valeurs valides",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=fr",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["6a7281"],
  },
  {
    ruleId: "audio-caption",
    description: "Vérifier que les éléments <audio> ont des sous-titres",
    help: "Les éléments <audio> doivent avoir une piste de sous-titres",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=fr",
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
      "Vérifier que l’attribut autocomplete est correctement adapté au champ de formulaire",
    help: "L’attribut autocomplete doit être utilisé correctement",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=fr",
    tags: ["cat.forms", "wcag21aa", "wcag135", "ACT"],
    actIds: ["73f2c2"],
  },
  {
    ruleId: "avoid-inline-spacing",
    description:
      "Vérifier que l’espacement du texte défini à travers une attribution de styles peut être ajusté via une feuille de style personnalisée",
    help: "L’espacement du texte inline peut être ajusté avec des feuilles de style personnalisées",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=fr",
    tags: ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
    actIds: ["24afc2", "9e45ec", "78fd32"],
  },
  {
    ruleId: "blink",
    description: "Vérifier que l’élément <blink> n’est pas utilisé",
    help: "L’élément <blink> est déprécié et ne doit pas être utilisé",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=fr",
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
    description: "Vérifier que les boutons ont un texte perceptible",
    help: "Les boutons doivent avoir un texte perceptible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=fr",
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
      "Vérifier que chaque page dispose au minimum d’un mécanisme de contournement de la navigation pour accéder directement au contenu",
    help: "Chaque page doit fournir des moyens de contourner les contenus répétés",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=fr",
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
    ruleId: "color-contrast",
    description:
      "Vérifier que les contrastes entre le premier plan et l’arrière-plan rencontrent les seuils de contrastes exigés par les WCAG 2 AA",
    help: "Les éléments doivent avoir un contraste de couleurs suffisant",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=fr",
    tags: ["cat.color", "wcag2aa", "wcag143", "ACT"],
    actIds: ["afw4f7", "09o5cg"],
  },
  {
    ruleId: "color-contrast-enhanced",
    description:
      "Vérifier que les contrastes entre le premier plan et l’arrière-plan rencontrent les seuils de contrastes exigés par les WCAG 2 AAA",
    help: "Les éléments doivent avoir un contraste de couleurs suffisant",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=fr",
    tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
    actIds: ["09o5cg"],
  },
  {
    ruleId: "css-orientation-lock",
    description:
      "Vérifier que les contenus ne sont pas limités à une orientation spécifique de l’écran, et que le contenu est utilisable sous toutes les orientations de l’écran",
    help: "Les CSS Media queries ne sont pas utilisées pour verrouiller l’orientation de l’écran",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=fr",
    tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
    actIds: ["b33eff"],
  },
  {
    ruleId: "definition-list",
    description: "Vérifier que les éléments <dl> sont correctement structurés",
    help: "Les éléments <dl> ne doivent contenir directement que des groupes d’éléments <dt> et <dd> correctement ordonnés, ou des éléments <script> ou <template>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=fr",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "dlitem",
    description:
      "Vérifier que les éléments <dt> et <dd> sont contenus dans un élément <dl>",
    help: "Les éléments <dt> et <dd> doivent être contenus dans un élément <dl>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=fr",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "document-title",
    description:
      "Vérifier que chaque document HTML contient un élément <title> non vide",
    help: "Chaque document doit avoir un élément <title> pour aider à la navigation",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=fr",
    tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
    actIds: ["2779a5"],
  },
  {
    ruleId: "empty-heading",
    description: "Vérifier que les niveaux de titre ont un texte perceptible",
    help: "Les niveaux de titre ne doivent pas être vides",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=fr",
    tags: ["cat.name-role-value", "best-practice"],
    actIds: ["ffd0e9"],
  },
  {
    ruleId: "empty-table-header",
    description:
      "Vérifier que les entêtes de tableaux ont un texte perceptible",
    help: "Les textes d’entêtes de tableaux ne doivent pas être vides",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=fr",
    tags: ["cat.name-role-value", "best-practice"],
  },
  {
    ruleId: "focus-order-semantics",
    description:
      "Vérifier que les éléments dans le parcours du focus ont un rôle approprié",
    help: "Les éléments dans le parcours du focus doivent avoir un rôle approprié pour le contenu interactif",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "best-practice", "experimental"],
  },
  {
    ruleId: "form-field-multiple-labels",
    description:
      "Vérifier que le champ de formulaire n’a pas plusieurs éléments d’étiquettes",
    help: "Le champ de formulaire ne devrait pas comporter plusieurs éléments d’étiquettes",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=fr",
    tags: ["cat.forms", "wcag2a", "wcag332"],
  },
  {
    ruleId: "frame-focusable-content",
    description:
      "Vérifier que les éléments <frame> et <iframe> avec du contenu focalisable n’ont pas de tabindex=-1",
    help: "Les cadres avec du contenu focalisable ne doivent pas avoir tabindex=-1",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["akn7bn"],
  },
  {
    ruleId: "frame-tested",
    description:
      "Vérifier que les éléments <iframe> et <frame> contiennent le script axe-core",
    help: "Les cadres doivent être testés avec axe-core",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=fr",
    tags: ["cat.structure", "review-item", "best-practice"],
  },
  {
    ruleId: "frame-title",
    description:
      "Vérifier que les éléments <iframe> et <frame> ont un attribut title non vide",
    help: "Chaque cadre doit avoir un attribut title",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=fr",
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
    ruleId: "frame-title-unique",
    description:
      "Vérifier que les éléments <iframe> et <frame> ont un attribut title unique",
    help: "Chaque cadre doit avoir un attribut title unique",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=fr",
    tags: ["cat.text-alternatives", "wcag412", "wcag2a"],
    actIds: ["4b1c6c"],
  },
  {
    ruleId: "heading-order",
    description:
      "Vérifier que la hiérarchie des niveaux de titre est sémantiquement correcte",
    help: "Les niveaux de titre doivent s’incrémenter d’un seul niveau à la fois",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "hidden-content",
    description: "Informer les utilisateurs sur les contenus cachés",
    help: "Le contenu caché sur la page ne peut pas être analysé",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=fr",
    tags: ["cat.structure", "experimental", "review-item", "best-practice"],
  },
  {
    ruleId: "html-has-lang",
    description: "Vérifier que chaque document HTML a un attribut lang",
    help: "L’élément <html> doit avoir un attribut lang",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=fr",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["b5c3f8"],
  },
  {
    ruleId: "html-lang-valid",
    description:
      "Vérifier que l’attribut lang sur l’élément <html> a une valeur valide",
    help: "L’élément <html> doit avoir une valeur valide pour l’attribut lang",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=fr",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["bf051a"],
  },
  {
    ruleId: "html-xml-lang-mismatch",
    description:
      "Vérifier que les éléments HTML avec les attributs lang et xml:lang valides indiquent la même langue de base pour la page",
    help: "Les éléments HTML avec les attributs lang et xml:lang doivent avoir la même langue de base",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=fr",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["5b7ae0"],
  },
  {
    ruleId: "identical-links-same-purpose",
    description:
      "Vérifier que les liens qui ont le même nom accessible ont la même finalité",
    help: "Les liens avec le même nom ont la même finalité",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "wcag2aaa", "wcag249"],
    actIds: ["b20e66"],
  },
  {
    ruleId: "image-alt",
    description:
      "Vérifier que les éléments <img> ont une alternative textuelle, ou un rôle de type 'none' ou 'presentation'",
    help: "Les images doivent avoir une alternative textuelle",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=fr",
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
      "Vérifier que l’intitulé des liens et boutons n’est pas répété dans l’alternative de l’image",
    help: "L’intitulé des liens et boutons ne doit pas être répété dans l’alternative de l’image",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=fr",
    tags: ["cat.text-alternatives", "best-practice"],
  },
  {
    ruleId: "input-button-name",
    description:
      "Vérifier que la valeur textuelle des contrôles de boutons est perceptible",
    help: "La valeur textuelle des contrôles de boutons doit être perceptible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=fr",
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
      'Vérifier que les éléments <input type="image"> ont une alternative textuelle',
    help: "Les boutons images doivent avoir une alternative textuelle",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=fr",
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
    ruleId: "label",
    description: "Vérifier que chaque élément de formulaire a une étiquette",
    help: "Chaque élément de formulaire doit avoir une étiquette",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=fr",
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
    ruleId: "label-content-name-mismatch",
    description:
      "Vérifier que dans le cas d’éléments identifiés par leur contenu textuel, le texte visible fait partie de l’intitulé accessible",
    help: "Le contenu textuel des éléments doit aussi se retrouver dans leur intitulé accessible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
    actIds: ["2ee8b8"],
  },
  {
    ruleId: "label-title-only",
    description:
      "Vérifier que chaque élément de formulaire n’est pas labellisé uniquement par les attributs title ou aria-describedby",
    help: "Chaque élément de formulaire doit avoir un label visible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=fr",
    tags: ["cat.forms", "best-practice"],
  },
  {
    ruleId: "landmark-banner-is-top-level",
    description:
      "La région banner ne devrait pas être contenue dans une autre région",
    help: "La région banner doit être au niveau le plus haut",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-complementary-is-top-level",
    description:
      "Vérifier que les landmarks complementary ou aside se retrouvent au plus haut niveau",
    help: "Aside ne doit pas être contenu dans un autre landmark",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-contentinfo-is-top-level",
    description:
      "La région contentinfo ne devrait pas être contenue dans une autre région",
    help: "La région contentinfo doit être au niveau le plus haut",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-main-is-top-level",
    description:
      "La région main ne devrait pas être contenue dans une autre région",
    help: "La région main doit être au niveau le plus haut",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-banner",
    description: "Vérifier que le document n’a pas plus d’une région banner",
    help: "Le document contient au plus une région banner",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-contentinfo",
    description:
      "Vérifier que le document n’a pas plus d’une région contentinfo",
    help: "Le document contient au plus une région contentinfo",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-main",
    description:
      "Vérifier que le document a tout au plus, un seul landmark main",
    help: "Le document ne doit pas contenir plus d’un landmark main",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-one-main",
    description:
      "Vérifier qu’une navigation pointe vers le contenu principal de la page. Si la page contient des iframes, chaque iframe ne doit contenir au plus qu’une région main",
    help: "La page doit contenir une région main",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-unique",
    description:
      "Les landmarks doivent comporter un rôle unique, ou une étiquette accessible par la combinaison de role/label/title",
    help: "Vérifier que chaque landmark est unique",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "link-in-text-block",
    description:
      "Les liens doivent pouvoir être distingués autrement que par la couleur",
    help: "Les liens doivent pouvoir être distingués du texte environnant d’une façon qui ne repose pas sur la couleur",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=fr",
    tags: ["cat.color", "wcag2a", "wcag141"],
  },
  {
    ruleId: "link-name",
    description: "Vérifier que les liens ont un texte perceptible",
    help: "Les liens doivent avoir un texte perceptible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=fr",
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
    description: "Vérifier que les listes sont structurées correctement",
    help: "<ul> et <ol> ne doivent contenir directement que des éléments <li>, <script> ou <template>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=fr",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "listitem",
    description: "Vérifier que les éléments <li> sont utilisés sémantiquement",
    help: "Les éléments <li> doivent être contenus dans un élément <ul> ou <ol>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=fr",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "marquee",
    description: "Vérifier que l’élément <marquee> n’est pas utilisé",
    help: "L’élément <marquee> est déprécié et ne doit pas être utilisé",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=fr",
    tags: ["cat.parsing", "wcag2a", "wcag222"],
  },
  {
    ruleId: "meta-refresh",
    description: 'Vérifier que <meta http-equiv="refresh"> n’est pas utilisé',
    help: "La page HTML ne doit pas être actualisée automatiquement",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=fr",
    tags: ["cat.time-and-media", "wcag2a", "wcag221"],
    actIds: ["bc659a", "bisz58"],
  },
  {
    ruleId: "meta-refresh-no-exceptions",
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: "Delayed refresh must not be used",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=fr",
    tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
    actIds: ["bisz58"],
  },
  {
    ruleId: "meta-viewport",
    description:
      'Vérifier que <meta name="viewport"> ne désactive pas le zoom ni l’agrandissement',
    help: "Le zoom et l’agrandissement ne doivent pas être désactivés",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=fr",
    tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
    actIds: ["b4f0c3"],
  },
  {
    ruleId: "meta-viewport-large",
    description:
      'Vérifier que <meta name="viewport"> permet un agrandissement significatif',
    help: "Les utilisateurs devraient pouvoir zoomer et agrandir le texte jusqu’à 500%",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=fr",
    tags: ["cat.sensory-and-visual-cues", "best-practice"],
  },
  {
    ruleId: "nested-interactive",
    description:
      "Les éléments interactifs imbriqués ne sont pas annoncés par les lecteurs d’écrans",
    help: "Verifier que les éléments interactifs ne sont pas imbriqués",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "wcag2a", "wcag412"],
    actIds: ["307n5z"],
  },
  {
    ruleId: "no-autoplay-audio",
    description:
      "Vérifier que les éléments <video> ou <audio> ne jouent pas de son automatiquement pendant plus de 3 secondes sans mécanisme de contrôle pour stopper la lecture ou couper le son.",
    help: "Les éléments <video> ou <audio> ne jouent pas de son automatiquement",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=fr",
    tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT"],
    actIds: ["80f0bf"],
  },
  {
    ruleId: "object-alt",
    description:
      "Vérifier que les éléments <object> ont une alternative textuelle",
    help: "Les éléments <object> doivent avoir une alternative textuelle",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=fr",
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
      "Vérifier que les éléments p ne sont pas utilisés pour styler des niveaux de titres",
    help: "La graisse, le style et le corps du texte ne doivent pas être utilisés pour styler les éléments p comme des niveaux de titres",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
  },
  {
    ruleId: "page-has-heading-one",
    description:
      "Vérifier que la page, ou au moins une de ses iframes, contient un titre de niveau 1",
    help: "La page doit contenir un titre de niveau 1",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=fr",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "presentation-role-conflict",
    description:
      "Signaler les éléments dont le rôle est 'none' ou 'presentation' et qui déclenchent la résolution de conflits de rôles.",
    help: "Les éléments avec un rôle 'none' ou 'presentation' doivent être signalés",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=fr",
    tags: ["cat.aria", "best-practice", "ACT"],
    actIds: ["46ca7f"],
  },
  {
    ruleId: "region",
    description: "Vérifier que tout le contenu est localisé dans une région",
    help: "Le contenu doit être localisé dans une région",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "role-img-alt",
    description:
      "Vérifier que les éléments avec [role='img'] ont une équivalence textuelle",
    help: "Les éléments avec [role='img'] ont une équivalence textuelle",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=fr",
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
      "Vérifier que l’attribut scope est utilisé correctement dans les tableaux",
    help: "L’attribut scope doit être utilisé correctement",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=fr",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "scrollable-region-focusable",
    description:
      "Les éléments dont le contenu défile devraient être accessibles au clavier",
    help: "Vérifier que les régions défilantes sont accessibles au clavier",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["0ssw9k"],
  },
  {
    ruleId: "select-name",
    description: "Vérifier que l’élément 'select' a un nom accessible",
    help: "L’élément 'select' doit avoir un nom accessible",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=fr",
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
      "Vérifier que les images réactives côté serveur ne sont pas utilisées",
    help: "Les images réactives côté serveur ne devraient pas être utilisées",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=fr",
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
      "Vérifier que tous les liens d’évitement ont une cible pouvant recevoir le focus",
    help: "La cible d’un lien d’évitement doit exister et pouvoir recevoir le focus",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "svg-img-alt",
    description:
      "Vérifier que les éléments svg avec un rôle 'img', 'graphics-document', ou 'graphics-symbol' ont un texte accessible",
    help: "Les éléments svg avec un rôle 'img' ont un texte alternatif",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=fr",
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
      "Vérifier que les valeurs de l’attribut tabindex ne sont pas supérieures à 0",
    help: "Aucun élément ne devrait avoir un tabindex avec une valeur supérieure à zéro",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=fr",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "table-duplicate-name",
    description:
      "Vérifier que chaque tableau n’ait pas un summary et un caption identiques",
    help: "L’élément <caption> ne devrait pas contenir le même texte que l’attribut summary",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=fr",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "table-fake-caption",
    description:
      "Vérifier que les tableaux avec une légende utilisent l’élément <caption>",
    help: "Les données ou les cellules d’entête ne devraient pas être utilisées pour légender un tableau de données",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=fr",
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
      "https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=fr",
    tags: ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
  },
  {
    ruleId: "td-has-header",
    description:
      "Vérifier que chaque cellule de données non vide dans un tableau de données a une ou plusieurs cellules d’entête",
    help: "Chaque élément td non vide dans un tableau plus grand que 3 × 3 doit avoir une cellule d’entête associée",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=fr",
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
      "Vérifier que chaque cellule utilisant l’attribut headers fait référence à une autre cellule du même tableau",
    help: "Les cellules utilisant l’attribut headers ne doivent faire référence qu’à d’autres cellules du même tableau",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=fr",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["a25f45"],
  },
  {
    ruleId: "th-has-data-cells",
    description:
      "Vérifier que chaque cellule d’entête dans un tableau de données fait référence à des cellules de données",
    help: "Tous les éléments th et ceux avec role=columnheader/rowheader doivent décrire des cellules de données",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=fr",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["d0f69e"],
  },
  {
    ruleId: "valid-lang",
    description: "Vérifier que les attributs lang ont des valeurs valides",
    help: "L’attribut lang doit avoir une valeur valide",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=fr",
    tags: ["cat.language", "wcag2aa", "wcag312", "ACT"],
    actIds: ["de46e4"],
  },
  {
    ruleId: "video-caption",
    description: "Vérifier que les éléments <video> ont des sous-titres",
    help: "Les éléments <video> doivent avoir des sous-titres",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=fr",
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
