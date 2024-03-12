/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const htmlcsRules = [
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
    tags: ["Section508"],
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["Section508"],
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G73,G74",
    description:
      "Jeśli krótki opis alternatywny nie opisuje wystarczająco treści prezentowanej przez grafikę, dodaj rozszerzony opis bezpośrednio na stronie lub na oddzielnej stronie.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Applet",
    description:
      "Sprawdź, czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Object,ARIA6",
    description:
      "Sprawdź, czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Button",
    description:
      "Upewnij się, że opis alternatywny przycisku prawidłowo opisuje funkcję przycisku.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Image",
    description:
      "Upewnij się, że opis alternatywny grafiki przekazuje tę samą informację, co sama grafika.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG3",
    description:
      "Element <img> znajdujący się wewnątrz linku nie może mieć opisu alternatywnego tej samej treści, co  tekst linku znajdujący się w jego sąsiedztwie.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG4",
    description:
      "Element <img> znajdujący się wewnątrz linku nie ma atrybutu alt lub alt jest pusty. Ponieważ w sąsiedztwie znajduje się  tekst linku, zaleca się połączenie tych elementów w jedno łącze ze wspólnym opisem.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG5",
    description:
      "Opis alternatywny elementu <img> umieszczonego wewnątrz linku, nie może być taki sam jak tekst samego linku.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24",
    description:
      "Element <area> w grafaicznej mapie odsyłaczy nie ma atrybutu alt. Każdy taki obszar powinien mieć atrybut alt z opisem alternatywnym, który odpowiednio opisuje dany obszar.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24.2",
    description:
      "Upewnij się, że opis alternatywny obszaru <area> odpowiada jego funkcji lub treści.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H30.2",
    description:
      "Grafika jest jedyną treścią linku i powinna zostać uzupełniona o opis alternatywny opisujący jego cel.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.2",
    description:
      "Applet powinien mieć opis alternatywny w atrybucie alt, aby zapewnić wsparcie w przypadku problemów z załadowaniem zawartości.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.3",
    description:
      "<applet> powinien zawierać opis alternatywny wewnątrz znaczników <object>. Zapewni to alternatywę w przeglądarkach, które nie obsługują elementu <applet>.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H36",
    description:
      "Przycisk graficzny nie ma atrybutu alt. Dodaj do przycisku atrybut alt i opisz w nim funkcję przycisku.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H37",
    description:
      "Znacznik <img> nie ma atrybutu alt. Dodaj ten atrybut i wpisz do niego krótki opis grafiki.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H53,ARIA6",
    description:
      "Element <object> musi zawierać atrybut alt z wprowadzonym opisem alternatywnym, o ile nie został zapewniony żaden inny alternatywny opis tego elementu.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.1",
    description:
      "Grafika pełni funkcję dekoracyjną, więc zarówno atrybut alt, jak i title powinny być puste.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.2",
    description:
      "Grafika jest oznaczona jako dekoracyjna i będzie ignorowana przez technologie wspomagające np. czytniki ekranu.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G158",
    description:
      "Treść przedstawiona w sposób dźwiękowy powinna zostać uzupełniona dodatkową transkrypcją lub opisem alternatywnym.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G159,G166",
    description:
      "Jeśli obiekt wideo (bez dźwięku) zamieszczony na stronie nie jest alternatywą dla tekstu, sprawdź, czy istnieje do niego alternatywa tekstowa lub ścieżka dźwiękowa prezentująca tę samą treść.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_2_G87,G93",
    description:
      "Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź, czy materiał ma napisy dla niesłyszących.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_3_G69,G78,G173,G8",
    description:
      "Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź, czy materiał zawiera dodatkowo audiodeskrypcję obrazu i/lub opis alternatywny dla treści przedstawionych wyłącznie w formie obrazu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_4_G9,G87,G93",
    description:
      "Sprawdź, czy materiał wideo prezentowany na żywo ma napisy dla niesłyszących tworzone na żywo.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_5_G78,G173,G8",
    description:
      "Sprawdź, czy materiał wideo ma dołączoną audiodeskrypcję treści wizualnych.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_6_G54,G81",
    description:
      "Sprawdź, czy materiał wideo ma dołączone tłumaczenie na język migowy.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_7_G8",
    description:
      "Jeśli materiał wideo, nie ma wystarczających pauz, by uzupełnić go o audiodeskrypcję, sprawdź, czy zamieszczona jest alternatywna wersja lub rozszerzona ścieżka dźwiękowa.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_8_G69,G159",
    description:
      "Sprawdź, czy materiał wideo lub wideo (sam obraz) jest umieszczony wraz z alternatywą tekstową.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_9_G150,G151,G157",
    description:
      "Sprawdź, czy materiał audio przekazywany na żywo jest umieszczony wraz z wersją tekstową tworzoną na żywo.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_ARIA6",
    description:
      'To pole formularza ma atrybut "aria-label" bez treści lub z samymi spacjami/odstępami. Taki atrybut nie będzie uwzględniany jako prawidłowa etykieta.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_DataTable",
    description:
      'Jeżeli tabela jest wykorzystywana do tworzenia układu strony, nie powinna posiadać komórek <th> oraz atrybutu "summary", ani znacznika z opisem <caption>.',
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68",
    description:
      'Pole formularza powinno posiadać opis bądź etykietę. Zaleca się dodanie atrybutów "title", "aria-label" lub "aria-labelledby" bądź elementu label (z atrybutem "for" wskajuącym na to pole).',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.Hidden",
    description:
      "To ukryte pole ma etykietę (opis). Nie ma potrzeby dodawania etykiety do ukrytego pola.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.HiddenAttr",
    description:
      'To pole ma z zasady być ukryte (za pomocą atrybutu "hidden"). Nie ma potrzeby dodawania etykiety do ukrytego pola.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F92,ARIA4",
    description:
      'Ten element ma przypisaną rolę "presentation", ale zawiera też konkretne treści.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_G141_a",
    description:
      "Kolejność nagłówków nie jest poprawna. Element h{{headingNum}} umieszczony jest jako pierwszy, więc powinien być oznaczony jako h1.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39,H73.4",
    description:
      'Jeśli tabela zawiera treści i zastosowano w niej atrybut "summary" i znacznik <caption>. Treści tego atrybutu i znacznika nie mogą być powielone.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.Check",
    description:
      "Jeśli ta tabela zawiera dane, sprawdź, czy <caption> zawiera jej adekwatny opis.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.LayoutTable",
    description:
      "Ta tabela wydaje się być przeznaczona do prezentacji układu strony, ale zawiera podpis <caption>. Tabele przeznaczone do układu nie mogą zawierać podpisu.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.NoCaption",
    description:
      "Jeśli ta tabela zawiera dane, powinna być uzupełniona o podpis w znaczniku <caption>.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42",
    description:
      "Jeśli ten fragment treści miał być nagłówkiem, powinny zostać użyte znaczniki nagłówków (h1 – h6).",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42.2",
    description:
      "Nagłówek nie posiada tekstu. Tekst, który nie ma funkcji nagłówka nie powinien być oznaczony znacznikami do określania nagłówków.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43,H63",
    description:
      'Komórki <td> nie mają ustalonej relacji z komórkami nagłówkowymi <th>. Należy zdefiniować atryb "scope" dla <th> lub "headers" dla <td>.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.HeadersRequired",
    description:
      'Nie zdefiniowano relacji pomiędzy komórką <td> a powiązanym z nią nagłówkiem <th>. Wskazana tabela ma wiele poziomów <th>, zatem należałoby użyć atrybutu "headers" w komórkach <td>.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.IncorrectAttrNotice",
    description: "Sprawdź, czy atrybut headers dla elementu td jest poprawny.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeaderIds",
    description:
      'Nie wszystkie nagłówki th w tej tabeli posiadają atrybut "id" i nie będzie się można do nich odwołać za pomocą atrybutu "headers" w znacznikach <td>.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeadersAttrs",
    description:
      "Nie wszystkie komórki <td> w tej tabeli posiadają atrybut headers. W atrybucie headers powinny znajdować się identyfikatory powiązanych nagłówków.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.ScopeAmbiguous",
    description:
      'Użycie atrybutów scope dla elementu th jest niejasne w tabeli z wieloma nagłówkami. Rekomenduje się użycie atrybutu "headers" w znaczniku <td>.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H44.NotFormControl",
    description:
      'Atrybut "for" znacznika <label> zawiera identyfikator, który jest przypisany do elementu nie będącego elementem formularza. Sprawdź, czy identyfikator został umieszczony w odpowiednim znaczniku.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48",
    description:
      "Jeśli ten element zawiera nawigację, zaleca się, aby został oznaczony jako lista np. przy użyciu listy nieuporządkowanej <ul>.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.1",
    description:
      "Treść przypomina listę nieuporządkowaną. Jeśli jest to lista nieuporządkowana, powinna być oznaczona odpowiednimi znacznikami <ul>.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.2",
    description:
      "Treść przypomina listę uporządkowaną. Jeśli jest to lista uporządkowana, powinna być oznaczona odpowiednimi znacznikami <ol>.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.",
    description:
      "Znaczniki prezentacyjne użyte w kodzie są przestarzałe w HTML5.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.AlignAttr.Semantic",
    description:
      "Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.Semantic",
    description:
      "Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.1",
    description:
      'Nie wszystkie komórki <th> w tej tabeli posiadają atrybut "scope". Ten atrybut pozwala powiązać nagłówki <th> z odpowiednimi komórkami <td>.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.2",
    description:
      "Atrybuty scope używane dla komórek tabeli (<td>), aby oznaczyć nagłówek, są przestarzałe w HTML5. Zaleca się skorzystanie ze znacznika <th>.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.3",
    description:
      'W komórce tabeli użyto niewłaściwy atrybut "scope". Dopuszczalne atrybuty to: "row", "col", "rowgroup" i "colgroup".',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H65",
    description:
      'Element formularza zawiera atrybut "title" bez treści lub z samymi spacjami/odstępami. Taki title nie będzie uwzględniany jako prawidłowa etykieta.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.NoLegend",
    description:
      "Fieldset nie ma opisu w postaci <legend>. Wszystkim znacznikom <fieldset> powinny towarzyszyć opisy w znaczniku <legend>.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.SameName",
    description:
      'Jeśli te pola "checkbox" i "radio" są powiązane, powinny być zgrupowane znacznikiem <fieldset>.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.Check",
    description:
      'Jeśli ta tabela zawiera dane, sprawdź, czy atrybut "summary" opisuje układ tabeli oraz wyjaśnia jak jej użyć.',
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.LayoutTable",
    description:
      "Tabela jest prawdopodobnie używana do struktury układu graficznego ale zawiera atrybut summary. Tabele używane do budowania struktury strony nie mieć tego atrybutu.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.NoSummary",
    description:
      'Jeśli ta tabela zawiera dane, rozważ użycie atrybutu "summary" jako podsumowania zawartości tabeli.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H85.2",
    description:
      "Jeśli listy wyboru stanowią grupę, powinny być zgrupowane elementem <optgroup>.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_LayoutTable",
    description:
      "Ta tabela wydaje się być przeznaczona do prezentacji układu strony. Jeśli jest inaczej, powinna zawierać nagłówki pod postacią <th>.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_2_G57",
    description:
      "Struktura i ułożenie elementów powinny oddawać sens strony i informacji.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_3_G96",
    description:
      "Sprawdź, czy przekazane instrukcje nie opierają się tylko na właściwościach postrzegalnych przez zmysły takich jak kształt, wielkość czy umiejscowienie.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_4.RestrictView",
    description:
      "Sprawdź, czy treść nie ogranicza widoku i działania do jednej orientacji wyświetlania, takiej jak pionowa lub pozioma, chyba że określona orientacja wyświetlania jest niezbędna",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.FaultyValue",
    description:
      "Ten element ma prawdopodobnie błędną wartość w swoim atrybucie autocomplete: {{valuesStr}}.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Date",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Data.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Month",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Miesiąc.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Multiline",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Wielowierszowe.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Numeric",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Liczba.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Password",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Hasło.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Telephone",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Telefon.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Text",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Tekst.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Url",
    description:
      "Niepoprawna wartość autocomplete: {{x}}. Element nie należy do grupy kontrolki Url.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete",
    description:
      "Ten element nie posiada atrybutu autocomplete. Jeśli to pole zbiera informacje o użytkowniku, rozważ jego dodanie, aby spełnić to kryterium sukcesu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.Purpose",
    description:
      "Sprawdź, czy pole wprowadzania danych służy celowi określonemu w sekcji Przeznaczenie pól danych w komponentach interfejsu użytkowników (zobacz WCAG 2.1); oraz czy treeść jest zaimplementowana przy użyciu technologii z obsługą określania oczekiwanego znaczenia dla danych wejściowych formularza.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_6_ARIA11.Check",
    description:
      "Sprawdź, czy można programowo określić przeznaczenie komponentów interfejsu użytkownika, ikon i regionów.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_1_G14,G18",
    description:
      "Informacje przekazywane za pomocą kolorów powinny być również zapisywane w treści lub mieć inną postać alternatywną.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Sprawdź, czy treść może być prezentowana bez utraty informacji lub funkcjonalności oraz bez konieczności przewijania w dwóch wymiarach dla:     Treści przewijanej pionowo przy szerokości równoważnej 320 pikselom CSS;     Treści przewijanej poziomo przy wysokości równoważnej 256 pikselom CSS;     Z wyjątkiem części treści, które wymagają układu dwuwymiarowego ze względu na sposób korzystania lub znaczenie.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'Ten element ma "position: fixed". Może to wymagać przewijania w dwóch wymiarach, co jest uznawane za niepowodzenie tego kryterium sukcesu.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId:
      "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "Tekst wstępnie sformatowany może wymagać przewijania w dwóch wymiarach, co jest uznawane za niepowodzenie tego kryterium sukcesu.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Zakłócanie możliwości powiększania przez program użytkownika może być niepowodzeniem tego kryterium sukcesu.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Sprawdź, czy wizualna prezentacja poniższych elementów ma współczynnik kontrastu co najmniej 3:1 w stosunku do sąsiadującego koloru(ów):     Komponenty interfejsu użytkownika: Informacje wizualne wymagane do identyfikacji komponentów i stanów interfejsu użytkownika, z wyjątkiem komponentów nieaktywnych lub gdy wygląd komponentu jest określany przez program użytkownika i nie jest modyfikowany przez autora;     Obiekty graficzne: Części grafiki wymagane do zrozumienia treści, z wyjątkiem sytuacji, gdy szczególna prezentacja grafiki jest niezbędna do przekazania informacji.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_12_C36,C35.Check",
    description:
      "Sprawdź, czy nie nastąpi utrata treści lub funkcjonalności, ustawiając wszystkie poniższe elementy i nie zmieniając żadnej innej właściwości stylu:              Wysokość wiersza (odstęp między wierszami) co najmniej 1,5-krotność rozmiaru czcionki.         Odstępy między akapitami - co najmniej 2-krotność rozmiaru czcionki;         Odstępy między literami (tracking) - co najmniej 0,12-krotność rozmiaru czcionki;         Odstępy między wyrazami - co najmniej 0,16 rozmiaru czcionki.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_13_F95.Check",
    description:
      "Sprawdź, czy w przypadku, gdy otrzymanie, a następnie usunięcie najechania wskaźnikiem lub fokusu klawiatury powoduje, że dodatkowa treść staje się widoczna, a następnie ukryta, następujące elementy są prawdziwe:              Odrzucone: Istnieje mechanizm umożliwiający odrzucenie dodatkowej treści bez przesuwania wskaźnika myszy lub fokusu klawiatury, chyba że dodatkowa treść przekazuje błąd wprowadzanych danych lub nie przesłania ani nie zastępuje innej treści;         Wskazywane: Jeśli wskaźnik myszy (hover) może wyzwolić dodatkową treść, wówczas wskaźnik może zostać przeniesiony na dodatkową treść bez znikania dodatkowej treści;         Trwałe: Dodatkowa treść pozostaje widoczna do momentu usunięcia wyzwalacza aktywacji lub fokusu, użytkownik odrzuca go lub jego informacje nie są już ważne.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_2_F23",
    description:
      "Jeżeli materiał audo włączany jest automatycznie i trwa dłużej niż trzy sekundy, należy umożliwić zatrzymanie bądź wyciszenie odtwarzania.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.BGColour",
    description:
      "Sprawdź, czy kolor tekstu odpowiada pod względem wymagań kontrastu kolorowi lub obrazkowi tła.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.FGColour",
    description:
      "Sprawdź, czy kolor elementu ma taki kolor tła lub w formie obrazka, który pasuje kontrastowo do elementu inline z tekstem.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Abs",
    description:
      "Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź, czy kontrast jest na wystarczającym poziomie: {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Alpha",
    description:
      "Tekst lub tło tego elementu jest przezroczyste. Upewnij się, że współczynnik kontrastu między tekstem a tłem wynosi co najmniej {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgGradient",
    description:
      "Tekst tego elementu jest umieszczony na gradiencie. Upewnij się, że współczynnik kontrastu między tekstem a wszystkimi zakrytymi częściami gradientu wynosi co najmniej {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgImage",
    description:
      "Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi co najmniej {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_4_G142",
    description:
      "Należy upewnić się, że tekst na stronie może być powiększony do 200% bez użycia technologii wspomagających.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_5_G140,C22,C30.AALevel",
    description:
      "Sprawdź, czy stosowane technologie pozwalają na użycie tekstu w graficznej formie. Treść powinna być przekazana w formie tekstu, chyba że graficzna forma tekstu jest istotna z punktu widzenia samej informacji, która jest przekazywana.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G145.BgGradient",
    description:
      "Tekst tego elementu jest umieszczony na gradiencie. Upewnij się, że współczynnik kontrastu między tekstem a wszystkimi zakrytymi częściami gradientu wynosi co najmniej {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.Abs",
    description:
      "Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź samodzielnie czy kontrast jest na wystarczającym poziomie: {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.BgImage",
    description:
      "Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi conajmniej {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_7_G56",
    description:
      "Materiał audio, w którym występuje głównie mowa powinien mieć możliwość wyciszenia dźwięków tła lub narracja powinna być przynajmniej o 4 razy(20dB) głośniejsza niż tło.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_C19,G172,G169",
    description:
      "Tekst nie powinien być wyjustowany (tzn. wyrównany do prawego i lewego marginesu). Ewentualnie powinien istnieć mechanizm, który pozwala usunąć wyjustowanie.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G148,G156,G175",
    description:
      "Kolor tekstu oraz kolor tła powinny być możliwe do zmiany przez użytkownika na samej stronie lub poprzez funkcje przeglądarki. ",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G188,C21",
    description:
      "Odstępy między wierszami w akapitach powinny wynosić przynajmniej 1,5 wysokości linii, a odległość między akapitami powinna być przynajmniej 1,5 razy większa niż ta pomiędzy wierszami.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,C20",
    description:
      "Szerokość bloku tekstowego nie powinna przekraczać 80 znaków (40 w przypadku alfabetów: chińskiego, japońskiego i koreańskiego).",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,G146,C26",
    description:
      "Tekst na stronie powinien mieć możliwość powiększenia do 200% bez użycia technologii wspomagających. Nie powinno być też wymagane przewijanie dolnym paskiem ekranu przy takim ustawieniu i zmaksymalizowanym oknie przeglądarki.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_9_G140,C22,C30.NoException",
    description:
      "Sprawdź, czy teksty w formie grafiki pełnią wyłącznie funkcję dekoracyjną lub „graficzna” prezentacja tekstu ma znaczenie z uwagi na treść przekazywanej informacji.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_G90",
    description:
      "Cała treść oraz wszystkie zawarte w niej funkcjonalności powinny być dostępne przy użyciu klawiatury.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.DblClick",
    description:
      "Funkcjonalność dostępna po dwukrotnym kliknięciu przyciskiem myszy, powinna być dostępna również przy użyciu klawiatury.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseDown",
    description:
      "Funkcjonalność dostępna po wciśnięciu przycisku myszy, powinna być dostępna  również przy użyciu klawiatury.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseMove",
    description:
      "Funkcjonalność dostępna z wykorzystaniem ruchów myszą, powinna być dostępna  również przy użyciu klawiatury.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOut",
    description:
      "Funkcjonalność dostępna po opuszczeniu kursorem myszy elementu, powinna być dostępna również przy użyciu klawiatury.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOver",
    description:
      "Funkcjonalność dostępna po najechaniu kursorem myszy na element, powinna być dostępna również przy użyciu klawiatury.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseUp",
    description:
      "Funkcjonalność dostępna po zwolnieniu przycisku myszy, powinna być dostępna  również przy użyciu klawiatury.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_2_F10",
    description:
      "Sprawdź, czy dodatek lub applet pozwalają na uwolnienie fokusu, jeśli przejdzie on do tych funkcjonalności.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_4.Check",
    description:
      "Sprawdź, czy jeśli skrót klawiaturowy jest zaimplementowany w treści przy użyciu tylko znaków literowych (w tym wielkich i małych liter), znaków interpunkcyjnych, cyfr lub symboli, to prawdziwa jest co najmniej jedna z poniższych sytuacji:              Wyłączanie: Istnieje mechanizm wyłączania skrótu;         Mapowanie: Istnieje mechanizm zmiany mapowania skrótu w celu użycia jednego lub więcej niedrukowalnych znaków klawiatury (np. Ctrl, Alt, itp.)         Aktywny tylko po otrzymaniu fokusu: Skrót klawiaturowy dla komponentu interfejsu użytkownika jest aktywny tylko wtedy, gdy ten komponent ma fokus.     ",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F40.2",
    description:
      'Znacznik <meta> z atrybutem "redirect" przekierowuje na inną stronę w czesie określonym jako 0. Użytkownicy nie mają kontroli w taki krótkim czasie.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F41.2",
    description:
      'Znacznik <meta> z atrybutem "refresh" odświeża aktualną stronę. Użytkownicy nie mają kontroli nad tym odświeżaniem.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F4",
    description:
      "Jeśli element miga dłużej niż 5 sekund powinien istnieć mechanizm, który umożliwi zatrzymanie migania.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F47",
    description:
      "Element <blink> nie spełnia wymagania o zatrzymaniu się migania w czasie 5 sekund.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "Jeśli na stronie znajduje się element dynamiczny, animujący się dłużej niż 5 sekund powinien istnieć mechanizm umożliwiający zatrzymanie tego efektu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_3_G5",
    description:
      "Sprawdź, czy w serwisie nie występują ograniczenia czasowe, w działaniach użytkownika, chyba że dotyczy to odtwarzania plików multimedialnych lub działań transmitowanych na żywo.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_4_SCR14",
    description:
      "Sprawdź, czy wszelkie przerwy lub przeszkody (np. automatyczna aktualizacja treści), mogą być wyłączone lub opóźnione przez użytkownika — chyba, że dotyczy to nagłych przypadków.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_5_G105,G181",
    description:
      "Jeśli użytkownik zostanie wylogowany w trakcie procesu (np. krokowego), powinien mieć możliwość do powrotu do tego samego stanu procesu, w jakim był wcześniej.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_6.Check",
    description:
      "Sprawdź, czy użytkownicy są ostrzegani o czasie trwania każdej bezczynności użytkownika, która może spowodować utratę danych, chyba że dane są przechowywane przez ponad 20 godzin, gdy użytkownik nie podejmuje żadnych działań.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_1_G19,G176",
    description:
      "Elementy strony nie mogą błyskać częściej niż trzy razy w ciągu sekundy oraz jednocześnie obszar migający jest jak najmniejszy.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_2_G19",
    description:
      "Elementy strony nie mogą migać częściej niż trzy razy w ciągu sekundy.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_3.Check",
    description:
      "Sprawdź, czy animacja ruchu wywołana przez interakcję może być wyłączona, chyba że jest ona niezbędna dla funkcjonalności lub przekazywanej informacji.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124,H69",
    description:
      "Sprawdź, czy użytkownik może pominąć powtarzającą się nawigację. Można to zapewnić przez użycie skip-linków, nagłówków lub punktów orientacyjnych ARIA.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchID",
    description:
      "Ten link wskazuje identyfikator {{id}}, ale takiego identyfikatora w dokumencie nie ma.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      "Ten link wskazuje identyfikator {{id}} w dokumencie, ale takiego identyfikatora w testowanym obszarze nie ma.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.1",
    description:
      'Ramka <iframe> musi posiadać tytuł. Należy wypełnić atrybut "title" i zawrzeć w nim opis ramki.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.2",
    description:
      "Tytuł ramki <iframe> powinień opisywać ją w możliwie najdokładniejszy sposób.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.EmptyTitle",
    description:
      "Znacznik <title> w sekcji nagłówkowej strony nie powinien być pusty.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoHeadEl",
    description:
      "Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoTitleEl",
    description:
      "Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony lub wypełnić jego treść.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.2",
    description:
      "Znacznik <title> w sekcji nagłówkowej strony powinien możliwie najdokładniej opisywać jej zawartość.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_3_H4.2",
    description:
      'Jeśli został użyty atrybut "tabindex", relacje i następstwo treści są zrozumiałe dla użytkownika.',
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81",
    description:
      "Sprawdź, czy treść linku wraz z kontekstem, w którym występuje pozwala na zrozumienie funkcji/celu linku.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      'Sprawdź, czy treść linku wraz z kontekstem, w którym występuje lub dodatkową treścią w atrybucie "title" pozwala na zrozumienie funkcji / celu linku.',
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "Jeśli strona nie jest częścią procesu krokowego, sprawdź, czy jest więcej niż jeden sposób na dotarcie do tej strony.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_6_G130,G131",
    description: "Nagłówki i etykiety powinny opisywać temat i/lub cel treści.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Każdy element możliwy do nawigacji za pomocą klawiatury, ma widoczny wskaźnik fokusu klawiatury.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.1",
    description:
      "Znacznik <link> może być umieszczony wyłącznie w sekcji <head>.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2a",
    description:
      'Znacznik <link> nie ma atrybutu "rel", którego wartość wskazuje na typ i powiązanie linku.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2b",
    description:
      'Znacznik <link> nie ma adresu w atrybucie "href" — nie prowadzi do żadnego zasobu.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_9_H30",
    description: "Sprawdź, czy treść linku zrozumiale opisuje jego funkcję.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_1.Check",
    description:
      "Sprawdź, czy wszystkie funkcje wykorzystujące do obsługi gesty wielopunktowe lub oparte na ścieżce można obsługiwać za pomocą pojedynczego wskaźnika bez gestu opartego na ścieżce, chyba że gest wielopunktowy lub oparty na ścieżce jest niezbędny.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Mousedown_Check",
    description:
      "Ten element nasłuchuje zdarzeń mousedown (naciśniecie wskaźnika myszy). Sprawdź, czy dla funkcji, które mogą być obsługiwane za pomocą pojedynczego wskaźnika, przynajmniej jedna z poniższych wartości jest prawdziwa:         Brak zdarzenia: Naciskanie nie wywołuje jakiejkolwiek części zdarzenia;         Przerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu nacisku;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.SinglePointer_Check",
    description:
      "Sprawdź, czy dla funkcji, które mogą być obsługiwane za pomocą pomocą pojedynczego wskaźnika, przynajmniej jedno z poniższych jest prawdziwe:         Brak zdarzenia: Naciskanie nie wywołuje jakiejkolwiek części zdarzenia;         Przerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu nacisku;         Odwrócenie zdarzenia: Zwolnienie nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia;         Istotne: Wciśnięcie jest niezbędne do wywołania zdarzenia.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Touchstart_Check",
    description:
      "Ten element nasłuchuje zdarzeń touchstart. Sprawdź, czy dla funkcji, które mogą być obsługiwane za pomocą pojedynczego wskaźnika, przynajmniej jedna z poniższych wartości jest prawdziwa:              Brak zdarzenia: Naciskanie nie wywołuje jakiejkolwiek części zdarzenia;         Przerwanie lub cofnięcie: Zdarzenie jest zależne od zwolnienia nacisku i istnieje mechanizm, którym można je przerwać lub cofnąć po zwolnieniu nacisku;         Odwrócenie zdarzenia: Zwolnienie nacisku cofa wywołane zdarzenie i przywraca stan sprzed zdarzenia;         Istotne: Wciśnięcie jest niezbędne do wywołania zdarzenia.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.AccessibleName",
    description:
      "Dostępna nazwa dla tego elementu nie zawiera widocznego tekstu etykiety. Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany wizualnie.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.Check",
    description:
      "Sprawdź, czy dla komponentów interfejsu użytkownika z etykietami, które zawierają tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany wizualnie.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Check",
    description:
      "Sprawdź, czy funkcje, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy:              Obsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność;         Istotny: Ruch jest niezbędny dla funkcji, a to spowodowałoby unieważnienie działania.     ",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Devicemotion",
    description:
      "Ten element ma nasłuchiwanie zdarzeń devicemotion (ruch urządzenia). Sprawdź, czy funkcje, które mogą być obsługiwane przez ruch urządzenia lub ruch użytkownika, mogą być również obsługiwane przez elementy interfejsu użytkownika, a reagowanie na ruch może być wyłączone, aby zapobiec przypadkowemu uruchomieniu, z wyjątkiem sytuacji, gdy:              Obsługiwany interfejs: Ruch służy do obsługi funkcjonalności poprzez interfejs obsługiwany przez dostępność;         Istotny: Ruch jest niezbędny dla funkcji, a to spowodowałoby unieważnienie działania.     ",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_5.Check",
    description:
      "Sprawdź, czy rozmiar celu punktu dotykowego wynosi co najmniej 44 na 44 piksele CSS, z wyjątkiem sytuacji, gdy:              Odpowiednik: Cel jest dostępny za pośrednictwem równoważnego łącza lub kontrolki na tej samej stronie, która ma co najmniej 44 na 44 piksele CSS;         Śródliniowe: Cel znajduje się w zdaniu lub w bloku tekstu;         Kontrola programu użytkownika: Rozmiar obiektu docelowego jest określony przez program użytkownika (przeglądarkę) i nie jest modyfikowany przez autora;         Istotny: Szczególna prezentacja celu ma istotne znaczenie dla przekazywanych informacji.     ",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_6.Check",
    description:
      "Sprawdź, czy treść nie ogranicza korzystania z metod wprowadzania danych dostępnych na platformie, z wyjątkiem sytuacji, gdy ograniczenie jest niezbędne, wymagane do zapewnienia bezpieczeństwa treści lub wymagane do przestrzegania ustawień użytkownika.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.2",
    description:
      'Znacznik <html> musi posiadać atrybut "lang" określający język strony.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.Lang",
    description:
      'Język zdefiniowany w atrybucie "lang" nie mógł zostać poprawnie zinterpretowany.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.XmlLang",
    description:
      'Język zdefiniowany w atrybucie "xml:lang" nie mógł zostać poprawnie zinterpretowany. ',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58",
    description:
      'Każda zmiana języka w treściach strony powinna być oznaczona atrybutem "lang" lub "xml:lang".',
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.Lang",
    description:
      'Język zdefiniowany w atrybucie "lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.XmlLang",
    description:
      'Język zdefiniowany w atrybucie "xml:lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_3_H40,H54,H60,G62,G70",
    description:
      "Sprawdź, czy jest zapewniony mechanizm, za pomocą którego można sprawdzić definicje słów użytych w nietypowy sposób, co odnosi się też do idiomów i żargonu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_4_G102,G55,G62,H28,G97",
    description:
      "Sprawdź, czy jest zapewniony mechanizm, za pomocą którego można sprawdzić znaczenie skrótów w ich rozwiniętej formie.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_5_G86,G103,G79,G153,G160",
    description:
      "Jeśli dany tekst wymaga umiejętności czytania na poziomie wyższym niż poziom gimnazjalny, powinna być dostępna jego dodatkowa, uproszczona wersja.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.HTML5",
    description:
      "Element <ruby> nie zawiera znacznika znacznika <rt>, który opisuje sposób wymowy.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.XHTML11",
    description:
      "Element <ruby> nie zawiera znacznika <rt>, który opisuje sposób wymowy treści umieszczonej wewnątrz znacznika <rb>.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.2",
    description:
      "Element <ruby> nie zawiera znacznika <rp>, który zapewnia wsparcie dla przeglądarek niewspierających treści w znacznikach <ruby>.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_1_G107",
    description:
      "Sprawdź, czy po przenieseniu fokusu na dany element formularza nie następuje zaskakująca dla użytkownika zmiana kontekstu (np. przeniesienie na inną stronę).",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_2_H32.2",
    description:
      'Formularz nie ma przycisku przesyłania. Może to sprawić problem użytkownikom posługującym się wyłącznie klawiaturą. Przycisk może być elementem <button> lub elementem <input> z atrybutem "submit" lub "image".',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_3_G61",
    description:
      "Sprawdź, czy powtarzające się na stronach elementy nawigacyjne są umieszczone w tej samej kolejności. Dopuszczalna jest zmiana kolejności przez samego użytkownika.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_4_G197",
    description:
      "Elementy, które posiadają tę samą funkcjonalność, muszą być zidentyfikowane/oznaczone w ten sam sposób na wszystkich stronach serwisu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_5_H83.3",
    description:
      "Linki otwierające się w nowym oknie lub karcie przeglądarki powinny mieć taką informację w swojej treści.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_1_G83,G84,G85",
    description:
      "Jeśli przy wpisywaniu informacji, błąd zostanie wykryty automatycznie, system powinien wskazać błędny element, a użytkownik otrzymać opis błędu w postaci tekstu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_2_G131,G89,G184,H90",
    description:
      "Jeżeli wymagane jest wprowadzenie treści przez użytkownika, powinny być dostępne zrozumiałe instrukcje i wskazówki.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_3_G177",
    description:
      "Jeśli przy wpisywaniu informacji błąd zostanie wykryty automatycznie, użytkownik powinien otrzymać sugestię korekty, chyba że wpłynie to negatywnie na bezpieczeństwo systemu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "Sprawdź, czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie. Jest to szczególnie ważne w sytuacji, gdy użytkownik podaje informacje prawne lub finansowe.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_5_G71,G184,G193",
    description:
      "Sprawdź, czy w formularzu jest dostępna pomoc kontekstowa na samej stronie lub na stronie służącej do potwierdzenia wprowadzonych treści.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Sprawdź, czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Empty",
    description:
      'Link ma atrybut "id", nie ma jednak ani adresu w atrybucie "href" ani treści. Rozważ przeniesienie identyfikatora do elementu nadrzędnego.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyNoId",
    description: "Link nie ma treści, ani nazwy ani identyfikatora.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyWithName",
    description:
      'Link ma atrybut "name", ale nie ma ani adresu ani treści. Rozważ przeniesienie wartości atrybutu "name" do identyfikatora elementu nadrzędnego jako "id".',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoContent",
    description:
      'Link ma prawidłowy adres w atrybucie "href", ale nie ma treści linku.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoHref",
    description:
      "Link nie powinien być używany do tworzenia wewnętrznych odniesień na stronie. Jeśli identyfikator jest używany do styli CSS lub oskryptowania JS, rozważ przeniesienie identyfikatora od elementu nadrzędnego (rodzica).",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Placeholder",
    description:
      'Link ma jedynie treść. Brakuje adresu w atrybucie "href", identyfikatora ani nazwy (atrybutu "name").',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId:
      "Principle4.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Sprawdź, czy komunikaty o stanie mogą być programowo określane poprzez rolę lub właściwości, tak aby mogły być prezentowane użytkownikowi przez technologie wspomagające bez otrzymywania fokusu.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "SkipLinks",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["Section508"],
  },
];
