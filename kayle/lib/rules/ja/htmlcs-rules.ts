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
    ruleId: "Principle1.Guideline1_3_1_3_1.Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.HiddenText",
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
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H30.2",
    description:
      "img 要素がこのリンクの唯一のコンテンツですが、 alt テキストがありません。 alt テキストがリンクの目的を説明するべきです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H67.1",
    description:
      "空の alt テキストをもつ img 要素は title 属性をもたないか、または、空でなければなりません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H67.2",
    description: "img 要素は支援技術に無視されるようマークアップされています。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H37",
    description:
      "Img 要素に alt 属性が不足しています。 alt 属性で短い代替テキストを明示してください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_G94.Image",
    description:
      "img 要素 の alt テキストが、この画像と同じ目的や情報を提供していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H36",
    description:
      "画像による送信ボタンに alt 属性が不足しています。このボタンの機能を説明する代替テキストを alt 属性で明示してください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_G94.Button",
    description:
      "画像による送信ボタンの代替テキストがそのボタンの目的を特定していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H24",
    description:
      "イメージマップのArea 要素に alt 属性が不足しています。各 area 要素は、そのイメージマップエリアの機能を説明する代替テキストを持たなければなりません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H24.2",
    description:
      "area 要素の代替テキストが、参照するイメージマップ画像の部分と同じ目的を提供していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_G73,G74",
    description:
      "もし短い代替テキストでこのイメージが十分に説明できないなら、ボディテキストやリンクなどを通じて長い代替テキストを提供してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H2.EG5",
    description:
      "リンク内の img 要素は 代替テキストにリンクのコンテンツのテキストの複製を使用してはなりません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H2.EG4",
    description:
      "テキストリンクと隣り合うリンク内の img 要素の alt 属性が指定されていないか空になっています。テキストと画像のリンクを一つにまとめることを検討してください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H2.EG3",
    description:
      "テキストリンクと隣り合うリンク内の img 要素の alt 属性にテキストリンクの内容の複製を使用してはいけません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H2.EG4",
    description:
      "テキストリンクと隣り合うリンク内の img 要素の alt 属性が指定されていないか空になっています。テキストと画像のリンクを一つにまとめることを検討してください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H2.EG3",
    description:
      "テキストリンクと隣り合うリンク内の img 要素の alt 属性にテキストリンクの内容の複製を使用してはいけません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H53,ARIA6",
    description:
      "他のすべての選択肢が尽きた後は、 object 要素に代替テキストを含める必要があります。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_G94,G92.Object,ARIA6",
    description:
      "短い（適切な場合は長い）代替テキストが、同じ目的を果たし同じ情報を提示する非テキストコンテンツに対して提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H35.3",
    description:
      "applet 要素をサポートしていないブラウザでは、 applet 要素の要素本文に代替テキストを含める必要があります。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_H35.2",
    description:
      "applet 要素をサポートしているがロードできないブラウザに対して代替テキストを提供するために、 applet 要素は alt 属性を含まなければなりません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_1_1_1_1.1_1_1_G94,G92.Applet",
    description:
      "非テキストコンテンツに対して、同じ目的を果たし、かつ同じ情報を示す短い（適切な場合は長い）代替テキストが提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_1.1_2_1_G158",
    description:
      "この埋め込みオブジェクトに録音済みの音声のみが含まれていて、テキストコンテンツの代替として提供されていない場合は、代替テキストバージョンが利用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_1.1_2_1_G159,G166",
    description:
      "この埋め込みオブジェクトに録画済みの映像のみが含まれており、テキストコンテンツの代替として提供されていない場合は、代替テキストバージョンが利用可能であるか、同等の情報を示す音声トラックが提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_2.1_2_2_G87,G93",
    description:
      "この埋め込みオブジェクトに事前に記録された同期したメディアが含まれており、テキストコンテンツの代替として提供されていない場合は、音声コンテンツ用のキャプションが提供されていることを確認してください",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_3.1_2_3_G69,G78,G173,G8",
    description:
      "この埋め込みオブジェクトに事前に記録された同期したメディアが含まれていて、テキストコンテンツの代替として提供されていない場合は、その映像の音声説明および/またはコンテンツの代替テキストバージョンが提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_4.1_2_4_G9,G87,G93",
    description:
      "この埋め込みオブジェクトに同期したメディアが含まれている場合は、ライブの音声コンテンツにキャプションが提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_5.1_2_5_G78,G173,G8",
    description:
      "この埋め込みオブジェクトに事前に記録された同期したメディアが含まれている場合は、その映像コンテンツに音声の説明があることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_6.1_2_6_G54,G81",
    description:
      "この埋め込みオブジェクトに記録済みの同期したメディアが含まれている場合は、その音声に手話の解釈が提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_7.1_2_7_G8",
    description:
      "この埋め込みオブジェクトに同期したメディアが含まれていて、前景音の一時停止による音声解説が収録済映像の意味を伝えるのに不十分な場合、スクリプトまたは代替バージョンで拡張音声解説が提供させていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_8.1_2_8_G69,G159",
    description:
      "この埋め込みオブジェクトに事前に記録された同期したメディアまたは映像のみのコンテンツが含まれている場合は、コンテンツの代替テキストバージョンが提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_2_1_2_9.1_2_9_G150,G151,G157",
    description:
      "この埋め込みオブジェクトにライブの音声のみのコンテンツが含まれている場合は、そのコンテンツの代替テキストバージョンが提供されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_F92,ARIA4",
    description:
      'この要素の役割は"プレゼンテーション"ですが、セマンティックな意味を持つ子要素を含みます。',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.code",
    description: "msg",
    helpUrl: [],
    ruleType: "level",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H44.NotFormControl",
    description:
      'このラベルの "for" 属性には、フォームコントロールでない要素の ID が含まれています。目的の要素に正しい ID を入力していることを確認してください。',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H65",
    description:
      'このフォームコントロールには、空またはスペースのみを含む "title" 属性があります。ラベリングテストの目的では無視されます。',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_ARIA6",
    description:
      'このフォームコントロールには、空またはスペースのみを含む "aria-label" 属性があります。ラベリングテストの目的では無視されます。',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_ARIA16,ARIA9",
    description:
      'このフォームコントロールには aria-labelledby 属性が含まれていますが、要素には存在しないID "{{id}}" が含まれています。 aria-labelledby 属性はラベリングテストの目的では無視されます。',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_F68.Hidden",
    description:
      "この hidden のフォームフィールドには何らかの方法でラベルが付けられています。 hidden のフォームフィールドにラベルを付ける必要はありません。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_F68.HiddenAttr",
    description:
      'このフォームフィールドは（ "hidden" 属性を使用して）非表示にすることを目的としていますが、何らかの方法でラベル付けされています。隠しフォームフィールドにラベルを付ける必要はありません。',
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_F68",
    description:
      'このフォームフィールドは何らかの方法でラベル付けされるべきです。 label 要素（ "for" 属性を持つかフォームフィールドを囲む）、または "title"、 "aria-label" 、または "aria-labelledby" 属性を適切に使用してください。',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H49.",
    description:
      "HTML5では時代遅れになっているプレゼンテーションマークアップが使用されています。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H49.Semantic",
    description:
      "強調テキストまたは特殊テキストには、プログラム的に決定できるようセマンティックマークアップが使用されるべきです。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H49.AlignAttr.Semantic",
    description:
      "強調テキストまたは特殊テキストには、プログラム的に決定できるようセマンティックマークアップが使用されるべきです。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H42",
    description:
      "このコンテンツが見出しとして意図されている場合は、見出しマークアップを使用する必要があります。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H63.3",
    description:
      "テーブルセルに無効な scope 属性があります。有効な値は、 row 、 col 、 rowgroup 、または colgroup です。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H63.2",
    description:
      "他の要素の見出しとして機能する td 要素のスコープ属性は、HTML5では廃止されました。代わりに th 要素を使用してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.ScopeAmbiguous",
    description:
      "複数のレベルの見出しを持つテーブルでは、 th 要素のスコープ属性はあいまいです。代わりに td 要素の headers 属性を使用してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.IncorrectAttrNotice",
    description: "Check that headers attribute on td element is correct.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.IncorrectAttr",
    description:
      'この td 要素のヘッダー属性が正しくありません。 "{{expected}}" を予期していましたが、 "{{actual}}" を検出しました',
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.HeadersRequired",
    description:
      "td 要素とそれに関連する th 要素の関係は定義されていません。このテーブルには複数レベルの th 要素があるため、 td 要素には headers 属性を使用する必要があります。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.MissingHeaderIds",
    description:
      "このテーブルに id 属性を含まない th 要素があります。これらのセルは、それらが td 要素の headers 属性によって参照されるように ID を含むべきです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.MissingHeadersAttrs",
    description:
      "このテーブルに headers 属性を含まない td 要素があります。各 headers 属性は、そのセルに関連付けられているすべての th 要素の ID を列挙する必要があります。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43,H63",
    description:
      "td 要素とそれに関連する th 要素の関係は定義されていません。 th 要素に scope 属性を使用するか、td 要素に headers 属性を使用してください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.MissingHeaderIds",
    description:
      "このテーブルに id 属性を含まない th 要素があります。これらのセルは、それらが td 要素の headers 属性によって参照されるように ID を含むべきです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43.MissingHeadersAttrs",
    description:
      "このテーブルに headers 属性を含まない td 要素があります。各 headers 属性は、そのセルに関連付けられているすべての th 要素の ID を列挙する必要があります。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H63.1",
    description:
      "このテーブルに scope 属性をもたない th 要素があります。これらのセルは、 td 要素との関連を識別するための scope 属性を含むべきです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H43,H63",
    description:
      "td 要素とそれに関連する th 要素の関係は定義されていません。 th 要素に scope 属性を使用するか、td 要素に headers 属性を使用してください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H73.3.LayoutTable",
    description:
      "このテーブルはレイアウトに使用されているように見えますが、 summary 属性が含まれています。レイアウトテーブルに summary 属性を含めないか、または、指定されている場合は空にしてください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H39,H73.4",
    description:
      "このテーブルがデータテーブルで、 summary 属性と caption 要素の両方が存在する場合、 summary は caption を複製しないでください。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H73.3.Check",
    description:
      "このテーブルがデータテーブルである場合は、 summary 属性がテーブルの構成を説明していること、またはテーブルの使用方法を説明していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H73.3.NoSummary",
    description:
      "このテーブルがデータテーブルの場合は、 table 要素の summary 属性を使用してこのテーブルの概要を説明してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H39.3.LayoutTable",
    description:
      "このテーブルはレイアウトに使用されているように見えますが、 caption 要素が含まれています。レイアウトテーブルに caption を含めることはできません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H39.3.Check",
    description:
      "このテーブルがデータテーブルの場合は、 caption 要素がこのテーブルを正確に記述していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H39.3.NoCaption",
    description:
      "このテーブルがデータテーブルである場合は、このテーブルを識別するために table 要素に caption 要素を使用することを検討してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H71.NoLegend",
    description:
      "フィールドセットに legend 要素が含まれていません。すべてのフィールドセットには、フィールドグループの説明を記述する legend 要素を含める必要があります。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H85.2",
    description:
      "この選択リストに関連オプションのグループが含まれている場合は、それらを optgroup とグループ化する必要があります。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H71.SameName",
    description:
      "これらのラジオボタンまたはチェックボックスにさらにグループレベルの説明が必要な場合は、それらを fieldset 要素に含める必要があります。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H48.1",
    description:
      "このコンテンツは、プレーンテキストを使用して番号なしリストをシミュレートしているように見えます。もしそうなら、 ul 要素でこの内容をマークアップすることで文書に適切な構造情報を追加します。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H48.2",
    description:
      "このコンテンツは、プレーンテキストを使用して番号付きリストをシミュレートしているように見えます。もしそうなら、 ol 要素でこの内容をマークアップすることで文書に適切な構造情報を追加します。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H42.2",
    description:
      "見出しタグがコンテンツなしで見つかりました。見出しとして意図されていないテキストは、見出しタグでマークアップしてはいけません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_H48",
    description:
      "この要素にナビゲーションセクションが含まれる場合は、リストとしてマークアップすることを推奨します。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_LayoutTable",
    description:
      "このテーブルはレイアウトテーブルのようにみえます。もしデータテーブルであることを意図している場合、 th 要素を使用することでヘッダーセルが識別されるようにしてください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_1.1_3_1_DataTable",
    description:
      "このテーブルはデータテーブルのようにみえます。もしレイアウトテーブルであることを意図している場合は、 th 要素がないこと、および summary または caption がないことを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_2.1_3_2_G57",
    description:
      "スタイルシートが無効になっている場合など、線形化されたときにコンテンツが意味のある順序で並べられていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_3.1_3_3_G96",
    description:
      "コンテンツを理解するための説明が提供されている場合は、オブジェクトを説明するために（形状、サイズ、場所などの）感覚的な特性だけに頼らないでください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_4.1_3_4.RestrictView",
    description: "HTMLCS.getTranslation('1_3_4.RestrictView')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_5.1_3_5_H98.Purpose",
    description: "HTMLCS.getTranslation('1_3_5_H98.Purpose')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_5.1_3_5_H98.MissingAutocomplete",
    description: "HTMLCS.getTranslation('1_3_5_H98.MissingAutocomplete')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_3_1_3_6.1_3_6_ARIA11.Check",
    description: "HTMLCS.getTranslation('1_3_6_ARIA11.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_1.1_4_1_G14,G18",
    description:
      "色だけを使って伝えられる情報がテキストや他の視覚的な手がかりを通しても利用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId:
      "Principle1.Guideline1_4_1_4_10.1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId:
      "Principle1.Guideline1_4_1_4_10.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed')",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId:
      "Principle1.Guideline1_4_1_4_10.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling')",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId:
      "Principle1.Guideline1_4_1_4_10.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "HTMLCS.getTranslation('1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom')",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId:
      "Principle1.Guideline1_4_1_4_11.1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "HTMLCS.getTranslation('1_4_11_G195,G207,G18,G145,G174,F78.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_12.1_4_12_C36,C35.Check",
    description: "HTMLCS.getTranslation('1_4_12_C36,C35.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_13.1_4_13_F95.Check",
    description: "HTMLCS.getTranslation('1_4_13_F95.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_2.1_4_2_F23",
    description:
      "この要素に3秒を超えて自動再生される音声が含まれている場合は、音声を一時停止、停止、またはミュートする機能があることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_3_F24.1_4_3_F24.BGColour",
    description:
      "この要素に継承された前景色があり、対応するインラインの背景色または画像を引き立てていることを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_3_F24.1_4_3_F24.FGColour",
    description:
      "この要素に継承された背景色または画像があり、対応するインラインの前景色を引き立てていることを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_4.1_4_4_G142",
    description:
      "コンテンツや機能を損なうことなく、支援技術なしでテキストを200パーセントまでリサイズできることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_5.1_4_5_G140,C22,C30.AALevel",
    description:
      "使用している技術で意図した視覚的提示が可能である場合、文字画像ではなくテキストが情報伝達に用いられているか確認してください。ただし、文字画像が、伝えようとする情報にとって必要不可欠であるか、または、利用者の要求に応じて視覚的にカスタマイズできる場合を除きます。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_7.1_4_7_G56",
    description:
      "主に（ナレーションなどの）スピーチである要素内の事前録音された音声のみのコンテンツでは、背景音はミュート可能であるか、またはスピーチより少なくとも20dB（または約4倍）静かである必要があります。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_8.1_4_8_G148,G156,G175",
    description:
      "ウェブページまたはブラウザを介して、ユーザーがテキストブロックの前景色と背景色を選択できるメカニズムがあることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_8.1_4_8_H87,C20",
    description:
      "テキストブロックの幅を80文字以下（中国語、日本語、または韓国語のスクリプトでは40文字以下）に縮小するメカニズムが存在することを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_8.1_4_8_C19,G172,G169",
    description:
      "テキストブロックが両端揃えされていないこと、または両端揃えを削除するためのメカニズムが存在することを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_8.1_4_8_G188,C21",
    description:
      "テキストブロック内の行間隔が段落内で少なくとも150％であり、段落間隔が行間隔の少なくとも1.5倍であること、またはこれを達成するためのメカニズムが使用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_8.1_4_8_H87,G146,C26",
    description:
      "ユーザーがフルスクリーンウィンドウ上で水平にスクロールすることを必要とせずに、支援技術なしでテキストを200パーセントまでリサイズできることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle1.Guideline1_4_1_4_9.1_4_9_G140,C22,C30.NoException",
    description:
      "テキストのイメージが純粋な装飾のためか、または、伝えられる情報にテキストの特定の表現が不可欠である場合にだけ使われているか確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_1.2_1_1_G90",
    description:
      "この要素のイベントハンドラによって提供される機能がキーボードから利用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_1.2_1_1_SCR20.DblClick",
    description:
      "この要素をダブルクリックすることで提供される機能がキーボードから利用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_1.2_1_1_SCR20.MouseOver",
    description:
      "この要素の上にマウスを置くことで提供される機能がキーボードから利用可能であることを確認してください。たとえば、フォーカスイベントの使用などです。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_1.2_1_1_SCR20.MouseOut",
    description:
      "この要素からマウスを外すことによって提供される機能がキーボードを通して利用可能であることを確認してください。たとえば、 blur イベントの使用などです。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_1.2_1_1_SCR20.MouseMove",
    description:
      "この要素上でマウスを動かすことによって提供される機能がキーボードを通して利用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_1.2_1_1_SCR20.MouseDown",
    description:
      "この要素をマウスオーバーすることで提供される機能がキーボードから利用可能であることを確認してください。たとえば、 keydown イベントの使用などです。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_1.2_1_1_SCR20.MouseUp",
    description:
      "この要素にマウスを合わせることで提供される機能がキーボードから利用可能であることを確認してください。たとえば、 keyup イベントの使用などです。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_2.2_1_2_F10",
    description:
      "このアプレットまたはプラグインが、キーボードを使用しているときにフォーカスをそれ自体から遠ざける機能を提供することを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_1_2_1_4.2_1_4.Check",
    description: "HTMLCS.getTranslation('2_1_4.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_1.2_2_1_F40.2",
    description:
      "別のページにリダイレクトするために使用される Meta リフレッシュタグの制限時間が0ではありません。ユーザーはこの制限時間を制御できません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_1.2_2_1_F41.2",
    description:
      "現在のページを更新するために meta リフレッシュタグが使用されています。ユーザーはこの更新の制限時間を制御できません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId:
      "Principle2.Guideline2_2_2_2_2.2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "コンテンツの一部が5秒より長く移動、スクロール、点滅、または自動更新される場合は、コンテンツを一時停止、停止、非表示にできるメカニズムがあることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_2.2_2_2_F4",
    description:
      "この点滅している要素を5秒以内に止めることができるメカニズムがあることを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_2.2_2_2_F47",
    description:
      "blink 要素は、点滅情報を5秒以内に停止できるという要件を満たせません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_3.2_2_3_G5",
    description:
      "タイミングがコンテンツによって提示されるイベントまたはアクティビティの重要な部分でないことを確認してください。ただし、インタラクティブでない同期したメディアおよびリアルタイムイベントを除きます。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_4.2_2_4_SCR14",
    description:
      "緊急時の中断を除いて、すべての中断（コンテンツの更新を含む）がユーザーによって延期または抑制できることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_5.2_2_5_G105,G181",
    description:
      "このウェブページが無活動時間制限のある一連のウェブページの一部である場合は、認証されたユーザーが再認証後にデータを失うことなくアクティビティを続行できることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_2_2_2_6.2_2_6.Check",
    description: "HTMLCS.getTranslation('2_2_6.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_3_2_3_1.2_3_1_G19,G176",
    description:
      "コンテンツのすべてのコンポーネントが、どの1秒間においても3回を超えて点滅していないこと、または点滅している領域のサイズが十分に小さいことを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_3_2_3_2.2_3_2_G19",
    description:
      "コンテンツのすべてのコンポーネントが、どの1秒間においても3回を超えて点滅していないことを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_3_2_3_3.2_3_3.Check",
    description: "HTMLCS.getTranslation('2_3_3.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_1.2_4_1_H64.1",
    description:
      "iframe 要素には、フレームを識別する空でない title 属性が必要です。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_1.2_4_1_H64.2",
    description:
      "この要素の title 属性にフレームを識別するテキストが含まれていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_1.2_4_1_G1,G123,G124,H69",
    description:
      "一般的なナビゲーション要素はすべて迂回できることを確認してください。例えば、スキップリンク、ヘッダ要素、または ARIA ランドマークを使用します。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_1.2_4_1_G1,G123,G124.NoSuchID",
    description:
      'このリンクはドキュメント内の名前付きアンカー "{{id}}" を指していますが、その名前のアンカーは存在しません。',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_1.2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'このリンクはドキュメント内の名前付きアンカー "{{id}}" を指していますが、テストされたフラグメント内にその名前のアンカーは存在しません。',
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_2.2_4_2_H25.1.NoHeadEl",
    description:
      "説明的な title 要素を配置するための head セクションがありません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_2.2_4_2_H25.1.NoTitleEl",
    description:
      "head セクションの空でない title 要素を使って、文書にタイトルをつけるべきです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_2.2_4_2_H25.1.EmptyTitle",
    description: "head セクションの title 要素が空ではありません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_2.2_4_2_H25.2",
    description: "title 要素が文書を説明していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_3.2_4_3_H4.2",
    description:
      "tabindex が使用されている場合は、 tabindex 属性で指定されたタブ順序がコンテンツ内の関係に従っていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_4.2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "プログラムで解釈されるリンクのコンテキストまたはその title 属性と組み合わせたときに、リンクテキストからリンクの目的が判断できることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_4.2_4_4_H77,H78,H79,H80,H81",
    description:
      "プログラムで解釈されるリンクのコンテキストと組み合わせたときに、リンクテキストからリンクの目的が判断できることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_5.2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "このウェブページが一連のプロセスの一部でない場合は、ウェブページ一式の中でこのウェブページを見つける方法が複数あることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_6.2_4_6_G130,G131",
    description:
      "見出しとラベルがトピックや目的を説明していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_7.2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "キーボードフォーカスのインジケータをユーザーインターフェイス操作子に視覚的に配置できる操作モードが少なくとも1つあることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_8.2_4_8_H59.1",
    description:
      "link 要素はドキュメントのヘッドセクションにのみ配置できます。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_8.2_4_8_H59.2a",
    description:
      "link 要素に、リンクタイプを識別する空でない rel 属性がありません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_8.2_4_8_H59.2b",
    description:
      "link 要素に、リンクされているリソースを指す空でない href 属性がありません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle2.Guideline2_4_2_4_9.2_4_9_H30",
    description:
      "リンクテキストがリンクの目的を説明していることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_1.2_5_1.Check",
    description: "HTMLCS.getTranslation('2_5_1.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_2.2_5_2.SinglePointer_Check",
    description: "HTMLCS.getTranslation('2_5_2.SinglePointer_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_2.2_5_2.Mousedown_Check",
    description: "HTMLCS.getTranslation('2_5_2.Mousedown_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_2.2_5_2.Touchstart_Check",
    description: "HTMLCS.getTranslation('2_5_2.Touchstart_Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_3.2_5_3_F96.Check",
    description: "HTMLCS.getTranslation('2_5_3_F96.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_3.2_5_3_F96.AccessibleName",
    description: "HTMLCS.getTranslation('2_5_3_F96.AccessibleName')",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_4.2_5_4.Check",
    description: "HTMLCS.getTranslation('2_5_4.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_4.2_5_4.Devicemotion",
    description: "HTMLCS.getTranslation('2_5_4.Devicemotion')",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_5.2_5_5.Check",
    description: "HTMLCS.getTranslation('2_5_5.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle2.Guideline2_5_2_5_6.2_5_6.Check",
    description: "HTMLCS.getTranslation('2_5_6.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_1.3_1_1_H57.2",
    description:
      "html 要素には、ドキュメントの言語を記述する lang 属性または xml:lang 属性を含める必要があります。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_1.3_1_1_H57.3.Lang",
    description:
      "document 要素の lang 属性に指定されている言語が整形式ではないようです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_1.3_1_1_H57.3.XmlLang",
    description:
      "document 要素の xml:lang 属性に指定されている言語が整形式ではないようです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_2.3_1_2_H58",
    description:
      "言語の変更が、要素の lang 属性または xml:lang 属性、あるいはその両方を使用して適切にマークアップされていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_2.3_1_2_H58.1.Lang",
    description:
      "この要素の lang 属性に指定されている言語は、整形式ではないようです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_2.3_1_2_H58.1.XmlLang",
    description:
      "この要素の xml:lang 属性に指定されている言語は、整形式ではないようです。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_3.3_1_3_H40,H54,H60,G62,G70",
    description:
      "慣用句や専門用語を含む、特殊または制限された用法の単語やフレーズの特定の定義を識別するためのメカニズムが利用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_4.3_1_4_G102,G55,G62,H28,G97",
    description:
      "展開形式または略語の意味を識別するためのメカニズムが利用可能であることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_5.3_1_5_G86,G103,G79,G153,G160",
    description:
      "コンテンツが中等教育レベルよりも高度な読解力を必要とする場合は、補足的なコンテンツまたは代替バージョンを提供する必要があります。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_6.3_1_6_H62.1.HTML5",
    description: "ruby 要素が、本文の発音情報を含む rt 要素を含んでいません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_6.3_1_6_H62.1.XHTML11",
    description:
      "ruby 要素が、 rb 要素内のテキストの発音情報を含む rt 要素を含んでいません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_1_3_1_6.3_1_6_H62.2",
    description:
      "ruby 要素に rp 要素が含まれていません。これは、ルビテキストをサポートしていないブラウザに余分な句読点を提供します。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_2_3_2_1.3_2_1_G107",
    description:
      "この入力フィールドがフォーカスを受けたときにコンテキストの変更が起こらないことを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_2_3_2_2.3_2_2_H32.2",
    description:
      'このフォームには送信ボタンがありません。キーボードを使用してフォームを送信できないユーザーに問題が発生します。送信ボタンは、 type 属性が "submit" または "image" の INPUT 要素、またはタイプが "submit" または省略/無効の BUTTON 要素です。',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle3.Guideline3_2_3_2_3.3_2_3_G61",
    description:
      "複数のウェブページ上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに相対的に同じ順序で出現することを確認してください。ただし、利用者が変更した場合を除きます。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_2_3_2_4.3_2_4_G197",
    description:
      "このウェブページ内で同じ機能を有するコンポーネントが、それが属するウェブページ一式の中で一貫して識別できることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_2_3_2_5.3_2_5_H83.3",
    description:
      "このリンクのリンクテキストに、リンクが新しいウィンドウで開くことを示す情報が含まれていることを確認してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle3.Guideline3_3_3_3_1.3_3_1_G83,G84,G85",
    description:
      "この形式で入力エラーが自動的に検出された場合は、エラーのある項目が識別され、エラーがテキストでユーザーに説明されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3_3_3_2.3_3_2_G131,G89,G184,H90",
    description:
      "このフォームのユーザー入力に説明ラベルまたは説明（必須フィールドを含む）が指定されていることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3_3_3_3.3_3_3_G177",
    description:
      "コンテンツのセキュリティや目的を損なうことがない限り、このフォームがユーザー入力の誤りに対する推奨される修正を提供することを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId:
      "Principle3.Guideline3_3_3_3_4.3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "このフォームがユーザーに財務上または法律上のコミットメントを義務付ける場合、ユーザーが制御可能なデータを修正または削除する、またはテスト回答を送信する場合は、送信が可逆であるか、入力エラーのチェックを行っているか、またはユーザーによる確認を行っているかを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle3.Guideline3_3_3_3_5.3_3_5_G71,G184,G193",
    description:
      "ウェブフォームやコントロールレベルで、このフォームの状況依存ヘルプが利用できることを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId:
      "Principle3.Guideline3_3_3_3_6.3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "このフォームへの送信が可逆であるか、入力エラーのチェックを行っているか、またはユーザーによる確認を行っているかを確認してください。",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_null",
    description: "msg",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_H91.A.Empty",
    description:
      "アンカー要素がID付きで見つかりましたが href またはリンクテキストがありません。このIDを親または近くの要素に移動することを検討してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_H91.A.EmptyWithName",
    description:
      "name属性を持つアンカー要素が見つかりましたが、 href またはリンクテキストがありません。 name 属性を親または近くの要素のIDになるように移動することを検討してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_H91.A.EmptyNoId",
    description:
      "アンカー要素にリンクのコンテンツがなく、name または ID 属性もありません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_H91.A.NoHref",
    description:
      "アンカー要素をページ内リンクの対象の定義に使用するべきではありません。このIDが別の目的(CSSやスクリプト等)で使用されていないなら、親要素へ移動することを検討してください。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_H91.A.Placeholder",
    description:
      "有効なリンクのコンテンツをもつアンカー要素が見つかりましたが、 href 、 ID 、 name のいずれの属性も与えられていません。",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "Principle4.Guideline4_1_4_1_2.4_1_2_H91.A.NoContent",
    description:
      "有効なhref属性をもつアンカー要素が見つかりましたが、リンクのコンテンツが与えられていません。",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId:
      "Principle4.Guideline4_1_4_1_3.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "HTMLCS.getTranslation('4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check')",
    helpUrl: [],
    ruleType: "notice",
  },
];
