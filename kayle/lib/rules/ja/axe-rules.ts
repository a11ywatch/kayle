/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: "accesskeys",
    description: "すべてのaccesskey属性値が一意であることを確認します",
    help: "accesskey属性値は一意でなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "area-alt",
    description:
      "イメージマップの<area>要素に代替テキストが存在することを確認します",
    help: "アクティブな<area>要素には代替テキストが存在しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=ja",
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
    description: "要素のロールにARIA属性が許可されていることを確認します",
    help: "要素には許可されているARIA属性のみを使用しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5c01ea"],
  },
  {
    ruleId: "aria-allowed-role",
    description: "role属性の値が要素に対して適切であることを確認します",
    help: "ARIAロールは要素に対して適切でなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=ja",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-command-name",
    description:
      "すべてのARIA button、link、menuitemにアクセシブルな名前があることを確認します",
    help: "ARIAコマンドにはアクセシブルな名前がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["97a4e1"],
  },
  {
    ruleId: "aria-dialog-name",
    description:
      "すべてのARIA dialog、alertdialogノードにアクセシブルな名前があることを確認します",
    help: "ARIA dialogとalertdialogノードにはアクセシブルな名前がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-hidden-body",
    description:
      "ドキュメント本体にaria-hidden='true'が存在していないことを確認します",
    help: "ドキュメント本体にaria-hidden='true'が存在してはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-hidden-focus",
    description:
      "aria-hidden要素にフォーカス可能な要素が含まれていないことを確認します",
    help: "ARIA hidden要素にフォーカス可能な要素を含んではなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=ja",
    tags: ["cat.name-role-value", "wcag2a", "wcag412"],
    actIds: ["6cfa84"],
  },
  {
    ruleId: "aria-input-field-name",
    description: "すべてのARIA入力欄にアクセシブルな名前があることを確認します",
    help: "ARIA入力欄にアクセシブルな名前があります",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-meter-name",
    description:
      "すべてのARIA meterノードにアクセシブルな名前があることを確認します",
    help: "ARIA meterノードにはアクセシブルな名前がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-progressbar-name",
    description:
      "すべてのARIA progressbarノードにアクセシブルな名前があることを確認します",
    help: "ARIA progressbarノードにはアクセシブルな名前がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-required-attr",
    description:
      "ARIAロールのある要素にすべての必須ARIA属性が存在することを確認します",
    help: "必須のARIA属性が提供されていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["4e8ab6"],
  },
  {
    ruleId: "aria-required-children",
    description:
      "子ロールを必須とするARIAロールが指定された要素に、それらが含まれていることを確認します",
    help: "特定のARIAロールには特定の子が含まれていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["bc4a75", "ff89c9"],
  },
  {
    ruleId: "aria-required-parent",
    description:
      "親ロールを必須とするARIAロールが指定された要素に、それらが含まれていることを確認します",
    help: "特定のARIAロールは特定の親に含まれていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["ff89c9"],
  },
  {
    ruleId: "aria-roledescription",
    description:
      "aria-roledescriptionが暗黙的もしくは明示的なロールを持った要素に使用されていることを確認します",
    help: "aria-roledescriptionはセマンティックなロールを持った要素に使用します",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-roles",
    description:
      "すべてのロール属性が指定された要素で、有効な値が使用されていることを確認します",
    help: "使用されているARIAロールは有効な値に一致しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["674b10"],
  },
  {
    ruleId: "aria-text",
    description:
      'role="text"が指定されている要素にフォーカス可能な子孫がないことを確認します',
    help: '"role=text"が指定されている要素には、フォーカス可能な子孫が含まれていてはなりません',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=ja",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-toggle-field-name",
    description:
      "すべてのARIAトグル欄にアクセシブルな名前があることを確認します",
    help: "ARIAトグル欄にアクセシブルな名前があります",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-tooltip-name",
    description:
      "すべてのARIA tooltipノードにはアクセシブルな名前があることを確認します",
    help: "ARIA tooltipノードにはアクセシブルな名前がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-treeitem-name",
    description:
      "すべてのARIA treeitemノードにはアクセシブルな名前があることを確認します",
    help: "ARIA treeitemノードにはアクセシブルな名前がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=ja",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-valid-attr",
    description: "aria- で始まる属性が有効なARIA属性であることを確認します",
    help: "ARIA属性は有効な名前に一致しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5f99a7"],
  },
  {
    ruleId: "aria-valid-attr-value",
    description: "すべてのARIA属性に有効な値が存在することを確認します",
    help: "ARIA属性は有効な値に一致しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=ja",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["6a7281"],
  },
  {
    ruleId: "audio-caption",
    description: "<audio>要素にキャプションが存在することを確認します",
    help: "<audio>要素にはキャプショントラックが存在しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=ja",
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
      "autocomplete属性が正しく、かつフォームフィールドに対して適切であることを確認します",
    help: "autocomplete属性は正しく使用しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=ja",
    tags: ["cat.forms", "wcag21aa", "wcag135", "ACT"],
    actIds: ["73f2c2"],
  },
  {
    ruleId: "avoid-inline-spacing",
    description:
      "style属性で指定されたテキストの間隔は、カスタムスタイルシートにより調整可能であることを確認します",
    help: "インラインのテキスト間隔設定はカスタムスタイルシートによって調整可能でなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=ja",
    tags: ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
    actIds: ["24afc2", "9e45ec", "78fd32"],
  },
  {
    ruleId: "blink",
    description: "<blink>要素が使用されていないことを確認します",
    help: "<blink>要素は廃止されており、使用するべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=ja",
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
    description: "ボタンに認識可能なテキストが存在することを確認します",
    help: "ボタンには認識可能なテキストが存在しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=ja",
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
      "各ページに少なくとも1つ、ユーザーがナビゲーション部分をスキップして直接本文へ移動できるメカニズムが存在することを確認します",
    help: "ページには繰り返されるブロックをスキップする手段が存在しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=ja",
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
      "前景色と背景色のコントラストがWCAG 2のAAコントラスト比のしきい値を満たすことを確認します",
    help: "要素には十分な色のコントラストがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=ja",
    tags: ["cat.color", "wcag2aa", "wcag143", "ACT"],
    actIds: ["afw4f7", "09o5cg"],
  },
  {
    ruleId: "color-contrast-enhanced",
    description:
      "前景色と背景色のコントラストがWCAG 2のAAAコントラスト比のしきい値を満たすことを確認します",
    help: "要素には十分な色のコントラストがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=ja",
    tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
    actIds: ["09o5cg"],
  },
  {
    ruleId: "css-orientation-lock",
    description:
      "コンテンツが特定のディスプレイの向きに固定されていないこと、およびコンテンツがすべてのディスプレイの向きで操作可能なことを確認します",
    help: "ディスプレイの向きを固定するためにCSSメディアクエリーは使用されていません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=ja",
    tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
    actIds: ["b33eff"],
  },
  {
    ruleId: "definition-list",
    description: "<dl>要素の構造が正しいことを確認します",
    help: "<dl>要素は、適切な順序で並べられた<dt>および<dd>グループ、<script>要素または<template>要素のみを直接含んでいなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=ja",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "dlitem",
    description: "<dt>および<dd>要素が<dl>に含まれていることを確認します",
    help: "<dt>および<dd>要素は<dl>に含まれていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=ja",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "document-title",
    description:
      "各HTMLドキュメントに空ではない<title>要素が含まれていることを確認します",
    help: "ドキュメントにはナビゲーションを補助するために<title>要素がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=ja",
    tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
    actIds: ["2779a5"],
  },
  {
    ruleId: "empty-heading",
    description: "見出しに認識可能なテキストが存在することを確認します",
    help: "見出しは空にしてはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=ja",
    tags: ["cat.name-role-value", "best-practice"],
    actIds: ["ffd0e9"],
  },
  {
    ruleId: "empty-table-header",
    description:
      "テーブルのヘッダーに認識可能なテキストが存在することを確認します",
    help: "テーブルのヘッダーは空にしてはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=ja",
    tags: ["cat.name-role-value", "best-practice"],
  },
  {
    ruleId: "focus-order-semantics",
    description:
      "フォーカス順序に含まれる要素に適切なロールがあることを確認します",
    help: "フォーカス順序に含まれる要素には、インタラクティブコンテンツに適したロールが必要です",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "best-practice", "experimental"],
  },
  {
    ruleId: "form-field-multiple-labels",
    description:
      "フォームフィールドに複数のlabel要素が存在しないことを確認します",
    help: "複数のlabel要素をフォームフィールドに付与するべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=ja",
    tags: ["cat.forms", "wcag2a", "wcag332"],
  },
  {
    ruleId: "frame-focusable-content",
    description:
      "tabindex=-1が指定されている<frame>と<iframe>要素が、フォーカス可能なコンテンツを含まないことを確認します",
    help: "tabindex=-1が指定されているフレームには、フォーカス可能なコンテンツが含まれていてはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["akn7bn"],
  },
  {
    ruleId: "frame-tested",
    description:
      "<iframe>および<frame>要素にaxe-coreスクリプトが含まれていることを確認します",
    help: "フレームはaxe-coreでテストする必要があります",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=ja",
    tags: ["cat.structure", "review-item", "best-practice"],
  },
  {
    ruleId: "frame-title",
    description:
      "<iframe>および<frame>要素に空ではないtitle属性が存在することを確認します",
    help: "フレームにはtitle属性がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=ja",
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
      "<iframe>および<frame>要素に一意のtitle属性が含まれていることを確認します",
    help: "フレームには一意のtitle属性がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=ja",
    tags: ["cat.text-alternatives", "wcag412", "wcag2a"],
    actIds: ["4b1c6c"],
  },
  {
    ruleId: "heading-order",
    description: "見出しの順序が意味的に正しいことを確認します",
    help: "見出しのレベルは1つずつ増加させなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "hidden-content",
    description: "隠れているコンテンツについてユーザーに通知します",
    help: "ページ上の隠れているコンテンツは分析できません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=ja",
    tags: ["cat.structure", "experimental", "review-item", "best-practice"],
  },
  {
    ruleId: "html-has-lang",
    description: "すべてのHTMLドキュメントにlang属性が存在することを確認します",
    help: "<html>要素にはlang属性がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=ja",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["b5c3f8"],
  },
  {
    ruleId: "html-lang-valid",
    description: "<html>要素のlang属性に有効な値があることを確認します",
    help: "<html>要素のlang属性には有効な値がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=ja",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["bf051a"],
  },
  {
    ruleId: "html-xml-lang-mismatch",
    description:
      "HTML要素に指定された有効なlangおよびxml:lang属性の両方がページの基本言語と一致することを確認します",
    help: "HTML要素に指定されたlangおよびxml:lang属性は同じ基本言語を持たなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=ja",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["5b7ae0"],
  },
  {
    ruleId: "identical-links-same-purpose",
    description:
      "同じアクセシブルな名前を持つ複数のリンクが同様の目的を果たすことを確認します",
    help: "同じ名前を持つ複数のリンクは同様の目的を持っています",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "wcag2aaa", "wcag249"],
    actIds: ["b20e66"],
  },
  {
    ruleId: "image-alt",
    description:
      "<img>要素に代替テキストが存在する、またはnoneまたはpresentationのロールが存在することを確認します",
    help: "画像には代替テキストがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=ja",
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
    description: "画像の代替がテキストとして繰り返されていないことを確認します",
    help: "画像の代替テキストはテキストとして繰り返されるべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=ja",
    tags: ["cat.text-alternatives", "best-practice"],
  },
  {
    ruleId: "input-button-name",
    description: "入力ボタンに認識可能なテキストが存在することを確認します",
    help: "入力ボタンには認識可能なテキストが存在しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=ja",
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
      '<input type="image">要素に代替テキストが存在することを確認します',
    help: "画像ボタンには代替テキストがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=ja",
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
    description: "すべてのフォーム要素にラベルが存在することを確認します",
    help: "フォーム要素にはラベルがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=ja",
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
      "コンテンツによってラベル付けされた要素は、それらの視認できるテキストがアクセシブルな名前の一部になっていることを確認します",
    help: "要素の視認できるテキストはそれらのアクセシブルな名前の一部でなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
    actIds: ["2ee8b8"],
  },
  {
    ruleId: "label-title-only",
    description:
      "すべてのフォーム要素がtitleまたはaria-describedby属性を使用して単独でラベル付けされていないことを確認します",
    help: "フォーム要素には視認できるラベルがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=ja",
    tags: ["cat.forms", "best-practice"],
  },
  {
    ruleId: "landmark-banner-is-top-level",
    description: "bannerランドマークがトップレベルにあることを確認します",
    help: "bannerランドマークは他のランドマークに含まれるべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-complementary-is-top-level",
    description:
      "complementaryランドマークあるいはasideがトップレベルにあることを確認します",
    help: "他の要素にasideを含んではなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-contentinfo-is-top-level",
    description: "contentinfoランドマークがトップレベルにあることを確認します",
    help: "contentinfoランドマークは他のランドマークに含まれるべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-main-is-top-level",
    description: "mainランドマークがトップレベルにあることを確認します",
    help: "mainランドマークは他のランドマークに含まれるべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-banner",
    description:
      "ドキュメント内のbannerランドマークが最大で1つのみであることを確認します",
    help: "ドキュメントに複数のbannerランドマークが存在してはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-contentinfo",
    description:
      "ドキュメント内のcontentinfoランドマークが最大で1つのみであることを確認します",
    help: "ドキュメントに複数のcontentinfoランドマークが存在してはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-main",
    description:
      "ドキュメント内のmainランドマークが最大で1つのみであることを確認します",
    help: "ドキュメントに複数のmainランドマークが存在してはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-one-main",
    description:
      "ドキュメントのランドマークが1つのみであること、およびページ内の各iframeのランドマークが最大で1つであることを確認します",
    help: "ドキュメントにはmainランドマークが1つ含まれていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-unique",
    description:
      "ランドマークは一意のロール又はロール／ラベル／タイトル (例: アクセシブルな名前) の組み合わせがなければなりません",
    help: "ランドマークが一意であることを確認します",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "link-in-text-block",
    description: "色に依存することなくリンクを区別できます",
    help: "リンクは色に依存しない方法で周囲のテキストと区別できなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=ja",
    tags: ["cat.color", "wcag2a", "wcag141"],
  },
  {
    ruleId: "link-name",
    description: "リンクに認識可能なテキストが存在することを確認します",
    help: "リンクには認識可能なテキストがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=ja",
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
    description: "リストが正しく構造化されていることを確認します",
    help: "<ul>および<ol>の直下には<li>、<script>または<template>要素のみを含まなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=ja",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "listitem",
    description: "<li>要素がセマンティックに使用されていることを確認します",
    help: "<li>要素は<ul>または<ol>内に含まれていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=ja",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "marquee",
    description: "<marquee>要素が使用されていないことを確認します",
    help: "<marquee>要素は非推奨のため、使用してはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=ja",
    tags: ["cat.parsing", "wcag2a", "wcag222"],
  },
  {
    ruleId: "meta-refresh",
    description:
      '<meta http-equiv="refresh">が使用されていないことを確認します',
    help: "制限時間のある更新が存在してはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=ja",
    tags: ["cat.time-and-media", "wcag2a", "wcag221"],
    actIds: ["bc659a", "bisz58"],
  },
  {
    ruleId: "meta-refresh-no-exceptions",
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: "Delayed refresh must not be used",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=ja",
    tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
    actIds: ["bisz58"],
  },
  {
    ruleId: "meta-viewport",
    description:
      '<meta name="viewport">がテキストの拡大縮小およびズーミングを無効化しないことを確認します',
    help: "ズーミングや拡大縮小は無効にしてはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=ja",
    tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
    actIds: ["b4f0c3"],
  },
  {
    ruleId: "meta-viewport-large",
    description: '<meta name="viewport">で大幅に拡大縮小できることを確認します',
    help: "ユーザーがズームをしてテキストを最大500％まで拡大できるようにするべきです",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=ja",
    tags: ["cat.sensory-and-visual-cues", "best-practice"],
  },
  {
    ruleId: "nested-interactive",
    description:
      "ネストされた対話的なコントロールはスクリーン・リーダーで読み上げられません",
    help: "対話的なコントロールがネストされていないことを確認します",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "wcag2a", "wcag412"],
    actIds: ["307n5z"],
  },
  {
    ruleId: "no-autoplay-audio",
    description:
      "<video> または <audio> 要素が音声を停止またはミュートするコントロールなしに音声を3秒より長く自動再生しないことを確認します",
    help: "<video> または <audio> 要素は音声を自動再生しません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=ja",
    tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT"],
    actIds: ["80f0bf"],
  },
  {
    ruleId: "object-alt",
    description: "<object>要素に代替テキストが存在することを確認します",
    help: "<object>要素には代替テキストがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=ja",
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
      "見出しのスタイル調整のためにp要素が使用されていないことを確認します",
    help: "p要素を見出しとしてスタイル付けするために太字、イタリック体、およびフォントサイズを使用しません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
  },
  {
    ruleId: "page-has-heading-one",
    description:
      "ページ、またはそのフレームの少なくとも1つにはレベル1の見出しが含まれていることを確認します",
    help: "ページにはレベル1の見出しが含まれていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=ja",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "presentation-role-conflict",
    description:
      "roleがnoneまたはpresentationで、roleの競合の解決が必要な要素をマークします",
    help: "roleがnoneまたはpresentationの要素をマークしなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=ja",
    tags: ["cat.aria", "best-practice", "ACT"],
    actIds: ["46ca7f"],
  },
  {
    ruleId: "region",
    description:
      "ページのすべてのコンテンツがlandmarkに含まれていることを確認します",
    help: "ページのすべてのコンテンツはlandmarkに含まれていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "role-img-alt",
    description: "[role='img'] 要素に代替テキストが存在することを確認します",
    help: "[role='img'] 要素に代替テキストが必要です",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=ja",
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
    description: "scope属性がテーブルで正しく使用されていることを確認します",
    help: "scope属性は正しく使用されなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=ja",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "scrollable-region-focusable",
    description:
      "スクロール可能なコンテンツを持つ要素はキーボードでアクセスできるようにするべきです",
    help: "スクロール可能な領域にキーボードでアクセスできるようにします",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["0ssw9k"],
  },
  {
    ruleId: "select-name",
    description: "select要素にはアクセシブルな名前があることを確認します",
    help: "select要素にはアクセシブルな名前がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=ja",
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
      "サーバーサイドのイメージマップが使用されていないことを確認します",
    help: "サーバーサイドのイメージマップを使用してはなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=ja",
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
      "すべてのスキップリンクにフォーカス可能なターゲットがあることを確認します",
    help: "スキップリンクのターゲットが存在し、フォーカス可能でなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "svg-img-alt",
    description:
      "img、graphics-document または graphics-symbol ロールを持つ svg 要素にアクセシブルなテキストがあることを確認します",
    help: "img ロールを持つ svg 要素に代替テキストが存在します",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=ja",
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
    description: "tabindex属性値が0より大きくないことを確認します",
    help: "要素に0より大きいtabindex属性を指定するべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=ja",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "table-duplicate-name",
    description:
      "テーブルのサマリーとキャプションが同一ではないことを確認します",
    help: "<caption>要素にsummary属性と同じテキストを含んではなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=ja",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "table-fake-caption",
    description:
      "キャプション付きのテーブルが<caption>要素を用いていることを確認します",
    help: "データテーブルにキャプションをつけるためにデータまたはヘッダーセルを用いるべきではありません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=ja",
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
      "https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=ja",
    tags: ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
  },
  {
    ruleId: "td-has-header",
    description:
      "大きなテーブルの空ではないデータセルに1つかそれ以上のテーブルヘッダーが存在することを確認します",
    help: "3×3より大きいテーブルの空ではないtd要素はテーブルヘッダーと関連づいていなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=ja",
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
      "ヘッダーを使用しているテーブル内の各セルが、そのテーブル内の他のセルを参照していることを確認します",
    help: "table要素内のheaders属性を使用するすべてのセルは同じ表内の他のセルのみを参照しなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=ja",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["a25f45"],
  },
  {
    ruleId: "th-has-data-cells",
    description:
      "データテーブルのテーブルヘッダーがデータセルを参照していることを確認します",
    help: "すべてのth要素およびrole=columnheader/rowheaderを持つ要素にはそれらが説明するデータセルがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=ja",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["d0f69e"],
  },
  {
    ruleId: "valid-lang",
    description: "lang属性に有効な値が存在することを確認します",
    help: "lang属性には有効な値がなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=ja",
    tags: ["cat.language", "wcag2aa", "wcag312", "ACT"],
    actIds: ["de46e4"],
  },
  {
    ruleId: "video-caption",
    description: "<video>要素にキャプションが存在することを確認します",
    help: "<video>要素にはキャプションがなければなりません",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=ja",
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
