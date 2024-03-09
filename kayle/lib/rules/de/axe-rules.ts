/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: 'accesskeys',
    description:
      'Stellt sicher, dass die Werte der accesskey-Attribute einzigartig sind.',
    help: 'Der Wert des accesskey-Attributes muss einzigartig sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'area-alt',
    description:
      'Stellt sicher, dass <area>-Elemente Alternativtexte besitzen.',
    help: 'Aktive <area>-Elemente müssen einen Alternativtext besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass ARIA-Attribute für die vergebene Rolle eines Elements erlaubt sind.',
    help: 'Elemente dürfen nur erlaubte ARIA-Attribute verwenden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5c01ea'],
  },
  {
    ruleId: 'aria-allowed-role',
    description:
      'Stellt sicher, dass der Wert des role-Attributes für dieses Element geeignet ist.',
    help: 'Der Wert des role-Attributes muss für dieses Element geeignet sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=de',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-command-name',
    description:
      'Stellt sicher, dass jeder ARIA-button, -link und jedes -menuitem einen zugänglichen Namen (accessible name) hat.',
    help: 'ARIA Befehle müssen einen zugänglichen Namen (accessible name) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['97a4e1'],
  },
  {
    ruleId: 'aria-dialog-name',
    description:
      'Stellt sicher, dass jeder ARIA-dialog und -alertdialog Knoten einen zugänglichen Namen (accessible name) hat.',
    help: 'ARIA-dialog und -alertdialog Knoten müssen einen zugänglichen Namen (accessible name) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-hidden-body',
    description:
      "Stellt sicher, dass aria-hidden='true' nicht am <body>-Element des Dokumentes verwendet wird.",
    help: "Aria-hidden='true' darf nicht für den <body> des Dokumentes verwendet werden.",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-hidden-focus',
    description:
      'Stellt sicher, dass ARIA-hidden Elemente keine fokussierbaren Elemente beinhalten.',
    help: 'ARIA-hidden Elemente dürfen keine fokussierbaren Elemente beinhalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=de',
    tags: ['cat.name-role-value', 'wcag2a', 'wcag412'],
    actIds: ['6cfa84'],
  },
  {
    ruleId: 'aria-input-field-name',
    description:
      'Stellt sicher, dass jeder ARIA-input einen zugänglichen Namen (accessible name) besitzt.',
    help: 'ARIA-inputs müssen einen zugänglichen Namen (accessible name) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-meter-name',
    description:
      'Stellt sicher, dass jeder ARIA-meter Knoten einen zugänglichen Namen (accessible name) besitzt.',
    help: 'ARIA-meter Knoten müssen einen zugänglichen Namen (accessible name) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-progressbar-name',
    description:
      'Stellt sicher, dass jeder ARIA-progressbar Knoten einen zugänglichen Namen (accessible name) besitzt.',
    help: 'ARIA-progressbar Knoten müssen einen zugänglichen Namen (accessible name) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-required-attr',
    description:
      'Stellt sicher, dass Elemente mit ARIA-Rollen alle erforderlichen ARIA-Attribute besitzen.',
    help: 'Erforderliche ARIA-Attribute müssen bereitgestellt werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['4e8ab6'],
  },
  {
    ruleId: 'aria-required-children',
    description:
      'Stellt sicher, dass Elemente mit einer ARIA-Rolle, welche bestimmte untergeordnete Rollen voraussetzten auch diese enthalten.',
    help: 'Bestimmte ARIA-Rollen müssen spezifische, untergeordnete Kind-Rollen enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['bc4a75', 'ff89c9'],
  },
  {
    ruleId: 'aria-required-parent',
    description:
      'Stellt sicher, dass Elemente mit ARIA-Rollen, welche übergeordnete Rollen voraussetzen auch in diesen enthalten sind.',
    help: 'Bestimmte ARIA-Rollen müssen in spezifischen, übergeordneten Eltern-Rollen enthalten sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['ff89c9'],
  },
  {
    ruleId: 'aria-roledescription',
    description:
      'Stellt sicher, dass ARIA-roledescription nur im Zusammenhang mit einer im- oder expliziten Rolle verwendet wird.',
    help: 'Nutze aria-roledescription für Elemente mit einer semantischen Rolle.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-roles',
    description:
      'Stellt sicher, dass alle Elemente mit einer ARIA-Rolle auch einen gültigen Wert verwenden.',
    help: 'Verwendete ARIA-Rollen müssen gültigen Werten entsprechen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['674b10'],
  },
  {
    ruleId: 'aria-text',
    description:
      'Ensures "role=text" is used on elements with no focusable descendants',
    help: '"role=text" should have no focusable descendants',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=de',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-toggle-field-name',
    description:
      'Stellt sicher, dass jedes ARIA-toggle-Feld ein zugänglichen Namen (accessible name) besitzt.',
    help: 'ARIA-toggle-Felder benötigen einen zugänglichen Namen (accessible name).',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-tooltip-name',
    description:
      'Stellt sicher, dass jeder ARIA-tooltip Knoten einen zugänglichen Namen (accessible name) besitzt.',
    help: 'ARIA-tooltip-Knoten benötigen einen zugänglichen Namen (accessible name).',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-treeitem-name',
    description:
      'Stellt sicher, dass jeder ARIA-treeitem Knoten einen zugänglichen Namen (accessible name) besitzt.',
    help: 'ARIA-treeitem-Knoten benötigen einen zugänglichen Namen (accessible name).',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=de',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-valid-attr-value',
    description:
      'Stellt sicher, dass alle ARIA-Attribute gültige Werte verwenden.',
    help: 'Verwendete ARIA-Attribute müssen gültigen Werten entsprechen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['6a7281'],
  },
  {
    ruleId: 'aria-valid-attr',
    description:
      'Stellt sicher, dass Attribute, welche mit aria- beginnen auch valide ARIA-Attribute sind.',
    help: 'Verwendete ARIA-Attribute müssen gültigen Namen entsprechen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=de',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5f99a7'],
  },
  {
    ruleId: 'audio-caption',
    description: 'Stellt sicher, dass <audio>-Elemente Untertitel besitzen.',
    help: '<audio>-Elemente müssen eine Untertitelung (captions track) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=de',
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
      'Stellt sicher, dass das autocomplete-Attribut korrekt ist und für das form-Feld geeignet ist.',
    help: 'autocomplete-Attribute müssen korrekt genutzt werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=de',
    tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
    actIds: ['73f2c2'],
  },
  {
    ruleId: 'avoid-inline-spacing',
    description:
      'Stellt sicher, dass der Zeichenabstand durch benutzerdefinierte Stylesheets angepasst werden kann.',
    help: 'Zeichenabstände müssen durch benutzerdefinierte Stylesheets anpassbar sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=de',
    tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
    actIds: ['24afc2', '9e45ec', '78fd32'],
  },
  {
    ruleId: 'blink',
    description: 'Stellt sicher, dass keine <blink>-Elemente verwendet werden.',
    help: '<blink>-Elemente sind veraltet und dürfen nicht verwendet werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass Schaltflächen wahrnehmbaren Text enthalten.',
    help: 'Schaltflächen müssen wahrnehmbaren Text enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=de',
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
      'Stellt sicher, dass jede Seite mindestens ein Mittel bereitstellt, welches dem Nutzer erlaubt direkt zum Inhalt der Seite zu springen.',
    help: 'Wiederholende Blöcke müssen vom Nutzer mit Hilfe von der Seite bereitgestellten Mitteln übersprungen werden können.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=de',
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
      'Stellt sicher, dass der Kontrast zwischen Vorder- und Hintergrundfarbe den in der WCAG 2 als AAA ausgewiesenen Kontrastgrenzwerten entspricht.',
    help: 'Elemente müssen einen ausreichenden Farbkontrast haben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=de',
    tags: ['cat.color', 'wcag2aaa', 'wcag146', 'ACT'],
    actIds: ['09o5cg'],
  },
  {
    ruleId: 'color-contrast',
    description:
      'Stellt sicher, dass der Kontrast zwischen Vorder- und Hintergrundfarbe den in der WCAG 2 als AA ausgewiesenen Kontrastgrenzwerten entspricht.',
    help: 'Elemente müssen einen ausreichenden Farbkontrast haben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=de',
    tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT'],
    actIds: ['afw4f7', '09o5cg'],
  },
  {
    ruleId: 'css-orientation-lock',
    description:
      'Stellt sicher, dass der Inhalt nicht nur auf einer sondern auf allen spezifischen Bildschirmausrichtungen angezeigt werden kann.',
    help: 'CSS Media Queries dürfen nicht genutzt werden um die Bildschirmausrichtung zu sperren.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=de',
    tags: ['cat.structure', 'wcag134', 'wcag21aa', 'experimental'],
    actIds: ['b33eff'],
  },
  {
    ruleId: 'definition-list',
    description:
      'Stellt sicher, dass <dl>-Elemente ordnungsgemäß strukturiert sind.',
    help: '<dl>-Elemente dürfen unmittelbar nur korrekt verschachtelte <dt>- und <dd>-Gruppen, <script>- oder <template>-Elemente enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=de',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'dlitem',
    description:
      'Stellt sicher, dass <dt> und <dd>-Elemente in einem <dl>-Element enthalten sind.',
    help: '<dt>- und <dd>-Elemente müssen in einem <dl>-Element enthalten sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=de',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'document-title',
    description:
      'Stellt sicher, dass jedes HTML-Dokument ein nichtleeres <title>-Element besitzt.',
    help: 'Dokumente müssen ein <title>-Element besitzen, um die Navigation zu erleichtern.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=de',
    tags: ['cat.text-alternatives', 'wcag2a', 'wcag242', 'ACT'],
    actIds: ['2779a5'],
  },
  {
    ruleId: 'empty-heading',
    description:
      'Stellt sicher, dass Überschriften einen wahrnehmbaren Text beinhalten.',
    help: 'Überschriften dürfen nichtleer sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=de',
    tags: ['cat.name-role-value', 'best-practice'],
    actIds: ['ffd0e9'],
  },
  {
    ruleId: 'empty-table-header',
    description: 'Ensures table headers have discernible text',
    help: 'Table header text should not be empty',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=de',
    tags: ['cat.name-role-value', 'best-practice'],
  },
  {
    ruleId: 'focus-order-semantics',
    description:
      'Stellt sicher, dass Elemente in der Fokusreihenfolge eine geeignete Rolle besitzen.',
    help: 'Elemente in der Fokusreihenfolge benötigen eine Rolle, die für interaktive Elemente geeignet ist.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'best-practice', 'experimental'],
  },
  {
    ruleId: 'form-field-multiple-labels',
    description:
      'Stellt sicher, dass ein form-Feld nur ein label-Element besitzt.',
    help: 'form-Felder sollten nur ein label-Element besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=de',
    tags: ['cat.forms', 'wcag2a', 'wcag332'],
  },
  {
    ruleId: 'frame-focusable-content',
    description:
      'Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1',
    help: 'Frames with focusable content must not have tabindex=-1',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['akn7bn'],
  },
  {
    ruleId: 'frame-tested',
    description:
      'Stellt sicher, dass <iframe> und <frame>-Elemente das axe-core Script beinhalten.',
    help: 'Frames müssen mit axe-core getestet werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=de',
    tags: ['cat.structure', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'frame-title-unique',
    description:
      'Stellt sicher, dass <iframe> und <frame>-Elemente ein einzigartiges title-Attribut besitzen.',
    help: 'Frames müssen ein einzigartiges title-Attribut besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=de',
    tags: ['cat.text-alternatives', 'wcag412', 'wcag2a'],
    actIds: ['4b1c6c'],
  },
  {
    ruleId: 'frame-title',
    description:
      'Stellt sicher, dass <iframe> und <frame>-Elemente ein nichtleeres title-Attribut besitzen.',
    help: 'Frames müssen ein nichtleeres title-Attribut besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass Überschriften in der semantisch korrekten Reihenfolge sind.',
    help: 'Überschriftenebenen sollten nur jeweils um eins steigen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'hidden-content',
    description: 'Informiert den Nutzer über versteckten Inhalt.',
    help: 'Versteckter Inhalt auf der Seite konnte nicht analysiert werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=de',
    tags: ['cat.structure', 'experimental', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'html-has-lang',
    description:
      'Stellt sicher, dass jedes HTML Dokument ein lang-Attribut besitzt.',
    help: 'Das <html>-Element muss ein lang-Attribut besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=de',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['b5c3f8'],
  },
  {
    ruleId: 'html-lang-valid',
    description:
      'Stellt sicher, dass das lang-Attribut des <html>-Elements einen validen Wert besitzt.',
    help: 'Das <html>-Element muss einen gültigen Attributwert für das lang-Attribut besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=de',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['bf051a'],
  },
  {
    ruleId: 'html-xml-lang-mismatch',
    description:
      'Stellt sicher, dass HTML Elemente mit validen lang und xml:lang Attributen dieselbe Angabe über die Sprache machen.',
    help: 'HTML Elemente mit lang und xml:lang Attributen müssen dieselbe Sprache ausweisen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=de',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['5b7ae0'],
  },
  {
    ruleId: 'identical-links-same-purpose',
    description:
      'Stellt sicher, dass Links mit dem selben zugänglichen Namen (accessible name) denselben Zweck folgen.',
    help: 'Links mit dem selben zugänglichen Namen (accessible name) verfolgen denselben Zweck.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'wcag2aaa', 'wcag249'],
    actIds: ['b20e66'],
  },
  {
    ruleId: 'image-alt',
    description:
      'Stellt sicher, dass <img>-Elemente einen Alternativtext oder eine ARIA-Rolle mit dem Wert none oder presentation besitzen.',
    help: 'Abbildungen müssen einen Alternativtext besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass Alternativtexte von Bildern nicht als Text wiederholt werden.',
    help: 'Der Alternativtext von Bildern sollte nicht als Text wiederholt werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=de',
    tags: ['cat.text-alternatives', 'best-practice'],
  },
  {
    ruleId: 'input-button-name',
    description:
      'Stellt sicher, dass Eingabeschaltflächen sichtbaren Text beinhalten.',
    help: 'Eingabeschaltflächen müssen sichtbaren Text beinhalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass <input type="image">-Elemente einen Alternativtext besitzen.',
    help: '<input type="image">-Elemente müssen einen Alternativtext besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=de',
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
      'Stellt sicher, dass Elemente, die durch ihren Inhalt beschrieben sind, auch ihren sichtbaren Text als Teil des zugänglichen Namens (accessible name) haben.',
    help: 'Elemente müssen ihren sichtbaren Text auch als Teil des zugänglichen Namens (accessible name) haben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'wcag21a', 'wcag253', 'experimental'],
    actIds: ['2ee8b8'],
  },
  {
    ruleId: 'label-title-only',
    description:
      'Stellt sicher, dass jedes <form>-Element nicht ausschließlich durch ein title oder aria-describedby-Attribut beschrieben sind.',
    help: '<form>-Elemente sollten eine sichtbare Beschriftung haben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=de',
    tags: ['cat.forms', 'best-practice'],
  },
  {
    ruleId: 'label',
    description:
      'Stellt sicher, dass jedes <form>-Element über eine Beschriftung verfügt.',
    help: '<form>-Elemente müssen eine Beschriftung haben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass die banner landmark sich auf der obersten Ebene befindet.',
    help: 'Banner landmark muss sich auf der obersten Ebene befinden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-complementary-is-top-level',
    description:
      'Stellt sicher, dass die ergänzende landmark oder aside sich auf dem höchsten Level befindet.',
    help: 'Das aside-Elemente darf sich nicht in einer anderen landmark befinden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-contentinfo-is-top-level',
    description:
      'Stellt sicher, dass die contentinfo landmark sich auf der obersten Ebene befindet.',
    help: 'Contentinfo landmark muss sich auf der obersten Ebene befinden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-main-is-top-level',
    description:
      'Stellt sicher, dass die main landmark sich auf der obersten Ebene befindet.',
    help: 'Main landmark ist nicht auf der obersten Ebene.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-banner',
    description:
      'Stellt sicher, dass das Dokument höchstens eine banner landmark besitzt.',
    help: 'Das Dokument sollte höchstens eine banner landmark enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-contentinfo',
    description:
      'Stellt sicher, dass das Dokument höchstens eine contentinfo landmark besitzt.',
    help: 'Das Dokument sollte höchstens eine contentinfo landmark enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-main',
    description:
      'Stellt sicher, dass das Dokument höchstens eine main landmark besitzt.',
    help: 'Das Dokument sollte nur eine main landmark besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-one-main',
    description: 'Stellt sicher, dass das Dokument eine main landmark besitzt.',
    help: 'Seite muss eine main landmark enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-unique',
    description: 'Stellt sicher, dass landmarks einzigartig sind.',
    help: 'Landmarks müssen eine einzigartige role oder role/label/title Kombination (bzw. zugänglicher Name / accessible name) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'link-in-text-block',
    description:
      'Stellt sicher, dass Links vom umgebenden Text nicht allein durch die Farbe unterschieden werden können.',
    help: 'Links müssen vom umgebenden Text auf eine Weise unterschieden werden können, die nicht allein auf Farbe beruht.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=de',
    tags: ['cat.color', 'wcag2a', 'wcag141'],
  },
  {
    ruleId: 'link-name',
    description: 'Stellt sicher, dass Links wahrnehmbaren Text enthalten.',
    help: 'Links müssen wahrnehmbaren Text enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=de',
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
    description: 'Stellt sicher, dass Listen korrekt strukturiert sind.',
    help: '<ul>- und <ol>-Elemente dürfen unmittelbar nur <li>-, <script>- oder <template>-Elemente enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=de',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'listitem',
    description:
      'Stellt sicher, dass <li>-Elemente semantisch korrekt verwendet werden.',
    help: '<li>-Elemente müssen in einem <ul>- oder <ol>-Element enthalten sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=de',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'marquee',
    description:
      'Stellt sicher, dass <marquee>-Elemente nicht verwendet werden.',
    help: '<marquee>-Elemente sind veraltet und dürfen nicht verwendet werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=de',
    tags: ['cat.parsing', 'wcag2a', 'wcag222'],
  },
  {
    ruleId: 'meta-refresh-no-exceptions',
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=de',
    tags: ['cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325'],
    actIds: ['bisz58'],
  },
  {
    ruleId: 'meta-refresh',
    description:
      'Stellt sicher, dass <meta http-equiv="refresh"> nicht verwendet werden.',
    help: 'Eine zeitgesteuerte Aktualisierung (refresh) sollte nicht verwendet werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=de',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag221'],
    actIds: ['bc659a', 'bisz58'],
  },
  {
    ruleId: 'meta-viewport-large',
    description:
      'Stellt sicher, dass <meta name="viewport"> nicht verhindert, dass ein signifikanter Zoom verwendet werden kann.',
    help: 'Benutzer sollten in der Lage sein, den Text um bis zu 500% vergrößern und skalieren zu können.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=de',
    tags: ['cat.sensory-and-visual-cues', 'best-practice'],
  },
  {
    ruleId: 'meta-viewport',
    description:
      'Stellt sicher, dass <meta name="viewport"> Textskalierung und -zoom nicht verhindert werden.',
    help: 'Zoomen und Skalieren darf nicht deaktiviert werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=de',
    tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
    actIds: ['b4f0c3'],
  },
  {
    ruleId: 'nested-interactive',
    description:
      'Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies',
    help: 'Interactive controls must not be nested',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'wcag2a', 'wcag412'],
    actIds: ['307n5z'],
  },
  {
    ruleId: 'no-autoplay-audio',
    description:
      'Stellt sicher, dass <video> oder <audio> Elemente keine Töne automatisch abspielen für mehr als 3 Sekunden (autoplay) ohne eine Möglichkeit dies zu stoppen.',
    help: '<video> oder <audio> Elemente geben keine Töne automatisch aus.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=de',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag142', 'ACT'],
    actIds: ['80f0bf'],
  },
  {
    ruleId: 'object-alt',
    description:
      'Stellt sicher, dass <object>-Elemente einen Alternativtext besitzen.',
    help: '<object>-Elemente müssen einen Alternativtext besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=de',
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
      'Stellt sicher, dass <p>-Elemente nicht dafür verwendet werden um Überschriften zu formatieren.',
    help: 'Die Schriftschnitte bold und italic sowie die Schriftgröße dürfen nicht verwendet werden, um <p>-Elemente wie Überschriften zu formatieren.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
  },
  {
    ruleId: 'page-has-heading-one',
    description:
      'Stellt sicher, dass die Seite oder zumindest eins der frame-Elemente eine Überschrift der ersten Ebene enthalten.',
    help: 'Die Seite muss eine Überschrift der ersten Ebene enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=de',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'presentation-role-conflict',
    description:
      'Markiert Elemente welche eine Rolle besitzen, die none oder presentation ist und die eine Rollenauflösung benötigen.',
    help: 'Elemente mit Rolle none oder presentation dürfen mit anderen Rollen nicht in Konflikt stehen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=de',
    tags: ['cat.aria', 'best-practice', 'ACT'],
    actIds: ['46ca7f'],
  },
  {
    ruleId: 'region',
    description:
      'Stellt sicher, dass jeglicher Inhalt in einer landmark region enthalten ist.',
    help: 'Inhalte sollten in einer landmark region enthalten sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'role-img-alt',
    description:
      "Stellt sicher, dass [role='img'] Elemente einen Alternativ Text besitzen.",
    help: "[role='img'] Elemente haben ein Alternativtext.",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass das scope-Attribut bei Tabellen korrekt verwendet wird.',
    help: 'Das scope-Attribut sollte korrekt verwendet werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=de',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'scrollable-region-focusable',
    description:
      'Elemente, welche scrollbaren Inhalt besitzen sollten durch die Tastatur erreichbar und bedienbar sein.',
    help: 'Scrollbare Regionen müssen per Tastatur erreichbar sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['0ssw9k'],
  },
  {
    ruleId: 'select-name',
    description:
      'Stellt sicher, dass <select> Elemente einen zugänglichen Namen (accessible name) besitzen.',
    help: '<select> Elemente müssen einen zugänglichen Namen (accessible name) besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass serverseitige Imagemaps nicht verwendet werden.',
    help: 'Serverseitige Imagemaps dürfen nicht verwendet werden.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass alle Skip-Links ein fokussierbares Ziel enthalten.',
    help: 'Das Ziel eines Skip-Links sollte existieren und fokussierbar sein.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'svg-img-alt',
    description:
      'Stellt sicher, dass <svg> Elemente mit einer img, graphics-document oder graphics-symbol Rolle einen zugänglichen Namen (accessible name) besitzen.',
    help: '<svg> Elemente mit einer img Rolle sollten einen Alternativtext besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=de',
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
    description:
      'Stellt sicher, dass keine tabindex-Attribute mit einem Wert größer als null verwendet werden.',
    help: 'Elemente sollten keinen tabindex besitzen, der größer als null ist.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=de',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'table-duplicate-name',
    description:
      'Stellt sicher, dass Tabellen nicht den gleichen Text im <caption>-Element wie im summary-Attribut enthalten.',
    help: 'Das <caption>-Element sollte nicht den gleichen Text wie das summary-Attribut enthalten.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=de',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'table-fake-caption',
    description:
      'Stellt sicher, dass Tabellen mit einer Beschriftung auch das <caption>-Element verwenden.',
    help: 'Daten- oder Kopfzellen sollten nicht verwendet werden, um einer Datentabelle eine Überschrift zu geben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=de',
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
      'https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=de',
    tags: ['wcag22aa', 'wcag258', 'cat.sensory-and-visual-cues'],
  },
  {
    ruleId: 'td-has-header',
    description:
      'Stellt sicher, dass jede nichtleere Zelle einer Tabelle ein oder mehrere Tabellenköpfe haben.',
    help: 'In Tabellen, die größer als 3 mal 3 sind, müssen alle nichtleeren <td>-Elemente einen zugehörigen Tabellenkopf haben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=de',
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
      'Stellt sicher, dass jede Zelle in einer Tabelle, welche das headers-Attribut verwendet, sich nur auf andere Zellen derselben Tabelle beziehen.',
    help: 'Innerhalb eines <table>-Elementes dürfen sich Zellen, die das headers-Attribut verwenden, nur auf andere Zellen derselben Tabelle beziehen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=de',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['a25f45'],
  },
  {
    ruleId: 'th-has-data-cells',
    description:
      'Stellt sicher, dass jeder Tabellenkopf in einer Datentabelle sich auf Datenzellen bezieht.',
    help: 'Alle <th>-Elemente sowie Elemente mit role=columnheader/rowheader müssen Datenzellen haben, die sie beschreiben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=de',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['d0f69e'],
  },
  {
    ruleId: 'valid-lang',
    description: 'Stellt sicher, dass lang-Attribute gültige Werte haben.',
    help: 'Das lang-Attribut muss einen gültigen Wert haben.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=de',
    tags: ['cat.language', 'wcag2aa', 'wcag312', 'ACT'],
    actIds: ['de46e4'],
  },
  {
    ruleId: 'video-caption',
    description: 'Stellt sicher, dass <video>-Elemente Untertitel besitzen.',
    help: '<video>-Elemente müssen Untertitel besitzen.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=de',
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
