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
      "If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Applet",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Object,ARIA6",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Button",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Image",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG3",
    description:
      "Img element inside a link must not use alt text that duplicates the content of a text link beside it.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG4",
    description:
      "Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG5",
    description:
      "Img element inside a link must not use alt text that duplicates the text content of the link.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24.2",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H30.2",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.2",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.3",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H36",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H37",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H53,ARIA6",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.1",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.2",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G158",
    description:
      "If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G159,G166",
    description:
      "If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_2_G87,G93",
    description:
      "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_3_G69,G78,G173,G8",
    description:
      "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_4_G9,G87,G93",
    description:
      "If this embedded object contains synchronised media, check that captions are provided for live audio content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_5_G78,G173,G8",
    description:
      "If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_6_G54,G81",
    description:
      "If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_7_G8",
    description:
      "If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_8_G69,G159",
    description:
      "If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_9_G150,G151,G157",
    description:
      "If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_ARIA6",
    description:
      'This form control has an "aria-label" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_DataTable",
    description:
      "This table appears to be a data table. If it is meant to instead be a layout table, ensure there are no th elements, and no summary or caption.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68",
    description:
      'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.Hidden",
    description:
      "This hidden form field is labelled in some way. There should be no need to label a hidden form field.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.HiddenAttr",
    description:
      'This form field is intended to be hidden (using the "hidden" attribute), but is also labelled in some way. There should be no need to label a hidden form field.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F92,ARIA4",
    description:
      'This element\'s role is "presentation" but contains child elements with semantic meaning.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_G141_a",
    description:
      "The heading structure is not logically nested. This h{{headingNum}} element appears to be the primary document heading, so should be an h1 element.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39,H73.4",
    description:
      "If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.Check",
    description:
      "If this table is a data table, check that the caption element accurately describes this table.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.LayoutTable",
    description:
      "This table appears to be used for layout, but contains a caption element. Layout tables must not contain captions.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.NoCaption",
    description:
      "If this table is a data table, consider using a caption element to the table element to identify this table.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42",
    description:
      "Heading markup should be used if this content is intended as a heading.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42.2",
    description:
      "Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43,H63",
    description:
      "The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.HeadersRequired",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.IncorrectAttrNotice",
    description: "Check that headers attribute on td elements are correct.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.ScopeAmbiguous",
    description:
      "Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H44.NotFormControl",
    description:
      'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48",
    description:
      "If this element contains a navigation section, it is recommended that it be marked up as a list.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.1",
    description:
      "This content looks like it is simulating an unordered list using plain text. If so, marking up this content with a ul element would add proper structure information to the document.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.2",
    description:
      "This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.",
    description:
      "Presentational markup used that has become obsolete in HTML5.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.AlignAttr.Semantic",
    description:
      "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.Semantic",
    description:
      "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.1",
    description:
      "Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.2",
    description:
      "Scope attributes on td elements that act as headings for other elements are obsolete in HTML5. Use a th element instead.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.3",
    description:
      "Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H65",
    description:
      'This form control has a "title" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.NoLegend",
    description:
      "Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.SameName",
    description:
      "If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.Check",
    description:
      "If this table is a data table, check that the summary attribute describes the table's organization or explains how to use the table.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.LayoutTable",
    description:
      "This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.NoSummary",
    description:
      "If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H85.2",
    description:
      "If this selection list contains groups of related options, they should be grouped with optgroup.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_LayoutTable",
    description:
      "This table appears to be a layout table. If it is meant to instead be a data table, ensure header cells are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_2_G57",
    description:
      "Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_3_G96",
    description:
      "Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_4.RestrictView",
    description:
      "Check that content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.FaultyValue",
    description:
      "This element contains a potentially faulty value in its autocomplete attribute: {{valuesStr}}.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Date",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Date control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Month",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Month control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Multiline",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Multiline control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Numeric",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Numeric control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Password",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Password control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Telephone",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Telephone control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Text",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Text control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Url",
    description:
      "Invalid autocomplete value: {{x}}. Element does not belong to Url control group.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete",
    description:
      "This element does not have an autocomplete attribute. If this field collects information about the user, consider adding one to comply with this Success Criterion.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.Purpose",
    description:
      "Check that the input field serves a purpose identified in the Input Purposes for User Interface Components section; and that the content is implemented using technologies with support for identifying the expected meaning for form input data.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_6_ARIA11.Check",
    description:
      "Check that the purpose of User Interface Components, icons, and regions can be programmatically determined.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_1_G14,G18",
    description:
      "Check that any information conveyed using colour alone is also available in text, or through other visual cues.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "Check that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:     Vertical scrolling content at a width equivalent to 320 CSS pixels;     Horizontal scrolling content at a height equivalent to 256 CSS pixels;     Except for parts of the content which require two-dimensional layout for usage or meaning.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      'This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId:
      "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "Preformatted text may require scrolling in two dimensions, which is considered a failure of this Success Criterion.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "Interfering with a user agent's ability to zoom may be a failure of this Success Criterion.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "Check that the visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):     User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;     Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_12_C36,C35.Check",
    description:
      "Check that no loss of content or functionality occurs by setting all of the following and by changing no other style property:              Line height (line spacing) to at least 1.5 times the font size;         Spacing following paragraphs to at least 2 times the font size;         Letter spacing (tracking) to at least 0.12 times the font size;         Word spacing to at least 0.16 times the font size.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_13_F95.Check",
    description:
      "Check that where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:         Dismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;         Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;         Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_2_F23",
    description:
      "If this element contains audio that plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.BGColour",
    description:
      "Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.FGColour",
    description:
      "Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Abs",
    description:
      "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Alpha",
    description:
      "This element's text or background contains transparency. Ensure the contrast ratio between the text and background are at least {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgGradient",
    description:
      "This element's text is placed on a gradient. Ensure the contrast ratio between the text and all covered parts of the gradient are at least {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgImage",
    description:
      "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_4_G142",
    description:
      "Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_5_G140,C22,C30.AALevel",
    description:
      "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.Abs",
    description:
      "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.BgImage",
    description:
      "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_7_G56",
    description:
      "For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_C19,G172,G169",
    description:
      "Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G148,G156,G175",
    description:
      "Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G188,C21",
    description:
      "Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,C20",
    description:
      "Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,G146,C26",
    description:
      "Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_9_G140,C22,C30.NoException",
    description:
      "Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_G90",
    description:
      "Ensure the functionality provided by an event handler for this element is available through the keyboard",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_2_F10",
    description:
      "Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_4.Check",
    description:
      "Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:              Turn off: A mechanism is available to turn the shortcut off;         Remap: A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);         Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.     ",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F40.2",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F41.2",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F4",
    description:
      "Ensure there is a mechanism available to stop this blinking element in less than five seconds.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F47",
    description:
      "Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_3_G5",
    description:
      "Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_4_SCR14",
    description:
      "Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_5_G105,G181",
    description:
      "If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_6.Check",
    description:
      "Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_1_G19,G176",
    description:
      "Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_2_G19",
    description:
      "Check that no component of the content flashes more than three times in any 1-second period.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_3.Check",
    description:
      "Check that motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124,H69",
    description:
      "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchID",
    description:
      'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name in the fragment tested.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.1",
    description:
      "Iframe element requires a non-empty title attribute that identifies the frame.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.2",
    description:
      "Check that the title attribute of this element contains text that identifies the frame.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.EmptyTitle",
    description: "The title element in the head section should be non-empty.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoHeadEl",
    description:
      "There is no head section in which to place a descriptive title element.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoTitleEl",
    description:
      "A title should be provided for the document, using a non-empty title element in the head section.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.2",
    description: "Check that the title element describes the document.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_3_H4.2",
    description:
      "If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81",
    description:
      "Check that the link text combined with programmatically determined link context identifies the purpose of the link.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_6_G130,G131",
    description: "Check that headings and labels describe topic or purpose.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.1",
    description:
      "Link elements can only be located in the head section of the document.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2a",
    description:
      "Link element is missing a non-empty rel attribute identifying the link type.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2b",
    description:
      "Link element is missing a non-empty href attribute pointing to the resource being linked.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_9_H30",
    description:
      "Check that text of the link describes the purpose of the link.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_1.Check",
    description:
      "Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Mousedown_Check",
    description:
      "This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true:         No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.SinglePointer_Check",
    description:
      "Check that for functionality that can be operated using a single pointer, at least one of the following is true:         No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Touchstart_Check",
    description:
      "This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true:              No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.AccessibleName",
    description:
      "Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.Check",
    description:
      "Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Check",
    description:
      "Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:              Supported Interface: The motion is used to operate functionality through an accessibility supported interface;         Essential: The motion is essential for the function and doing so would invalidate the activity.     ",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Devicemotion",
    description:
      "This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:              Supported Interface: The motion is used to operate functionality through an accessibility supported interface;         Essential: The motion is essential for the function and doing so would invalidate the activity.     ",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_5.Check",
    description:
      "Check that the size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:              Equivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;         Inline: The target is in a sentence or block of text;         User Agent Control: The size of the target is determined by the user agent and is not modified by the author;         Essential: A particular presentation of the target is essential to the information being conveyed.     ",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_6.Check",
    description:
      "Check that the content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.2",
    description:
      "The html element should have a lang or xml:lang attribute which describes the language of the document.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.Lang",
    description:
      "The language specified in the lang attribute of the document element does not appear to be well-formed.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.XmlLang",
    description:
      "The language specified in the xml:lang attribute of the document element does not appear to be well-formed.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58",
    description:
      "Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.Lang",
    description:
      "The language specified in the lang attribute of this element does not appear to be well-formed.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.XmlLang",
    description:
      "The language specified in the xml:lang attribute of this element does not appear to be well-formed.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_3_H40,H54,H60,G62,G70",
    description:
      "Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_4_G102,G55,G62,H28,G97",
    description:
      "Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_5_G86,G103,G79,G153,G160",
    description:
      "Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.HTML5",
    description:
      "Ruby element does not contain an rt element containing pronunciation information for its body text.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.XHTML11",
    description:
      "Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.2",
    description:
      "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_1_G107",
    description:
      "Check that a change of context does not occur when this input field receives focus.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_2_H32.2",
    description:
      'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_3_G61",
    description:
      "Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_4_G197",
    description:
      "Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_5_H83.3",
    description:
      "Check that this link's link text contains information indicating that the link will open in a new window.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_1_G83,G84,G85",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_2_G131,G89,G184,H90",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_3_G177",
    description:
      "Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_5_G71,G184,G193",
    description:
      "Check that context-sensitive help is available for this form, at a Web-page and/or control level.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Empty",
    description:
      "Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyWithName",
    description:
      "Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoContent",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoHref",
    description:
      "Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Placeholder",
    description:
      "Anchor element found with link content, but no href, ID or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId:
      "Principle4.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "Check that status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.",
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
