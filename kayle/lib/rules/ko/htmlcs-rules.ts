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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
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
      "Img 요소가 링크의 유일한 내용이지만 alt 텍스트가 누락되었습니다. alt 텍스트는 링크의 목적을 설명해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.1",
    description:
      "빈 alt 텍스트를 가진 Img 요소는 없거나 빈 title 속성을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H67.2",
    description: "Img 요소가 보조 기술에 의해 무시되도록 표시됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_1_1_H37",
    description:
      "Img 요소에 alt 속성이 누락되었습니다. 짧은 텍스트 대체물을 지정하기 위해 alt 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Image",
    description:
      "img 요소의 alt 텍스트가 이미지와 동일한 목적을 제공하고 동일한 정보를 제시하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H36",
    description:
      "이미지 제출 버튼에 alt 속성이 누락되었습니다. 버튼의 기능을 설명하는 텍스트 대체물을 alt 속성을 사용하여 지정하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94.Button",
    description:
      "이미지 제출 버튼의 alt 텍스트가 버튼의 목적을 식별하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H24",
    description:
      "이미지 맵의 area 요소에 alt 속성이 누락되었습니다. 각 area 요소는 이미지 맵 영역의 기능을 설명하는 텍스트 대체물을 가져야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H24.2",
    description:
      "area 요소의 텍스트 대체물이 참조하는 이미지 맵 이미지의 부분과 동일한 목적을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_G73,G74",
    description:
      "이 이미지를 짧은 텍스트 대체물로 완전히 설명할 수 없는 경우, 본문 텍스트나 링크를 통해 긴 텍스트 대체물이 제공되도록 하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H2.EG5",
    description:
      "링크 내부의 Img 요소는 링크의 텍스트 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG4",
    description:
      "링크 옆에 링크 텍스트가 있는 경우 링크 내부의 Img 요소가 빈 alt 텍스트를 가지거나 누락되었습니다. 링크를 결합하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H2.EG3",
    description:
      "링크 내부의 Img 요소는 옆에 있는 텍스트 링크의 내용을 중복하는 alt 텍스트를 사용해서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H53,ARIA6",
    description:
      "모든 다른 대안을 고갈시킨 후에 객체 요소는 텍스트 대체물을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Object,ARIA6",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_1_1_H35.3",
    description:
      "애플릿 요소는 애플릿 요소를 지원하지 않는 브라우저를 위해 요소의 본문 안에 텍스트 대체 수단을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_H35.2",
    description:
      "애플릿 요소는 해당 요소를 지원하지만 애플릿을 로드할 수 없는 브라우저에 텍스트 대체를 제공하기 위해 alt 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_1_1_G94,G92.Applet",
    description:
      "비텍스트 콘텐츠에 대해 동일한 목적을 제공하고 동일한 정보를 제시하는 짧은(그리고 적절한 경우, 긴) 텍스트 대체 수단이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G158",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 오디오만 포함하는 경우, 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_1_G159,G166",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 비디오만 포함하는 경우, 대체 텍스트 버전이 제공되거나 동등한 정보를 제시하는 오디오 트랙이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_2_G87,G93",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_3_G69,G78,G173,G8",
    description:
      "이 내장 객체가 텍스트 콘텐츠의 대안으로 제공되지 않는 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오의 오디오 설명 및/또는 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_4_G9,G87,G93",
    description:
      "이 내장 객체가 동기화 미디어를 포함하는 경우, 생방송 오디오 콘텐츠에 대한 캡션을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_5_G78,G173,G8",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 비디오 콘텐츠에 대한 오디오 설명이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_6_G54,G81",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어를 포함하는 경우, 오디오에 대한 수화 해석이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_7_G8",
    description:
      "이 내장 객체가 동기화 미디어를 포함하며, 사전 녹음된 비디오의 뜻을 전달하기 위해 전경 오디오의 일시 정지가 충분하지 않은 경우, 스크립팅을 통하거나 대체 버전을 통해 확장된 오디오 설명을 제공하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_8_G69,G159",
    description:
      "이 내장 객체가 사전 녹음된 동기화 미디어 또는 비디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_2_9_G150,G151,G157",
    description:
      "이 내장 객체가 생방송 오디오 콘텐츠만 포함하는 경우, 콘텐츠의 대체 텍스트 버전이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_F92,ARIA4",
    description:
      "이 요소의 역할은 'presentation'이지만 의미 있는 자식 요소를 포함하고 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  { ruleId: "code", description: "msg", helpUrl: [], ruleType: "level" },
  {
    ruleId: "1_3_1_H44.NotFormControl",
    description:
      "이 레이블의 'for' 속성에는 양식 컨트롤이 아닌 요소의 ID가 포함되어 있습니다. 의도한 요소에 올바른 ID가 입력되었는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H65",
    description:
      "이 양식 컨트롤에는 'title' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA6",
    description:
      "이 양식 컨트롤에는 'aria-label' 속성이 비어 있거나 공백만 포함되어 있습니다. 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_ARIA16,ARIA9",
    description:
      "이 양식 컨트롤은 aria-labelledby 속성을 포함하고 있지만, 요소에 존재하지 않는 ID '{{id}}'를 포함하고 있습니다. aria-labelledby 속성은 레이블링 테스트 목적으로 무시될 것입니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA16",
      "https://www.w3.org/TR/WCAG20-TECHS/ARIA9",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.Hidden",
    description:
      "이 숨겨진 양식 필드는 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68.HiddenAttr",
    description:
      "이 양식 필드는 'hidden' 속성을 사용하여 숨겨져야 하지만, 어떤 방식으로든 레이블이 지정되어 있습니다. 숨겨진 양식 필드를 레이블할 필요가 없어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_F68",
    description:
      "이 양식 필드는 어떤 방식으로든 레이블이 지정되어야 합니다. 'for' 속성이 있는 레이블 요소를 사용하거나, 양식 필드를 둘러싼 레이블 요소, 또는 'title', 'aria-label' 또는 'aria-labelledby' 속성을 적절하게 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H49.",
    description:
      "HTML5에서 사용되지 않게 된 프레젠테이션 마크업이 사용되었습니다.",
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
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H49.AlignAttr.Semantic",
    description:
      "강조 표시되거나 특별한 텍스트를 프로그래밍 방식으로 결정할 수 있도록 의미적 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42",
    description:
      "이 콘텐츠가 제목으로 의도된 경우, 제목 마크업이 사용되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H63.3",
    description:
      "테이블 셀에 잘못된 범위 속성이 있습니다. 유효한 값은 row, col, rowgroup, 또는 colgroup입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.2",
    description:
      "다른 요소들의 제목 역할을 하는 td 요소에 범위 속성이 HTML5에서 사용되지 않습니다. 대신 th 요소를 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.ScopeAmbiguous",
    description:
      "여러 레벨의 제목이 있는 테이블에서 th 요소에 범위 속성이 모호합니다. 대신 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttrNotice",
    description: "td 요소의 헤더 속성이 올바른지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H43.IncorrectAttr",
    description:
      "이 td 요소의 잘못된 헤더 속성입니다. '{{expected}}'를 예상했지만 '{{actual}}'을(를) 발견했습니다",
    helpUrl: ["https://www.w3.org/TR/WCAG20-TECHS/H43"],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.HeadersRequired",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. 이 테이블에 여러 레벨의 th 요소가 있으므로 td 요소에 헤더 속성을 사용해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeaderIds",
    description:
      "이 테이블의 모든 th 요소에 id 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소의 헤더 속성에서 참조할 수 있도록 id를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43.MissingHeadersAttrs",
    description:
      "이 테이블의 모든 td 요소에 헤더 속성이 포함되어 있지 않습니다. 각 헤더 속성은 해당 셀과 관련된 모든 th 요소의 id를 나열해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H63.1",
    description:
      "이 테이블의 모든 th 요소에 범위 속성이 포함되어 있지 않습니다. 이 셀들은 td 요소와의 연관성을 식별하기 위해 범위 속성을 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H43,H63",
    description:
      "td 요소와 관련된 th 요소 사이의 관계가 정의되지 않았습니다. th 요소에 범위 속성을 사용하거나 td 요소에 헤더 속성을 사용하세요.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 요약 속성을 포함하고 있습니다. 레이아웃 테이블은 요약 속성을 포함해서는 안 되며, 제공된 경우 비워야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39,H73.4",
    description:
      "이 테이블이 데이터 테이블이며 요약 속성과 캡션 요소가 모두 존재하는 경우, 요약은 캡션을 중복해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H73.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 요약 속성이 테이블의 구성을 설명하거나 테이블을 사용하는 방법을 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H73.3.NoSummary",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소의 요약 속성을 사용하여 이 테이블에 대한 개요를 제공하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H39.3.LayoutTable",
    description:
      "이 테이블은 레이아웃에 사용되는 것으로 보이지만, 캡션 요소를 포함하고 있습니다. 레이아웃 테이블은 캡션을 포함해서는 안 됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H39.3.Check",
    description:
      "이 테이블이 데이터 테이블인 경우, 캡션 요소가 이 테이블을 정확하게 설명하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_H39.3.NoCaption",
    description:
      "이 테이블이 데이터 테이블인 경우, 테이블 요소에 캡션 요소를 사용하여 이 테이블을 식별하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.NoLegend",
    description:
      "Fieldset에 legend 요소가 포함되어 있지 않습니다. 모든 fieldset은 field 그룹의 설명을 설명하는 legend 요소를 포함해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H85.2",
    description:
      "이 선택 목록에 관련 옵션의 그룹이 포함된 경우, optgroup으로 그룹화해야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H71.SameName",
    description:
      "이 라디오 버튼이나 체크 박스가 추가적인 그룹 수준 설명을 요구하는 경우, fieldset 요소 내에 포함되어야 합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.1",
    description:
      "이 콘텐츠는 순서 없는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ul 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H48.2",
    description:
      "이 콘텐츠는 순서 있는 목록을 일반 텍스트로 시뮬레이션하는 것처럼 보입니다. 그렇다면, ol 요소로 마크업하여 문서에 적절한 구조 정보를 추가하는 것이 좋습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_H42.2",
    description:
      "내용 없는 제목 태그가 발견되었습니다. 제목으로 의도되지 않은 텍스트는 제목 태그로 표시되어서는 안됩니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "1_3_1_H48",
    description:
      "이 요소가 탐색 섹션을 포함하고 있다면, 목록으로 표시하는 것이 권장됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_3_1_LayoutTable",
    description:
      "이 테이블은 레이아웃 테이블로 보입니다. 만약 데이터 테이블로 사용되어야 한다면, th 요소를 사용하여 헤더 셀이 식별되도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_1_DataTable",
    description:
      "이 테이블은 데이터 테이블로 보입니다. 만약 레이아웃 테이블로 사용되어야 한다면, th 요소가 없고 요약이나 캡션도 없도록 해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_2_G57",
    description:
      "스타일 시트가 비활성화되었을 때와 같이 선형화되었을 때 내용이 의미있는 순서로 정렬되어 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_3_G96",
    description:
      "내용을 이해하기 위한 지침이 제공되는 곳에서, 객체를 설명할 때 모양, 크기 또는 위치와 같은 감각적 특성에만 의존하지 않도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_4.RestrictView",
    description:
      "콘텐츠가 특정 디스플레이 방향(예: 세로나 가로)으로만 보기와 조작을 제한하지 않도록 확인합니다. 특정 디스플레이 방향이 필수적이지 않는 한.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.Purpose",
    description:
      "입력 필드가 사용자 인터페이스 구성 요소의 입력 목적 섹션에서 식별된 목적을 제공하는지, 그리고 기대되는 양식 입력 데이터의 의미를 식별하기 위해 지원하는 기술을 사용하여 콘텐츠가 구현되었는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_5_H98.MissingAutocomplete",
    description:
      "이 요소에는 자동완성 속성이 없습니다. 이 필드가 사용자에 대한 정보를 수집한다면, 이 성공 기준을 준수하기 위해 자동완성을 추가하는 것을 고려하십시오.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_3_6_ARIA11.Check",
    description:
      "사용자 인터페이스 구성 요소, 아이콘 및 영역의 목적을 프로그래밍 방식으로 결정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_1_G14,G18",
    description:
      "색상만을 사용하여 전달되는 모든 정보가 텍스트나 다른 시각적 단서를 통해서도 사용 가능한지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "다음 경우에 정보나 기능이 손실되지 않고, 두 방향으로 스크롤할 필요 없이 콘텐츠를 제시할 수 있는지 확인합니다:       세로 스크롤 콘텐츠의 경우 320 CSS 픽셀에 해당하는 너비;       가로 스크롤 콘텐츠의 경우 256 CSS 픽셀에 해당하는 높이;       사용 또는 의미에 대한 이차원 레이아웃이 필요한 콘텐츠 부분을 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "이 요소는 'position: fixed'를 갖습니다. 이것은 두 방향으로 스크롤을 요구할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "서식이 지정된 텍스트는 두 방향으로 스크롤을 필요로 할 수 있으며, 이는 이 성공 기준의 실패로 간주됩니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "사용자 에이전트의 확대/축소 기능을 방해하는 것은 이 성공 기준의 실패가 될 수 있습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "다음의 시각적 표현이 인접 색상(들)에 대해 최소 3:1의 대비 비율을 갖는지 확인합니다: 사용자 인터페이스 구성요소: 사용자 인터페이스 구성 요소와 상태를 식별하는 데 필요한 시각적 정보, 비활성 구성 요소 또는 구성 요소의 외관이 사용자 에이전트에 의해 결정되고 저자에 의해 수정되지 않는 경우를 제외하고; 그래픽 객체: 콘텐츠를 이해하는 데 필요한 그래픽의 부분, 특정한 그래픽의 표현이 전달되는 정보에 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_12_C36,C35.Check",
    description:
      "다음 모든 설정을 변경하고 다른 스타일 속성은 변경하지 않고 설정하여 내용이나 기능의 손실이 없는지 확인합니다: 줄 높이(줄 간격)를 글꼴 크기의 최소 1.5배로; 문단 뒤에 따르는 간격을 글꼴 크기의 최소 2배로; 글자 간격(추적)을 글꼴 크기의 최소 0.12배로; 단어 간격을 글꼴 크기의 최소 0.16배로.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_13_F95.Check",
    description:
      "포인터 호버 또는 키보드 포커스를 받은 후 추가 콘텐츠가 보이고 다시 숨겨지게 하는 것이 참이 되려면 다음이 사실이어야 합니다: 해제 가능: 포인터 호버나 키보드 포커스를 이동하지 않고 추가 콘텐츠를 해제할 수 있는 메커니즘이 있어야 합니다. 입력 오류를 알리거나 다른 콘텐츠를 가리거나 대체하지 않는 한; 호버 가능: 포인터 호버가 추가 콘텐츠를 트리거할 수 있다면, 포인터를 추가 콘텐츠 위로 이동해도 추가 콘텐츠가 사라지지 않아야 합니다; 지속 가능: 추가 콘텐츠가 호버나 포커스 트리거가 제거될 때까지, 사용자가 해제하거나 정보가 더 이상 유효하지 않을 때까지 보이게 남아 있어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_2_F23",
    description:
      "이 요소가 3초 이상 자동으로 재생되는 오디오를 포함하고 있다면, 오디오를 일시 정지, 중지 또는 음소거할 수 있는 기능이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_3_F24.BGColour",
    description:
      "이 요소에 해당하는 인라인 배경 색상 또는 이미지에 대응하는 상속된 전경색이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_3_F24.FGColour",
    description:
      "이 요소에 해당하는 인라인 전경색에 대응하는 상속된 배경색 또는 이미지가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "1_4_4_G142",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 내용 또는 기능 손실 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_5_G140,C22,C30.AALevel",
    description:
      "사용 중인 기술이 시각적 표현을 달성할 수 있다면, 텍스트 이미지 대신 텍스트를 사용하여 정보를 전달하도록 합니다. 단, 텍스트 이미지가 전달되는 정보에 필수적이거나 사용자의 요구 사항에 따라 시각적으로 사용자 정의될 수 있는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_7_G56",
    description:
      "이 요소에 포함된 주로 말 (예: 내레이션)로 구성된 사전 녹음된 오디오 전용 콘텐츠의 경우, 배경 소리는 음소거할 수 있거나, 말보다 최소 20 dB (또는 약 4배) 조용해야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G148,G156,G175",
    description:
      "웹 페이지나 브라우저를 통해 사용자가 텍스트 블록의 전경색 및 배경색을 선택할 수 있는 메커니즘이 제공되는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,C20",
    description:
      "텍스트 블록의 너비를 한국어, 중국어 또는 일본어 스크립트인 경우 40자로, 그 외의 경우 80자로 줄일 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_C19,G172,G169",
    description:
      "텍스트 블록이 양쪽 모두에 맞춰 완전히 정렬되지 않도록 하거나, 완전한 정렬을 제거할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_G188,C21",
    description:
      "텍스트 블록에서 문단의 줄 간격이 최소 150%이고, 문단 간격이 줄 간격의 최소 1.5배이거나 이를 달성할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_8_H87,G146,C26",
    description:
      "보조 기술 없이도 텍스트를 200 퍼센트까지 크기 조정할 수 있으며, 전체 화면 창에서 사용자가 수평으로 스크롤할 필요 없이 텍스트를 재조정할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "1_4_9_G140,C22,C30.NoException",
    description:
      "텍스트 이미지가 순수한 장식용이거나 전달되는 정보에 필수적인 특정 텍스트 표현이 필요한 경우를 제외하고, 텍스트 이미지 사용을 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_1_1_G90",
    description:
      "이 요소에 대한 이벤트 핸들러에 의해 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.DblClick",
    description:
      "이 요소를 더블 클릭함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOver",
    description:
      "이 요소 위로 마우스를 올림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, focus 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseOut",
    description:
      "이 요소에서 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, blur 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseMove",
    description:
      "이 요소 위에서 마우스를 이동함으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseDown",
    description:
      "이 요소에 마우스를 내림으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keydown 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_1_SCR20.MouseUp",
    description:
      "이 요소에서 마우스를 뗌으로써 제공되는 기능이 키보드를 통해 사용할 수 있는지 확인합니다; 예를 들어, keyup 이벤트를 사용하여.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_2_F10",
    description:
      "이 애플릿이나 플러그인이 키보드를 사용할 때 자체로부터 포커스를 옮길 수 있는 기능을 제공하는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_1_4.Check",
    description:
      "콘텐츠에서 단지 문자(대문자 및 소문자 포함), 구두점, 숫자, 또는 기호 문자만을 사용하여 키보드 단축키를 구현하는 경우, 다음 중 하나가 참인지 확인합니다: 끄기: 단축키를 끌 수 있는 메커니즘이 있습니다; 재매핑: 단축키를 하나 이상의 비출력 키보드 문자(예: Ctrl, Alt 등)를 사용하도록 재매핑할 수 있는 메커니즘이 있습니다; 포커스에서만 활성화: 사용자 인터페이스 구성 요소의 키보드 단축키는 해당 구성 요소에 포커스가 있을 때만 활성화됩니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_1_F40.2",
    description:
      "제로가 아닌 시간 제한으로 다른 페이지로 리디렉션되는 메타 리프레시 태그를 사용합니다. 사용자는 이 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_1_F41.2",
    description:
      "현재 페이지를 새로고침하기 위해 메타 리프레시 태그를 사용합니다. 사용자는 이 새로고침의 시간 제한을 제어할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "콘텐츠의 일부가 5초 이상 움직이거나 스크롤하거나 깜박이거나 자동 업데이트되는 경우, 콘텐츠를 일시 중지하거나 중지하거나 숨길 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_2_F4",
    description:
      "5초 이내에 이 깜박이는 요소를 중지할 수 있는 메커니즘이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_2_2_F47",
    description:
      "깜박임 요소는 5초 이내에 깜박이는 정보를 중지할 수 있다는 요구 사항을 충족할 수 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_2_3_G5",
    description:
      "콘텐츠에 의해 제시된 이벤트나 활동의 본질적인 부분이 타이밍이 아닌지 확인합니다. 단, 비대화형 동기화 미디어와 실시간 이벤트를 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_4_SCR14",
    description:
      "비상사태에 관련된 중단을 제외하고, 모든 중단(콘텐츠 업데이트 포함)이 사용자에 의해 연기되거나 억제될 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_5_G105,G181",
    description:
      "이 웹 페이지가 활동 시간 제한이 있는 웹 페이지 집합의 일부인 경우, 인증된 사용자가 데이터 손실 없이 재인증 후 활동을 계속할 수 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_2_6.Check",
    description:
      "데이터 손실을 초래할 수 있는 사용자의 비활동 기간의 지속 시간에 대해 사용자에게 경고하는지 확인합니다. 단, 사용자가 아무런 조치를 취하지 않는 경우 20시간 이상 데이터가 보존되는 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_1_G19,G176",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않거나, 깜박이는 영역의 크기가 충분히 작은지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_2_G19",
    description:
      "콘텐츠의 어떤 구성요소도 1초 기간에 세 번 이상 깜박이지 않는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_3_3.Check",
    description:
      "상호 작용에 의해 트리거된 모션 애니메이션을 비활성화할 수 있는지 확인합니다. 단, 애니메이션이 기능이나 전달되는 정보에 필수적인 경우는 제외합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_H64.1",
    description:
      "Iframe 요소는 프레임을 식별하는 비어 있지 않은 title 속성이 필요합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_1_H64.2",
    description:
      "이 요소의 title 속성이 프레임을 식별하는 텍스트를 포함하고 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124,H69",
    description:
      "공통 네비게이션 요소를 우회할 수 있도록 보장합니다; 예를 들어, 스킵 링크, 헤더 요소 또는 ARIA 랜드마크 역할을 사용하여.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_1_G1,G123,G124.NoSuchID",
    description:
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 그 이름을 가진 앵커가 존재하지 않습니다.",
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
      "이 링크는 문서 내에 '{{id}}'라는 이름의 앵커를 가리키지만, 테스트된 프래그먼트에 그 이름을 가진 앵커가 존재하지 않습니다.",
    helpUrl: [
      "https://www.w3.org/TR/WCAG20-TECHS/G1",
      "https://www.w3.org/TR/WCAG20-TECHS/G123",
      "https://www.w3.org/TR/WCAG20-TECHS/G124",
    ],
    ruleType: "warning",
  },
  {
    ruleId: "2_4_2_H25.1.NoHeadEl",
    description: "설명적인 제목 요소를 배치할 수 있는 헤드 섹션이 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.NoTitleEl",
    description:
      "헤드 섹션에 비어 있지 않은 제목 요소를 사용하여 문서에 제목을 제공해야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.1.EmptyTitle",
    description: "헤드 섹션의 제목 요소는 비어 있지 않아야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_2_H25.2",
    description: "제목 요소가 문서를 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_3_H4.2",
    description:
      "tabindex가 사용되는 경우, tabindex 속성에 의해 지정된 탭 순서가 콘텐츠의 관계를 따르는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트 또는 그것의 title 속성이 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_4_H77,H78,H79,H80,H81",
    description:
      "링크 텍스트와 프로그래매틱하게 결정된 링크 컨텍스트가 링크의 목적을 식별하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "이 웹 페이지가 선형 프로세스의 일부가 아닌 경우, 웹 페이지 집합 내에서 이 웹 페이지를 찾는 데 하나 이상의 방법이 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_6_G130,G131",
    description: "제목과 라벨이 주제 또는 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "사용자 인터페이스 컨트롤에 키보드 포커스 표시기가 시각적으로 위치할 수 있는 적어도 하나의 모드가 있는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_4_8_H59.1",
    description: "링크 요소는 문서의 헤드 섹션에만 위치할 수 있습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2a",
    description:
      "링크 요소에 링크 유형을 식별하는 비어 있지 않은 rel 속성이 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_8_H59.2b",
    description:
      "링크된 리소스를 가리키는 비어 있지 않은 href 속성이 링크 요소에 누락되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "2_4_9_H30",
    description: "링크의 텍스트가 링크의 목적을 설명하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_1.Check",
    description:
      "멀티포인트 또는 경로 기반 제스처를 사용하여 작동하는 모든 기능이 경로 기반 제스처 없이 단일 포인터로 작동할 수 있는지 확인합니다. 멀티포인트 또는 경로 기반 제스처가 필수적인 경우를 제외하고.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.SinglePointer_Check",
    description:
      "단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Mousedown_Check",
    description:
      "이 요소에는 mousedown 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_2.Touchstart_Check",
    description:
      "이 요소에는 touchstart 이벤트 리스너가 있습니다. 단일 포인터를 사용하여 작동할 수 있는 기능의 경우, 다음 중 하나가 참인지 확인합니다: 다운-이벤트 없음: 포인터의 다운-이벤트를 사용하여 기능의 어떤 부분도 실행하지 않습니다; 중단 또는 실행 취소: 기능의 완료는 업-이벤트에 있으며, 완료 전에 기능을 중단하거나 완료 후 기능을 실행 취소할 수 있는 메커니즘이 제공됩니다; 업 반전: 업-이벤트는 앞선 다운-이벤트의 어떤 결과도 반전시킵니다; 필수: 다운-이벤트에서 기능을 완료하는 것이 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.Check",
    description:
      "텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_3_F96.AccessibleName",
    description:
      "이 요소의 접근 가능한 이름이 보이는 레이블 텍스트를 포함하지 않습니다. 텍스트 또는 텍스트의 이미지를 포함하는 레이블이 있는 사용자 인터페이스 구성 요소의 경우, 이름이 시각적으로 제시된 텍스트를 포함하는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_4.Check",
    description:
      "장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_4.Devicemotion",
    description:
      "이 요소는 devicemotion 이벤트 리스너를 가지고 있습니다. 장치 움직임 또는 사용자 움직임으로 작동할 수 있는 기능이 사용자 인터페이스 구성 요소로도 작동할 수 있도록 하고, 우연한 작동을 방지하기 위해 움직임에 응답하는 기능을 비활성화할 수 있도록 확인하세요. 예외는 다음과 같습니다: 지원되는 인터페이스: 움직임이 접근성을 지원하는 인터페이스를 통해 기능을 작동시키는 데 사용됩니다; 필수적인: 움직임이 기능에 필수적이며 그렇게 하지 않으면 활동을 무효화합니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "2_5_5.Check",
    description:
      "포인터 입력을 위한 대상의 크기가 다음 경우를 제외하고는 최소한 44 x 44 CSS 픽셀인지 확인하세요: 동등한: 대상이 동일한 페이지에 최소 44 x 44 CSS 픽셀인 동등한 링크 또는 컨트롤을 통해 이용 가능합니다; 인라인: 대상이 문장이나 텍스트 블록 안에 있습니다; 사용자 에이전트 컨트롤: 대상의 크기가 사용자 에이전트에 의해 결정되며 작성자에 의해 수정되지 않습니다; 필수적인: 대상의 특정 표현이 전달되는 정보에 필수적입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "2_5_6.Check",
    description:
      "내용이 플랫폼에서 사용 가능한 입력 방식의 사용을 제한하지 않는지 확인하세요. 단, 제한이 내용의 보안을 보장하거나 사용자 설정을 존중하기 위해 필수적인 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_1_H57.2",
    description:
      "html 요소에는 문서의 언어를 설명하는 lang 또는 xml:lang 속성이 있어야 합니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.Lang",
    description:
      "문서 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_1_H57.3.XmlLang",
    description:
      "문서 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58",
    description:
      "언어의 변경이 있는 경우 적절한 경우 요소에서 lang 및/또는 xml:lang 속성을 사용하여 표시되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_2_H58.1.Lang",
    description:
      "이 요소의 lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_2_H58.1.XmlLang",
    description:
      "이 요소의 xml:lang 속성에 지정된 언어가 잘 형성되지 않은 것으로 보입니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_3_H40,H54,H60,G62,G70",
    description:
      "비정상적이거나 제한된 방식으로 사용된 단어나 구문의 구체적인 정의를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_4_G102,G55,G62,H28,G97",
    description:
      "약어의 확장된 형태나 의미를 식별할 수 있는 메커니즘이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_5_G86,G103,G79,G153,G160",
    description:
      "내용이 하위 중등 교육 수준보다 더 진보된 읽기 능력을 요구하는 경우, 보충 콘텐츠 또는 대체 버전이 제공되어야 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_1_6_H62.1.HTML5",
    description:
      "Ruby 요소에는 본문 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.1.XHTML11",
    description:
      "Ruby 요소에는 rb 요소 안의 텍스트의 발음 정보를 포함하는 rt 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_1_6_H62.2",
    description:
      "Ruby 요소에는 ruby 텍스트를 지원하지 않는 브라우저에 추가 구두점을 제공하는 rp 요소가 없습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_1_G107",
    description:
      "이 입력 필드가 초점을 받을 때 컨텍스트의 변경이 발생하지 않도록 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_2_H32.2",
    description:
      '이 양식에는 키보드를 사용하여 양식을 제출할 수 없는 사람들에게 문제를 일으키는 제출 버튼이 포함되어 있지 않습니다. 제출 버튼은 type 속성이 "submit" 또는 "image"인 INPUT 요소이거나 type이 "submit"인 BUTTON 요소이거나 생략/잘못된 요소입니다.',
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "3_2_3_G61",
    description:
      "사용자가 초기화하지 않는 한 다중 웹 페이지에 반복되는 탐색 메커니즘이 각 반복될 때마다 동일한 상대적 순서로 발생하는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_4_G197",
    description:
      "이 웹 페이지 내에서 동일한 기능을 갖는 구성 요소가 속한 웹 페이지 세트에서 일관되게 식별되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_2_5_H83.3",
    description:
      "이 링크의 링크 텍스트가 링크가 새 창에서 열릴 것임을 나타내는 정보를 포함하고 있는지 확인하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "3_3_1_G83,G84,G85",
    description:
      "이 양식에서 입력 오류가 자동으로 감지되는 경우, 오류가 발생한 항목이 식별되고 오류가 텍스트로 사용자에게 설명되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_2_G131,G89,G184,H90",
    description:
      "이 양식에서 사용자 입력(필수 필드 포함)에 대한 설명적 레이블 또는 지침이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_3_G177",
    description:
      "이 양식이 사용자 입력의 오류에 대한 권장 수정 사항을 제공하는지 확인하세요. 단, 이로 인해 컨텐츠의 보안이나 목적이 위태로워지는 경우는 예외입니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "이 양식이 사용자를 재정적 또는 법적 약속에 구속하거나, 사용자가 제어할 수 있는 데이터를 수정/삭제하거나, 테스트 응답을 제출하는 경우, 제출이 되돌릴 수 있게 하거나, 입력 오류에 대해 확인하거나, 사용자에 의해 확인되도록 합니다.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_5_G71,G184,G193",
    description:
      "이 양식에 대해 웹 페이지 및/또는 컨트롤 수준에서 컨텍스트별 도움이 제공되는지 확인하세요.",
    helpUrl: [],
    ruleType: "notice",
  },
  {
    ruleId: "3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "이 양식에 대한 제출은 되돌릴 수 있거나, 입력 오류를 검사하거나, 사용자에 의해 확인될 수 있음을 확인합니다.",
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
      "ID는 있지만 href나 링크 텍스트가 없는 앵커 요소가 발견되었습니다. ID를 부모 또는 인접한 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyWithName",
    description:
      "name 속성이 있지만 href나 링크 텍스트 없이 발견된 앵커 요소입니다. name 속성을 부모 또는 인접한 요소의 ID가 되도록 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.EmptyNoId",
    description:
      "링크 내용이 없고 name과/또는 ID 속성이 없는 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_2_H91.A.NoHref",
    description:
      "앵커 요소는 페이지 내 링크 목표를 정의하기 위해 사용되어서는 안 됩니다. ID를 CSS나 스크립트와 같은 다른 목적으로 사용하지 않는다면, 부모 요소로 이동하는 것을 고려하세요.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.Placeholder",
    description:
      "링크 내용은 있지만 href, ID, name 속성이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "warning",
  },
  {
    ruleId: "4_1_2_H91.A.NoContent",
    description:
      "유효한 href 속성이 있지만 링크 내용이 제공되지 않은 앵커 요소가 발견되었습니다.",
    helpUrl: [],
    ruleType: "error",
  },
  {
    ruleId: "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "상태 메시지가 역할이나 속성을 통해 프로그래밍 방식으로 결정될 수 있도록 확인하여 포커스를 받지 않고도 보조 기술을 통해 사용자에게 제시될 수 있습니다.",
    helpUrl: [],
    ruleType: "notice",
  },
];
