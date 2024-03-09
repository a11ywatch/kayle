/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const htmlcsRules = [
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "SkipLinks",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H30.2",
    description:
      "Img element is de enige inhoud van de link, maar bevat geen alt tekst. De alt tekst dient het doel van deze link te beschrijven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "Img element met een lege alt tekst mag enkel geen of een leeg titel attribuut hebben.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description:
      "Img element werd gemarkeerd om  genegeerd te worden door Hulptechnologie",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img element bevat geen alt attribuut. Gebruik een alt attribuut om een kort tekstalternatief weer te geven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "Zorg ervoor dat het alt attribuut van dit img element hetzelfde doel dient en dezelfde informatie weergeeft als de afbeelding.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "Afbeelding in de indienknop heeft geen alt attribuut.  Zorg voor een tekstalternatief dat de functie van de knop beschrijft, gebruik een alt attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "Zorg ervoor dat alt text van de afbeelding in de indienknop het doel van de knop beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "Area-element in een image map heeft geen alt attribuut. Ieder area element moet een tekstalternatief hebben dat de functie ervan beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "Zorg ervoor dat het tekstalternatief van het area element hetzelfde doel heeft als het deel van de image map afbeelding waarnaar het verwijst.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "Als dit beeld niet volledig kan omschreven worden in een kort tekstalternatief, zorg er dan voor dat een langer tekstalternatief beschikbaar is, bijvoorbeeld in de bodytekst of via een link.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link herhaalt",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "Object elementen moeten een tekstalternatief bevatten indien alle andere alternatieven uitgeput zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "Applet elementen moeten een tekstalternatief bevatten in de body van het element, voor browsers die het applet element niet ondersteunen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "Applet elementen moeten een alt attribuut  bevatten, om een tekst-alternatief te bieden in browsers die het element ondersteunen maar de applet niet kunnen laden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "Indien dit embedded object vooraf opgenomen audio bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "Indien dit embedded object vooraf opgenomen video bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is, of dat een audiospoor beschikbaar is dat equivalente informatie aanbiedt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of ondertitels aangeboden worden voor audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of er een audio beschrijving voor de video, en/of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "Indien dit embedded object gesynchroniseerde media bevat, controleer dan of er ondertitels aangeboden worden voor live audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat , controleer dan of er een audio beschrijving voor de video inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, controleer dan of er een gebarentaal interpretatie beschikbaar is voor de audio-inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, en pauzes in de voorgrond-audio onvoldoende zijn voor audiobeschrijving om de betekenis van de opgenomen video te communiceren, controleer dan of er een uitgebreide audiobeschrijving voorzien is, ofwel via scripting of via een alternatieve versie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media of louter video bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "Indien dit embedded object enkel live audio-inhoud bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      'De rol van dit element is "presentation" maar deze bevat onderliggende elementen met een semantische betekenis.',
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      'Het "for" attribuut van dit label bevat een ID voor een element dat geen formulierbesturingselement. Controleer of het juiste ID ingevoerd is voor het bedoelde element.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      'Dit formulierbesturingselement heeft een "titel" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      'Dit formulierbesturingselement heeft een "aria-label" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      'Dit formulierbesturingselement heeft een "aria-labelledby" attribuut, dit bevat echter eeb ID "{{id}}" dat niet bestaat op een element. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "Dit verborgen formulierveld is gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      'Dit formulierveld is bedoeld om verborgen te zijn (via het "hidden" attribuut), maar is ook gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      'Dit formulierveld zou gelabeled moeten zijn. Gebruik het label element (ofwel met een "for" attribuut of als omvattend element rond het formulierveld), of "title" "aria-label" of "aria-labbeledby" attributen waar gepast.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description: "Presentationele markup gebruikt die vervallen is in HTML5",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "Heading markup zou gebruikt moeten worden indien deze inhoud bedoeld is als een hoofding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "Tabelcel heeft een ongeldig scope attribuut. Geldige waardes zijn row, col, rowgroup of colgroup",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "Scope attributen op td elementen die als hoofdingen gebruikt worden voor andere elementen zijn vervallen in HTML. Gebruik in plaats daarvan een th element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "Scope attributen op th elementen zijn ambigu in een tabel met meerdere niveaus van hoofding. Gebruik in plaats daarvan het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "Check that headers attribute on td element is correct.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      'Foutief headers attribuut op dit td element. "{{expected}}" werd verwacht maar "{{actual}}" gevonden',
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "De relatie tussen td elementen en de eraan gebonden th elementen werd niet omschreven. Gezien deze tabel meerdere niveaus th elmenten bevat, moet het headers attribuut gebruikt worden op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "Niet alle th elementen in deze tabel hebben een scope attribuut. Deze cellen zouden een scope attribuut moeten bevatten om hun verband met td elementen te identificeren.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruikt te worden voor opmaak, maar bevat een summary attribuut. Opmaaktabellen mogen geen summary attributen bevatten, of indien deze toch aanwezig zijn, moeten ze leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "Indien deze tabel een datatabel is en zowel het summary als het caption element aanwezig zijn, mag het summary attribuut geen herhaling zijn van het caption element",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het summary attribuut de organisatie en het gebruik van deze tabel verduidelijkt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "Indien deze tabel een datatabel is, overweeg dan het summary attribuut van het tabel element te gebruiken om een overzicht over deze tabel te geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruik te worden voor opmaak, maar bevat een caption element. Opmaaktabellen mogen geen caption bevatten.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het caption element een nauwkeurige beschrijving geeft van de tabel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "Indien deze tabel een datatabel is, overweeg dan een caption element bij het table element te gebruiken om de tabel te identificeren.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset bevat geen legend element. Alle fieldsets zouden een legend element moeten bevatten dat een beschrijving geeft van de veldengroep.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "Indien deze keuzelijst groepen verwante opties bevat, zouden ze gegroepeerd moeten worden met optgroup.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "Indien radioknoppen of selectievakjes een verdere beschrijving vergen op groepsniveau, zouden ze moeten omvat worden in een fieldset element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "Deze inhoud lijkt op een gesimuleerde niet-geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ul-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "Deze inhoud lijkt op een gesimuleerde geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ol-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "Hoofding tag gevonden zonder inhoud. Tekst die niet bedoeld is als hoofding zou niet mogen gemarkeerd worden met een hoofding tag.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "Indien dit element een navigatie-sectie bevat, wordt aanbevolen lijst-markup te gebruiken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "Deze tabel lijkt een opmaaktabel te zijn. Indien deze bedoeld is als een datatabel, zorg er dan voor dat hoofding cellen geÔdentificeerd worden met th elementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "Deze tabel lijkt een datatabel te zijn. Indien deze bedoeld is als een opmaaktabel, zorg er dan voor dat er geen th elementen, summary of caption aanwezig zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "Controleer dat de inhoud in een betekenisvolle volgorde staat indien lineair weergegeven, zoals wanneer stylesheets gedesactiveerd zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "Indien instructies voorzien zijn voor het goed begrip van de inhoud, reken dan niet enkel op zintuigelijke eigenschappen (zoals vorm, grootte of positie) om voorwerpen te omschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "Controleer dat de inhoud zijn uitzicht en werking niet beperkt tot ÈÈn weergave-oriëntatie, zoals staand of liggend, tenzij zo'n specifieke weergave-oriëntatie essentieel is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "Controleer dat het invoerveld een doel dient zoals beschreven in Input Purposes for User Interface Components sectie, en dat de inhoud is geÔmplementeerd met technologiën die het identificeren van de verwachtte betekenis van formulierinvoerdata ondersteunen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "Dit element heeft geen autocomplete attribuut. Indien dit veld informatie verzamelt over de gebruiker, overweeg dan er ÈÈn toe te voegen om te conformeren met dit succescriterium.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "Controleer dat het doel van de gebruikersinterface-onderdelen, iconen en regio's programmatorisch kunnen bepaald worden",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "Controleer dat alle informatie die gecommuniceerd wordt via kleur eveneens beschikbaar is als tekst of als een andere visuele hint.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Controleer dat de inhoud kan weergegeven worden zonder verlies van informatie of functionaliteit en zonder in twee dimensies te moeten scrollen voor: Verticaal scrollende inhoud op een breedte equivalent aan 320 CSS pixels    Horizontaal scrollende inhoud op een hoogte equivalent aan CSS pixels. Behalve voor die delen van de inhoud die een tweedimensionale opmaak vergen voor gebruik of betekenis.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'Dit element heeft "position: fixed". Dit kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "Voorgeformatteerde tekst kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Tussen beide komen in de mogelijkheid van de User Agent om uit te vergroten kan beschouwd worden als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Controleer dat de visuele weergave van de volgende zaken een contrastverhouding van minstens 3:1 tegen aangrenzende kleuren:       Gebruikersinterface-onderdelen: visuele informatie vereist om gebruikersinterface-onderdelen te herkennen en hun status, behalve voor inactieve onderdelen or waar het uitzicht van het component door de User Agent bepaald wordt en niet gewijzigd is geweest door de auteur      Grafische objecten: delen van de afbeelding vereist om de inhoud te begrijpen, behalve daar waar de specifieke weergave essentieel is voor de communicatie van de informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "Controleer dat er geen verlies van inhoud of functionaliteit optreedt bij het instellen van de volgende eigenschappen en zonder andere stijleigenschappen te wijzigen: Lijnhoogte (lijnspatiëring) naar minstens 1,5 maal de lettergrootte Spatieing na paragrafen tot minstens 2 maal de lettergrootte Letterspatiëring (tracking) tot minstens 0,12 de lettergrootte Woordspatiëring tot minstens 0,16 maal de lettergrootte.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "Controleer dat waar een pointer hover of toetsenbordfocus aanvullende content doet zichtbaar worden en terug verbergen, het volgende waar is:         Als de aanvullende content een deel van de andere content bedekt, moet het mogelijk zijn om de aanvullende content (zoals een tooltip) opnieuw te verbergen zonder dat de muisaanwijzer verplaatst hoeft te worden en zonder de focus van het element weg te hoeven nemen Als de aanvullende content verschijnt door een element aan te wijzen (zonder te klikken), dan mag de content niet verdwijnen als de gebruiker de muis beweegt in het gebied waarin de aanvullende content is verschenen.De aanvullende content moet zichtbaar blijven totdat de gebruiker de muisaanwijzer buiten het element plaatst, de toetsenbordfocus actief verplaatst of op Escape drukt. Ten slotte mag de aanvullende content ook automatisch verdwijnen, maar enkel wanneer de weergegeven informatie niet meer geldig is ó bijvoorbeeld wanneer gemeld wordt dat een e-mailadres niet correct is ingevuld, maar de gebruiker deze fout al heeft verbeterd.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "Indien dit element audiop bevat die automatisch langer dan 3 seconden speelt, controleer dan dat de mogelijkheid bestaat om de audio te pauzeren, stoppen of stil te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "Controleer of dit element een overgeërfde voorgrondkleur heeft die complementair is met de overeenkomstige inline achtergrondkleur of afbeelding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "Controleer of dit element een overgeërfde achtergrondkleur of afbeelding heeft die complementair is met de overeenkomstige inline voorgrondkleur.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie en zonder verlies van inhoud of functionaliteit.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "Indien de gebruikte technologie de visuele presentatie kan weergeven, controleer dan dat tekst gebruikt werd om informatie weer te geven, in plaats van afbeeldingen van tekst, behalve als de afbeelding van tekst essentieel is voor de weer te geven informatie, of visueel kan aangepast worden aan de noden van de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "Voor voordien opgenomen pure audio-inhoud in dit element die hoofdzakelijk spraak is (zoals vertelling) dienen achtergrondgeluiden stil kunnen gezet worden, of ten minste 20 dB (of 4 maal) stiller te zijn dan de spraak.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "Controleer dat een mechanisme beschikbaar is voor de gebruiker om de voorgrond- en achtergrondkleuren van tekstblokken te kiezen, via de webpagina of via de browser.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "Controleer of een mechanisme bestaat om de breedte van een blok tekst te beperken tot niet meer dan 80 tekens (of 40 tekens in Chineese, Japans of Koreaans schrift)",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "Controleer dat tekstblokken niet vol uitgelijnd zijn - dat wil zeggen, op zowel de linker- als rechterrand - of dat een mechanisme beschikbaar is om de volle uitlijning af te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "Controleer dat de lijnspatiëring in tekstblokken minstens 150% is in paragrafen en de spatiëring tussen paragrafen minstens 1,5 keer de lijnspatiëring, of dat een mechanisme beschikbaar is om dit te bereiken.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie zonder dat de gebruiker verplicht wordt horizontaal te scrollen in een schermbreed venster.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "Controleer dat afbeeldingen van tekst enkel gebruikt worden voor zuivere decoratie of waar een specifieke weergave van tekst essentieel deel uitmaakt van de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "Controleer dat de functionaliteit voorzien in een eventhandler voor dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "Controleer dat de functionaliteit voorzien bij dubbelklikken op dit element beschikbaar is via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging over dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging uit dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging op dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mousedown op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mouseup op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "Controleer dat deze applet of plugin de mogelijkheid biedt om het focus weg te nemen van zichzelf via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "Controleer dat indien sneltoets voorzien is met maar ÈÈn letter (inclusief hoofd- en kleine letters), punctuering, getal of symboolkarakters, minstens ÈÈn van volgende stellingen waar his:         Uitzetten: Er is een mechanisme om de sneltoets af te zetten Hermappen: Er is mechanisme beschikbaar om de shortcut te hermappen om gebruik te maken van ÈÈn van de niet printbare toetsenbordkarakters (bvb. Ctrl, Alt, etc) Enkel aktief bij focus: De sneltoets voor een gebruikersinterface-onderdeel is enkel aktief als dat onderdeel het focus heeft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "Meta refresh tag wordt gebruikt om te redirecten naar een andere pagina, met een tijdslimiet die niet nul is. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "Meta refresh tag wordt gebruikt om de huidige pagina te verversen. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "Indien een onderdeel van de inhoud beweegt, scrollt of knippert gedurende langer dan 5 seconden, of automatisch ververst, controleer dan of er een mechanisme beschikbaar is om te pauzeren, te stoppen of de inhoud te verbergen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "Controleer dat er een mechanisme beschikbaar is om dit knipperende element in minder dan vijf seconden te stoppen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "Blink elementen kunnen niet voldoen aan de vereiste dat knipperende informatie gestopt kan worden binnen de vijf seconden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "Controleer dat de timing geen essentieel onderdeel is van een gebeurtenis of activiteit voorgesteld door de inhoud, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "Controleer dat alle onderbrekingen (inclusief inhoudsverversing) uitgesteld of afgezet kunnen worden door de gebruiker, behalve onderbrekingen die betrekking hebben tot een noodgeval.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "Indien deze webpagina deel uitmaakt van een set pagina's met een tijdslimiet op inactiviteit, controleer dan dat een geauthenticeerde gebruiker de activiteit zonder gegevensverlies kan voortzetten na herauthenticatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "Controleer dat gebruikers verwittigd werden van de duur van inactiviteit die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens langer dan 20 uur bewaard worden als de gebruiker geen actie onderneemt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde, of dat de afmeting van het flitsend gebied voldoende klein is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "Controleer dat de bewegingsanimatie veroorzaakt door interacties kan uitgezet worden, tenzij deze animatie essentieel is voor de functionaliteit of de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe element vereist een niet-leeg title attribuut dat het kader identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "Controleer dat het title attribuut van dit element tekst bevat die het kader identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "Controleer dat veel voorkomende navigatie-elementen overgeslagen kunnen wordenbijvoorbeeld door gebruik van skip links, hoofding elementen of ARIA landmark rollen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam binnen het geteste fragment.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description:
      "Er is geen head sectie waarin een beschrijvend title element kan geplaatst worden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "Voor dit document dient een titel voorzien te worden, door een niet-leeg title element in de head sectie te plaatsen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "Het title element in de head sectie mag niet leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "Controleer dat het title element het document beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "Indien tabindex gebruikt wordt, controleer dan dat de tabvolgorde gespecifieerd door de tabindex attributen de relaties in de inhoud volgt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context, of zijn title attribuut, het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "Indien deze webpagina geen deel uitmaakt van een lineair proces, controleer dan of er meer dan ÈÈn manier is om deze webpagina te vinden binnen een set webpagina's.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description:
      "Controleer dat de hoofdingen en labels de inhoud en het doel beschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Controleer dat er minstens een werkwijze is waarbij de toetsenbord focus indicator visueel teruggevonden kan worden op gebruiksinterface-besturingselementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description:
      "Link elementen kunnen enkel geplaatst worden in de head sectie van het document",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "Er ontbreekt een niet-leeg rel attribuut in het link element die het linktype identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "Er ontbreekt een niet-leeg href attribuut in het link element dat wijst naar de gelinkte resource.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description:
      "Controleer of de tekst van de link het doel van de link beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "Controleer dat alle functionaliteit die multipoint of pad-gebaseerde bewegingen gebruikt voor de werking gebruikt kan worden met één enkele pointer zonder pad-gebaseerde bewegingen, tenzij multipoint of pad-gebaseerde bewegingen essentieel zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description: "HTMLCS.getTranslation('2_5_2.SinglePointer_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "Dit element heeft een mousedown event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "Dit element heeft een touchstart event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "De toegankelijke naam voor dit element bevat geen zichtbare label tekst. Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "Dit element heeft een devicemotion event listener. Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface componenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface; Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "Controleer dat de afmeting van het doelwit voor pointer invoer minstens 44 op 44 CSS pixels groot is, behalve indien:         Equivalent: Het doelwit beschikbaar is door een equivalente link of besturing op dezelfde pagina die minstens 44 op 44 CSS pixels groot is Inline: Het doel een zin of een blok tekst is User Agent Beheer: De afmeting van het doelwit bepaald wordt dooe de User Agent en niet gewijzigd werd door de auteur Essentieel: Een specifieke voorstelling van het doelwit is essentieel voor de over te brengen informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "Controleer dat de inhoud het gebruik van invoermiddelen beschikbaar op een platform niet beperkt behalve indien deze beperking essentieel is, vereist om de veiligheid van de inhoud te verzekeren of gebruikersinstellingen te respecteren.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "Het html element zou een lang of xml:lang attribuut moeten bevatten dat de taal van het document beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "Controleer dat elke taalwijziging aangeduid wordt met het lang en/of xml:lang attribuut op een element, waar toepasselijk.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van specifieke definities van woorden en zinnen die in een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomen en jargon.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van de volledige vorm of betekenis van afkortingen",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "Waar de inhoud een leesniveau vereist dat verder gevorderd is dan lager middelbaar onderwijs, zou bijkomende inhoud of een alternatieve versie voorzien moeten worden.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de body tekst.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de tekst binnen het rb element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby element bevat geen rp element dat extra punctuering aanbiedt aan browsers die geen ruby tekst ondersteunen",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "Controleer dat er geen contextwijziging optreedt indien de focus op dit invoerveld valt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      'Dit formulier heeft geen submit knop, wat problemen veroorzaakt voor zij die het formulier niet met het toetsenbord kunnen indienen. Submit knoppen zijn input elementen met type attribuut "submit" of "image" of button elementen met type "submit" een ongeldig of leeg type attribuut.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "Controleer dat navigatiemechanismes die herhaald worden op meerdere webpagina's in dezelfde volgorde voorkomen iedere keer dat ze herhaald worden, tenzij een wijziging door de gebruiker werd veroorzaakt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "Controleer dat componenten met dezelfde functionaliteit binnen deze webpagina consistent geÔdentificeerd worden in de set webpagina's waartoe deze behoort.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "Controleer dat de link tekst van deze link informatie bevat die weergeeft dat deze link in een nieuw venster zal openen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "Als een invoerfout automatisch gedetecteerd wordt in dit formulier, controleer dan dat de foute zaken geÔdentificeerd worden en de fouten als tekst aan de gebruiker worden beschreven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "Controleer of beschrijvende labels of instructies (inclusief voor verplichte velden) voorzien zijn voor gebruikersinvoer in dit formulier.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "Controleer of dit formulier verbeteringssuggesties doet voor fouten in gebruikersinvoer, tenzij dit de veiligheid of het doel van de inhoud in gevaar brengt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "Indien dit formulier de gebruiker tot een financieel of legaal engagement verplicht, gebruiker-beheerbare gegevens wijzigt of verwijdert of test-antwoorden indient, zorg er dan voor dat indiening omkeerbaar is, gecontroleerd wordt voor invoerfouten en/of bevestigd wordt door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "Controleer of contextgevoelige hulp beschikbaar is voor dit formulier, op niveau van de webpagina of het besturingselement.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Controleer of indieningen voor dit formulier ofwel omkeerbaar zijn, gecontroleerd worden op invoerfouten en/of bevestigd worden door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  { ruleId: "4_1_2_null", description: "msg", helpUrl: [], ruleType: "error" },
  {
    ruleId: "4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Empty",
    description:
      "Anker element gevonden met een ID maar zonder een href of link tekst. Overweeg om de ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "Anker element gevonden met een name attribuut maar zonder een href of link tekst. Overweeg om het naam attribuut als ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "Anker element gevonden zonder linkinhoud en zonder name of ID attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "Anker elementen zouden niet gebruikt mogen worden voor in-pagina linkbestemmingen. Indien de ID niet voor andere doeleinden (zoals CSS of scripting) gebruikt wordt, overweeg deze te verhuizen naar een bovenliggend element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "Anker element gevonden binnen link inhoud, maar zonder dat er een href, ID of name attribuut voorzien is.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "Anker element gevonden met een geldig href attribuut, maar zonder linkinhoud.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Controleer dat statusboodschappen programmatisch bepaald kunnen worden door rol of eigenschappen zodanig dat ze aan de gebruiker kunnen beschikbaar gesteld worden via hulptechnologie zonder de focus te krijgen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "SkipLinks",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H30.2",
    description:
      "Img element is de enige inhoud van de link, maar bevat geen alt tekst. De alt tekst dient het doel van deze link te beschrijven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "Img element met een lege alt tekst mag enkel geen of een leeg titel attribuut hebben.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description:
      "Img element werd gemarkeerd om  genegeerd te worden door Hulptechnologie",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img element bevat geen alt attribuut. Gebruik een alt attribuut om een kort tekstalternatief weer te geven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "Zorg ervoor dat het alt attribuut van dit img element hetzelfde doel dient en dezelfde informatie weergeeft als de afbeelding.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "Afbeelding in de indienknop heeft geen alt attribuut.  Zorg voor een tekstalternatief dat de functie van de knop beschrijft, gebruik een alt attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "Zorg ervoor dat alt text van de afbeelding in de indienknop het doel van de knop beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "Area-element in een image map heeft geen alt attribuut. Ieder area element moet een tekstalternatief hebben dat de functie ervan beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "Zorg ervoor dat het tekstalternatief van het area element hetzelfde doel heeft als het deel van de image map afbeelding waarnaar het verwijst.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "Als dit beeld niet volledig kan omschreven worden in een kort tekstalternatief, zorg er dan voor dat een langer tekstalternatief beschikbaar is, bijvoorbeeld in de bodytekst of via een link.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link herhaalt",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "Object elementen moeten een tekstalternatief bevatten indien alle andere alternatieven uitgeput zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "Applet elementen moeten een tekstalternatief bevatten in de body van het element, voor browsers die het applet element niet ondersteunen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "Applet elementen moeten een alt attribuut  bevatten, om een tekst-alternatief te bieden in browsers die het element ondersteunen maar de applet niet kunnen laden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "Indien dit embedded object vooraf opgenomen audio bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "Indien dit embedded object vooraf opgenomen video bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is, of dat een audiospoor beschikbaar is dat equivalente informatie aanbiedt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of ondertitels aangeboden worden voor audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of er een audio beschrijving voor de video, en/of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "Indien dit embedded object gesynchroniseerde media bevat, controleer dan of er ondertitels aangeboden worden voor live audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat , controleer dan of er een audio beschrijving voor de video inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, controleer dan of er een gebarentaal interpretatie beschikbaar is voor de audio-inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, en pauzes in de voorgrond-audio onvoldoende zijn voor audiobeschrijving om de betekenis van de opgenomen video te communiceren, controleer dan of er een uitgebreide audiobeschrijving voorzien is, ofwel via scripting of via een alternatieve versie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media of louter video bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "Indien dit embedded object enkel live audio-inhoud bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      'De rol van dit element is "presentation" maar deze bevat onderliggende elementen met een semantische betekenis.',
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      'Het "for" attribuut van dit label bevat een ID voor een element dat geen formulierbesturingselement. Controleer of het juiste ID ingevoerd is voor het bedoelde element.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      'Dit formulierbesturingselement heeft een "titel" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      'Dit formulierbesturingselement heeft een "aria-label" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      'Dit formulierbesturingselement heeft een "aria-labelledby" attribuut, dit bevat echter eeb ID "{{id}}" dat niet bestaat op een element. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "Dit verborgen formulierveld is gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      'Dit formulierveld is bedoeld om verborgen te zijn (via het "hidden" attribuut), maar is ook gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      'Dit formulierveld zou gelabeled moeten zijn. Gebruik het label element (ofwel met een "for" attribuut of als omvattend element rond het formulierveld), of "title" "aria-label" of "aria-labbeledby" attributen waar gepast.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description: "Presentationele markup gebruikt die vervallen is in HTML5",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "Heading markup zou gebruikt moeten worden indien deze inhoud bedoeld is als een hoofding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "Tabelcel heeft een ongeldig scope attribuut. Geldige waardes zijn row, col, rowgroup of colgroup",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "Scope attributen op td elementen die als hoofdingen gebruikt worden voor andere elementen zijn vervallen in HTML. Gebruik in plaats daarvan een th element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "Scope attributen op th elementen zijn ambigu in een tabel met meerdere niveaus van hoofding. Gebruik in plaats daarvan het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "Check that headers attribute on td element is correct.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      'Foutief headers attribuut op dit td element. "{{expected}}" werd verwacht maar "{{actual}}" gevonden',
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "De relatie tussen td elementen en de eraan gebonden th elementen werd niet omschreven. Gezien deze tabel meerdere niveaus th elmenten bevat, moet het headers attribuut gebruikt worden op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "Niet alle th elementen in deze tabel hebben een scope attribuut. Deze cellen zouden een scope attribuut moeten bevatten om hun verband met td elementen te identificeren.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruikt te worden voor opmaak, maar bevat een summary attribuut. Opmaaktabellen mogen geen summary attributen bevatten, of indien deze toch aanwezig zijn, moeten ze leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "Indien deze tabel een datatabel is en zowel het summary als het caption element aanwezig zijn, mag het summary attribuut geen herhaling zijn van het caption element",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het summary attribuut de organisatie en het gebruik van deze tabel verduidelijkt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "Indien deze tabel een datatabel is, overweeg dan het summary attribuut van het tabel element te gebruiken om een overzicht over deze tabel te geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruik te worden voor opmaak, maar bevat een caption element. Opmaaktabellen mogen geen caption bevatten.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het caption element een nauwkeurige beschrijving geeft van de tabel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "Indien deze tabel een datatabel is, overweeg dan een caption element bij het table element te gebruiken om de tabel te identificeren.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset bevat geen legend element. Alle fieldsets zouden een legend element moeten bevatten dat een beschrijving geeft van de veldengroep.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "Indien deze keuzelijst groepen verwante opties bevat, zouden ze gegroepeerd moeten worden met optgroup.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "Indien radioknoppen of selectievakjes een verdere beschrijving vergen op groepsniveau, zouden ze moeten omvat worden in een fieldset element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "Deze inhoud lijkt op een gesimuleerde niet-geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ul-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "Deze inhoud lijkt op een gesimuleerde geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ol-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "Hoofding tag gevonden zonder inhoud. Tekst die niet bedoeld is als hoofding zou niet mogen gemarkeerd worden met een hoofding tag.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "Indien dit element een navigatie-sectie bevat, wordt aanbevolen lijst-markup te gebruiken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "Deze tabel lijkt een opmaaktabel te zijn. Indien deze bedoeld is als een datatabel, zorg er dan voor dat hoofding cellen geÔdentificeerd worden met th elementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "Deze tabel lijkt een datatabel te zijn. Indien deze bedoeld is als een opmaaktabel, zorg er dan voor dat er geen th elementen, summary of caption aanwezig zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "Controleer dat de inhoud in een betekenisvolle volgorde staat indien lineair weergegeven, zoals wanneer stylesheets gedesactiveerd zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "Indien instructies voorzien zijn voor het goed begrip van de inhoud, reken dan niet enkel op zintuigelijke eigenschappen (zoals vorm, grootte of positie) om voorwerpen te omschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "Controleer dat de inhoud zijn uitzicht en werking niet beperkt tot ÈÈn weergave-oriëntatie, zoals staand of liggend, tenzij zo'n specifieke weergave-oriëntatie essentieel is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "Controleer dat het invoerveld een doel dient zoals beschreven in Input Purposes for User Interface Components sectie, en dat de inhoud is geÔmplementeerd met technologiën die het identificeren van de verwachtte betekenis van formulierinvoerdata ondersteunen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "Dit element heeft geen autocomplete attribuut. Indien dit veld informatie verzamelt over de gebruiker, overweeg dan er ÈÈn toe te voegen om te conformeren met dit succescriterium.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "Controleer dat het doel van de gebruikersinterface-onderdelen, iconen en regio's programmatorisch kunnen bepaald worden",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "Controleer dat alle informatie die gecommuniceerd wordt via kleur eveneens beschikbaar is als tekst of als een andere visuele hint.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Controleer dat de inhoud kan weergegeven worden zonder verlies van informatie of functionaliteit en zonder in twee dimensies te moeten scrollen voor: Verticaal scrollende inhoud op een breedte equivalent aan 320 CSS pixels    Horizontaal scrollende inhoud op een hoogte equivalent aan CSS pixels. Behalve voor die delen van de inhoud die een tweedimensionale opmaak vergen voor gebruik of betekenis.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'Dit element heeft "position: fixed". Dit kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "Voorgeformatteerde tekst kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Tussen beide komen in de mogelijkheid van de User Agent om uit te vergroten kan beschouwd worden als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Controleer dat de visuele weergave van de volgende zaken een contrastverhouding van minstens 3:1 tegen aangrenzende kleuren:       Gebruikersinterface-onderdelen: visuele informatie vereist om gebruikersinterface-onderdelen te herkennen en hun status, behalve voor inactieve onderdelen or waar het uitzicht van het component door de User Agent bepaald wordt en niet gewijzigd is geweest door de auteur      Grafische objecten: delen van de afbeelding vereist om de inhoud te begrijpen, behalve daar waar de specifieke weergave essentieel is voor de communicatie van de informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "Controleer dat er geen verlies van inhoud of functionaliteit optreedt bij het instellen van de volgende eigenschappen en zonder andere stijleigenschappen te wijzigen: Lijnhoogte (lijnspatiëring) naar minstens 1,5 maal de lettergrootte Spatieing na paragrafen tot minstens 2 maal de lettergrootte Letterspatiëring (tracking) tot minstens 0,12 de lettergrootte Woordspatiëring tot minstens 0,16 maal de lettergrootte.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "Controleer dat waar een pointer hover of toetsenbordfocus aanvullende content doet zichtbaar worden en terug verbergen, het volgende waar is:         Als de aanvullende content een deel van de andere content bedekt, moet het mogelijk zijn om de aanvullende content (zoals een tooltip) opnieuw te verbergen zonder dat de muisaanwijzer verplaatst hoeft te worden en zonder de focus van het element weg te hoeven nemen Als de aanvullende content verschijnt door een element aan te wijzen (zonder te klikken), dan mag de content niet verdwijnen als de gebruiker de muis beweegt in het gebied waarin de aanvullende content is verschenen.De aanvullende content moet zichtbaar blijven totdat de gebruiker de muisaanwijzer buiten het element plaatst, de toetsenbordfocus actief verplaatst of op Escape drukt. Ten slotte mag de aanvullende content ook automatisch verdwijnen, maar enkel wanneer de weergegeven informatie niet meer geldig is ó bijvoorbeeld wanneer gemeld wordt dat een e-mailadres niet correct is ingevuld, maar de gebruiker deze fout al heeft verbeterd.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "Indien dit element audiop bevat die automatisch langer dan 3 seconden speelt, controleer dan dat de mogelijkheid bestaat om de audio te pauzeren, stoppen of stil te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "Controleer of dit element een overgeërfde voorgrondkleur heeft die complementair is met de overeenkomstige inline achtergrondkleur of afbeelding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "Controleer of dit element een overgeërfde achtergrondkleur of afbeelding heeft die complementair is met de overeenkomstige inline voorgrondkleur.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie en zonder verlies van inhoud of functionaliteit.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "Indien de gebruikte technologie de visuele presentatie kan weergeven, controleer dan dat tekst gebruikt werd om informatie weer te geven, in plaats van afbeeldingen van tekst, behalve als de afbeelding van tekst essentieel is voor de weer te geven informatie, of visueel kan aangepast worden aan de noden van de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "Voor voordien opgenomen pure audio-inhoud in dit element die hoofdzakelijk spraak is (zoals vertelling) dienen achtergrondgeluiden stil kunnen gezet worden, of ten minste 20 dB (of 4 maal) stiller te zijn dan de spraak.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "Controleer dat een mechanisme beschikbaar is voor de gebruiker om de voorgrond- en achtergrondkleuren van tekstblokken te kiezen, via de webpagina of via de browser.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "Controleer of een mechanisme bestaat om de breedte van een blok tekst te beperken tot niet meer dan 80 tekens (of 40 tekens in Chineese, Japans of Koreaans schrift)",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "Controleer dat tekstblokken niet vol uitgelijnd zijn - dat wil zeggen, op zowel de linker- als rechterrand - of dat een mechanisme beschikbaar is om de volle uitlijning af te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "Controleer dat de lijnspatiëring in tekstblokken minstens 150% is in paragrafen en de spatiëring tussen paragrafen minstens 1,5 keer de lijnspatiëring, of dat een mechanisme beschikbaar is om dit te bereiken.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie zonder dat de gebruiker verplicht wordt horizontaal te scrollen in een schermbreed venster.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "Controleer dat afbeeldingen van tekst enkel gebruikt worden voor zuivere decoratie of waar een specifieke weergave van tekst essentieel deel uitmaakt van de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "Controleer dat de functionaliteit voorzien in een eventhandler voor dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "Controleer dat de functionaliteit voorzien bij dubbelklikken op dit element beschikbaar is via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging over dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging uit dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging op dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mousedown op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mouseup op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "Controleer dat deze applet of plugin de mogelijkheid biedt om het focus weg te nemen van zichzelf via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "Controleer dat indien sneltoets voorzien is met maar ÈÈn letter (inclusief hoofd- en kleine letters), punctuering, getal of symboolkarakters, minstens ÈÈn van volgende stellingen waar his:         Uitzetten: Er is een mechanisme om de sneltoets af te zetten Hermappen: Er is mechanisme beschikbaar om de shortcut te hermappen om gebruik te maken van ÈÈn van de niet printbare toetsenbordkarakters (bvb. Ctrl, Alt, etc) Enkel aktief bij focus: De sneltoets voor een gebruikersinterface-onderdeel is enkel aktief als dat onderdeel het focus heeft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "Meta refresh tag wordt gebruikt om te redirecten naar een andere pagina, met een tijdslimiet die niet nul is. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "Meta refresh tag wordt gebruikt om de huidige pagina te verversen. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "Indien een onderdeel van de inhoud beweegt, scrollt of knippert gedurende langer dan 5 seconden, of automatisch ververst, controleer dan of er een mechanisme beschikbaar is om te pauzeren, te stoppen of de inhoud te verbergen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "Controleer dat er een mechanisme beschikbaar is om dit knipperende element in minder dan vijf seconden te stoppen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "Blink elementen kunnen niet voldoen aan de vereiste dat knipperende informatie gestopt kan worden binnen de vijf seconden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "Controleer dat de timing geen essentieel onderdeel is van een gebeurtenis of activiteit voorgesteld door de inhoud, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "Controleer dat alle onderbrekingen (inclusief inhoudsverversing) uitgesteld of afgezet kunnen worden door de gebruiker, behalve onderbrekingen die betrekking hebben tot een noodgeval.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "Indien deze webpagina deel uitmaakt van een set pagina's met een tijdslimiet op inactiviteit, controleer dan dat een geauthenticeerde gebruiker de activiteit zonder gegevensverlies kan voortzetten na herauthenticatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "Controleer dat gebruikers verwittigd werden van de duur van inactiviteit die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens langer dan 20 uur bewaard worden als de gebruiker geen actie onderneemt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde, of dat de afmeting van het flitsend gebied voldoende klein is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "Controleer dat de bewegingsanimatie veroorzaakt door interacties kan uitgezet worden, tenzij deze animatie essentieel is voor de functionaliteit of de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe element vereist een niet-leeg title attribuut dat het kader identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "Controleer dat het title attribuut van dit element tekst bevat die het kader identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "Controleer dat veel voorkomende navigatie-elementen overgeslagen kunnen wordenbijvoorbeeld door gebruik van skip links, hoofding elementen of ARIA landmark rollen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam binnen het geteste fragment.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description:
      "Er is geen head sectie waarin een beschrijvend title element kan geplaatst worden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "Voor dit document dient een titel voorzien te worden, door een niet-leeg title element in de head sectie te plaatsen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "Het title element in de head sectie mag niet leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "Controleer dat het title element het document beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "Indien tabindex gebruikt wordt, controleer dan dat de tabvolgorde gespecifieerd door de tabindex attributen de relaties in de inhoud volgt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context, of zijn title attribuut, het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "Indien deze webpagina geen deel uitmaakt van een lineair proces, controleer dan of er meer dan ÈÈn manier is om deze webpagina te vinden binnen een set webpagina's.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description:
      "Controleer dat de hoofdingen en labels de inhoud en het doel beschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Controleer dat er minstens een werkwijze is waarbij de toetsenbord focus indicator visueel teruggevonden kan worden op gebruiksinterface-besturingselementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description:
      "Link elementen kunnen enkel geplaatst worden in de head sectie van het document",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "Er ontbreekt een niet-leeg rel attribuut in het link element die het linktype identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "Er ontbreekt een niet-leeg href attribuut in het link element dat wijst naar de gelinkte resource.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description:
      "Controleer of de tekst van de link het doel van de link beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "Controleer dat alle functionaliteit die multipoint of pad-gebaseerde bewegingen gebruikt voor de werking gebruikt kan worden met één enkele pointer zonder pad-gebaseerde bewegingen, tenzij multipoint of pad-gebaseerde bewegingen essentieel zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description: "HTMLCS.getTranslation('2_5_2.SinglePointer_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "Dit element heeft een mousedown event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "Dit element heeft een touchstart event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "De toegankelijke naam voor dit element bevat geen zichtbare label tekst. Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "Dit element heeft een devicemotion event listener. Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface componenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface; Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "Controleer dat de afmeting van het doelwit voor pointer invoer minstens 44 op 44 CSS pixels groot is, behalve indien:         Equivalent: Het doelwit beschikbaar is door een equivalente link of besturing op dezelfde pagina die minstens 44 op 44 CSS pixels groot is Inline: Het doel een zin of een blok tekst is User Agent Beheer: De afmeting van het doelwit bepaald wordt dooe de User Agent en niet gewijzigd werd door de auteur Essentieel: Een specifieke voorstelling van het doelwit is essentieel voor de over te brengen informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "Controleer dat de inhoud het gebruik van invoermiddelen beschikbaar op een platform niet beperkt behalve indien deze beperking essentieel is, vereist om de veiligheid van de inhoud te verzekeren of gebruikersinstellingen te respecteren.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "Het html element zou een lang of xml:lang attribuut moeten bevatten dat de taal van het document beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "Controleer dat elke taalwijziging aangeduid wordt met het lang en/of xml:lang attribuut op een element, waar toepasselijk.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van specifieke definities van woorden en zinnen die in een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomen en jargon.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van de volledige vorm of betekenis van afkortingen",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "Waar de inhoud een leesniveau vereist dat verder gevorderd is dan lager middelbaar onderwijs, zou bijkomende inhoud of een alternatieve versie voorzien moeten worden.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de body tekst.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de tekst binnen het rb element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby element bevat geen rp element dat extra punctuering aanbiedt aan browsers die geen ruby tekst ondersteunen",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "Controleer dat er geen contextwijziging optreedt indien de focus op dit invoerveld valt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      'Dit formulier heeft geen submit knop, wat problemen veroorzaakt voor zij die het formulier niet met het toetsenbord kunnen indienen. Submit knoppen zijn input elementen met type attribuut "submit" of "image" of button elementen met type "submit" een ongeldig of leeg type attribuut.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "Controleer dat navigatiemechanismes die herhaald worden op meerdere webpagina's in dezelfde volgorde voorkomen iedere keer dat ze herhaald worden, tenzij een wijziging door de gebruiker werd veroorzaakt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "Controleer dat componenten met dezelfde functionaliteit binnen deze webpagina consistent geÔdentificeerd worden in de set webpagina's waartoe deze behoort.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "Controleer dat de link tekst van deze link informatie bevat die weergeeft dat deze link in een nieuw venster zal openen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "Als een invoerfout automatisch gedetecteerd wordt in dit formulier, controleer dan dat de foute zaken geÔdentificeerd worden en de fouten als tekst aan de gebruiker worden beschreven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "Controleer of beschrijvende labels of instructies (inclusief voor verplichte velden) voorzien zijn voor gebruikersinvoer in dit formulier.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "Controleer of dit formulier verbeteringssuggesties doet voor fouten in gebruikersinvoer, tenzij dit de veiligheid of het doel van de inhoud in gevaar brengt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "Indien dit formulier de gebruiker tot een financieel of legaal engagement verplicht, gebruiker-beheerbare gegevens wijzigt of verwijdert of test-antwoorden indient, zorg er dan voor dat indiening omkeerbaar is, gecontroleerd wordt voor invoerfouten en/of bevestigd wordt door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "Controleer of contextgevoelige hulp beschikbaar is voor dit formulier, op niveau van de webpagina of het besturingselement.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Controleer of indieningen voor dit formulier ofwel omkeerbaar zijn, gecontroleerd worden op invoerfouten en/of bevestigd worden door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  { ruleId: "4_1_2_null", description: "msg", helpUrl: [], ruleType: "error" },
  {
    ruleId: "4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Empty",
    description:
      "Anker element gevonden met een ID maar zonder een href of link tekst. Overweeg om de ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "Anker element gevonden met een name attribuut maar zonder een href of link tekst. Overweeg om het naam attribuut als ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "Anker element gevonden zonder linkinhoud en zonder name of ID attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "Anker elementen zouden niet gebruikt mogen worden voor in-pagina linkbestemmingen. Indien de ID niet voor andere doeleinden (zoals CSS of scripting) gebruikt wordt, overweeg deze te verhuizen naar een bovenliggend element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "Anker element gevonden binnen link inhoud, maar zonder dat er een href, ID of name attribuut voorzien is.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "Anker element gevonden met een geldig href attribuut, maar zonder linkinhoud.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Controleer dat statusboodschappen programmatisch bepaald kunnen worden door rol of eigenschappen zodanig dat ze aan de gebruiker kunnen beschikbaar gesteld worden via hulptechnologie zonder de focus te krijgen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "SkipLinks",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H30.2",
    description:
      "Img element is de enige inhoud van de link, maar bevat geen alt tekst. De alt tekst dient het doel van deze link te beschrijven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "Img element met een lege alt tekst mag enkel geen of een leeg titel attribuut hebben.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description:
      "Img element werd gemarkeerd om  genegeerd te worden door Hulptechnologie",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img element bevat geen alt attribuut. Gebruik een alt attribuut om een kort tekstalternatief weer te geven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "Zorg ervoor dat het alt attribuut van dit img element hetzelfde doel dient en dezelfde informatie weergeeft als de afbeelding.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "Afbeelding in de indienknop heeft geen alt attribuut.  Zorg voor een tekstalternatief dat de functie van de knop beschrijft, gebruik een alt attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "Zorg ervoor dat alt text van de afbeelding in de indienknop het doel van de knop beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "Area-element in een image map heeft geen alt attribuut. Ieder area element moet een tekstalternatief hebben dat de functie ervan beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "Zorg ervoor dat het tekstalternatief van het area element hetzelfde doel heeft als het deel van de image map afbeelding waarnaar het verwijst.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "Als dit beeld niet volledig kan omschreven worden in een kort tekstalternatief, zorg er dan voor dat een langer tekstalternatief beschikbaar is, bijvoorbeeld in de bodytekst of via een link.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link herhaalt",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "Object elementen moeten een tekstalternatief bevatten indien alle andere alternatieven uitgeput zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "Applet elementen moeten een tekstalternatief bevatten in de body van het element, voor browsers die het applet element niet ondersteunen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "Applet elementen moeten een alt attribuut  bevatten, om een tekst-alternatief te bieden in browsers die het element ondersteunen maar de applet niet kunnen laden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "Indien dit embedded object vooraf opgenomen audio bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "Indien dit embedded object vooraf opgenomen video bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is, of dat een audiospoor beschikbaar is dat equivalente informatie aanbiedt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of ondertitels aangeboden worden voor audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of er een audio beschrijving voor de video, en/of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "Indien dit embedded object gesynchroniseerde media bevat, controleer dan of er ondertitels aangeboden worden voor live audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat , controleer dan of er een audio beschrijving voor de video inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, controleer dan of er een gebarentaal interpretatie beschikbaar is voor de audio-inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, en pauzes in de voorgrond-audio onvoldoende zijn voor audiobeschrijving om de betekenis van de opgenomen video te communiceren, controleer dan of er een uitgebreide audiobeschrijving voorzien is, ofwel via scripting of via een alternatieve versie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media of louter video bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "Indien dit embedded object enkel live audio-inhoud bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      'De rol van dit element is "presentation" maar deze bevat onderliggende elementen met een semantische betekenis.',
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      'Het "for" attribuut van dit label bevat een ID voor een element dat geen formulierbesturingselement. Controleer of het juiste ID ingevoerd is voor het bedoelde element.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      'Dit formulierbesturingselement heeft een "titel" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      'Dit formulierbesturingselement heeft een "aria-label" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      'Dit formulierbesturingselement heeft een "aria-labelledby" attribuut, dit bevat echter eeb ID "{{id}}" dat niet bestaat op een element. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "Dit verborgen formulierveld is gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      'Dit formulierveld is bedoeld om verborgen te zijn (via het "hidden" attribuut), maar is ook gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      'Dit formulierveld zou gelabeled moeten zijn. Gebruik het label element (ofwel met een "for" attribuut of als omvattend element rond het formulierveld), of "title" "aria-label" of "aria-labbeledby" attributen waar gepast.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description: "Presentationele markup gebruikt die vervallen is in HTML5",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "Heading markup zou gebruikt moeten worden indien deze inhoud bedoeld is als een hoofding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "Tabelcel heeft een ongeldig scope attribuut. Geldige waardes zijn row, col, rowgroup of colgroup",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "Scope attributen op td elementen die als hoofdingen gebruikt worden voor andere elementen zijn vervallen in HTML. Gebruik in plaats daarvan een th element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "Scope attributen op th elementen zijn ambigu in een tabel met meerdere niveaus van hoofding. Gebruik in plaats daarvan het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "Check that headers attribute on td element is correct.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      'Foutief headers attribuut op dit td element. "{{expected}}" werd verwacht maar "{{actual}}" gevonden',
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "De relatie tussen td elementen en de eraan gebonden th elementen werd niet omschreven. Gezien deze tabel meerdere niveaus th elmenten bevat, moet het headers attribuut gebruikt worden op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "Niet alle th elementen in deze tabel hebben een scope attribuut. Deze cellen zouden een scope attribuut moeten bevatten om hun verband met td elementen te identificeren.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruikt te worden voor opmaak, maar bevat een summary attribuut. Opmaaktabellen mogen geen summary attributen bevatten, of indien deze toch aanwezig zijn, moeten ze leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "Indien deze tabel een datatabel is en zowel het summary als het caption element aanwezig zijn, mag het summary attribuut geen herhaling zijn van het caption element",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het summary attribuut de organisatie en het gebruik van deze tabel verduidelijkt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "Indien deze tabel een datatabel is, overweeg dan het summary attribuut van het tabel element te gebruiken om een overzicht over deze tabel te geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruik te worden voor opmaak, maar bevat een caption element. Opmaaktabellen mogen geen caption bevatten.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het caption element een nauwkeurige beschrijving geeft van de tabel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "Indien deze tabel een datatabel is, overweeg dan een caption element bij het table element te gebruiken om de tabel te identificeren.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset bevat geen legend element. Alle fieldsets zouden een legend element moeten bevatten dat een beschrijving geeft van de veldengroep.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "Indien deze keuzelijst groepen verwante opties bevat, zouden ze gegroepeerd moeten worden met optgroup.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "Indien radioknoppen of selectievakjes een verdere beschrijving vergen op groepsniveau, zouden ze moeten omvat worden in een fieldset element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "Deze inhoud lijkt op een gesimuleerde niet-geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ul-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "Deze inhoud lijkt op een gesimuleerde geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ol-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "Hoofding tag gevonden zonder inhoud. Tekst die niet bedoeld is als hoofding zou niet mogen gemarkeerd worden met een hoofding tag.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "Indien dit element een navigatie-sectie bevat, wordt aanbevolen lijst-markup te gebruiken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "Deze tabel lijkt een opmaaktabel te zijn. Indien deze bedoeld is als een datatabel, zorg er dan voor dat hoofding cellen geÔdentificeerd worden met th elementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "Deze tabel lijkt een datatabel te zijn. Indien deze bedoeld is als een opmaaktabel, zorg er dan voor dat er geen th elementen, summary of caption aanwezig zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "Controleer dat de inhoud in een betekenisvolle volgorde staat indien lineair weergegeven, zoals wanneer stylesheets gedesactiveerd zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "Indien instructies voorzien zijn voor het goed begrip van de inhoud, reken dan niet enkel op zintuigelijke eigenschappen (zoals vorm, grootte of positie) om voorwerpen te omschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "Controleer dat de inhoud zijn uitzicht en werking niet beperkt tot ÈÈn weergave-oriëntatie, zoals staand of liggend, tenzij zo'n specifieke weergave-oriëntatie essentieel is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "Controleer dat het invoerveld een doel dient zoals beschreven in Input Purposes for User Interface Components sectie, en dat de inhoud is geÔmplementeerd met technologiën die het identificeren van de verwachtte betekenis van formulierinvoerdata ondersteunen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "Dit element heeft geen autocomplete attribuut. Indien dit veld informatie verzamelt over de gebruiker, overweeg dan er ÈÈn toe te voegen om te conformeren met dit succescriterium.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "Controleer dat het doel van de gebruikersinterface-onderdelen, iconen en regio's programmatorisch kunnen bepaald worden",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "Controleer dat alle informatie die gecommuniceerd wordt via kleur eveneens beschikbaar is als tekst of als een andere visuele hint.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Controleer dat de inhoud kan weergegeven worden zonder verlies van informatie of functionaliteit en zonder in twee dimensies te moeten scrollen voor: Verticaal scrollende inhoud op een breedte equivalent aan 320 CSS pixels    Horizontaal scrollende inhoud op een hoogte equivalent aan CSS pixels. Behalve voor die delen van de inhoud die een tweedimensionale opmaak vergen voor gebruik of betekenis.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'Dit element heeft "position: fixed". Dit kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "Voorgeformatteerde tekst kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Tussen beide komen in de mogelijkheid van de User Agent om uit te vergroten kan beschouwd worden als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Controleer dat de visuele weergave van de volgende zaken een contrastverhouding van minstens 3:1 tegen aangrenzende kleuren:       Gebruikersinterface-onderdelen: visuele informatie vereist om gebruikersinterface-onderdelen te herkennen en hun status, behalve voor inactieve onderdelen or waar het uitzicht van het component door de User Agent bepaald wordt en niet gewijzigd is geweest door de auteur      Grafische objecten: delen van de afbeelding vereist om de inhoud te begrijpen, behalve daar waar de specifieke weergave essentieel is voor de communicatie van de informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "Controleer dat er geen verlies van inhoud of functionaliteit optreedt bij het instellen van de volgende eigenschappen en zonder andere stijleigenschappen te wijzigen: Lijnhoogte (lijnspatiëring) naar minstens 1,5 maal de lettergrootte Spatieing na paragrafen tot minstens 2 maal de lettergrootte Letterspatiëring (tracking) tot minstens 0,12 de lettergrootte Woordspatiëring tot minstens 0,16 maal de lettergrootte.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "Controleer dat waar een pointer hover of toetsenbordfocus aanvullende content doet zichtbaar worden en terug verbergen, het volgende waar is:         Als de aanvullende content een deel van de andere content bedekt, moet het mogelijk zijn om de aanvullende content (zoals een tooltip) opnieuw te verbergen zonder dat de muisaanwijzer verplaatst hoeft te worden en zonder de focus van het element weg te hoeven nemen Als de aanvullende content verschijnt door een element aan te wijzen (zonder te klikken), dan mag de content niet verdwijnen als de gebruiker de muis beweegt in het gebied waarin de aanvullende content is verschenen.De aanvullende content moet zichtbaar blijven totdat de gebruiker de muisaanwijzer buiten het element plaatst, de toetsenbordfocus actief verplaatst of op Escape drukt. Ten slotte mag de aanvullende content ook automatisch verdwijnen, maar enkel wanneer de weergegeven informatie niet meer geldig is ó bijvoorbeeld wanneer gemeld wordt dat een e-mailadres niet correct is ingevuld, maar de gebruiker deze fout al heeft verbeterd.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "Indien dit element audiop bevat die automatisch langer dan 3 seconden speelt, controleer dan dat de mogelijkheid bestaat om de audio te pauzeren, stoppen of stil te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "Controleer of dit element een overgeërfde voorgrondkleur heeft die complementair is met de overeenkomstige inline achtergrondkleur of afbeelding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "Controleer of dit element een overgeërfde achtergrondkleur of afbeelding heeft die complementair is met de overeenkomstige inline voorgrondkleur.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie en zonder verlies van inhoud of functionaliteit.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "Indien de gebruikte technologie de visuele presentatie kan weergeven, controleer dan dat tekst gebruikt werd om informatie weer te geven, in plaats van afbeeldingen van tekst, behalve als de afbeelding van tekst essentieel is voor de weer te geven informatie, of visueel kan aangepast worden aan de noden van de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "Voor voordien opgenomen pure audio-inhoud in dit element die hoofdzakelijk spraak is (zoals vertelling) dienen achtergrondgeluiden stil kunnen gezet worden, of ten minste 20 dB (of 4 maal) stiller te zijn dan de spraak.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "Controleer dat een mechanisme beschikbaar is voor de gebruiker om de voorgrond- en achtergrondkleuren van tekstblokken te kiezen, via de webpagina of via de browser.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "Controleer of een mechanisme bestaat om de breedte van een blok tekst te beperken tot niet meer dan 80 tekens (of 40 tekens in Chineese, Japans of Koreaans schrift)",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "Controleer dat tekstblokken niet vol uitgelijnd zijn - dat wil zeggen, op zowel de linker- als rechterrand - of dat een mechanisme beschikbaar is om de volle uitlijning af te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "Controleer dat de lijnspatiëring in tekstblokken minstens 150% is in paragrafen en de spatiëring tussen paragrafen minstens 1,5 keer de lijnspatiëring, of dat een mechanisme beschikbaar is om dit te bereiken.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie zonder dat de gebruiker verplicht wordt horizontaal te scrollen in een schermbreed venster.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "Controleer dat afbeeldingen van tekst enkel gebruikt worden voor zuivere decoratie of waar een specifieke weergave van tekst essentieel deel uitmaakt van de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "Controleer dat de functionaliteit voorzien in een eventhandler voor dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "Controleer dat de functionaliteit voorzien bij dubbelklikken op dit element beschikbaar is via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging over dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging uit dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging op dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mousedown op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mouseup op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "Controleer dat deze applet of plugin de mogelijkheid biedt om het focus weg te nemen van zichzelf via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "Controleer dat indien sneltoets voorzien is met maar ÈÈn letter (inclusief hoofd- en kleine letters), punctuering, getal of symboolkarakters, minstens ÈÈn van volgende stellingen waar his:         Uitzetten: Er is een mechanisme om de sneltoets af te zetten Hermappen: Er is mechanisme beschikbaar om de shortcut te hermappen om gebruik te maken van ÈÈn van de niet printbare toetsenbordkarakters (bvb. Ctrl, Alt, etc) Enkel aktief bij focus: De sneltoets voor een gebruikersinterface-onderdeel is enkel aktief als dat onderdeel het focus heeft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "Meta refresh tag wordt gebruikt om te redirecten naar een andere pagina, met een tijdslimiet die niet nul is. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "Meta refresh tag wordt gebruikt om de huidige pagina te verversen. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "Indien een onderdeel van de inhoud beweegt, scrollt of knippert gedurende langer dan 5 seconden, of automatisch ververst, controleer dan of er een mechanisme beschikbaar is om te pauzeren, te stoppen of de inhoud te verbergen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "Controleer dat er een mechanisme beschikbaar is om dit knipperende element in minder dan vijf seconden te stoppen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "Blink elementen kunnen niet voldoen aan de vereiste dat knipperende informatie gestopt kan worden binnen de vijf seconden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "Controleer dat de timing geen essentieel onderdeel is van een gebeurtenis of activiteit voorgesteld door de inhoud, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "Controleer dat alle onderbrekingen (inclusief inhoudsverversing) uitgesteld of afgezet kunnen worden door de gebruiker, behalve onderbrekingen die betrekking hebben tot een noodgeval.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "Indien deze webpagina deel uitmaakt van een set pagina's met een tijdslimiet op inactiviteit, controleer dan dat een geauthenticeerde gebruiker de activiteit zonder gegevensverlies kan voortzetten na herauthenticatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "Controleer dat gebruikers verwittigd werden van de duur van inactiviteit die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens langer dan 20 uur bewaard worden als de gebruiker geen actie onderneemt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde, of dat de afmeting van het flitsend gebied voldoende klein is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "Controleer dat de bewegingsanimatie veroorzaakt door interacties kan uitgezet worden, tenzij deze animatie essentieel is voor de functionaliteit of de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe element vereist een niet-leeg title attribuut dat het kader identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "Controleer dat het title attribuut van dit element tekst bevat die het kader identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "Controleer dat veel voorkomende navigatie-elementen overgeslagen kunnen wordenbijvoorbeeld door gebruik van skip links, hoofding elementen of ARIA landmark rollen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam binnen het geteste fragment.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description:
      "Er is geen head sectie waarin een beschrijvend title element kan geplaatst worden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "Voor dit document dient een titel voorzien te worden, door een niet-leeg title element in de head sectie te plaatsen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "Het title element in de head sectie mag niet leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "Controleer dat het title element het document beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "Indien tabindex gebruikt wordt, controleer dan dat de tabvolgorde gespecifieerd door de tabindex attributen de relaties in de inhoud volgt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context, of zijn title attribuut, het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "Indien deze webpagina geen deel uitmaakt van een lineair proces, controleer dan of er meer dan ÈÈn manier is om deze webpagina te vinden binnen een set webpagina's.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description:
      "Controleer dat de hoofdingen en labels de inhoud en het doel beschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Controleer dat er minstens een werkwijze is waarbij de toetsenbord focus indicator visueel teruggevonden kan worden op gebruiksinterface-besturingselementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description:
      "Link elementen kunnen enkel geplaatst worden in de head sectie van het document",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "Er ontbreekt een niet-leeg rel attribuut in het link element die het linktype identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "Er ontbreekt een niet-leeg href attribuut in het link element dat wijst naar de gelinkte resource.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description:
      "Controleer of de tekst van de link het doel van de link beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "Controleer dat alle functionaliteit die multipoint of pad-gebaseerde bewegingen gebruikt voor de werking gebruikt kan worden met één enkele pointer zonder pad-gebaseerde bewegingen, tenzij multipoint of pad-gebaseerde bewegingen essentieel zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description: "HTMLCS.getTranslation('2_5_2.SinglePointer_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "Dit element heeft een mousedown event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "Dit element heeft een touchstart event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "De toegankelijke naam voor dit element bevat geen zichtbare label tekst. Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "Dit element heeft een devicemotion event listener. Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface componenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface; Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "Controleer dat de afmeting van het doelwit voor pointer invoer minstens 44 op 44 CSS pixels groot is, behalve indien:         Equivalent: Het doelwit beschikbaar is door een equivalente link of besturing op dezelfde pagina die minstens 44 op 44 CSS pixels groot is Inline: Het doel een zin of een blok tekst is User Agent Beheer: De afmeting van het doelwit bepaald wordt dooe de User Agent en niet gewijzigd werd door de auteur Essentieel: Een specifieke voorstelling van het doelwit is essentieel voor de over te brengen informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "Controleer dat de inhoud het gebruik van invoermiddelen beschikbaar op een platform niet beperkt behalve indien deze beperking essentieel is, vereist om de veiligheid van de inhoud te verzekeren of gebruikersinstellingen te respecteren.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "Het html element zou een lang of xml:lang attribuut moeten bevatten dat de taal van het document beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "Controleer dat elke taalwijziging aangeduid wordt met het lang en/of xml:lang attribuut op een element, waar toepasselijk.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van specifieke definities van woorden en zinnen die in een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomen en jargon.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van de volledige vorm of betekenis van afkortingen",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "Waar de inhoud een leesniveau vereist dat verder gevorderd is dan lager middelbaar onderwijs, zou bijkomende inhoud of een alternatieve versie voorzien moeten worden.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de body tekst.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de tekst binnen het rb element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby element bevat geen rp element dat extra punctuering aanbiedt aan browsers die geen ruby tekst ondersteunen",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "Controleer dat er geen contextwijziging optreedt indien de focus op dit invoerveld valt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      'Dit formulier heeft geen submit knop, wat problemen veroorzaakt voor zij die het formulier niet met het toetsenbord kunnen indienen. Submit knoppen zijn input elementen met type attribuut "submit" of "image" of button elementen met type "submit" een ongeldig of leeg type attribuut.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "Controleer dat navigatiemechanismes die herhaald worden op meerdere webpagina's in dezelfde volgorde voorkomen iedere keer dat ze herhaald worden, tenzij een wijziging door de gebruiker werd veroorzaakt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "Controleer dat componenten met dezelfde functionaliteit binnen deze webpagina consistent geÔdentificeerd worden in de set webpagina's waartoe deze behoort.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "Controleer dat de link tekst van deze link informatie bevat die weergeeft dat deze link in een nieuw venster zal openen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "Als een invoerfout automatisch gedetecteerd wordt in dit formulier, controleer dan dat de foute zaken geÔdentificeerd worden en de fouten als tekst aan de gebruiker worden beschreven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "Controleer of beschrijvende labels of instructies (inclusief voor verplichte velden) voorzien zijn voor gebruikersinvoer in dit formulier.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "Controleer of dit formulier verbeteringssuggesties doet voor fouten in gebruikersinvoer, tenzij dit de veiligheid of het doel van de inhoud in gevaar brengt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "Indien dit formulier de gebruiker tot een financieel of legaal engagement verplicht, gebruiker-beheerbare gegevens wijzigt of verwijdert of test-antwoorden indient, zorg er dan voor dat indiening omkeerbaar is, gecontroleerd wordt voor invoerfouten en/of bevestigd wordt door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "Controleer of contextgevoelige hulp beschikbaar is voor dit formulier, op niveau van de webpagina of het besturingselement.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Controleer of indieningen voor dit formulier ofwel omkeerbaar zijn, gecontroleerd worden op invoerfouten en/of bevestigd worden door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  { ruleId: "4_1_2_null", description: "msg", helpUrl: [], ruleType: "error" },
  {
    ruleId: "4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Empty",
    description:
      "Anker element gevonden met een ID maar zonder een href of link tekst. Overweeg om de ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "Anker element gevonden met een name attribuut maar zonder een href of link tekst. Overweeg om het naam attribuut als ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "Anker element gevonden zonder linkinhoud en zonder name of ID attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "Anker elementen zouden niet gebruikt mogen worden voor in-pagina linkbestemmingen. Indien de ID niet voor andere doeleinden (zoals CSS of scripting) gebruikt wordt, overweeg deze te verhuizen naar een bovenliggend element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "Anker element gevonden binnen link inhoud, maar zonder dat er een href, ID of name attribuut voorzien is.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "Anker element gevonden met een geldig href attribuut, maar zonder linkinhoud.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Controleer dat statusboodschappen programmatisch bepaald kunnen worden door rol of eigenschappen zodanig dat ze aan de gebruiker kunnen beschikbaar gesteld worden via hulptechnologie zonder de focus te krijgen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "SkipLinks",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H30.2",
    description:
      "Img element is de enige inhoud van de link, maar bevat geen alt tekst. De alt tekst dient het doel van deze link te beschrijven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "Img element met een lege alt tekst mag enkel geen of een leeg titel attribuut hebben.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description:
      "Img element werd gemarkeerd om  genegeerd te worden door Hulptechnologie",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img element bevat geen alt attribuut. Gebruik een alt attribuut om een kort tekstalternatief weer te geven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "Zorg ervoor dat het alt attribuut van dit img element hetzelfde doel dient en dezelfde informatie weergeeft als de afbeelding.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "Afbeelding in de indienknop heeft geen alt attribuut.  Zorg voor een tekstalternatief dat de functie van de knop beschrijft, gebruik een alt attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "Zorg ervoor dat alt text van de afbeelding in de indienknop het doel van de knop beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "Area-element in een image map heeft geen alt attribuut. Ieder area element moet een tekstalternatief hebben dat de functie ervan beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "Zorg ervoor dat het tekstalternatief van het area element hetzelfde doel heeft als het deel van de image map afbeelding waarnaar het verwijst.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "Als dit beeld niet volledig kan omschreven worden in een kort tekstalternatief, zorg er dan voor dat een langer tekstalternatief beschikbaar is, bijvoorbeeld in de bodytekst of via een link.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link herhaalt",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "Object elementen moeten een tekstalternatief bevatten indien alle andere alternatieven uitgeput zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "Applet elementen moeten een tekstalternatief bevatten in de body van het element, voor browsers die het applet element niet ondersteunen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "Applet elementen moeten een alt attribuut  bevatten, om een tekst-alternatief te bieden in browsers die het element ondersteunen maar de applet niet kunnen laden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "Indien dit embedded object vooraf opgenomen audio bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "Indien dit embedded object vooraf opgenomen video bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is, of dat een audiospoor beschikbaar is dat equivalente informatie aanbiedt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of ondertitels aangeboden worden voor audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of er een audio beschrijving voor de video, en/of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "Indien dit embedded object gesynchroniseerde media bevat, controleer dan of er ondertitels aangeboden worden voor live audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat , controleer dan of er een audio beschrijving voor de video inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, controleer dan of er een gebarentaal interpretatie beschikbaar is voor de audio-inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, en pauzes in de voorgrond-audio onvoldoende zijn voor audiobeschrijving om de betekenis van de opgenomen video te communiceren, controleer dan of er een uitgebreide audiobeschrijving voorzien is, ofwel via scripting of via een alternatieve versie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media of louter video bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "Indien dit embedded object enkel live audio-inhoud bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      'De rol van dit element is "presentation" maar deze bevat onderliggende elementen met een semantische betekenis.',
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      'Het "for" attribuut van dit label bevat een ID voor een element dat geen formulierbesturingselement. Controleer of het juiste ID ingevoerd is voor het bedoelde element.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      'Dit formulierbesturingselement heeft een "titel" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      'Dit formulierbesturingselement heeft een "aria-label" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      'Dit formulierbesturingselement heeft een "aria-labelledby" attribuut, dit bevat echter eeb ID "{{id}}" dat niet bestaat op een element. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "Dit verborgen formulierveld is gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      'Dit formulierveld is bedoeld om verborgen te zijn (via het "hidden" attribuut), maar is ook gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      'Dit formulierveld zou gelabeled moeten zijn. Gebruik het label element (ofwel met een "for" attribuut of als omvattend element rond het formulierveld), of "title" "aria-label" of "aria-labbeledby" attributen waar gepast.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description: "Presentationele markup gebruikt die vervallen is in HTML5",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "Heading markup zou gebruikt moeten worden indien deze inhoud bedoeld is als een hoofding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "Tabelcel heeft een ongeldig scope attribuut. Geldige waardes zijn row, col, rowgroup of colgroup",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "Scope attributen op td elementen die als hoofdingen gebruikt worden voor andere elementen zijn vervallen in HTML. Gebruik in plaats daarvan een th element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "Scope attributen op th elementen zijn ambigu in een tabel met meerdere niveaus van hoofding. Gebruik in plaats daarvan het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "Check that headers attribute on td element is correct.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      'Foutief headers attribuut op dit td element. "{{expected}}" werd verwacht maar "{{actual}}" gevonden',
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "De relatie tussen td elementen en de eraan gebonden th elementen werd niet omschreven. Gezien deze tabel meerdere niveaus th elmenten bevat, moet het headers attribuut gebruikt worden op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "Niet alle th elementen in deze tabel hebben een scope attribuut. Deze cellen zouden een scope attribuut moeten bevatten om hun verband met td elementen te identificeren.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruikt te worden voor opmaak, maar bevat een summary attribuut. Opmaaktabellen mogen geen summary attributen bevatten, of indien deze toch aanwezig zijn, moeten ze leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "Indien deze tabel een datatabel is en zowel het summary als het caption element aanwezig zijn, mag het summary attribuut geen herhaling zijn van het caption element",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het summary attribuut de organisatie en het gebruik van deze tabel verduidelijkt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "Indien deze tabel een datatabel is, overweeg dan het summary attribuut van het tabel element te gebruiken om een overzicht over deze tabel te geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruik te worden voor opmaak, maar bevat een caption element. Opmaaktabellen mogen geen caption bevatten.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het caption element een nauwkeurige beschrijving geeft van de tabel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "Indien deze tabel een datatabel is, overweeg dan een caption element bij het table element te gebruiken om de tabel te identificeren.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset bevat geen legend element. Alle fieldsets zouden een legend element moeten bevatten dat een beschrijving geeft van de veldengroep.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "Indien deze keuzelijst groepen verwante opties bevat, zouden ze gegroepeerd moeten worden met optgroup.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "Indien radioknoppen of selectievakjes een verdere beschrijving vergen op groepsniveau, zouden ze moeten omvat worden in een fieldset element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "Deze inhoud lijkt op een gesimuleerde niet-geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ul-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "Deze inhoud lijkt op een gesimuleerde geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ol-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "Hoofding tag gevonden zonder inhoud. Tekst die niet bedoeld is als hoofding zou niet mogen gemarkeerd worden met een hoofding tag.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "Indien dit element een navigatie-sectie bevat, wordt aanbevolen lijst-markup te gebruiken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "Deze tabel lijkt een opmaaktabel te zijn. Indien deze bedoeld is als een datatabel, zorg er dan voor dat hoofding cellen geÔdentificeerd worden met th elementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "Deze tabel lijkt een datatabel te zijn. Indien deze bedoeld is als een opmaaktabel, zorg er dan voor dat er geen th elementen, summary of caption aanwezig zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "Controleer dat de inhoud in een betekenisvolle volgorde staat indien lineair weergegeven, zoals wanneer stylesheets gedesactiveerd zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "Indien instructies voorzien zijn voor het goed begrip van de inhoud, reken dan niet enkel op zintuigelijke eigenschappen (zoals vorm, grootte of positie) om voorwerpen te omschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "Controleer dat de inhoud zijn uitzicht en werking niet beperkt tot ÈÈn weergave-oriëntatie, zoals staand of liggend, tenzij zo'n specifieke weergave-oriëntatie essentieel is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "Controleer dat het invoerveld een doel dient zoals beschreven in Input Purposes for User Interface Components sectie, en dat de inhoud is geÔmplementeerd met technologiën die het identificeren van de verwachtte betekenis van formulierinvoerdata ondersteunen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "Dit element heeft geen autocomplete attribuut. Indien dit veld informatie verzamelt over de gebruiker, overweeg dan er ÈÈn toe te voegen om te conformeren met dit succescriterium.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "Controleer dat het doel van de gebruikersinterface-onderdelen, iconen en regio's programmatorisch kunnen bepaald worden",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "Controleer dat alle informatie die gecommuniceerd wordt via kleur eveneens beschikbaar is als tekst of als een andere visuele hint.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Controleer dat de inhoud kan weergegeven worden zonder verlies van informatie of functionaliteit en zonder in twee dimensies te moeten scrollen voor: Verticaal scrollende inhoud op een breedte equivalent aan 320 CSS pixels    Horizontaal scrollende inhoud op een hoogte equivalent aan CSS pixels. Behalve voor die delen van de inhoud die een tweedimensionale opmaak vergen voor gebruik of betekenis.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'Dit element heeft "position: fixed". Dit kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "Voorgeformatteerde tekst kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Tussen beide komen in de mogelijkheid van de User Agent om uit te vergroten kan beschouwd worden als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Controleer dat de visuele weergave van de volgende zaken een contrastverhouding van minstens 3:1 tegen aangrenzende kleuren:       Gebruikersinterface-onderdelen: visuele informatie vereist om gebruikersinterface-onderdelen te herkennen en hun status, behalve voor inactieve onderdelen or waar het uitzicht van het component door de User Agent bepaald wordt en niet gewijzigd is geweest door de auteur      Grafische objecten: delen van de afbeelding vereist om de inhoud te begrijpen, behalve daar waar de specifieke weergave essentieel is voor de communicatie van de informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "Controleer dat er geen verlies van inhoud of functionaliteit optreedt bij het instellen van de volgende eigenschappen en zonder andere stijleigenschappen te wijzigen: Lijnhoogte (lijnspatiëring) naar minstens 1,5 maal de lettergrootte Spatieing na paragrafen tot minstens 2 maal de lettergrootte Letterspatiëring (tracking) tot minstens 0,12 de lettergrootte Woordspatiëring tot minstens 0,16 maal de lettergrootte.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "Controleer dat waar een pointer hover of toetsenbordfocus aanvullende content doet zichtbaar worden en terug verbergen, het volgende waar is:         Als de aanvullende content een deel van de andere content bedekt, moet het mogelijk zijn om de aanvullende content (zoals een tooltip) opnieuw te verbergen zonder dat de muisaanwijzer verplaatst hoeft te worden en zonder de focus van het element weg te hoeven nemen Als de aanvullende content verschijnt door een element aan te wijzen (zonder te klikken), dan mag de content niet verdwijnen als de gebruiker de muis beweegt in het gebied waarin de aanvullende content is verschenen.De aanvullende content moet zichtbaar blijven totdat de gebruiker de muisaanwijzer buiten het element plaatst, de toetsenbordfocus actief verplaatst of op Escape drukt. Ten slotte mag de aanvullende content ook automatisch verdwijnen, maar enkel wanneer de weergegeven informatie niet meer geldig is ó bijvoorbeeld wanneer gemeld wordt dat een e-mailadres niet correct is ingevuld, maar de gebruiker deze fout al heeft verbeterd.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "Indien dit element audiop bevat die automatisch langer dan 3 seconden speelt, controleer dan dat de mogelijkheid bestaat om de audio te pauzeren, stoppen of stil te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "Controleer of dit element een overgeërfde voorgrondkleur heeft die complementair is met de overeenkomstige inline achtergrondkleur of afbeelding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "Controleer of dit element een overgeërfde achtergrondkleur of afbeelding heeft die complementair is met de overeenkomstige inline voorgrondkleur.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie en zonder verlies van inhoud of functionaliteit.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "Indien de gebruikte technologie de visuele presentatie kan weergeven, controleer dan dat tekst gebruikt werd om informatie weer te geven, in plaats van afbeeldingen van tekst, behalve als de afbeelding van tekst essentieel is voor de weer te geven informatie, of visueel kan aangepast worden aan de noden van de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "Voor voordien opgenomen pure audio-inhoud in dit element die hoofdzakelijk spraak is (zoals vertelling) dienen achtergrondgeluiden stil kunnen gezet worden, of ten minste 20 dB (of 4 maal) stiller te zijn dan de spraak.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "Controleer dat een mechanisme beschikbaar is voor de gebruiker om de voorgrond- en achtergrondkleuren van tekstblokken te kiezen, via de webpagina of via de browser.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "Controleer of een mechanisme bestaat om de breedte van een blok tekst te beperken tot niet meer dan 80 tekens (of 40 tekens in Chineese, Japans of Koreaans schrift)",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "Controleer dat tekstblokken niet vol uitgelijnd zijn - dat wil zeggen, op zowel de linker- als rechterrand - of dat een mechanisme beschikbaar is om de volle uitlijning af te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "Controleer dat de lijnspatiëring in tekstblokken minstens 150% is in paragrafen en de spatiëring tussen paragrafen minstens 1,5 keer de lijnspatiëring, of dat een mechanisme beschikbaar is om dit te bereiken.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie zonder dat de gebruiker verplicht wordt horizontaal te scrollen in een schermbreed venster.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "Controleer dat afbeeldingen van tekst enkel gebruikt worden voor zuivere decoratie of waar een specifieke weergave van tekst essentieel deel uitmaakt van de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "Controleer dat de functionaliteit voorzien in een eventhandler voor dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "Controleer dat de functionaliteit voorzien bij dubbelklikken op dit element beschikbaar is via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging over dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging uit dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging op dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mousedown op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mouseup op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "Controleer dat deze applet of plugin de mogelijkheid biedt om het focus weg te nemen van zichzelf via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "Controleer dat indien sneltoets voorzien is met maar ÈÈn letter (inclusief hoofd- en kleine letters), punctuering, getal of symboolkarakters, minstens ÈÈn van volgende stellingen waar his:         Uitzetten: Er is een mechanisme om de sneltoets af te zetten Hermappen: Er is mechanisme beschikbaar om de shortcut te hermappen om gebruik te maken van ÈÈn van de niet printbare toetsenbordkarakters (bvb. Ctrl, Alt, etc) Enkel aktief bij focus: De sneltoets voor een gebruikersinterface-onderdeel is enkel aktief als dat onderdeel het focus heeft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "Meta refresh tag wordt gebruikt om te redirecten naar een andere pagina, met een tijdslimiet die niet nul is. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "Meta refresh tag wordt gebruikt om de huidige pagina te verversen. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "Indien een onderdeel van de inhoud beweegt, scrollt of knippert gedurende langer dan 5 seconden, of automatisch ververst, controleer dan of er een mechanisme beschikbaar is om te pauzeren, te stoppen of de inhoud te verbergen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "Controleer dat er een mechanisme beschikbaar is om dit knipperende element in minder dan vijf seconden te stoppen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "Blink elementen kunnen niet voldoen aan de vereiste dat knipperende informatie gestopt kan worden binnen de vijf seconden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "Controleer dat de timing geen essentieel onderdeel is van een gebeurtenis of activiteit voorgesteld door de inhoud, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "Controleer dat alle onderbrekingen (inclusief inhoudsverversing) uitgesteld of afgezet kunnen worden door de gebruiker, behalve onderbrekingen die betrekking hebben tot een noodgeval.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "Indien deze webpagina deel uitmaakt van een set pagina's met een tijdslimiet op inactiviteit, controleer dan dat een geauthenticeerde gebruiker de activiteit zonder gegevensverlies kan voortzetten na herauthenticatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "Controleer dat gebruikers verwittigd werden van de duur van inactiviteit die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens langer dan 20 uur bewaard worden als de gebruiker geen actie onderneemt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde, of dat de afmeting van het flitsend gebied voldoende klein is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "Controleer dat de bewegingsanimatie veroorzaakt door interacties kan uitgezet worden, tenzij deze animatie essentieel is voor de functionaliteit of de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe element vereist een niet-leeg title attribuut dat het kader identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "Controleer dat het title attribuut van dit element tekst bevat die het kader identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "Controleer dat veel voorkomende navigatie-elementen overgeslagen kunnen wordenbijvoorbeeld door gebruik van skip links, hoofding elementen of ARIA landmark rollen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam binnen het geteste fragment.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description:
      "Er is geen head sectie waarin een beschrijvend title element kan geplaatst worden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "Voor dit document dient een titel voorzien te worden, door een niet-leeg title element in de head sectie te plaatsen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "Het title element in de head sectie mag niet leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "Controleer dat het title element het document beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "Indien tabindex gebruikt wordt, controleer dan dat de tabvolgorde gespecifieerd door de tabindex attributen de relaties in de inhoud volgt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context, of zijn title attribuut, het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "Indien deze webpagina geen deel uitmaakt van een lineair proces, controleer dan of er meer dan ÈÈn manier is om deze webpagina te vinden binnen een set webpagina's.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description:
      "Controleer dat de hoofdingen en labels de inhoud en het doel beschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Controleer dat er minstens een werkwijze is waarbij de toetsenbord focus indicator visueel teruggevonden kan worden op gebruiksinterface-besturingselementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description:
      "Link elementen kunnen enkel geplaatst worden in de head sectie van het document",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "Er ontbreekt een niet-leeg rel attribuut in het link element die het linktype identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "Er ontbreekt een niet-leeg href attribuut in het link element dat wijst naar de gelinkte resource.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description:
      "Controleer of de tekst van de link het doel van de link beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "Controleer dat alle functionaliteit die multipoint of pad-gebaseerde bewegingen gebruikt voor de werking gebruikt kan worden met één enkele pointer zonder pad-gebaseerde bewegingen, tenzij multipoint of pad-gebaseerde bewegingen essentieel zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description: "HTMLCS.getTranslation('2_5_2.SinglePointer_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "Dit element heeft een mousedown event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "Dit element heeft een touchstart event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "De toegankelijke naam voor dit element bevat geen zichtbare label tekst. Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "Dit element heeft een devicemotion event listener. Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface componenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface; Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "Controleer dat de afmeting van het doelwit voor pointer invoer minstens 44 op 44 CSS pixels groot is, behalve indien:         Equivalent: Het doelwit beschikbaar is door een equivalente link of besturing op dezelfde pagina die minstens 44 op 44 CSS pixels groot is Inline: Het doel een zin of een blok tekst is User Agent Beheer: De afmeting van het doelwit bepaald wordt dooe de User Agent en niet gewijzigd werd door de auteur Essentieel: Een specifieke voorstelling van het doelwit is essentieel voor de over te brengen informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "Controleer dat de inhoud het gebruik van invoermiddelen beschikbaar op een platform niet beperkt behalve indien deze beperking essentieel is, vereist om de veiligheid van de inhoud te verzekeren of gebruikersinstellingen te respecteren.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "Het html element zou een lang of xml:lang attribuut moeten bevatten dat de taal van het document beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "Controleer dat elke taalwijziging aangeduid wordt met het lang en/of xml:lang attribuut op een element, waar toepasselijk.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van specifieke definities van woorden en zinnen die in een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomen en jargon.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van de volledige vorm of betekenis van afkortingen",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "Waar de inhoud een leesniveau vereist dat verder gevorderd is dan lager middelbaar onderwijs, zou bijkomende inhoud of een alternatieve versie voorzien moeten worden.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de body tekst.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de tekst binnen het rb element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby element bevat geen rp element dat extra punctuering aanbiedt aan browsers die geen ruby tekst ondersteunen",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "Controleer dat er geen contextwijziging optreedt indien de focus op dit invoerveld valt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      'Dit formulier heeft geen submit knop, wat problemen veroorzaakt voor zij die het formulier niet met het toetsenbord kunnen indienen. Submit knoppen zijn input elementen met type attribuut "submit" of "image" of button elementen met type "submit" een ongeldig of leeg type attribuut.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "Controleer dat navigatiemechanismes die herhaald worden op meerdere webpagina's in dezelfde volgorde voorkomen iedere keer dat ze herhaald worden, tenzij een wijziging door de gebruiker werd veroorzaakt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "Controleer dat componenten met dezelfde functionaliteit binnen deze webpagina consistent geÔdentificeerd worden in de set webpagina's waartoe deze behoort.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "Controleer dat de link tekst van deze link informatie bevat die weergeeft dat deze link in een nieuw venster zal openen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "Als een invoerfout automatisch gedetecteerd wordt in dit formulier, controleer dan dat de foute zaken geÔdentificeerd worden en de fouten als tekst aan de gebruiker worden beschreven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "Controleer of beschrijvende labels of instructies (inclusief voor verplichte velden) voorzien zijn voor gebruikersinvoer in dit formulier.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "Controleer of dit formulier verbeteringssuggesties doet voor fouten in gebruikersinvoer, tenzij dit de veiligheid of het doel van de inhoud in gevaar brengt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "Indien dit formulier de gebruiker tot een financieel of legaal engagement verplicht, gebruiker-beheerbare gegevens wijzigt of verwijdert of test-antwoorden indient, zorg er dan voor dat indiening omkeerbaar is, gecontroleerd wordt voor invoerfouten en/of bevestigd wordt door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "Controleer of contextgevoelige hulp beschikbaar is voor dit formulier, op niveau van de webpagina of het besturingselement.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Controleer of indieningen voor dit formulier ofwel omkeerbaar zijn, gecontroleerd worden op invoerfouten en/of bevestigd worden door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  { ruleId: "4_1_2_null", description: "msg", helpUrl: [], ruleType: "error" },
  {
    ruleId: "4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Empty",
    description:
      "Anker element gevonden met een ID maar zonder een href of link tekst. Overweeg om de ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "Anker element gevonden met een name attribuut maar zonder een href of link tekst. Overweeg om het naam attribuut als ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "Anker element gevonden zonder linkinhoud en zonder name of ID attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "Anker elementen zouden niet gebruikt mogen worden voor in-pagina linkbestemmingen. Indien de ID niet voor andere doeleinden (zoals CSS of scripting) gebruikt wordt, overweeg deze te verhuizen naar een bovenliggend element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "Anker element gevonden binnen link inhoud, maar zonder dat er een href, ID of name attribuut voorzien is.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "Anker element gevonden met een geldig href attribuut, maar zonder linkinhoud.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Controleer dat statusboodschappen programmatisch bepaald kunnen worden door rol of eigenschappen zodanig dat ze aan de gebruiker kunnen beschikbaar gesteld worden via hulptechnologie zonder de focus te krijgen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "SkipLinks",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H30.2",
    description:
      "Img element is de enige inhoud van de link, maar bevat geen alt tekst. De alt tekst dient het doel van deze link te beschrijven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "Img element met een lege alt tekst mag enkel geen of een leeg titel attribuut hebben.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description:
      "Img element werd gemarkeerd om  genegeerd te worden door Hulptechnologie",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img element bevat geen alt attribuut. Gebruik een alt attribuut om een kort tekstalternatief weer te geven.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "Zorg ervoor dat het alt attribuut van dit img element hetzelfde doel dient en dezelfde informatie weergeeft als de afbeelding.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "Afbeelding in de indienknop heeft geen alt attribuut.  Zorg voor een tekstalternatief dat de functie van de knop beschrijft, gebruik een alt attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "Zorg ervoor dat alt text van de afbeelding in de indienknop het doel van de knop beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "Area-element in een image map heeft geen alt attribuut. Ieder area element moet een tekstalternatief hebben dat de functie ervan beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "Zorg ervoor dat het tekstalternatief van het area element hetzelfde doel heeft als het deel van de image map afbeelding waarnaar het verwijst.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "Als dit beeld niet volledig kan omschreven worden in een kort tekstalternatief, zorg er dan voor dat een langer tekstalternatief beschikbaar is, bijvoorbeeld in de bodytekst of via een link.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link herhaalt",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "Object elementen moeten een tekstalternatief bevatten indien alle andere alternatieven uitgeput zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "Applet elementen moeten een tekstalternatief bevatten in de body van het element, voor browsers die het applet element niet ondersteunen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "Applet elementen moeten een alt attribuut  bevatten, om een tekst-alternatief te bieden in browsers die het element ondersteunen maar de applet niet kunnen laden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "Indien dit embedded object vooraf opgenomen audio bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "Indien dit embedded object vooraf opgenomen video bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is, of dat een audiospoor beschikbaar is dat equivalente informatie aanbiedt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of ondertitels aangeboden worden voor audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of er een audio beschrijving voor de video, en/of een alternatieve tekstversie beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "Indien dit embedded object gesynchroniseerde media bevat, controleer dan of er ondertitels aangeboden worden voor live audio inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat , controleer dan of er een audio beschrijving voor de video inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, controleer dan of er een gebarentaal interpretatie beschikbaar is voor de audio-inhoud.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, en pauzes in de voorgrond-audio onvoldoende zijn voor audiobeschrijving om de betekenis van de opgenomen video te communiceren, controleer dan of er een uitgebreide audiobeschrijving voorzien is, ofwel via scripting of via een alternatieve versie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "Indien dit embedded object vooraf opgenomen gesynchroniseerde media of louter video bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "Indien dit embedded object enkel live audio-inhoud bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      'De rol van dit element is "presentation" maar deze bevat onderliggende elementen met een semantische betekenis.',
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      'Het "for" attribuut van dit label bevat een ID voor een element dat geen formulierbesturingselement. Controleer of het juiste ID ingevoerd is voor het bedoelde element.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      'Dit formulierbesturingselement heeft een "titel" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      'Dit formulierbesturingselement heeft een "aria-label" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      'Dit formulierbesturingselement heeft een "aria-labelledby" attribuut, dit bevat echter eeb ID "{{id}}" dat niet bestaat op een element. Het wordt genegeerd voor label testdoeleinden.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "Dit verborgen formulierveld is gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      'Dit formulierveld is bedoeld om verborgen te zijn (via het "hidden" attribuut), maar is ook gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      'Dit formulierveld zou gelabeled moeten zijn. Gebruik het label element (ofwel met een "for" attribuut of als omvattend element rond het formulierveld), of "title" "aria-label" of "aria-labbeledby" attributen waar gepast.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description: "Presentationele markup gebruikt die vervallen is in HTML5",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "Heading markup zou gebruikt moeten worden indien deze inhoud bedoeld is als een hoofding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "Tabelcel heeft een ongeldig scope attribuut. Geldige waardes zijn row, col, rowgroup of colgroup",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "Scope attributen op td elementen die als hoofdingen gebruikt worden voor andere elementen zijn vervallen in HTML. Gebruik in plaats daarvan een th element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "Scope attributen op th elementen zijn ambigu in een tabel met meerdere niveaus van hoofding. Gebruik in plaats daarvan het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "Check that headers attribute on td element is correct.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      'Foutief headers attribuut op dit td element. "{{expected}}" werd verwacht maar "{{actual}}" gevonden',
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "De relatie tussen td elementen en de eraan gebonden th elementen werd niet omschreven. Gezien deze tabel meerdere niveaus th elmenten bevat, moet het headers attribuut gebruikt worden op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "Niet alle th elementen in deze tabel hebben een scope attribuut. Deze cellen zouden een scope attribuut moeten bevatten om hun verband met td elementen te identificeren.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruikt te worden voor opmaak, maar bevat een summary attribuut. Opmaaktabellen mogen geen summary attributen bevatten, of indien deze toch aanwezig zijn, moeten ze leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "Indien deze tabel een datatabel is en zowel het summary als het caption element aanwezig zijn, mag het summary attribuut geen herhaling zijn van het caption element",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het summary attribuut de organisatie en het gebruik van deze tabel verduidelijkt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "Indien deze tabel een datatabel is, overweeg dan het summary attribuut van het tabel element te gebruiken om een overzicht over deze tabel te geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "Deze tabel lijkt gebruik te worden voor opmaak, maar bevat een caption element. Opmaaktabellen mogen geen caption bevatten.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "Indien deze tabel een datatabel is, controleer dan dat het caption element een nauwkeurige beschrijving geeft van de tabel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "Indien deze tabel een datatabel is, overweeg dan een caption element bij het table element te gebruiken om de tabel te identificeren.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset bevat geen legend element. Alle fieldsets zouden een legend element moeten bevatten dat een beschrijving geeft van de veldengroep.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "Indien deze keuzelijst groepen verwante opties bevat, zouden ze gegroepeerd moeten worden met optgroup.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "Indien radioknoppen of selectievakjes een verdere beschrijving vergen op groepsniveau, zouden ze moeten omvat worden in een fieldset element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "Deze inhoud lijkt op een gesimuleerde niet-geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ul-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "Deze inhoud lijkt op een gesimuleerde geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ol-element de informatie in het document een betere structuur geven.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "Hoofding tag gevonden zonder inhoud. Tekst die niet bedoeld is als hoofding zou niet mogen gemarkeerd worden met een hoofding tag.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "Indien dit element een navigatie-sectie bevat, wordt aanbevolen lijst-markup te gebruiken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "Deze tabel lijkt een opmaaktabel te zijn. Indien deze bedoeld is als een datatabel, zorg er dan voor dat hoofding cellen geÔdentificeerd worden met th elementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "Deze tabel lijkt een datatabel te zijn. Indien deze bedoeld is als een opmaaktabel, zorg er dan voor dat er geen th elementen, summary of caption aanwezig zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "Controleer dat de inhoud in een betekenisvolle volgorde staat indien lineair weergegeven, zoals wanneer stylesheets gedesactiveerd zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "Indien instructies voorzien zijn voor het goed begrip van de inhoud, reken dan niet enkel op zintuigelijke eigenschappen (zoals vorm, grootte of positie) om voorwerpen te omschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "Controleer dat de inhoud zijn uitzicht en werking niet beperkt tot ÈÈn weergave-oriëntatie, zoals staand of liggend, tenzij zo'n specifieke weergave-oriëntatie essentieel is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "Controleer dat het invoerveld een doel dient zoals beschreven in Input Purposes for User Interface Components sectie, en dat de inhoud is geÔmplementeerd met technologiën die het identificeren van de verwachtte betekenis van formulierinvoerdata ondersteunen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "Dit element heeft geen autocomplete attribuut. Indien dit veld informatie verzamelt over de gebruiker, overweeg dan er ÈÈn toe te voegen om te conformeren met dit succescriterium.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "Controleer dat het doel van de gebruikersinterface-onderdelen, iconen en regio's programmatorisch kunnen bepaald worden",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "Controleer dat alle informatie die gecommuniceerd wordt via kleur eveneens beschikbaar is als tekst of als een andere visuele hint.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Controleer dat de inhoud kan weergegeven worden zonder verlies van informatie of functionaliteit en zonder in twee dimensies te moeten scrollen voor: Verticaal scrollende inhoud op een breedte equivalent aan 320 CSS pixels    Horizontaal scrollende inhoud op een hoogte equivalent aan CSS pixels. Behalve voor die delen van de inhoud die een tweedimensionale opmaak vergen voor gebruik of betekenis.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'Dit element heeft "position: fixed". Dit kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "Voorgeformatteerde tekst kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Tussen beide komen in de mogelijkheid van de User Agent om uit te vergroten kan beschouwd worden als een mislukking van dit succescriterium.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Controleer dat de visuele weergave van de volgende zaken een contrastverhouding van minstens 3:1 tegen aangrenzende kleuren:       Gebruikersinterface-onderdelen: visuele informatie vereist om gebruikersinterface-onderdelen te herkennen en hun status, behalve voor inactieve onderdelen or waar het uitzicht van het component door de User Agent bepaald wordt en niet gewijzigd is geweest door de auteur      Grafische objecten: delen van de afbeelding vereist om de inhoud te begrijpen, behalve daar waar de specifieke weergave essentieel is voor de communicatie van de informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "Controleer dat er geen verlies van inhoud of functionaliteit optreedt bij het instellen van de volgende eigenschappen en zonder andere stijleigenschappen te wijzigen: Lijnhoogte (lijnspatiëring) naar minstens 1,5 maal de lettergrootte Spatieing na paragrafen tot minstens 2 maal de lettergrootte Letterspatiëring (tracking) tot minstens 0,12 de lettergrootte Woordspatiëring tot minstens 0,16 maal de lettergrootte.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "Controleer dat waar een pointer hover of toetsenbordfocus aanvullende content doet zichtbaar worden en terug verbergen, het volgende waar is:         Als de aanvullende content een deel van de andere content bedekt, moet het mogelijk zijn om de aanvullende content (zoals een tooltip) opnieuw te verbergen zonder dat de muisaanwijzer verplaatst hoeft te worden en zonder de focus van het element weg te hoeven nemen Als de aanvullende content verschijnt door een element aan te wijzen (zonder te klikken), dan mag de content niet verdwijnen als de gebruiker de muis beweegt in het gebied waarin de aanvullende content is verschenen.De aanvullende content moet zichtbaar blijven totdat de gebruiker de muisaanwijzer buiten het element plaatst, de toetsenbordfocus actief verplaatst of op Escape drukt. Ten slotte mag de aanvullende content ook automatisch verdwijnen, maar enkel wanneer de weergegeven informatie niet meer geldig is ó bijvoorbeeld wanneer gemeld wordt dat een e-mailadres niet correct is ingevuld, maar de gebruiker deze fout al heeft verbeterd.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "Indien dit element audiop bevat die automatisch langer dan 3 seconden speelt, controleer dan dat de mogelijkheid bestaat om de audio te pauzeren, stoppen of stil te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "Controleer of dit element een overgeërfde voorgrondkleur heeft die complementair is met de overeenkomstige inline achtergrondkleur of afbeelding.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "Controleer of dit element een overgeërfde achtergrondkleur of afbeelding heeft die complementair is met de overeenkomstige inline voorgrondkleur.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie en zonder verlies van inhoud of functionaliteit.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "Indien de gebruikte technologie de visuele presentatie kan weergeven, controleer dan dat tekst gebruikt werd om informatie weer te geven, in plaats van afbeeldingen van tekst, behalve als de afbeelding van tekst essentieel is voor de weer te geven informatie, of visueel kan aangepast worden aan de noden van de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "Voor voordien opgenomen pure audio-inhoud in dit element die hoofdzakelijk spraak is (zoals vertelling) dienen achtergrondgeluiden stil kunnen gezet worden, of ten minste 20 dB (of 4 maal) stiller te zijn dan de spraak.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "Controleer dat een mechanisme beschikbaar is voor de gebruiker om de voorgrond- en achtergrondkleuren van tekstblokken te kiezen, via de webpagina of via de browser.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "Controleer of een mechanisme bestaat om de breedte van een blok tekst te beperken tot niet meer dan 80 tekens (of 40 tekens in Chineese, Japans of Koreaans schrift)",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "Controleer dat tekstblokken niet vol uitgelijnd zijn - dat wil zeggen, op zowel de linker- als rechterrand - of dat een mechanisme beschikbaar is om de volle uitlijning af te zetten.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "Controleer dat de lijnspatiëring in tekstblokken minstens 150% is in paragrafen en de spatiëring tussen paragrafen minstens 1,5 keer de lijnspatiëring, of dat een mechanisme beschikbaar is om dit te bereiken.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie zonder dat de gebruiker verplicht wordt horizontaal te scrollen in een schermbreed venster.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "Controleer dat afbeeldingen van tekst enkel gebruikt worden voor zuivere decoratie of waar een specifieke weergave van tekst essentieel deel uitmaakt van de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "Controleer dat de functionaliteit voorzien in een eventhandler voor dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "Controleer dat de functionaliteit voorzien bij dubbelklikken op dit element beschikbaar is via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging over dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het focus event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging uit dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het blur event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "Controleer dat de functionaliteit voorzien door een muisbeweging op dit element beschikbaar is via het toetsenbord",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mousedown op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keydown event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "Controleer dat de functionaliteit voorzien door een muisklik - mouseup op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keyup event.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "Controleer dat deze applet of plugin de mogelijkheid biedt om het focus weg te nemen van zichzelf via het toetsenbord.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "Controleer dat indien sneltoets voorzien is met maar ÈÈn letter (inclusief hoofd- en kleine letters), punctuering, getal of symboolkarakters, minstens ÈÈn van volgende stellingen waar his:         Uitzetten: Er is een mechanisme om de sneltoets af te zetten Hermappen: Er is mechanisme beschikbaar om de shortcut te hermappen om gebruik te maken van ÈÈn van de niet printbare toetsenbordkarakters (bvb. Ctrl, Alt, etc) Enkel aktief bij focus: De sneltoets voor een gebruikersinterface-onderdeel is enkel aktief als dat onderdeel het focus heeft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "Meta refresh tag wordt gebruikt om te redirecten naar een andere pagina, met een tijdslimiet die niet nul is. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "Meta refresh tag wordt gebruikt om de huidige pagina te verversen. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "Indien een onderdeel van de inhoud beweegt, scrollt of knippert gedurende langer dan 5 seconden, of automatisch ververst, controleer dan of er een mechanisme beschikbaar is om te pauzeren, te stoppen of de inhoud te verbergen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "Controleer dat er een mechanisme beschikbaar is om dit knipperende element in minder dan vijf seconden te stoppen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "Blink elementen kunnen niet voldoen aan de vereiste dat knipperende informatie gestopt kan worden binnen de vijf seconden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "Controleer dat de timing geen essentieel onderdeel is van een gebeurtenis of activiteit voorgesteld door de inhoud, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "Controleer dat alle onderbrekingen (inclusief inhoudsverversing) uitgesteld of afgezet kunnen worden door de gebruiker, behalve onderbrekingen die betrekking hebben tot een noodgeval.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "Indien deze webpagina deel uitmaakt van een set pagina's met een tijdslimiet op inactiviteit, controleer dan dat een geauthenticeerde gebruiker de activiteit zonder gegevensverlies kan voortzetten na herauthenticatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "Controleer dat gebruikers verwittigd werden van de duur van inactiviteit die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens langer dan 20 uur bewaard worden als de gebruiker geen actie onderneemt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde, of dat de afmeting van het flitsend gebied voldoende klein is.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "Controleer dat de bewegingsanimatie veroorzaakt door interacties kan uitgezet worden, tenzij deze animatie essentieel is voor de functionaliteit of de weer te geven informatie.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe element vereist een niet-leeg title attribuut dat het kader identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "Controleer dat het title attribuut van dit element tekst bevat die het kader identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "Controleer dat veel voorkomende navigatie-elementen overgeslagen kunnen wordenbijvoorbeeld door gebruik van skip links, hoofding elementen of ARIA landmark rollen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam binnen het geteste fragment.',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description:
      "Er is geen head sectie waarin een beschrijvend title element kan geplaatst worden.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "Voor dit document dient een titel voorzien te worden, door een niet-leeg title element in de head sectie te plaatsen.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "Het title element in de head sectie mag niet leeg zijn.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "Controleer dat het title element het document beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "Indien tabindex gebruikt wordt, controleer dan dat de tabvolgorde gespecifieerd door de tabindex attributen de relaties in de inhoud volgt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context, of zijn title attribuut, het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context het doel van de link identificeert.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "Indien deze webpagina geen deel uitmaakt van een lineair proces, controleer dan of er meer dan ÈÈn manier is om deze webpagina te vinden binnen een set webpagina's.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description:
      "Controleer dat de hoofdingen en labels de inhoud en het doel beschrijven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Controleer dat er minstens een werkwijze is waarbij de toetsenbord focus indicator visueel teruggevonden kan worden op gebruiksinterface-besturingselementen.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description:
      "Link elementen kunnen enkel geplaatst worden in de head sectie van het document",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "Er ontbreekt een niet-leeg rel attribuut in het link element die het linktype identificeert.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "Er ontbreekt een niet-leeg href attribuut in het link element dat wijst naar de gelinkte resource.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description:
      "Controleer of de tekst van de link het doel van de link beschrijft.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "Controleer dat alle functionaliteit die multipoint of pad-gebaseerde bewegingen gebruikt voor de werking gebruikt kan worden met één enkele pointer zonder pad-gebaseerde bewegingen, tenzij multipoint of pad-gebaseerde bewegingen essentieel zijn.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description: "HTMLCS.getTranslation('2_5_2.SinglePointer_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "Dit element heeft een mousedown event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "Dit element heeft een touchstart event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "De toegankelijke naam voor dit element bevat geen zichtbare label tekst. Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "Dit element heeft een devicemotion event listener. Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface componenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface; Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "Controleer dat de afmeting van het doelwit voor pointer invoer minstens 44 op 44 CSS pixels groot is, behalve indien:         Equivalent: Het doelwit beschikbaar is door een equivalente link of besturing op dezelfde pagina die minstens 44 op 44 CSS pixels groot is Inline: Het doel een zin of een blok tekst is User Agent Beheer: De afmeting van het doelwit bepaald wordt dooe de User Agent en niet gewijzigd werd door de auteur Essentieel: Een specifieke voorstelling van het doelwit is essentieel voor de over te brengen informatie.     ,",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "Controleer dat de inhoud het gebruik van invoermiddelen beschikbaar op een platform niet beperkt behalve indien deze beperking essentieel is, vereist om de veiligheid van de inhoud te verzekeren of gebruikersinstellingen te respecteren.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "Het html element zou een lang of xml:lang attribuut moeten bevatten dat de taal van het document beschrijft.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van het document lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "Controleer dat elke taalwijziging aangeduid wordt met het lang en/of xml:lang attribuut op een element, waar toepasselijk.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "De taal gespecifieerd in het lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "De taal gespecifieerd in het xml:lang attribuut van dit element lijkt niet correct geformuleerd.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van specifieke definities van woorden en zinnen die in een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomen en jargon.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "Controleer of er een mechanisme beschikbaar is voor het identificeren van de volledige vorm of betekenis van afkortingen",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "Waar de inhoud een leesniveau vereist dat verder gevorderd is dan lager middelbaar onderwijs, zou bijkomende inhoud of een alternatieve versie voorzien moeten worden.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de body tekst.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby element bevat geen rt element met uitspraakinformatie voor de tekst binnen het rb element.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby element bevat geen rp element dat extra punctuering aanbiedt aan browsers die geen ruby tekst ondersteunen",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "Controleer dat er geen contextwijziging optreedt indien de focus op dit invoerveld valt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      'Dit formulier heeft geen submit knop, wat problemen veroorzaakt voor zij die het formulier niet met het toetsenbord kunnen indienen. Submit knoppen zijn input elementen met type attribuut "submit" of "image" of button elementen met type "submit" een ongeldig of leeg type attribuut.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "Controleer dat navigatiemechanismes die herhaald worden op meerdere webpagina's in dezelfde volgorde voorkomen iedere keer dat ze herhaald worden, tenzij een wijziging door de gebruiker werd veroorzaakt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "Controleer dat componenten met dezelfde functionaliteit binnen deze webpagina consistent geÔdentificeerd worden in de set webpagina's waartoe deze behoort.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "Controleer dat de link tekst van deze link informatie bevat die weergeeft dat deze link in een nieuw venster zal openen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "Als een invoerfout automatisch gedetecteerd wordt in dit formulier, controleer dan dat de foute zaken geÔdentificeerd worden en de fouten als tekst aan de gebruiker worden beschreven.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "Controleer of beschrijvende labels of instructies (inclusief voor verplichte velden) voorzien zijn voor gebruikersinvoer in dit formulier.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "Controleer of dit formulier verbeteringssuggesties doet voor fouten in gebruikersinvoer, tenzij dit de veiligheid of het doel van de inhoud in gevaar brengt.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "Indien dit formulier de gebruiker tot een financieel of legaal engagement verplicht, gebruiker-beheerbare gegevens wijzigt of verwijdert of test-antwoorden indient, zorg er dan voor dat indiening omkeerbaar is, gecontroleerd wordt voor invoerfouten en/of bevestigd wordt door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "Controleer of contextgevoelige hulp beschikbaar is voor dit formulier, op niveau van de webpagina of het besturingselement.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Controleer of indieningen voor dit formulier ofwel omkeerbaar zijn, gecontroleerd worden op invoerfouten en/of bevestigd worden door de gebruiker.",
    helpUrl: [],
    ruleType: "notice",
  },
  { ruleId: "4_1_2_null", description: "msg", helpUrl: [], ruleType: "error" },
  {
    ruleId: "4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Empty",
    description:
      "Anker element gevonden met een ID maar zonder een href of link tekst. Overweeg om de ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "Anker element gevonden met een name attribuut maar zonder een href of link tekst. Overweeg om het naam attribuut als ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "Anker element gevonden zonder linkinhoud en zonder name of ID attribuut.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "Anker elementen zouden niet gebruikt mogen worden voor in-pagina linkbestemmingen. Indien de ID niet voor andere doeleinden (zoals CSS of scripting) gebruikt wordt, overweeg deze te verhuizen naar een bovenliggend element.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "Anker element gevonden binnen link inhoud, maar zonder dat er een href, ID of name attribuut voorzien is.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "Anker element gevonden met een geldig href attribuut, maar zonder linkinhoud.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Controleer dat statusboodschappen programmatisch bepaald kunnen worden door rol of eigenschappen zodanig dat ze aan de gebruiker kunnen beschikbaar gesteld worden via hulptechnologie zonder de focus te krijgen.",
    helpUrl: [],
    ruleType: "notice",
  },
];
