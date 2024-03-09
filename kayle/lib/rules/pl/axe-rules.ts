/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: "accesskeys",
    description: "Każdy atrybut accessskey jest unikalny.",
    help: "Wartość atrybutu accessskey musi być unikalna.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "area-alt",
    description:
      "Elementy <area> w graficznych mapach odnośników mają tekst zastępczy.",
    help: "Elementy aktywne <area> muszą mieć tekst alternatywny.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=pl",
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
    description: "Użyte atrybuty ARIA są dozwolone dla roli elementu.",
    help: "Elementy mogą używać tylko dozwolonych atrybutów ARIA.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5c01ea"],
  },
  {
    ruleId: "aria-allowed-role",
    description: "Atrybut role ma odpowiednią wartość dla danego elementu.",
    help: "Rola ARIA musi być odpowiednia dla danego elementu.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=pl",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-command-name",
    description:
      "Każdy przycisk, łącze i pozycja menu (menuitem) ARIA ma dostępną nazwę.",
    help: "Polecenia ARIA muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["97a4e1"],
  },
  {
    ruleId: "aria-dialog-name",
    description:
      "Każde okno dialogowe ARIA i węzeł alertdialog ma dostępną nazwę.",
    help: "Okno dialogowe ARIA i węzły alertdialog muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-hidden-body",
    description: "Element <body> nie ma atrybutu aria-hidden='true'.",
    help: "Element <body> nie może mieć atrybutu aria-hidden='true'.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-hidden-focus",
    description:
      "Elementy z aria-hidden nie mogą obejmować elementów przyjmujących fokus.",
    help: "Ukryty element ARIA nie może zawierać elementów przyjmujących fokus.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=pl",
    tags: ["cat.name-role-value", "wcag2a", "wcag412"],
    actIds: ["6cfa84"],
  },
  {
    ruleId: "aria-input-field-name",
    description: "Każde pole wejściowe ARIA ma dostępną nazwę.",
    help: "Pola wejściowe ARIA muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-meter-name",
    description: "Każdy licznik (meter) oparty na ARIA ma dostępną nazwę.",
    help: "Liczniki (meter) ARIA muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-progressbar-name",
    description: "Każdy pasek postępu (progressbar) ARIA ma dostępną nazwę.",
    help: "Paski postępu (progressbar) ARIA muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-required-attr",
    description:
      "Elementy z rolami ARIA mają wszystkie wymagane atrybuty ARIA.",
    help: "Wymagane atrybuty ARIA muszą istnieć.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["4e8ab6"],
  },
  {
    ruleId: "aria-required-children",
    description:
      "Elementy z rolą ARIA, które wymagają ról potomnych, zawierają je.",
    help: "Niektóre role ARIA muszą obejmować określone dzieci.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["bc4a75", "ff89c9"],
  },
  {
    ruleId: "aria-required-parent",
    description:
      "Elementy z rolą ARIA, które wymagają ról nadrzędnych, są zawarte w elementach z takimi rolami.",
    help: "Niektóre role ARIA muszą być wewnątrz określonych elementów rodziców.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["ff89c9"],
  },
  {
    ruleId: "aria-roledescription",
    description:
      "Atrybut aria-roledescription jest używany tylko w elementach, które mają rolę określoną domyślnie lub jawnie.",
    help: "Użyj aria-roledescription w elementach o roli semantycznej.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-roles",
    description:
      "Wszystkie elementy z atrybutem roli używają prawidłowej wartości tego atrybutu.",
    help: "Stosowane role ARIA muszą być zgodne z obowiązującymi wartościami.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["674b10"],
  },
  {
    ruleId: "aria-text",
    description:
      'Atrybut "role=text" jest używany dla elementów, które nie mają potomków przyjmujących fokus',
    help: '"role=text" nie powinien mieć potomków przyjmujących fokus.',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=pl",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-toggle-field-name",
    description: "Każdy przełącznik (toggle) ARIA ma dostępną nazwę.",
    help: "Przełączniki (toggle) ARIA muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-tooltip-name",
    description: "Każda podpowiedź (tooltip) ARIA ma dostępną nazwę.",
    help: "Podpowiedzi (tooltip) ARIA muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-treeitem-name",
    description:
      "Każdy węzeł drzewa elementów (treeitem) ARIA ma dostępną nazwę.",
    help: "Węzły drzewa elementów ARIA muszą mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=pl",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-valid-attr-value",
    description: "Wszystkie atrybuty ARIA mają poprawne wartości.",
    help: "Atrybuty ARIA muszą mieć poprawne wartości.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["6a7281"],
  },
  {
    ruleId: "aria-valid-attr",
    description:
      "Atrybuty, które rozpoczynają się od aria-, są poprawnymi atrybutami ARIA.",
    help: "Atrybuty ARIA muszą być mieć poprawne nazwy.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=pl",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5f99a7"],
  },
  {
    ruleId: "audio-caption",
    description: "Elementy <audio> mają napisy rozszerzone.",
    help: "Elementy <audio> muszą mieć ścieżkę z napisami.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=pl",
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
      "Atrybut autocomplete jest poprawny i odpowiedni dla pola formularza.",
    help: "Atrybut autocomplete musi być użyty poprawnie.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=pl",
    tags: ["cat.forms", "wcag21aa", "wcag135", "ACT"],
    actIds: ["73f2c2"],
  },
  {
    ruleId: "avoid-inline-spacing",
    description:
      "Odstępy w tekście ustawione za pomocą atrybutów stylu mogą być regulowane za pomocą własnych arkuszy stylów.",
    help: "Odstępy w tekście muszą być regulowane za pomocą własnych arkuszy stylów.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=pl",
    tags: ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
    actIds: ["24afc2", "9e45ec", "78fd32"],
  },
  {
    ruleId: "blink",
    description: "Elementy <blink> nie są używane.",
    help: "Elementy <blink> są przestarzałe i nie mogą być używane.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=pl",
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
    description: "Przyciski mają odróżniający je tekst.",
    help: "Przyciski muszą mieć odróżniający je tekst.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=pl",
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
      "Każda strona ma co najmniej jeden mechanizm, który pozwala ominąć nawigację i przejść od razu do treści.",
    help: "Strona musi mieć środki do ominięcia powtarzających się bloków treści.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=pl",
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
      "Kontrast między kolorami pierwszego planu i tła spełnia progi kontrastu WCAG 2 AAA.",
    help: "Elementy muszą mieć wystarczający kontrast kolorów.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=pl",
    tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
    actIds: ["09o5cg"],
  },
  {
    ruleId: "color-contrast",
    description:
      "Kontrast między kolorami pierwszego planu i tła spełnia progi kontrastu WCAG 2 AA.",
    help: "Elementy muszą mieć wystarczający kontrast kolorów.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=pl",
    tags: ["cat.color", "wcag2aa", "wcag143", "ACT"],
    actIds: ["afw4f7", "09o5cg"],
  },
  {
    ruleId: "css-orientation-lock",
    description:
      "Treść nie jest przypisana do żadnej konkretnej orientacji wyświetlacza i można ją obsługiwać we wszystkich orientacjach wyświetlacza.",
    help: "Zapytania medialne nie są wykorzystywane do blokowania orientacji wyświetlacza.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=pl",
    tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
    actIds: ["b33eff"],
  },
  {
    ruleId: "definition-list",
    description: "Elementy <dl> mają poprawną strukturę.",
    help: "Elementy <dl> mogą bezpośrednio zawierać tylko odpowiednio uporządkowane grupy <dt> i <dd> oraz elementy <script>, <template> lub <div>.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=pl",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "dlitem",
    description: "Elementy <dt> i <dd> znajdują się bezpośrednio w <dl>.",
    help: "Elementy <dt> i <dd> są wewnątrz elementu <dl>.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=pl",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "document-title",
    description: "Każdy dokument HTML ma niepusty element <title>.",
    help: "Dokumenty muszą mieć element <title> pomagający w nawigacji.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=pl",
    tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
    actIds: ["2779a5"],
  },
  {
    ruleId: "empty-heading",
    description: "Nagłówki mają odróżniający je tekst.",
    help: "Nagłówki nie mogą być puste.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=pl",
    tags: ["cat.name-role-value", "best-practice"],
    actIds: ["ffd0e9"],
  },
  {
    ruleId: "empty-table-header",
    description: "Upewnij się, że nagłówki tabel mają opisowy tekst.",
    help: "Tekst nagłówka tabeli nie może być pusty.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=pl",
    tags: ["cat.name-role-value", "best-practice"],
  },
  {
    ruleId: "focus-order-semantics",
    description:
      "Elementy w porządku otrzymywania fokusu mają odpowiednią rolę.",
    help: "Elementy w porządku otrzymywania fokusu muszą mieć rolę odpowiednią dla treści interaktywnych.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "best-practice", "experimental"],
  },
  {
    ruleId: "form-field-multiple-labels",
    description: "Pole formularza nie ma wielu etykiet (elementów label).",
    help: "Pole formularza nie powinno zawierać wielu elementów label.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=pl",
    tags: ["cat.forms", "wcag2a", "wcag332"],
  },
  {
    ruleId: "frame-focusable-content",
    description:
      "Elementy <frame> i <iframe> z treścią przyjmującą fokus nie mają tabindex=-1",
    help: "Ramki z treścią przyjmującą fokus nie mogą mieć tabindex=-1",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["akn7bn"],
  },
  {
    ruleId: "frame-tested",
    description:
      "Elementy <iframe> i <frame> muszą być testowane ze skryptem axe-core.",
    help: "Ramki muszą być testowane ze skryptem axe-core.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=pl",
    tags: ["cat.structure", "review-item", "best-practice"],
  },
  {
    ruleId: "frame-title-unique",
    description: "Elementy <frame> i <frame> mają unikalny atrybut title.",
    help: "Ramki (frame) muszą mieć unikalny atrybut title.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=pl",
    tags: ["cat.text-alternatives", "wcag412", "wcag2a"],
    actIds: ["4b1c6c"],
  },
  {
    ruleId: "frame-title",
    description: "Elementy <iframe> i <frame> mają niepusty atrybut title.",
    help: "Ramki muszą mieć atrybut title.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=pl",
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
    description: "Kolejność nagłówków jest semantycznie poprawna.",
    help: "Poziomy nagłówków powinny wzrastać tylko o jeden.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "hidden-content",
    description: "Informuje użytkowników o ukrytych treściach.",
    help: "Ukrytych treści na stronie nie można analizować.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=pl",
    tags: ["cat.structure", "experimental", "review-item", "best-practice"],
  },
  {
    ruleId: "html-has-lang",
    description: "Każdy dokument HTML ma atrybut lang.",
    help: "Element <html> musi mieć atrybut lang.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=pl",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["b5c3f8"],
  },
  {
    ruleId: "html-lang-valid",
    description: "Atrybut lang elementu <html> ma poprawną wartość.",
    help: "Element <html> musi mieć poprawną wartość atrybutu lang.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=pl",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["bf051a"],
  },
  {
    ruleId: "html-xml-lang-mismatch",
    description:
      "Element HTML z poprawnym atrybutem lang xml:lang ma ten sam podstawowy język strony.",
    help: "Element HTML z lang i xml:lang musi mieć ten sam język podstawowy.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=pl",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["5b7ae0"],
  },
  {
    ruleId: "identical-links-same-purpose",
    description: "Łącza o tej samej dostępnej nazwie służą temu samemu celowi.",
    help: "Łącza o tej samej nazwie mają ten sam cel.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "wcag2aaa", "wcag249"],
    actIds: ["b20e66"],
  },
  {
    ruleId: "image-alt",
    description:
      "Elementy <img> mają atrybut alt lub rolę none albo presentation.",
    help: "Obrazy muszą mieć tekst alternatywny.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=pl",
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
    description: "Tekst alternatywny obrazu nie jest powtarzany w tekście.",
    help: "Alternatywny tekst obrazów nie powinien być powtarzany w tekście.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=pl",
    tags: ["cat.text-alternatives", "best-practice"],
  },
  {
    ruleId: "input-button-name",
    description: "Przyciski input type=button mają odróżniający je tekst.",
    help: "Przyciski input type=button muszą mieć odróżniający je tekst.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=pl",
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
    description: 'Elementy <input type="image"> mają tekst alternatywny.',
    help: "Przyciski graficzne muszą mieć tekst alternatywny.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=pl",
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
      "Elementy oznakowane swoją treścią mają swój widoczny tekst jako część ich dostępnej nazwy",
    help: "Elementy muszą mieć swój widoczny tekst jako część ich dostępnej nazwy.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
    actIds: ["2ee8b8"],
  },
  {
    ruleId: "label-title-only",
    description:
      "Żaden element formularza nie jest oznaczony wyłącznie za pomocą atrybutu title lub aria-describedby.",
    help: "Element formularza powinien mieć widoczną etykietę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=pl",
    tags: ["cat.forms", "best-practice"],
  },
  {
    ruleId: "label",
    description: "Każdy element formularza ma etykietę.",
    help: "Element formularza musi mieć etykietę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=pl",
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
    description: "Obszar banner jest obszarem kluczowym najwyższego poziomu.",
    help: "Punkt orientacyjny banner nie może być zawarty wewnątrz innego obszaru kluczowego.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-complementary-is-top-level",
    description:
      "Obszar aside lub obszar z role=complementary są obszarami kluczowymi najwyższego poziomu.",
    help: "Punkt orientacyjny complementary nie może być zawarty wewnątrz innego obszaru kluczowego.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-contentinfo-is-top-level",
    description:
      "Obszar kluczowy z role=contentinfo jest obszarem kluczowym najwyższego poziomu.",
    help: "Punkt orientacyjny contentinfo nie może być zawarty wewnątrz innego obszaru kluczowego.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-main-is-top-level",
    description: "Obszar main jest obszarem kluczowym najwyższego poziomu.",
    help: "Punkt orientacyjny main nie może być zawarty wewnątrz innego obszaru kluczowego.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-banner",
    description: "Dokument ma co najwyżej jeden punkt orientacyjny banner.",
    help: "Dokument nie może mieć więcej niż jednego obszaru kluczowego banner.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-contentinfo",
    description:
      "Dokument ma co najwyżej jeden punkt orientacyjny contentinfo.",
    help: "Dokument nie może mieć więcej niż jednego obszaru kluczowego contentinfo.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-main",
    description: "Dokument ma co najwyżej jeden punkt orientacyjny main.",
    help: "Dokument nie może mieć więcej niż jednego obszaru kluczowego main.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-one-main",
    description: "Dokument ma punkt orientacyjny main.",
    help: "Dokument może mieć tylko jeden obszar kluczowy main.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-unique",
    description: "Punkty orientacyjne (obszary kluczowe) są unikalne.",
    help: "Punkty orientacyjne mają unikalną rolę lub kombinację roli/etykiety/tytułu (tj. dostępną nazwę).",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "link-in-text-block",
    description: "Łącza można rozróżniać bez opierania się na kolorze.",
    help: "Łącza muszą być odróżnialne od otaczającego je tekstu w sposób, który nie opiera się na kolorze.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=pl",
    tags: ["cat.color", "wcag2a", "wcag141"],
  },
  {
    ruleId: "link-name",
    description: "Łącza mają odróżniający je tekst.",
    help: "Łącza muszą mieć odróżniający je tekst.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=pl",
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
    description: "Listy mają poprawną strukturę.",
    help: "Elementy <ul> i <ol> mogą bezpośrednio zawierać tylko elementy <li>, <script> lub <template>.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=pl",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "listitem",
    description: "Elementy <li> są używane semantycznie.",
    help: " Elementy <li> muszą być zawarte bezpośrednio w <ul> lub <ol>.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=pl",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "marquee",
    description: "Elementy <marquee> nie są używane.",
    help: "Elementy <marquee> są przestarzałe i nie mogą być używane.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=pl",
    tags: ["cat.parsing", "wcag2a", "wcag222"],
  },
  {
    ruleId: "meta-refresh-no-exceptions",
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: "Delayed refresh must not be used",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=pl",
    tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
    actIds: ["bisz58"],
  },
  {
    ruleId: "meta-refresh",
    description: '<meta http-equiv="refresh"> nie jest stosowane.',
    help: "Automatyczne odświeżenie strony nie może być stosowane.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=pl",
    tags: ["cat.time-and-media", "wcag2a", "wcag221"],
    actIds: ["bc659a", "bisz58"],
  },
  {
    ruleId: "meta-viewport-large",
    description:
      'Element <meta name="viewport"> umożliwia znaczne powiększanie.',
    help: "Użytkownicy mogą powiększać i skalować tekst do 500%.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=pl",
    tags: ["cat.sensory-and-visual-cues", "best-practice"],
  },
  {
    ruleId: "meta-viewport",
    description:
      'Element <meta name="viewport"> nie wyłącza skalowania i powiększania tekstu.',
    help: "Powiększanie i skalowanie nie może być wyłączone.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=pl",
    tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
    actIds: ["b4f0c3"],
  },
  {
    ruleId: "nested-interactive",
    description:
      "Zagnieżdżone interaktywne kontrolki nie są ogłaszane przez czytniki ekranu",
    help: "Upewnij się, że kontrolki interaktywne nie są zagnieżdżone",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "wcag2a", "wcag412"],
    actIds: ["307n5z"],
  },
  {
    ruleId: "no-autoplay-audio",
    description:
      "Elementy <video> lub <audio> nie odtwarzają automatycznie przez dłużej niż 3 sekundy dźwięku bez mechanizmu, który go zatrzymuje lub wycisza.",
    help: "Elementy <video> lub <audio> nie odtwarzają dźwięku automatycznie.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=pl",
    tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT"],
    actIds: ["80f0bf"],
  },
  {
    ruleId: "object-alt",
    description: "Elementy <object> mają tekst alternatywny.",
    help: "Elementy <object> muszą mieć tekst zastępczy.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=pl",
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
    description: "Elementy p nie są stylizowane jako nagłówki.",
    help: "Pogrubienie, kursywa i rozmiar czcionki nie są używane do stylizacji elementów p jako nagłówków.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
  },
  {
    ruleId: "page-has-heading-one",
    description:
      "Strona, lub co najmniej jedna z jej ramek, zawiera nagłówek pierwszego poziomu.",
    help: "Strona musi zawierać nagłówek poziomu 1.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=pl",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "presentation-role-conflict",
    description:
      "Elementy z role=none lub role=presentation nie mogą kolidować z innymi rolami.",
    help: "Elementy, które mają role=none lub role=presentation, nie mogą kolidować z innymi rolami.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=pl",
    tags: ["cat.aria", "best-practice", "ACT"],
    actIds: ["46ca7f"],
  },
  {
    ruleId: "region",
    description: "Cała treść strony jest objęta przez punkty orientacyjne.",
    help: "Cała treść strony musi być zawarta w obszarach kluczowych.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "role-img-alt",
    description: 'Elementy z [role="img"] mają tekst alternatywny.',
    help: 'Elementy z [role="img"] muszą mieć tekst alternatywny.',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=pl",
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
    description: "Atrybut scope w tabelach jest stosowany poprawnie.",
    help: "Atrybut scope ma poprawną wartość.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=pl",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "scrollable-region-focusable",
    description:
      "Elementy, których treść można przewijać, są osiągalne za pomocą klawiatury.",
    help: "Obszary przewijane muszą być osiągalne z klawiatury.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["0ssw9k"],
  },
  {
    ruleId: "select-name",
    description: "Element select ma dostępną nazwę.",
    help: "Element select musi mieć dostępną nazwę.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=pl",
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
      "Graficzne mapy odnośników (mapy obrazkowe) obsługiwane po stronie serwera nie są używane.",
    help: "Nie wolno używać map odnośników po stronie serwera.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=pl",
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
    description: "Wszystkie łącza pomijania mają cel przyjmujący fokus.",
    help: "Cel łącza pomijającego powinien istnieć i przyjmować fokus.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "svg-img-alt",
    description:
      "Elementy svg z rolami img, graphics-document lub graphics-symbol mają dostępny tekst.",
    help: "Elementy svg z rolą img mają tekst alternatywny.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=pl",
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
    description: "Wartości atrybutów tabindex nie są większe niż 0.",
    help: "Elementy nie powinny mieć wartości tabindex większej niż zero.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=pl",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "table-duplicate-name",
    description:
      "Tabele nie mają takiego samego streszczenia (summary) i podpisu (caption).",
    help: "Atrybut summary w tabeli ma inny tekst niż element caption.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=pl",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "table-fake-caption",
    description: "Tabele używają jako podpisu elementu <caption>.",
    help: "Komórki danych i nagłówkowe w tabeli danych nie są używane do umieszczania podpisów.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=pl",
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
      "https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=pl",
    tags: ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
  },
  {
    ruleId: "td-has-header",
    description:
      "Każda niepusta komórka danych w dużej tabeli ma jeden lub więcej nagłówków tabeli.",
    help: "Wszystkie niepuste elementy td w tabelach danych większych niż 3 na 3 mają skojarzony nagłówek tabeli.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=pl",
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
      "Każda komórka tabeli używająca atrybutu headers odwołuje się do innej komórki w tej tabeli.",
    help: "Wszystkie komórki z atrybutem headers odnoszą się tylko do innych komórek tej samej tabeli.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=pl",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["a25f45"],
  },
  {
    ruleId: "th-has-data-cells",
    description:
      "Każdy nagłówek tabeli w tabeli danych odnosi się do komórek danych.",
    help: "Wszystkie elementy th i elementy z role=columnheader/rowheader mają komórki danych, które opisują.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=pl",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["d0f69e"],
  },
  {
    ruleId: "valid-lang",
    description: "Atrybuty lang mają poprawne wartości.",
    help: "Atrybuty lang muszą mieć poprawną wartość.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=pl",
    tags: ["cat.language", "wcag2aa", "wcag312", "ACT"],
    actIds: ["de46e4"],
  },
  {
    ruleId: "video-caption",
    description: "Elementy <video> mają napisy rozszerzone.",
    help: "Elementy <video> muszą mieć napisy rozszerzone.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=pl",
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
