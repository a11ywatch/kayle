/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const htmlcsRules = [
  {
    ruleId: "AltVersion",
    description:
      "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Applet.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Applet.MissingAlt",
    description:
      "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Applet.MissingBody",
    description:
      "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Area.GeneralAlt",
    description:
      "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Area.MissingAlt",
    description:
      "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Audio",
    description:
      "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Captions",
    description:
      "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Colour",
    description:
      "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "DblClick",
    description:
      "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "EmptyAnchorNoId",
    description:
      "Anchor element found with no link content and no name and/or ID attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Errors",
    description:
      "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Flicker",
    description:
      "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "H49.AlignAttr",
    description: "Align attributes .",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "HiddenText",
    description:
      'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.',
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Img.EmptyAltInLink",
    description:
      "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Img.GeneralAlt",
    description:
      "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Img.Ignored",
    description:
      "Img element is marked so that it is ignored by Assistive Technology.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Img.MissingAlt",
    description:
      "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Img.NullAltWithTitle",
    description:
      "Img element with empty alt text must have absent or empty title attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "IncompleteHeadersAttrs",
    description:
      "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "InputImage.GeneralAlt",
    description:
      "Ensure that the image submit button's alt text identifies the purpose of the button.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "InputImage.MissingAlt",
    description:
      "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "KeyboardNav",
    description:
      "Ensure that this form can be navigated using the keyboard and other accessibility tools.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Labels",
    description:
      "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Linearised",
    description:
      "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MetaRedirect",
    description:
      "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MetaRefresh",
    description:
      "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MissingHeaderIds",
    description:
      "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MissingHeadersAttrs",
    description:
      "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MouseDown",
    description:
      "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MouseMove",
    description:
      "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MouseOut",
    description:
      "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MouseOver",
    description:
      "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "MouseUp",
    description:
      "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "NoContentAnchor",
    description:
      "Anchor element found with a valid href attribute, but no link content has been supplied.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Object.GeneralAlt",
    description:
      "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Object.MissingBody",
    description:
      "Object elements must contain a text alternative after all other alternatives are exhausted.",
    helpUrl: [],
    ruleType: "error",
    tags: ["SECTION508"],
  },
  {
    ruleId: "PlaceholderAnchor",
    description:
      "Anchor element found with link content, but no href, ID, or name attribute has been supplied.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["SECTION508"],
  },
  {
    ruleId: "PluginLink",
    description:
      "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G73,G74",
    description:
      "إذا لم يتم وصف هذه الصورة بالكامل في بديل نصي قصير، تأكد من توفر بديل نصي طويل أيضًا، مثل في نص الجسم أو من خلال رابط.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Applet",
    description:
      "تحقق من توفر بدائل نصية قصيرة (وإذا كان مناسبًا، طويلة) للمحتوى غير النصي التي تحقق نفس الغرض وتعرض نفس المعلومات.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94,G92.Object,ARIA6",
    description:
      "تحقق من توفر بدائل نصية قصيرة (وإذا كان مناسبًا، طويلة) للمحتوى غير النصي التي تحقق نفس الغرض وتعرض نفس المعلومات.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Button",
    description: "تأكد من أن النص البديل لزر إرسال الصورة يحدد غرض الزر.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_G94.Image",
    description:
      "تأكد من أن النص البديل لعنصر img يحقق نفس الغرض ويعرض نفس المعلومات كالصورة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG3",
    description:
      "يجب ألا يستخدم عنصر Img داخل رابط النص alt الذي يكرر محتوى رابط النص بجانبه.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG3",
    description:
      "يجب ألا يستخدم عنصر Img داخل رابط النص alt الذي يكرر محتوى رابط النص بجانبه.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG4",
    description:
      "عنصر Img داخل رابط له نص alt فارغ أو مفقود عندما يحتوي رابط بجانبه على نص رابط. ضع في اعتبارك دمج الروابط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG4",
    description:
      "عنصر Img داخل رابط له نص alt فارغ أو مفقود عندما يحتوي رابط بجانبه على نص رابط. ضع في اعتبارك دمج الروابط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H2.EG5",
    description:
      "يجب ألا يستخدم عنصر Img داخل رابط نص alt يكرر محتوى نص الرابط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24",
    description:
      "عنصر Area في خريطة صورة يفتقد إلى سمة alt. يجب أن يكون لكل عنصر area بديل نصي يصف وظيفة منطقة خريطة الصورة.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H24.2",
    description:
      "تأكد من أن البديل النصي لعنصر المنطقة يحقق نفس الغرض كجزء من صورة خريطة الصورة التي يشير إليها.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H30.2",
    description:
      "عنصر Img هو المحتوى الوحيد للرابط، لكنه يفتقد إلى نص بديل. يجب أن يصف النص البديل غرض الرابط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.2",
    description:
      "يجب أن تحتوي عناصر Applet على سمة alt، لتوفير بديل نصي للمتصفحات التي تدعم العنصر ولكن لا يمكنها تحميل التطبيق.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H35.3",
    description:
      "يجب أن تحتوي عناصر Applet على بديل نصي في جسم العنصر، للمتصفحات التي لا تدعم عنصر applet.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H36",
    description:
      "زر إرسال الصورة يفتقد إلى سمة alt. حدد بديلاً نصيًا يصف وظيفة الزر باستخدام سمة alt.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H37",
    description:
      "عنصر Img يفتقد إلى سمة alt. استخدم سمة alt لتحديد بديل نصي قصير.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H53,ARIA6",
    description:
      "يجب أن تحتوي عناصر الكائن على بديل نصي بعد استنفاد جميع البدائل الأخرى.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.1",
    description:
      "يجب أن يكون عنصر Img ذو نص alt فارغ مزودًا بسمة title غائبة أو فارغة.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_1.1_1_1_H67.2",
    description: "تم تمييز عنصر Img بحيث يتم تجاهله بواسطة تقنيات المساعدة.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G158",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على صوت مسبق التسجيل فقط، ولم يتم توفيره كبديل للمحتوى النصي، تحقق من توفر نسخة نصية بديلة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_1_G159,G166",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على فيديو مسبق التسجيل فقط، ولم يتم توفيره كبديل للمحتوى النصي، تحقق من توفر نسخة نصية بديلة، أو تتوفر مسار صوتي يعرض معلومات مكافئة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_2_G87,G93",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على وسائط متزامنة مسجلة مسبقًا ولم يتم توفيره كبديل للمحتوى النصي، تحقق من توفير ترجمات للمحتوى الصوتي.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_3_G69,G78,G173,G8",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على وسائط متزامنة مسجلة مسبقًا ولم يتم توفيره كبديل للمحتوى النصي، تحقق من توفير وصف صوتي لفيديوهاته، و/أو نسخة نصية بديلة للمحتوى.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_4_G9,G87,G93",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على وسائط متزامنة، تحقق من توفير ترجمات للمحتوى الصوتي المباشر.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_5_G78,G173,G8",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على وسائط متزامنة مسجلة مسبقًا، تحقق من توفير وصف صوتي لمحتوى الفيديو الخاص به.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_6_G54,G81",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على وسائط متزامنة مسجلة مسبقًا، تحقق من توفير تفسير بلغة الإشارة لمحتواه الصوتي.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_7_G8",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على وسائط متزامنة، والتوقفات في الصوت الأمامي لا تكفي للسماح بوصفات صوتية لنقل معنى الفيديو المسجل مسبقًا، تحقق من توفر وصف صوتي ممتد، إما من خلال البرمجة أو نسخة بديلة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_8_G69,G159",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على وسائط متزامنة مسجلة مسبقًا أو محتوى فيديو فقط، تحقق من توفر نسخة نصية بديلة للمحتوى.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_2.1_2_9_G150,G151,G157",
    description:
      "إذا كان هذا الجسم المضمن يحتوي على محتوى صوتي مباشر فقط، تحقق من توفر نسخة نصية بديلة للمحتوى.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_ARIA6",
    description:
      'هذا عنصر التحكم في النموذج يحتوي على سمة "aria-label" فارغة أو تحتوي على مسافات فقط. سيتم تجاهلها لأغراض اختبار التسمية.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_DataTable",
    description:
      "يبدو أن هذا الجدول جدول بيانات. إذا كان يُقصد به أن يكون جدول تخطيط بدلاً من ذلك، تأكد من عدم وجود عناصر th، ولا ملخص أو عنوان.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68",
    description:
      'يجب تسمية هذا الحقل النموذجي بطريقة ما. استخدم عنصر العلامة (إما بسمة "for" أو ملفوفًا حول حقل النموذج)، أو سمات "title"، "aria-label" أو "aria-labelledby" حسب الاقتضاء.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.Hidden",
    description:
      "هذا الحقل النموذجي المخفي مسمى بطريقة ما. يجب ألا تكون هناك حاجة لتسمية حقل نموذجي مخفي.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F68.HiddenAttr",
    description:
      'يُفترض أن هذا الحقل النموذجي مخفي (باستخدام سمة "hidden")، لكنه مسمى أيضًا بطريقة ما. يجب ألا تكون هناك حاجة لتسمية حقل نموذجي مخفي.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_F92,ARIA4",
    description:
      'دور هذا العنصر هو "presentation" لكنه يحتوي على عناصر فرعية ذات معنى دلالي.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_G141_a",
    description:
      "هيكل العنوان غير متداخل بشكل منطقي. يبدو أن هذا العنصر h{{headingNum}} هو العنوان الرئيسي للوثيقة، لذا يجب أن يكون عنصر h1.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39,H73.4",
    description:
      "إذا كان هذا الجدول جدول بيانات، وكل من سمة الملخص وعنصر العنوان موجودين، يجب ألا تكرر السمة الملخص العنوان.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.Check",
    description:
      "إذا كان هذا الجدول جدول بيانات، تحقق من أن عنصر العنوان يصف هذا الجدول بدقة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.LayoutTable",
    description:
      "يبدو أن هذا الجدول يستخدم للتخطيط، لكنه يحتوي على عنصر عنوان. يجب ألا تحتوي جداول التخطيط على عناوين.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H39.3.NoCaption",
    description:
      "إذا كان هذا الجدول جدول بيانات، فكر في استخدام عنصر عنوان لعنصر الجدول لتحديد هذا الجدول.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42",
    description:
      "يجب استخدام علامات العنوان إذا كان هذا المحتوى مقصودًا كعنوان.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H42.2",
    description:
      "تم العثور على علامة عنوان بدون محتوى. النص الذي لا يُقصد كعنوان يجب ألا يتم وضع علامة عليه بعلامات العنوان.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43,H63",
    description:
      "العلاقة بين عناصر td وعناصر th المرتبطة بها غير محددة. استخدم إما سمة النطاق على عناصر th، أو سمة العناوين على عناصر td.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43,H63",
    description:
      "العلاقة بين عناصر td وعناصر th المرتبطة بها غير محددة. استخدم إما سمة النطاق على عناصر th، أو سمة العناوين على عناصر td.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.HeadersRequired",
    description:
      "العلاقة بين عناصر td وعناصر th المرتبطة بها غير محددة. نظرًا لأن هذا الجدول يحتوي على عدة مستويات من عناصر th، يجب استخدام سمة العناوين على عناصر td.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.IncorrectAttrNotice",
    description: "تحقق من صحة سمات العناوين على عناصر td.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeaderIds",
    description:
      "ليس كل عناصر th في هذا الجدول تحتوي على سمة id. يجب أن تحتوي هذه الخلايا على معرفات حتى يمكن الإشارة إليها بواسطة سمات العناوين في عناصر td.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeaderIds",
    description:
      "ليس كل عناصر th في هذا الجدول تحتوي على سمة id. يجب أن تحتوي هذه الخلايا على معرفات حتى يمكن الإشارة إليها بواسطة سمات العناوين في عناصر td.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeadersAttrs",
    description:
      "ليس كل عناصر td في هذا الجدول تحتوي على سمة عناوين. يجب أن تحتوي كل سمة عناوين على قائمة بمعرفات كل عناصر th المرتبطة بهذه الخلية.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.MissingHeadersAttrs",
    description:
      "ليس كل عناصر td في هذا الجدول تحتوي على سمة عناوين. يجب أن تحتوي كل سمة عناوين على قائمة بمعرفات كل عناصر th المرتبطة بهذه الخلية.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H43.ScopeAmbiguous",
    description:
      "سمات النطاق على عناصر th غامضة في جدول به عدة مستويات من العناوين. استخدم سمة العناوين على عناصر td بدلاً من ذلك.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H44.NotFormControl",
    description:
      'سمة "for" لهذه العلامة تحتوي على معرف لعنصر ليس عنصر تحكم في النموذج. تأكد من أنك أدخلت المعرف الصحيح للعنصر المقصود.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48",
    description:
      "إذا كان هذا العنصر يحتوي على قسم تنقل، يُوصى بأن يتم وضع علامة عليه كقائمة.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.1",
    description:
      "يبدو أن هذا المحتوى يحاكي قائمة غير مرتبة باستخدام النص العادي. إذا كان الأمر كذلك، فإن وضع العلامة على هذا المحتوى بعنصر ul سيضيف معلومات هيكلية مناسبة للوثيقة.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H48.2",
    description:
      "يبدو أن هذا المحتوى يحاكي قائمة مرتبة باستخدام النص العادي. إذا كان الأمر كذلك، فإن وضع العلامة على هذا المحتوى بعنصر ol سيضيف معلومات هيكلية مناسبة للوثيقة.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.",
    description: "العلامات العرضية المستخدمة التي أصبحت قديمة في HTML5.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.AlignAttr.Semantic",
    description:
      "يجب استخدام العلامات الدلالية لتمييز النص المؤكد أو النص الخاص بحيث يمكن تحديده برمجيًا.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H49.Semantic",
    description:
      "يجب استخدام العلامات الدلالية لتمييز النص المؤكد أو النص الخاص بحيث يمكن تحديده برمجيًا.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.1",
    description:
      "ليس كل عناصر th في هذا الجدول تحتوي على سمة نطاق. يجب أن تحتوي هذه الخلايا على سمة نطاق لتحديد علاقتها بعناصر td.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.2",
    description:
      "سمات النطاق على عناصر td التي تعمل كعناوين لعناصر أخرى قديمة في HTML5. استخدم عنصر th بدلاً من ذلك.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H63.3",
    description:
      "خلية الجدول لها سمة نطاق غير صالحة. القيم الصالحة هي الصف، العمود، مجموعة الصفوف، أو مجموعة الأعمدة.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H65",
    description:
      'هذا عنصر التحكم في النموذج يحتوي على سمة "title" فارغة أو تحتوي على مسافات فقط. سيتم تجاهلها لأغراض اختبار التسمية.',
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.NoLegend",
    description:
      "Fieldset لا يحتوي على عنصر legend. يجب أن تحتوي جميع الحقول على عنصر أسطورة يصف وصف مجموعة الحقل.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H71.SameName",
    description:
      "إذا كانت زر الراديو هذه أو خانات الاختيار تتطلب وصفًا إضافيًا على مستوى المجموعة، فيجب أن تكون موجودة داخل عنصر fieldset.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.Check",
    description:
      "إذا كان هذا الجدول جدول بيانات، تحقق من أن سمة الملخص تصف تنظيم الجدول أو تشرح كيفية استخدام الجدول.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.LayoutTable",
    description:
      "يبدو أن هذا الجدول يستخدم للتخطيط، لكنه يحتوي على سمة ملخص. يجب ألا تحتوي جداول التخطيط على سمات ملخص، أو إذا تم توفيرها، يجب أن تكون فارغة.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H73.3.NoSummary",
    description:
      "إذا كان هذا الجدول جدول بيانات، فكر في استخدام سمة الملخص للعنصر الجدولي لتقديم لمحة عامة عن هذا الجدول.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_H85.2",
    description:
      "إذا كانت قائمة التحديد هذه تحتوي على مجموعات من الخيارات ذات الصلة، فيجب تجميعها باستخدام optgroup.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_1_LayoutTable",
    description:
      "يبدو أن هذا الجدول جدول تخطيط. إذا كان يُقصد به أن يكون جدول بيانات بدلاً من ذلك، تأكد من التعرف على خلايا العنوان باستخدام عناصر th.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_2_G57",
    description:
      "تحقق من أن المحتوى مرتب بتسلسل ذي معنى عند تحويله إلى شكل خطي، مثل عند تعطيل أوراق الأنماط.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_3_G96",
    description:
      "عند تقديم التعليمات لفهم المحتوى، لا تعتمد فقط على الخصائص الحسية (مثل الشكل، الحجم أو الموقع) لوصف الأشياء.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_4.RestrictView",
    description:
      "تحقق من أن المحتوى لا يحد من عرضه وتشغيله إلى اتجاه عرض واحد، مثل العمودي أو الأفقي، ما لم يكن اتجاه العرض المحدد ضروريًا.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.FaultyValue",
    description:
      "يحتوي هذا العنصر على قيمة محتملة الخطأ في سمة التكميل التلقائي: {{valuesStr}}.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Date",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم تاريخ.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Month",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم شهر.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Multiline",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم متعددة الخطوط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Numeric",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم رقمية.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Password",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم كلمات المرور.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Telephone",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم الهاتف.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Text",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم نصية.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.InvalidAutoComplete_Url",
    description:
      "قيمة التكميل التلقائي غير صالحة: {{x}}. العنصر لا ينتمي إلى مجموعة تحكم الرابط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete",
    description:
      "هذا العنصر لا يحتوي على سمة التكميل التلقائي. إذا كان هذا الحقل يجمع معلومات عن المستخدم، ففكر في إضافة واحدة للامتثال لهذا المعيار الناجح.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_5_H98.Purpose",
    description:
      "تحقق من أن حقل الإدخال يخدم غرضًا محددًا في قسم أغراض الإدخال لمكونات واجهة المستخدم؛ وأن المحتوى مطبق باستخدام التقنيات الداعمة لتحديد المعنى المتوقع لبيانات الإدخال الخاصة بالنموذج.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_3.1_3_6_ARIA11.Check",
    description:
      "تحقق من أن غرض مكونات واجهة المستخدم، والأيقونات، والمناطق يمكن تحديده برمجيًا.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_1_G14,G18",
    description:
      "تحقق من أن أي معلومات يتم نقلها باستخدام اللون وحده متاحة أيضًا في النص، أو من خلال إشارات بصرية أخرى.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check",
    description:
      "تحقق من أن المحتوى يمكن تقديمه بدون فقدان المعلومات أو الوظيفة، وبدون الحاجة إلى التمرير في بُعدين لـ:   التمرير الرأسي للمحتوى بعرض مكافئ لـ 320 بكسل CSS؛   التمرير الأفقي للمحتوى بارتفاع مكافئ لـ 256 بكسل CSS؛   باستثناء الأجزاء من المحتوى التي تتطلب تخطيطًا ثنائي الأبعاد للاستخدام أو المعنى.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed",
    description:
      "هذا العنصر يحتوي على 'position: fixed'. قد يتطلب هذا التمرير في بعدين، وهو ما يعتبر فشلًا لهذا المعيار الناجح.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId:
      "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling",
    description:
      "قد يتطلب النص المنسق التمرير في بعدين، وهو ما يعتبر فشلاً لهذا المعيار الناجح.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom",
    description:
      "التدخل في قدرة وكيل المستخدم على التكبير قد يكون فشلاً لهذا المعيار الناجح.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check",
    description:
      "تحقق من أن العرض البصري للعناصر التالية يحتوي على نسبة تباين لوني لا تقل عن 3:1 مقابل اللون المجاور(الألوان): مكونات واجهة المستخدم: المعلومات البصرية المطلوبة لتحديد مكونات وحالات واجهة المستخدم، باستثناء المكونات الغير نشطة أو عندما يتم تحديد مظهر المكون بواسطة وكيل المستخدم ولا يتم تعديله بواسطة المؤلف؛ الأشياء الرسومية: أجزاء من الرسومات اللازمة لفهم المحتوى، باستثناء عندما تكون عرض الرسومات معين بشكل أساسي للمعلومات المنقولة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_12_C36,C35.Check",
    description:
      "تحقق من عدم وجود فقدان للمحتوى أو الوظيفة عن طريق تعيين كل مما يلي وعدم تغيير أي خاصية أسلوب أخرى: ارتفاع الخط (مسافة الخط) إلى ما لا يقل عن 1.5 مرات حجم الخط؛ مسافة التالية للفقرات إلى ما لا يقل عن 2 مرة حجم الخط؛ التباعد بين الأحرف (تتبع) إلى ما لا يقل عن 0.12 مرة حجم الخط؛ تباعد الكلمات إلى ما لا يقل عن 0.16 مرة حجم الخط.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_13_F95.Check",
    description:
      "تحقق من أنه عند استقبال ثم إزالة تمرير المؤشر أو التركيز بلوحة المفاتيح يتسبب في ظهور محتوى إضافي ثم يختفي، الشروط التالية صحيحة: يمكن إلغاء: التسليم متاح لإلغاء المحتوى الإضافي دون تحريك تمرير المؤشر أو التركيز بلوحة المفاتيح، ما لم يتم التواصل مع خطأ في الإدخال أو لا يحجب أو يستبدل المحتوى الآخر؛ قابل للتمرير عليه: إذا يمكن لتمرير المؤشر تفعيل المحتوى الإضافي، فإن المؤشر يمكن تحريكه فوق المحتوى الإضافي دون اختفاء المحتوى الإضافي؛ مستمر: المحتوى الإضافي يظل ظاهراً حتى يتم إزالة محفز التمرير أو التركيز، أو يقوم المستخدم بإلغائه، أو تصبح معلوماته غير صالحة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_2_F23",
    description:
      "إذا احتوى هذا العنصر على صوت يتم تشغيله تلقائيًا لأكثر من 3 ثوان، تحقق من وجود القدرة على إيقاف الصوت مؤقتًا، أو إيقافه، أو كتم الصوت.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.BGColour",
    description:
      "تحقق من أن هذا العنصر يحتوي على لون خلفية موروث لاستكمال لون الخلفية أو الصورة المضمنة المتناظرة.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_F24.FGColour",
    description:
      "تحقق من أن هذا العنصر يحتوي على لون خلفية أو صورة موروثة لاستكمال لون الخلفية المضمنة المتناظرة.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Abs",
    description:
      "هذا العنصر موضوع بشكل مطلق ولا يمكن تحديد لون الخلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الخلفية على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Abs",
    description:
      "هذا العنصر موضوع بشكل مطلق ولا يمكن تحديد لون الخلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الخلفية على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Alpha",
    description:
      "نص أو خلفية هذا العنصر يحتوي على شفافية. تأكد من أن نسبة التباين بين النص والخلفية على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.Alpha",
    description:
      "نص أو خلفية هذا العنصر يحتوي على شفافية. تأكد من أن نسبة التباين بين النص والخلفية على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgGradient",
    description:
      "نص هذا العنصر موضوع على تدرج. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من التدرج على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgGradient",
    description:
      "نص هذا العنصر موضوع على تدرج. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من التدرج على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgImage",
    description:
      "نص هذا العنصر موضوع على صورة خلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الصورة على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_3_G145.BgImage",
    description:
      "نص هذا العنصر موضوع على صورة خلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الصورة على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_4_G142",
    description:
      "تحقق من أن النص يمكن تغيير حجمه بدون تقنية مساعدة حتى 200 في المائة دون فقدان المحتوى أو الوظيفة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_5_G140,C22,C30.AALevel",
    description:
      "إذا كانت التقنيات المستخدمة يمكن أن تحقق العرض البصري، تحقق من استخدام النص لنقل المعلومات بدلاً من صور النص، إلا عندما تكون صورة النص ضرورية للمعلومات المنقولة، أو يمكن تخصيصها بصريًا لمتطلبات المستخدم.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.Abs",
    description:
      "هذا العنصر موضوع بشكل مطلق ولا يمكن تحديد لون الخلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الخلفية على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.Abs",
    description:
      "هذا العنصر موضوع بشكل مطلق ولا يمكن تحديد لون الخلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الخلفية على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.BgImage",
    description:
      "نص هذا العنصر موضوع على صورة خلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الصورة على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_6_G17.BgImage",
    description:
      "نص هذا العنصر موضوع على صورة خلفية. تأكد من أن نسبة التباين بين النص وجميع الأجزاء المغطاة من الصورة على الأقل {{required}}:1.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_7_G56",
    description:
      "بالنسبة للمحتوى الصوتي المسجل فقط في هذا العنصر والذي يتكون أساسًا من كلام (مثل التعليق الصوتي)، يجب أن تكون أي أصوات خلفية قابلة للكتم، أو أن تكون أخف بمقدار 20 ديسيبل (أو حوالي 4 أضعاف) من الكلام.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_C19,G172,G169",
    description:
      "تحقق من أن كتل النص ليست مبررة بالكامل - أي، إلى حواف اليمين واليسار - أو أن يكون هناك آلية متوفرة لإزالة التبرير الكامل.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G148,G156,G175",
    description:
      "تحقق من وجود آلية متاحة للمستخدم لاختيار ألوان الخلفية والنص الأمامية لكتل النص، إما من خلال صفحة الويب أو المتصفح.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_G188,C21",
    description:
      "تحقق من أن تباعد الأسطر في كتل النص على الأقل 150% في الفقرات، وتباعد الفقرات على الأقل 1.5 مرة من تباعد الأسطر، أو أن يكون هناك آلية متاحة لتحقيق ذلك.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,C20",
    description:
      "تحقق من وجود آلية لتقليل عرض كتلة النص إلى لا أكثر من 80 حرفًا (أو 40 بالنسبة للكتابة باللغات الصينية، اليابانية أو الكورية).",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_8_H87,G146,C26",
    description:
      "تحقق من أنه يمكن تغيير حجم النص بدون تقنية مساعدة حتى 200 في المائة دون تطلب من المستخدم التمرير أفقيًا على نافذة ملء الشاشة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle1.Guideline1_4.1_4_9_G140,C22,C30.NoException",
    description:
      "تحقق من أن صور النص تُستخدم فقط للزينة البحتة أو عندما تكون العرض المحدد للنص ضروريًا للمعلومات المنقولة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_G90",
    description:
      "تأكد من توفر الوظائف التي يوفرها معالج الأحداث لهذا العنصر من خلال لوحة المفاتيح",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.DblClick",
    description:
      "تأكد من توفر الوظائف التي يوفرها النقر المزدوج على هذا العنصر من خلال لوحة المفاتيح.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseDown",
    description:
      "تأكد من توفر الوظائف التي يوفرها الضغط بالماوس على هذا العنصر من خلال لوحة المفاتيح؛ على سبيل المثال، باستخدام حدث keydown.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseMove",
    description:
      "تأكد من توفر الوظائف التي يوفرها تحريك الماوس على هذا العنصر من خلال لوحة المفاتيح.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOut",
    description:
      "تأكد من توفر الوظائف التي يوفرها تمرير الماوس خارج هذا العنصر من خلال لوحة المفاتيح؛ على سبيل المثال، باستخدام حدث الغموض.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseOver",
    description:
      "تأكد من توفر الوظائف التي يوفرها تمرير الماوس فوق هذا العنصر من خلال لوحة المفاتيح؛ على سبيل المثال، باستخدام حدث التركيز.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_1_SCR20.MouseUp",
    description:
      "تأكد من توفر الوظائف التي يوفرها رفع الماوس عن هذا العنصر من خلال لوحة المفاتيح؛ على سبيل المثال، باستخدام حدث keyup.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_2_F10",
    description:
      "تحقق من أن هذا البرنامج الإضافي أو التطبيق يوفر القدرة على نقل التركيز بعيدًا عن نفسه عند استخدام لوحة المفاتيح.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_1.2_1_4.Check",
    description:
      "تحقق من أنه إذا تم تطبيق اختصار لوحة المفاتيح في المحتوى باستخدام أحرف (بما في ذلك الأحرف الكبيرة والصغيرة)، علامات الترقيم، أرقام، أو رموز الأحرف فقط، فإن واحدًا على الأقل مما يلي صحيح: إيقاف: توفر آلية لإيقاف الاختصار؛ إعادة تعيين: توفر آلية لإعادة تعيين الاختصار لاستخدام واحد أو أكثر من أحرف لوحة المفاتيح غير القابلة للطباعة (مثل Ctrl، Alt، إلخ)؛ نشط فقط عند التركيز: اختصار لوحة المفاتيح لمكون واجهة المستخدم نشط فقط عندما يتم التركيز على ذلك المكون.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F40.2",
    description:
      "يتم استخدام وسم التحديث التلقائي للانتقال إلى صفحة أخرى، مع حد زمني ليس صفرًا. لا يمكن للمستخدمين التحكم في هذا الحد الزمني.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_1_F41.2",
    description:
      "يتم استخدام وسم التحديث التلقائي لتحديث الصفحة الحالية. لا يمكن للمستخدمين التحكم في الحد الزمني لهذا التحديث.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F4",
    description:
      "تأكد من وجود آلية متاحة لإيقاف هذا العنصر الوامض في أقل من خمس ثوان.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_F47",
    description:
      "لا يمكن لعناصر الوميض تلبية الشرط الذي ينص على أن المعلومات الوامضة يمكن إيقافها في غضون خمس ثوان.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_2_SCR33,SCR22,G187,G152,G186,G191",
    description:
      "إذا تحرك أي جزء من المحتوى، أو تمرير أو وميض لأكثر من 5 ثوانٍ، أو تم تحديثه تلقائيًا، تحقق من وجود آلية متاحة لإيقاف، أو إيقاف، أو إخفاء المحتوى.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_3_G5",
    description:
      "تحقق من أن التوقيت ليس جزءًا أساسيًا من الحدث أو النشاط الذي يقدمه المحتوى، باستثناء الوسائط المتزامنة غير التفاعلية والأحداث الزمنية الفعلية.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_4_SCR14",
    description:
      "تحقق من أن جميع الانقطاعات (بما في ذلك التحديثات للمحتوى) يمكن تأجيلها أو قمعها بواسطة المستخدم، باستثناء الانقطاعات التي تتضمن حالة طارئة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_5_G105,G181",
    description:
      "إذا كانت هذه الصفحة الويب جزءًا من مجموعة صفحات ويب بها حد زمني للخمول، تحقق من أن المستخدم المصادق يمكنه متابعة النشاط دون فقدان البيانات بعد إعادة المصادقة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_2.2_2_6.Check",
    description:
      "تحقق من أن المستخدمين يتم تحذيرهم من مدة أي خمول للمستخدم قد يتسبب في فقدان البيانات، ما لم يتم الحفاظ على البيانات لأكثر من 20 ساعة عندما لا يتخذ المستخدم أي إجراءات.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_1_G19,G176",
    description:
      "تحقق من أن أي مكون من مكونات المحتوى لا يومض أكثر من ثلاث مرات في أي فترة مدتها ثانية واحدة، أو أن حجم أي منطقة وامضة صغير بما فيه الكفاية.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_2_G19",
    description:
      "تحقق من أن أي مكون من مكونات المحتوى لا يومض أكثر من ثلاث مرات في أي فترة مدتها ثانية واحدة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_3.2_3_3.Check",
    description:
      "تحقق من أن حركة الرسوم المتحركة التي يتم تفعيلها بالتفاعل يمكن تعطيلها، ما لم تكن الرسوم المتحركة ضرورية للوظيفة أو المعلومات المنقولة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124,H69",
    description:
      "تأكد من أنه يمكن تجاوز أي عناصر تنقل مشتركة؛ على سبيل المثال، باستخدام روابط التخطي، عناصر الرأس، أو أدوار علامة ARIA.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchID",
    description:
      "هذا الرابط يشير إلى مرساة مسماة '{{id}}' داخل المستند، ولكن لا يوجد مرساة موجودة بهذا الاسم.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_G1,G123,G124.NoSuchIDFragment",
    description:
      "هذا الرابط يشير إلى مرساة مسماة '{{id}}' داخل المستند، ولكن لا يوجد مرساة موجودة بهذا الاسم في الجزء المختبر.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.1",
    description:
      "يتطلب عنصر الإطار iframe وجود سمة عنوان غير فارغة تحدد الإطار.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_1_H64.2",
    description: "تحقق من أن سمة العنوان لهذا العنصر تحتوي على نص يحدد الإطار.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.EmptyTitle",
    description: "يجب أن يكون عنصر العنوان في قسم الرأس غير فارغ.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoHeadEl",
    description: "لا يوجد قسم رأس فيه لوضع عنصر عنوان وصفي.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.1.NoTitleEl",
    description:
      "يجب توفير عنوان للمستند، باستخدام عنصر عنوان غير فارغ في قسم الرأس.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_2_H25.2",
    description: "تحقق من أن عنصر العنوان يصف المستند.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_3_H4.2",
    description:
      "إذا تم استخدام tabindex، تحقق من أن الترتيب التبويب المحدد بواسطة سمات tabindex يتبع العلاقات في المحتوى.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81",
    description:
      "تحقق من أن نص الرابط مقرونًا بسياق الرابط المحدد برمجيًا يحدد غرض الرابط.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_4_H77,H78,H79,H80,H81,H33",
    description:
      "تحقق من أن نص الرابط مقرونًا بسياق الرابط المحدد برمجيًا، أو سمة العنوان الخاصة به، تحدد غرض الرابط.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_5_G125,G64,G63,G161,G126,G185",
    description:
      "إذا لم تكن هذه الصفحة الويب جزءًا من عملية خطية، تحقق من وجود أكثر من طريقة لتحديد موقع هذه الصفحة الويب ضمن مجموعة من صفحات الويب.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_6_G130,G131",
    description: "تحقق من أن العناوين والتسميات توضح الموضوع أو الغرض.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_7_G149,G165,G195,C15,SCR31",
    description:
      "تحقق من وجود وضع تشغيل واحد على الأقل حيث يمكن تحديد مؤشر التركيز باستخدام لوحة المفاتيح بصريًا على عناصر واجهة المستخدم.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.1",
    description: "يمكن تحديد عناصر الرابط في قسم الرأس من المستند فقط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2a",
    description: "عنصر الرابط يفتقد إلى سمة rel غير فارغة تحدد نوع الرابط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_8_H59.2b",
    description:
      "عنصر الرابط يفتقد إلى سمة href غير فارغة تشير إلى المورد المرتبط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_4.2_4_9_H30",
    description: "تحقق من أن نص الرابط يصف غرض الرابط.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_1.Check",
    description:
      "تحقق من أن جميع الوظائف التي تستخدم الإيماءات المتعددة النقاط أو المسار يمكن تشغيلها بمؤشر واحد دون إيماءة مبنية على مسار، ما لم تكن الإيماءة متعددة النقاط أو المسار ضرورية.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Mousedown_Check",
    description:
      "هذا العنصر لديه مستمع لحدث mousedown. تحقق من أنه بالنسبة للوظائف التي يمكن تشغيلها باستخدام مؤشر واحد، يكون واحد على الأقل مما يلي صحيحًا: لا يتم استخدام حدث الضغط: لا يتم استخدام حدث الضغط للمؤشر لتنفيذ أي جزء من الوظيفة؛ إلغاء أو تراجع: يكون إكمال الوظيفة عند حدث الرفع، وتتوفر آلية لإلغاء الوظيفة قبل الإكمال أو للتراجع عن الوظيفة بعد الإكمال؛ عكس حدث الرفع: حدث الرفع يعكس أي نتيجة لحدث الضغط السابق؛ ضروري: إكمال الوظيفة عند حدث الضغط ضروري.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.SinglePointer_Check",
    description:
      "تحقق من أنه بالنسبة للوظائف التي يمكن تشغيلها باستخدام مؤشر واحد، يكون واحد على الأقل مما يلي صحيحًا: لا يتم استخدام حدث الضغط: لا يتم استخدام حدث الضغط للمؤشر لتنفيذ أي جزء من الوظيفة؛ إلغاء أو تراجع: يكون إكمال الوظيفة عند حدث الرفع، وتتوفر آلية لإلغاء الوظيفة قبل الإكمال أو للتراجع عن الوظيفة بعد الإكمال؛ عكس حدث الرفع: حدث الرفع يعكس أي نتيجة لحدث الضغط السابق؛ ضروري: إكمال الوظيفة عند حدث الضغط ضروري.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_2.Touchstart_Check",
    description:
      "هذا العنصر لديه مستمع لحدث touchstart. تحقق من أنه بالنسبة للوظائف التي يمكن تشغيلها باستخدام مؤشر واحد، يكون واحد على الأقل مما يلي صحيحًا: لا يتم استخدام حدث الضغط: لا يتم استخدام حدث الضغط للمؤشر لتنفيذ أي جزء من الوظيفة؛ إلغاء أو تراجع: يكون إكمال الوظيفة عند حدث الرفع، وتتوفر آلية لإلغاء الوظيفة قبل الإكمال أو للتراجع عن الوظيفة بعد الإكمال؛ عكس حدث الرفع: حدث الرفع يعكس أي نتيجة لحدث الضغط السابق؛ ضروري: إكمال الوظيفة عند حدث الضغط ضروري.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.AccessibleName",
    description:
      "الاسم القابل للوصول لهذا العنصر لا يحتوي على نص التسمية المرئي. تحقق من أنه بالنسبة لعناصر واجهة المستخدم التي تحتوي على تسميات تشمل نصًا أو صورًا للنص، يحتوي الاسم على النص المقدم بصريًا.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_3_F96.Check",
    description:
      "تحقق من أنه بالنسبة لعناصر واجهة المستخدم التي تحتوي على تسميات تشمل نصًا أو صورًا للنص، يحتوي الاسم على النص المقدم بصريًا.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Check",
    description:
      "تحقق من أن الوظائف التي يمكن تشغيلها عن طريق حركة الجهاز أو حركة المستخدم يمكن أيضًا تشغيلها عن طريق عناصر واجهة المستخدم ويمكن تعطيل الاستجابة للحركة لمنع التشغيل العرضي، إلا عندما: تستخدم واجهة مدعومة: يتم استخدام الحركة لتشغيل الوظيفة من خلال واجهة مدعومة بالوصول؛ ضروري: الحركة ضرورية للوظيفة والقيام بذلك سيبطل النشاط.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_4.Devicemotion",
    description:
      "هذا العنصر لديه مستمع لحدث devicemotion. تحقق من أن الوظائف التي يمكن تشغيلها عن طريق حركة الجهاز أو حركة المستخدم يمكن أيضًا تشغيلها عن طريق عناصر واجهة المستخدم ويمكن تعطيل الاستجابة للحركة لمنع التشغيل العرضي، إلا عندما: تستخدم واجهة مدعومة: يتم استخدام الحركة لتشغيل الوظيفة من خلال واجهة مدعومة بالوصول؛ ضروري: الحركة ضرورية للوظيفة والقيام بذلك سيبطل النشاط.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_5.Check",
    description:
      "تحقق من أن حجم الهدف لمدخلات المؤشر لا يقل عن 44 في 44 بكسل CSS، إلا عندما: مكافئ: يتوفر الهدف من خلال رابط مكافئ أو عنصر تحكم على نفس الصفحة والذي يبلغ حجمه على الأقل 44 في 44 بكسل CSS؛ داخل النص: يكون الهدف في جملة أو كتلة من النص؛ تحكم وكيل المستخدم: يتم تحديد حجم الهدف بواسطة وكيل المستخدم ولا يتم تعديله بواسطة المؤلف؛ ضروري: عرض الهدف بطريقة معينة ضروري لنقل المعلومات.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle2.Guideline2_5.2_5_6.Check",
    description:
      "تحقق من أن المحتوى لا يقيد استخدام وسائط الإدخال المتاحة على منصة ما إلا عندما يكون القيد ضروريًا، أو مطلوبًا لضمان أمان المحتوى، أو مطلوبًا لاحترام إعدادات المستخدم.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.2",
    description:
      "يجب أن يحتوي عنصر html على سمة lang أو xml:lang تصف لغة المستند.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.Lang",
    description:
      "اللغة المحددة في سمة lang لعنصر المستند لا تبدو مكتوبة بشكل صحيح.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_1_H57.3.XmlLang",
    description:
      "اللغة المحددة في سمة xml:lang لعنصر المستند لا تبدو مكتوبة بشكل صحيح.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58",
    description:
      "تأكد من تمييز أي تغيير في اللغة باستخدام سمة اللغة lang و/أو xml:lang على عنصر، حسب الاقتضاء.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.Lang",
    description:
      "اللغة المحددة في سمة اللغة lang لهذا العنصر لا تبدو مكتوبة بشكل صحيح.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_2_H58.1.XmlLang",
    description:
      "اللغة المحددة في سمة xml:lang لهذا العنصر لا تبدو مكتوبة بشكل صحيح.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_3_H40,H54,H60,G62,G70",
    description:
      "تحقق من توفر آلية لتحديد التعريفات الخاصة بكلمات أو عبارات تُستخدم بطريقة غير عادية أو محدودة، بما في ذلك الاصطلاحات والجargon.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_4_G102,G55,G62,H28,G97",
    description: "تحقق من توفر آلية لتحديد الشكل الموسع أو معنى الاختصارات.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_5_G86,G103,G79,G153,G160",
    description:
      "حيث يتطلب المحتوى قدرة قراءة أكثر تقدمًا من مستوى التعليم الثانوي الأدنى، يجب توفير محتوى إضافي أو نسخة بديلة.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.HTML5",
    description: "عنصر Ruby لا يحتوي على عنصر rt يحتوي على معلومات النطق لنصه.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.1.XHTML11",
    description:
      "عنصر Ruby لا يحتوي على عنصر rt يحتوي على معلومات النطق للنص داخل عنصر rb.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_1.3_1_6_H62.2",
    description:
      "عنصر Ruby لا يحتوي على عناصر rp، التي توفر علامات ترقيم إضافية إلى المتصفحات التي لا تدعم نص ruby.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_1_G107",
    description:
      "تحقق من أن تغيير السياق لا يحدث عندما يتلقى هذا الحقل المدخل التركيز.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_2_H32.2",
    description:
      'هذا النموذج لا يحتوي على زر إرسال، مما يخلق مشاكل لأولئك الذين لا يستطيعون إرسال النموذج باستخدام لوحة المفاتيح. أزرار الإرسال هي عناصر INPUT مع سمة النوع "submit" أو "image"، أو عناصر BUTTON مع نوع "submit" أو مُهمل/غير صالح.',
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_3_G61",
    description:
      "تحقق من أن آليات التنقل المتكررة على صفحات ويب متعددة تحدث بنفس الترتيب النسبي في كل مرة يتم تكرارها، ما لم يبادر المستخدم بتغيير.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_4_G197",
    description:
      "تحقق من أن المكونات التي لها نفس الوظيفة ضمن هذه الصفحة الويب محددة بشكل متسق في مجموعة الصفحات الويب التي تنتمي إليها.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_2.3_2_5_H83.3",
    description:
      "تحقق من أن نص الرابط هذا يحتوي على معلومات تشير إلى أن الرابط سيفتح في نافذة جديدة.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_1_G83,G84,G85",
    description:
      "إذا تم اكتشاف خطأ في الإدخال تلقائيًا في هذا النموذج، تحقق من تحديد العنصر(العناصر) المعني(المعنية) بالخطأ ووصف الخطأ(أخطاء) للمستخدم بنص.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_2_G131,G89,G184,H90",
    description:
      "تحقق من توفير تسميات واصفة أو تعليمات (بما في ذلك للحقول المطلوبة) لإدخال المستخدم في هذا النموذج.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_3_G177",
    description:
      "تحقق من أن هذا النموذج يوفر تصحيحات مقترحة لأخطاء إدخال المستخدم، ما لم يعرض ذلك الأمان أو الغرض من المحتوى للخطر.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_4_G98,G99,G155,G164,G168.LegalForms",
    description:
      "إذا كان هذا النموذج سيُلزم المستخدم بالتزام مالي أو قانوني، أو يعدل/يحذف بيانات يمكن للمستخدم التحكم فيها، أو يقدم استجابات للاختبار، فتأكد من أن الإرساليات إما قابلة للعكس، أو تم التحقق منها بحثًا عن أخطاء الإدخال، و/أو تم تأكيدها من قبل المستخدم.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_5_G71,G184,G193",
    description:
      "تحقق من توفر المساعدة الحساسة للسياق لهذا النموذج، على مستوى صفحة الويب و/أو على مستوى التحكم.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle3.Guideline3_3.3_3_6_G98,G99,G155,G164,G168.AllForms",
    description:
      "تحقق من أن الإرساليات لهذا النموذج إما قابلة للعكس، أو تم التحقق منها بحثًا عن أخطاء في الإدخال، و/أو تم تأكيدها من قبل المستخدم.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Empty",
    description:
      "تم العثور على عنصر الرابط مع معرف ولكن بدون href أو نص رابط. فكر في نقل معرفه إلى عنصر أصل أو قريب.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyNoId",
    description:
      "تم العثور على عنصر الرابط بدون محتوى رابط ولا صفة اسم و/أو معرف.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.EmptyWithName",
    description:
      "تم العثور على عنصر الرابط بصفة اسم ولكن بدون href أو نص رابط. فكر في نقل الصفة الاسمية لتصبح معرفاً لعنصر أصل أو قريب.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoContent",
    description:
      "تم العثور على عنصر الرابط مع صفة href صالحة، ولكن لم يتم توفير محتوى رابط.",
    helpUrl: [],
    ruleType: "error",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.NoHref",
    description:
      "يجب عدم استخدام عناصر الربط لتحديد أهداف ربط داخل الصفحة. إذا لم تستخدم المعرف لأغراض أخرى (مثل CSS أو البرمجة)، فكر في نقله إلى عنصر أصل.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId: "Principle4.Guideline4_1.4_1_2_H91.A.Placeholder",
    description:
      "تم العثور على عنصر الرابط مع محتوى رابط، ولكن لم يتم توفير صفة href، معرف، أو اسم.",
    helpUrl: [],
    ruleType: "warning",
    tags: ["WCAGA", "WCAGAA", "WCAGAAA"],
  },
  {
    ruleId:
      "Principle4.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check",
    description:
      "تحقق من أن رسائل الحالة يمكن تحديدها برمجيًا من خلال الدور أو الخواص بحيث يمكن تقديمها للمستخدم بواسطة تقنيات المساعدة دون تلقي التركيز.",
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
    tags: ["SECTION508"],
  },
  {
    ruleId: "TableHeaders",
    description:
      "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "TimeLimit",
    description:
      "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
  {
    ruleId: "Video",
    description:
      "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.",
    helpUrl: [],
    ruleType: "notice",
    tags: ["SECTION508"],
  },
];
