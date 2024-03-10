/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: "accesskeys",
    description: "يضمن أن قيمة خاصية الوصول لكل مفتاح فريدة",
    help: "يجب أن تكون قيمة خاصية الوصول فريدة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "area-alt",
    description: "يضمن أن عناصر <area> لخرائط الصور لها نص بديل",
    help: "يجب أن تحتوي عناصر <area> الفعالة على نص بديل",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=ar",
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
    description: "يضمن أن خصائص ARIA مسموحة لدور عنصر معين",
    help: "يجب أن تستخدم العناصر خصائص ARIA المسموحة فقط",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5c01ea"],
  },
  {
    ruleId: "aria-allowed-role",
    description: "يضمن أن خاصية الدور لها قيمة مناسبة للعنصر",
    help: "يجب أن يكون دور ARIA مناسباً للعنصر",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=ar",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-command-name",
    description: "يضمن أن كل أمر ARIA ورابط وعنصر قائمة له اسم متاح",
    help: "يجب أن تحتوي أوامر ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["97a4e1"],
  },
  {
    ruleId: "aria-dialog-name",
    description: "يضمن أن كل عقدة حوار وتنبيه حوار في ARIA لها اسم متاح",
    help: "يجب أن تحتوي عقد الحوار وتنبيه الحوار في ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-hidden-body",
    description: "يضمن عدم وجود 'aria-hidden=\"true\"' على جسم الوثيقة",
    help: "يجب ألا يتواجد 'aria-hidden=\"true\"' على جسم الوثيقة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-hidden-focus",
    description:
      "يضمن أن العناصر المخفية بـ aria-hidden ليست قابلة للتركيز ولا تحتوي على عناصر قابلة للتركيز",
    help: "يجب ألا يكون العنصر المخفي بـ ARIA قابل للتركيز أو يحتوي على عناصر قابلة للتركيز",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=ar",
    tags: ["cat.name-role-value", "wcag2a", "wcag412"],
    actIds: ["6cfa84"],
  },
  {
    ruleId: "aria-input-field-name",
    description: "يضمن أن كل حقل إدخال ARIA له اسم متاح",
    help: "يجب أن تحتوي حقول إدخال ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-meter-name",
    description: "يضمن أن كل عقدة قياس في ARIA لها اسم متاح",
    help: "يجب أن تحتوي عقد القياس في ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-progressbar-name",
    description: "يضمن أن كل عقدة شريط تقدم في ARIA لها اسم متاح",
    help: "يجب أن تحتوي عقد شريط التقدم في ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag111"],
  },
  {
    ruleId: "aria-required-attr",
    description: "يضمن أن العناصر بأدوار ARIA تحتوي على كل خصائص ARIA المطلوبة",
    help: "يجب توفير خصائص ARIA المطلوبة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["4e8ab6"],
  },
  {
    ruleId: "aria-required-children",
    description: "يضمن أن العناصر بدور ARIA يحتوي على الأدوار الفرعية المطلوبة",
    help: "يجب أن تحتوي بعض الأدوار في ARIA على أدوار فرعية محددة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["bc4a75", "ff89c9"],
  },
  {
    ruleId: "aria-required-parent",
    description: "يضمن أن العناصر بدور ARIA تحتوي على الأدوار الأصلية المطلوبة",
    help: "يجب أن تحتوي بعض الأدوار في ARIA على أدوار أصلية محددة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag131"],
    actIds: ["ff89c9"],
  },
  {
    ruleId: "aria-roledescription",
    description:
      "يضمن استخدام aria-roledescription فقط على العناصر بدور ضمني أو صريح",
    help: "يجب استخدام aria-roledescription على العناصر بدور دلالي",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-roles",
    description: "يضمن أن كل العناصر بخاصية دور تستخدم قيمة صالحة",
    help: "يجب أن تتوافق الأدوار في ARIA مع قيم صالحة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["674b10"],
  },
  {
    ruleId: "aria-text",
    description:
      'يضمن استخدام "role=text" على العناصر بدون أحفاد قابلين للتركيز',
    help: '"role=text" يجب ألا يحتوي على أحفاد قابلين للتركيز',
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=ar",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-toggle-field-name",
    description: "يضمن أن كل حقل تبديل في ARIA له اسم متاح",
    help: "يجب أن تحتوي حقول التبديل في ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412", "ACT"],
    actIds: ["e086e5"],
  },
  {
    ruleId: "aria-tooltip-name",
    description: "يضمن أن كل عقدة تلميح في ARIA لها اسم متاح",
    help: "يجب أن تحتوي عقد التلميح في ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
  },
  {
    ruleId: "aria-treeitem-name",
    description: "يضمن أن كل عقدة عنصر شجرة في ARIA لها اسم متاح",
    help: "يجب أن تحتوي عقد عناصر الشجرة في ARIA على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=ar",
    tags: ["cat.aria", "best-practice"],
  },
  {
    ruleId: "aria-valid-attr",
    description: "يضمن أن الخصائص التي تبدأ بـ aria- هي خصائص ARIA صالحة",
    help: "يجب أن تتوافق خصائص ARIA مع أسماء صالحة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["5f99a7"],
  },
  {
    ruleId: "aria-valid-attr-value",
    description: "يضمن أن كل خصائص ARIA لها قيم صالحة",
    help: "يجب أن تتوافق خصائص ARIA مع قيم صالحة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=ar",
    tags: ["cat.aria", "wcag2a", "wcag412"],
    actIds: ["6a7281"],
  },
  {
    ruleId: "audio-caption",
    description: "يضمن أن عناصر <audio> لها توضيحات",
    help: "يجب أن تحتوي عناصر <audio> على مسار التوضيحات",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=ar",
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
    description: "يضمن صحة خاصية autocomplete وملاءمتها لحقل النموذج",
    help: "يجب استخدام خاصية autocomplete بشكل صحيح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=ar",
    tags: ["cat.forms", "wcag21aa", "wcag135", "ACT"],
    actIds: ["73f2c2"],
  },
  {
    ruleId: "avoid-inline-spacing",
    description:
      "يضمن أن تباعد النص المضبوط من خلال خصائص الأسلوب يمكن ضبطه بأنماط مخصصة",
    help: "يجب أن يكون تباعد النص الداخلي قابل للتعديل باستخدام أنماط مخصصة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=ar",
    tags: ["cat.structure", "wcag21aa", "wcag1412", "ACT"],
    actIds: ["24afc2", "9e45ec", "78fd32"],
  },
  {
    ruleId: "blink",
    description: "يضمن عدم استخدام عناصر <blink>",
    help: "يجب عدم استخدام عناصر <blink> لأنها تم إهمالها",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=ar",
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
    description: "يضمن أن الأزرار لها نص مميز",
    help: "يجب أن تحتوي الأزرار على نص مميز",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=ar",
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
      "يضمن أن كل صفحة لها آلية واحدة على الأقل للمستخدم لتجاوز التنقل والانتقال مباشرة إلى المحتوى",
    help: "يجب أن تحتوي الصفحة على وسائل لتجاوز الكتل المتكررة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=ar",
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
      "يضمن أن التباين بين ألوان الخلفية والأمام تلبي عتبات نسبة التباين في WCAG 2 AA",
    help: "يجب أن تحتوي العناصر على تباين ألوان كاف",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=ar",
    tags: ["cat.color", "wcag2aa", "wcag143", "ACT"],
    actIds: ["afw4f7", "09o5cg"],
  },
  {
    ruleId: "color-contrast-enhanced",
    description:
      "يضمن أن التباين بين ألوان الخلفية والأمام تلبي عتبات نسبة التباين في WCAG 2 AAA",
    help: "يجب أن تحتوي العناصر على تباين ألوان كاف",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=ar",
    tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"],
    actIds: ["09o5cg"],
  },
  {
    ruleId: "css-orientation-lock",
    description:
      "يضمن عدم إغلاق المحتوى لأي توجه عرض محدد، وأن المحتوى قابل للتشغيل في كل توجهات العرض",
    help: "يجب ألا تقفل استعلامات الوسائط في CSS توجه العرض",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=ar",
    tags: ["cat.structure", "wcag134", "wcag21aa", "experimental"],
    actIds: ["b33eff"],
  },
  {
    ruleId: "definition-list",
    description: "يضمن أن عناصر <dl> مهيكلة بشكل صحيح",
    help: "يجب أن تحتوي عناصر <dl> فقط على مجموعات <dt> و<dd> مرتبة بشكل صحيح، <script>، <template> أو <div>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=ar",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "dlitem",
    description: "يضمن أن عناصر <dt> و<dd> محتواة بواسطة <dl>",
    help: "يجب أن تكون عناصر <dt> و<dd> محتواة بواسطة <dl>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=ar",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "document-title",
    description: "يضمن أن كل وثيقة HTML تحتوي على عنصر <title> غير فارغ",
    help: "يجب أن تحتوي الوثائق على عنصر <title> للمساعدة في التنقل",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=ar",
    tags: ["cat.text-alternatives", "wcag2a", "wcag242", "ACT"],
    actIds: ["2779a5"],
  },
  {
    ruleId: "empty-heading",
    description: "يضمن أن العناوين لها نص مميز",
    help: "يجب ألا تكون العناوين فارغة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=ar",
    tags: ["cat.name-role-value", "best-practice"],
    actIds: ["ffd0e9"],
  },
  {
    ruleId: "empty-table-header",
    description: "يضمن أن رؤوس الجداول لها نص مميز",
    help: "يجب ألا يكون نص رأس الجدول فارغاً",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=ar",
    tags: ["cat.name-role-value", "best-practice"],
  },
  {
    ruleId: "focus-order-semantics",
    description:
      "يضمن أن العناصر في ترتيب التركيز لها دور مناسب للمحتوى التفاعلي",
    help: "يجب أن تحتوي العناصر في ترتيب التركيز على دور مناسب",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "best-practice", "experimental"],
  },
  {
    ruleId: "form-field-multiple-labels",
    description: "يضمن أن حقل النموذج لا يحتوي على عناصر تسمية متعددة",
    help: "يجب ألا يحتوي حقل النموذج على عناصر تسمية متعددة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=ar",
    tags: ["cat.forms", "wcag2a", "wcag332"],
  },
  {
    ruleId: "frame-focusable-content",
    description:
      "يضمن أن عناصر <frame> و<iframe> ذات المحتوى القابل للتركيز لا تحتوي على tabindex=-1",
    help: "يجب ألا تحتوي الإطارات ذات المحتوى القابل للتركيز على tabindex=-1",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["akn7bn"],
  },
  {
    ruleId: "frame-tested",
    description: "يضمن أن عناصر <iframe> و<frame> تحتوي على سكريبت axe-core",
    help: "يجب اختبار الإطارات باستخدام axe-core",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=ar",
    tags: ["cat.structure", "review-item", "best-practice"],
  },
  {
    ruleId: "frame-title",
    description: "يضمن أن عناصر <iframe> و<frame> لها اسم متاح",
    help: "يجب أن تحتوي الإطارات على اسم متاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=ar",
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
    description: "يضمن أن عناصر <iframe> و<frame> تحتوي على خاصية عنوان فريدة",
    help: "يجب أن تحتوي الإطارات على خاصية عنوان فريدة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=ar",
    tags: ["cat.text-alternatives", "wcag412", "wcag2a"],
    actIds: ["4b1c6c"],
  },
  {
    ruleId: "heading-order",
    description: "يضمن أن ترتيب العناوين منطقي",
    help: "يجب أن تزيد مستويات العناوين بواحد فقط",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "hidden-content",
    description: "يبلغ المستخدمين عن المحتوى المخفي",
    help: "يجب تحليل المحتوى المخفي على الصفحة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=ar",
    tags: ["cat.structure", "experimental", "review-item", "best-practice"],
  },
  {
    ruleId: "html-has-lang",
    description: "يضمن أن كل وثيقة HTML تحتوي على خاصية lang",
    help: "يجب أن يحتوي العنصر <html> على خاصية lang",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=ar",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["b5c3f8"],
  },
  {
    ruleId: "html-lang-valid",
    description: "يضمن أن خاصية lang لعنصر <html> لها قيمة صالحة",
    help: "يجب أن يحتوي العنصر <html> على قيمة صالحة لخاصية lang",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=ar",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["bf051a"],
  },
  {
    ruleId: "html-xml-lang-mismatch",
    description:
      "تأكد من أن عناصر HTML التي تحتوي على صفات lang و xml:lang صالحة تتفق على لغة الأساس للصفحة",
    help: "يجب أن تحتوي عناصر HTML مع الصفتين lang و xml:lang على نفس اللغة الأساسية",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=ar",
    tags: ["cat.language", "wcag2a", "wcag311", "ACT"],
    actIds: ["5b7ae0"],
  },
  {
    ruleId: "identical-links-same-purpose",
    description: "يضمن أن الروابط ذات الاسم الواضح تخدم نفس الغرض",
    help: "الروابط بنفس الاسم يجب أن تكون لنفس الغرض",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "wcag2aaa", "wcag249"],
    actIds: ["b20e66"],
  },
  {
    ruleId: "image-alt",
    description:
      "يضمن أن عناصر <img> لها نص بديل أو دور من 'none' أو 'presentation'",
    help: "يجب أن تحتوي الصور على نص بديل",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=ar",
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
    description: "يضمن ألا يتم تكرار النص البديل للصورة كنص",
    help: "يجب ألا يتم تكرار نص بديل الصورة كنص",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=ar",
    tags: ["cat.text-alternatives", "best-practice"],
  },
  {
    ruleId: "input-button-name",
    description: "يضمن أن أزرار الإدخال لها نص قابل للتمييز",
    help: "يجب أن تحتوي أزرار الإدخال على نص مميز",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=ar",
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
    description: 'يضمن أن عناصر <input type="image"> لها نص بديل',
    help: "يجب أن تحتوي أزرار الصورة على نص بديل",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=ar",
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
    description: "يضمن أن كل عنصر نموذج له تسمية",
    help: "يجب أن تحتوي عناصر النموذج على تسميات",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=ar",
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
      "يضمن أن العناصر الموسومة من خلال محتواها يجب أن تكون النصوص الظاهرة جزءًا من اسمها المتاح",
    help: "يجب أن يحتوي العناصر على النص الظاهر كجزء من اسمها المتاح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "wcag21a", "wcag253", "experimental"],
    actIds: ["2ee8b8"],
  },
  {
    ruleId: "label-title-only",
    description:
      "يضمن أن كل عنصر نموذج له تسمية مرئية ولا يتم تسميته فقط باستخدام تسميات مخفية، أو خاصيتي العنوان أو aria-describedby",
    help: "يجب أن تحتوي عناصر النموذج على تسمية مرئية",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=ar",
    tags: ["cat.forms", "best-practice"],
  },
  {
    ruleId: "landmark-banner-is-top-level",
    description: "يضمن أن العلامة المميزة الرئيسية في أعلى مستوى",
    help: "يجب ألا تحتوي العلامة المميزة الرئيسية على علامة مميزة أخرى",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-complementary-is-top-level",
    description: "يضمن أن العلامة المميزة التكميلية أو جانبية في أعلى مستوى",
    help: "يجب ألا تحتوي الجانبية على علامة مميزة أخرى",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-contentinfo-is-top-level",
    description: "يضمن أن العلامة المميزة للمعلومات المحتوى في أعلى مستوى",
    help: "يجب ألا تحتوي العلامة المميزة للمعلومات المحتوى على علامة مميزة أخرى",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-main-is-top-level",
    description: "يضمن أن العلامة المميزة الرئيسية في أعلى مستوى",
    help: "يجب ألا تحتوي العلامة المميزة الرئيسية على علامة مميزة أخرى",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-banner",
    description: "يضمن أن الوثيقة تحتوي على واحدة فقط علامة مميزة رئيسية",
    help: "يجب ألا تحتوي الوثيقة على أكثر من علامة رئيسية واحدة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-contentinfo",
    description:
      "يضمن أن الوثيقة تحتوي على واحدة فقط علامة مميزة للمعلومات المحتوى",
    help: "يجب ألا تحتوي الوثيقة على أكثر من علامة مميزة للمعلومات المحتوى واحدة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-no-duplicate-main",
    description: "يضمن أن الوثيقة تحتوي على واحدة فقط علامة مميزة رئيسية",
    help: "يجب ألا تحتوي الوثيقة على أكثر من علامة رئيسية واحدة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-one-main",
    description: "يضمن أن الوثيقة تحتوي على علامة مميزة رئيسية",
    help: "يجب أن تحتوي الوثيقة على علامة رئيسية واحدة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "landmark-unique",
    description:
      "يجب أن تحتوي العلامات المميزة على دور فريد أو مزيج دور/تسمية/عنوان (أي اسم متاح) فريد",
    help: "يضمن أن تكون العلامات المميزة فريدة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "link-in-text-block",
    description:
      "يضمن تمييز الروابط عن النص المحيط بطريقة لا تعتمد على اللون فقط",
    help: "يجب تمييز الروابط دون الاعتماد على اللون",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=ar",
    tags: ["cat.color", "wcag2a", "wcag141"],
  },
  {
    ruleId: "link-name",
    description: "يضمن أن الروابط لها نص مميز",
    help: "يجب أن تحتوي الروابط على نص مميز",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=ar",
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
    description: "يضمن أن القوائم مهيكلة بشكل صحيح",
    help: "يجب أن تحتوي <ul> و <ol> فقط على عناصر <li>، <script> أو <template> مباشرة ",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=ar",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "listitem",
    description: "يضمن استخدام عناصر <li> بشكل دلالي",
    help: "يجب أن تُحتوى عناصر <li> في <ul> أو <ol>",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=ar",
    tags: ["cat.structure", "wcag2a", "wcag131"],
  },
  {
    ruleId: "marquee",
    description: "يضمن عدم استخدام عناصر <marquee>",
    help: "يجب عدم استخدام عناصر <marquee> لأنها تم إهمالها",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=ar",
    tags: ["cat.parsing", "wcag2a", "wcag222"],
  },
  {
    ruleId: "meta-refresh",
    description: 'يضمن عدم استخدام <meta http-equiv="refresh"> لتحديث مؤجل',
    help: "يجب عدم استخدام التحديث المؤجل أقل من 20 ساعة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=ar",
    tags: ["cat.time-and-media", "wcag2a", "wcag221"],
    actIds: ["bc659a", "bisz58"],
  },
  {
    ruleId: "meta-refresh-no-exceptions",
    description: 'يضمن عدم استخدام <meta http-equiv="refresh"> لتحديث مؤجل',
    help: "يجب عدم استخدام التحديث المؤجل",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=ar",
    tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"],
    actIds: ["bisz58"],
  },
  {
    ruleId: "meta-viewport",
    description: 'يضمن أن <meta name="viewport"> لا يعطل تكبير النص والتقريب',
    help: "يجب عدم تعطيل التقريب وتغيير الحجم",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=ar",
    tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "ACT"],
    actIds: ["b4f0c3"],
  },
  {
    ruleId: "meta-viewport-large",
    description: 'يضمن أن <meta name="viewport"> يمكن تكبير نسبة كبيرة',
    help: "يجب أن يتمكن المستخدمون من تكبير وتغيير حجم النص حتى 500%",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=ar",
    tags: ["cat.sensory-and-visual-cues", "best-practice"],
  },
  {
    ruleId: "nested-interactive",
    description:
      "يضمن أن الأدوات التفاعلية ليست متداخلة لأنها لا يتم الإعلان عنها دائمًا بواسطة قارئات الشاشة أو يمكن أن تسبب مشاكل في التركيز لتقنيات المساعدة",
    help: "يجب عدم تداخل الأدوات التفاعلية",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "wcag2a", "wcag412"],
    actIds: ["307n5z"],
  },
  {
    ruleId: "no-autoplay-audio",
    description:
      "يضمن أن عناصر <video> أو <audio> لا تقوم بتشغيل الصوت تلقائيًا لأكثر من 3 ثوان بدون وجود آلية تحكم لإيقاف أو كتم الصوت",
    help: "يجب ألا تقوم عناصر <video> أو <audio> بالتشغيل التلقائي",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=ar",
    tags: ["cat.time-and-media", "wcag2a", "wcag142", "ACT"],
    actIds: ["80f0bf"],
  },
  {
    ruleId: "object-alt",
    description: "يضمن أن عناصر <object> لها نص بديل",
    help: "يجب أن تحتوي عناصر <object> على نص بديل",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=ar",
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
      "يضمن عدم استخدام النص الغامق، المائل وحجم الخط لتنسيق عناصر <p> كعناوين",
    help: "يجب عدم استخدام عناصر <p> المنسقة بمثابة عناوين",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "wcag2a", "wcag131", "experimental"],
  },
  {
    ruleId: "page-has-heading-one",
    description:
      "يضمن أن الصفحة، أو على الأقل أحد إطاراتها يحتوي على عنوان من المستوى الأول",
    help: "يجب أن تحتوي الصفحة على عنوان من المستوى الأول",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=ar",
    tags: ["cat.semantics", "best-practice"],
  },
  {
    ruleId: "presentation-role-conflict",
    description:
      "يضمن أن العناصر المعلمة كتقديمية لا تحتوي على خاصية ARIA عالمية أو tabindex لضمان تجاهلها باستمرار من قبل جميع قارئات الشاشة",
    help: "يجب ضمان تجاهل العناصر المعلمة كتقديمية باستمرار",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=ar",
    tags: ["cat.aria", "best-practice", "ACT"],
    actIds: ["46ca7f"],
  },
  {
    ruleId: "region",
    description: "يضمن احتواء كل محتوى الصفحة بواسطة علامات مميزة",
    help: "يجب احتواء كل محتوى الصفحة بواسطة علامات مميزة",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "role-img-alt",
    description: "يضمن أن عناصر [role='img'] لها نص بديل",
    help: "يجب أن تحتوي عناصر [role='img'] على نص بديل",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=ar",
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
    description: "يضمن استخدام خاصية النطاق بشكل صحيح في الجداول",
    help: "يجب استخدام خاصية النطاق بشكل صحيح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=ar",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "scrollable-region-focusable",
    description:
      "يضمن إمكانية الوصول إلى العناصر التي لها محتوى قابل للتمرير بواسطة لوحة المفاتيح",
    help: "يجب أن تكون المنطقة القابلة للتمرير قابلة للوصول بواسطة لوحة المفاتيح",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "wcag2a", "wcag211"],
    actIds: ["0ssw9k"],
  },
  {
    ruleId: "select-name",
    description: "Ensures select element has an accessible name",
    help: "Select element must have an accessible name",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=ar",
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
    description: "Ensures that server-side image maps are not used",
    help: "Server-side image maps must not be used",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=ar",
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
    description: "Ensure all skip links have a focusable target",
    help: "The skip-link target should exist and be focusable",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "svg-img-alt",
    description:
      "Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",
    help: "<svg> elements with an img role must have an alternative text",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=ar",
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
    description: "Ensures tabindex attribute values are not greater than 0",
    help: "Elements should not have tabindex greater than zero",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=ar",
    tags: ["cat.keyboard", "best-practice"],
  },
  {
    ruleId: "table-duplicate-name",
    description:
      "Ensure the <caption> element does not contain the same text as the summary attribute",
    help: "tables should not have the same summary and caption",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=ar",
    tags: ["cat.tables", "best-practice"],
  },
  {
    ruleId: "table-fake-caption",
    description: "Ensure that tables with a caption use the <caption> element.",
    help: "Data or header cells must not be used to give caption to a data table.",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=ar",
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
      "https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=ar",
    tags: ["wcag22aa", "wcag258", "cat.sensory-and-visual-cues"],
  },
  {
    ruleId: "td-has-header",
    description:
      "Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",
    help: "Non-empty <td> elements in larger <table> must have an associated table header",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=ar",
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
      "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",
    help: "Table cells that use the headers attribute must only refer to cells in the same table",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=ar",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["a25f45"],
  },
  {
    ruleId: "th-has-data-cells",
    description:
      "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",
    help: "Table headers in a data table must refer to data cells",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=ar",
    tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    actIds: ["d0f69e"],
  },
  {
    ruleId: "valid-lang",
    description: "Ensures lang attributes have valid values",
    help: "lang attribute must have a valid value",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=ar",
    tags: ["cat.language", "wcag2aa", "wcag312", "ACT"],
    actIds: ["de46e4"],
  },
  {
    ruleId: "video-caption",
    description: "Ensures <video> elements have captions",
    help: "<video> elements must have captions",
    helpUrl:
      "https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=ar",
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
