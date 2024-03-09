/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: 'accesskeys',
    description: 'מוודא שכל ערך תכונה של accesskey יהיה ייחודי',
    help: 'ערך התכונה accesskey צריך להיות ייחודי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'area-alt',
    description: 'מוודא שלאלמנטים של <area> של מפות תמונה יש טקסט חלופי',
    help: 'אלמנטים פעילים של <area> מוכרחים להיות עם טקסט חלופי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=he',
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
    description: 'מוודא שתכונות ARIA מורשות לתפקיד אלמנט',
    help: 'אלמנטים מוכרחים להרשות רק תכונות ARIA',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5c01ea'],
  },
  {
    ruleId: 'aria-allowed-role',
    description: 'מוודא שלתכונת תפקיד יש ערך מתאים לאלמנט',
    help: 'תפקיד ARIA צריך להתאים לאלמנט',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=he',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-command-name',
    description: 'מוודא שלכל כפתור, קישור ופריט תפריט של ARIA יש שם נגיש',
    help: 'על פקודות ARIA להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['97a4e1'],
  },
  {
    ruleId: 'aria-dialog-name',
    description: 'מוודא שלכל רכיב תיבת דיאלוג או תיבת התראה של ARIA יש שם נגיש',
    help: 'על רכיבי תיבת דיאלוג או תיבת התראה של ARIA להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-hidden-body',
    description: "מוודא ש-aria-hidden='true' לא מוצג בגוף המסמך.",
    help: "אסור ש-aria-hidden='true' יוצג בגוף המסמך",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-hidden-focus',
    description: 'מוודא שאלמנטים של aria-hidden לא מכילים אלמנטים בני מיקוד',
    help: 'אסור שאלמנט סמוי של ARIA יכיל אלמנטים בני מיקוד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=he',
    tags: ['cat.name-role-value', 'wcag2a', 'wcag412'],
    actIds: ['6cfa84'],
  },
  {
    ruleId: 'aria-input-field-name',
    description: 'מוודא שלכל שדה הזנה של ARIA יש שם נגיש',
    help: 'שדות הזנה של ARIA מוכרחים להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-meter-name',
    description: 'מוודא שלכל רכיב meter של ARIA יש שם נגיש',
    help: 'על רכיבי meter של ARIA להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-progressbar-name',
    description: 'מוודא שלכל רכיב progressbar של ARIA יש שם נגיש',
    help: 'על רכיבי progressbar של ARIA להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-required-attr',
    description: 'מוודא שלאלמנטים עם תפקידי ARIA יש את כל תכונות ARIA הדרושות',
    help: 'יש לספק את תכונות ARIA הדרושות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['4e8ab6'],
  },
  {
    ruleId: 'aria-required-children',
    description:
      'מוודא שאלמנטים עם תפקיד ARIA שדורשים תפקידי ילדים מכילים אותם',
    help: 'תפקידי ARIA מסוימים מוכרחים להכיל ילדים מסוימים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['bc4a75', 'ff89c9'],
  },
  {
    ruleId: 'aria-required-parent',
    description:
      'מוודא שאלמנטים עם תפקיד ARIA שדורשים תפקידי הורים מכילים אותם',
    help: 'תפקידי ARIA מסוימים מוכרחים להכיל הורים מסוימים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['ff89c9'],
  },
  {
    ruleId: 'aria-roledescription',
    description:
      'מוודא ש-aria-roledescription הוא בשימוש רק על אלמנטים עם תפקיד מרומז או מפורש',
    help: 'aria-roledescription מוכרח להיות על אלמנטים עם תפקיד סמנטי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-roles',
    description: 'מוודא שכל האלמנטים עם תכונת role משתמשים בערך קביל',
    help: 'תפקידי ARIA שבשימוש מוכרחים להיות עם ערכים קבילים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['674b10'],
  },
  {
    ruleId: 'aria-text',
    description:
      'מוודא ש-"role=text" הוא בשימוש על אלמנטים ללא צאצאים בני מיקוד',
    help: 'על "role=text" להיות ללא צאצאים בני מיקוד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=he',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-toggle-field-name',
    description: 'מוודא שלכל שדה toggle של ARIA יש שם נגיש',
    help: 'על שדות toggle של ARIA להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-tooltip-name',
    description: 'מוודא שלכל רכיב tooltip של ARIA יש שם נגיש',
    help: 'על רכיבי toolrip של ARIA להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-treeitem-name',
    description: 'מוודא שלכל רכיב treeitem של ARIA יש שם נגיש',
    help: 'רכיבי treeitem של ARIA צריכים להיות עם שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=he',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-valid-attr-value',
    description: 'מוודא שלכל תכונות ARIA יש ערכים קבילים',
    help: 'תכונות ARIA מוכרחות להתאים לערכים קבילים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['6a7281'],
  },
  {
    ruleId: 'aria-valid-attr',
    description: 'מוודא שתכונות שמתחילות עם aria- הן תכונות ARIA קבילות',
    help: 'תכונות ARIA מוכרחות להתאים לשמות קבילים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=he',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5f99a7'],
  },
  {
    ruleId: 'audio-caption',
    description: 'מוודא שלאלמנטים של <audio> יש כתוביות',
    help: 'אלמנטים של <audio> מוכרחים להיות עם רצועת כתוביות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=he',
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
    description: 'מוודא שתכונת autocomplete נכונה ומתאימה לשדה הטופס',
    help: 'יש להשתמש בתכונה autocomplete באופן נכון',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=he',
    tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
    actIds: ['73f2c2'],
  },
  {
    ruleId: 'avoid-inline-spacing',
    description:
      'מוודא שאפשר לשנות את ריווח הטקסט שהוגדר בתכונות העיצוב לפי stylesheets מותאמים אישית',
    help: 'ריווח טקסט בשורה מוכרח להיות ניתן להתאמה עם stylesheets מותאמים אישית',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=he',
    tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
    actIds: ['24afc2', '9e45ec', '78fd32'],
  },
  {
    ruleId: 'blink',
    description: 'מוודא שאלמנטים של <blink> אינם בשימוש',
    help: 'אלמנטים של <blink> אסורים ואין להשתמש בהם',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=he',
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
    description: 'מוודא שללחצנים יש טקסט מובן',
    help: 'לחצנים מוכרחים להיות עם טקסט מובן',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=he',
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
      'מוודא שלכל עמוד יש לפחות מנגנון אחד למשתמש לעקוף ניווט ולקפוץ ישירות לתוכן',
    help: 'לעמוד מוכרחים להיות אמצעים לעקיפת חסימות חוזרות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=he',
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
      'מוודא שהניגוד בין צבעי הרקע והחזית עונה על דרישות הסף עבור יחסי הניגוד של WCAG 2 AAA',
    help: 'לאלמנטים צריך להיות ניגוד צבעים מספק',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=he',
    tags: ['cat.color', 'wcag2aaa', 'wcag146', 'ACT'],
    actIds: ['09o5cg'],
  },
  {
    ruleId: 'color-contrast',
    description:
      'מוודא שהניגוד בין צבעי הרקע והחזית עונה על דרישות הסף עבור יחסי הניגוד של WCAG 2 AA',
    help: 'לאלמנטים צריך להיות ניגוד צבעים מספק',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=he',
    tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT'],
    actIds: ['afw4f7', '09o5cg'],
  },
  {
    ruleId: 'css-orientation-lock',
    description:
      'מוודא שהתוכן אינו נעול לכיוון תצוגה מסוים, והתוכן הוא בר ביצוע בכל כיווני התצוגה',
    help: 'אסור ששאילתות CSS מדיה ינעלו את כיוון התצוגה',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=he',
    tags: ['cat.structure', 'wcag134', 'wcag21aa', 'experimental'],
    actIds: ['b33eff'],
  },
  {
    ruleId: 'definition-list',
    description: 'מוודא שאלמנטים של <dl> בנויים נכונה',
    help: 'אלמנטים של <dl> חייבים להכיל רק באופן ישיר קבוצות <dt> וכן <dd> שהוזמנו כראוי, <script>, <template> או אלמנטים של <div>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=he',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'dlitem',
    description: 'מוודא שאלמנטים של <dt> וכן <dd> מוכלים על ידי <dl>',
    help: 'אלמנטים של <dt> וכן <dd> מוכלים על ידי <dl>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=he',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'document-title',
    description: 'מוודא שכל מסמך HTML מכיל אלמנט לא-ריק של <title>',
    help: 'מסמכים מוכרחים להיות עם אלמנט <title> כדי לסייע בניווט',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=he',
    tags: ['cat.text-alternatives', 'wcag2a', 'wcag242', 'ACT'],
    actIds: ['2779a5'],
  },
  {
    ruleId: 'empty-heading',
    description: 'מוודא שלכותרות יש טקסט מובן',
    help: 'אסור שכותרות יהיו ריקות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=he',
    tags: ['cat.name-role-value', 'best-practice'],
    actIds: ['ffd0e9'],
  },
  {
    ruleId: 'empty-table-header',
    description: 'מוודא שלכותרות של טבלה יש טקסט מובן',
    help: 'אסור שכותרות של טבלה יהיו ריקות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=he',
    tags: ['cat.name-role-value', 'best-practice'],
  },
  {
    ruleId: 'focus-order-semantics',
    description: 'מוודא שלאלמנטים בסדר המיקוד יש תפקיד מתאים לתוכן אינטראקטיבי',
    help: 'אלמנטים בסדר המיקוד צריכים להיות עם תפקיד מתאים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'best-practice', 'experimental'],
  },
  {
    ruleId: 'form-field-multiple-labels',
    description: 'מוודא ששדות הזנה הם בלי מספר אלמנטים של תווית',
    help: 'אסור ששדות הזנה יהיו עם מספר אלמנטים של תווית',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=he',
    tags: ['cat.forms', 'wcag2a', 'wcag332'],
  },
  {
    ruleId: 'frame-focusable-content',
    description:
      'מוודא שלאלמנטים של <frame> ושל <iframe> עם תוכן בר מיקוד אין tabindex=-1',
    help: 'אסור שלמסגרות עם תוכן בר מיקוד יהיה tabindex=-1',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['akn7bn'],
  },
  {
    ruleId: 'frame-tested',
    description:
      'מוודא שאלמנטים של <iframe> ושל <frame> מכילים את סקריפט ה-axe-core',
    help: 'על מסגרות להיבחן עם axe-core',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=he',
    tags: ['cat.structure', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'frame-title-unique',
    description:
      'מוודא שאלמנטים של <iframe> ושל <frame> מכילים תכונת כותרת ייחודית',
    help: 'מסגרות מוכרחות להיות עם תכונת כותרת ייחודית',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=he',
    tags: ['cat.text-alternatives', 'wcag412', 'wcag2a'],
    actIds: ['4b1c6c'],
  },
  {
    ruleId: 'frame-title',
    description: 'מוודא שלאלמנטים של <iframe> ושל <frame> יש שמות נגישים',
    help: 'מסגרות מוכרחות להיות עם שמות נגישים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=he',
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
    description: 'מוודא שסדר הכותרות נכון סמנטית',
    help: 'הדרגות של הכותרות צריכות לגדול רק באחת',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'hidden-content',
    description: 'מיידע את המשתמשים על תוכן נסתר.',
    help: 'יש לנתח תוכן נסתר בעמוד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=he',
    tags: ['cat.structure', 'experimental', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'html-has-lang',
    description: 'מוודא שלכל מסמך HTML יש תכונת lang',
    help: 'אלמנט <html> מוכרח להיות עם תכונת lang',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=he',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['b5c3f8'],
  },
  {
    ruleId: 'html-lang-valid',
    description: 'מוודא שלתכונת lang של האלמנט <html> יש ערך תקין',
    help: 'אלמנט <html> מוכרח להיות עם ערך תקין לתכונה lang',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=he',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['bf051a'],
  },
  {
    ruleId: 'html-xml-lang-mismatch',
    description:
      'מוודא שאלמנטים של HTML עם תכונות lang ו-xml:lang תקינות מסכימים על שפת הבסיס של העמוד',
    help: 'אלמנטים של HTML עם lang ו-xml:lang מוכרחים להיות עם אותה שפת בסיס',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=he',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['5b7ae0'],
  },
  {
    ruleId: 'identical-links-same-purpose',
    description: 'מוודא שקישורים עם אותו שם נגיש משרתים מטרה דומה',
    help: 'קישורים עם אותו השם מוכרחים לשרת מטרה דומה',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'wcag2aaa', 'wcag249'],
    actIds: ['b20e66'],
  },
  {
    ruleId: 'image-alt',
    description:
      'מוודא שלאלמנטים של <img> יש טקסט חלופי או תפקיד של none או תצוגה',
    help: 'תמונות מוכרחות להיות עם טקסט חלופי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=he',
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
    description: 'מוודא שהחלופה של התמונה לא חוזרת על עצמה בטקסט',
    help: 'טקסט חלופי של תמונות לא אמור לחזור על עצמו בטקסט',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=he',
    tags: ['cat.text-alternatives', 'best-practice'],
  },
  {
    ruleId: 'input-button-name',
    description: 'מוודא שללחצני קלט יש טקסט מובן',
    help: 'לחצני קלט מוכרחים להיות עם טקסט מובן',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=he',
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
    description: 'מוודא שלאלמנטים של <input type="image"> יש טקסט חלופי',
    help: 'לחצני תמונה מוכרחים להיות עם טקסט חלופי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=he',
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
      'מוודא שאלמנטים שמקבלים תווית דרך התוכן שלהם עם טקסט גלוי כחלק משמם הנגיש',
    help: 'אלמנטים מוכרחים להיות עם טקסט גלוי כחלק משמם הנגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'wcag21a', 'wcag253', 'experimental'],
    actIds: ['2ee8b8'],
  },
  {
    ruleId: 'label-title-only',
    description:
      'מוודא שלכל אלמנט של טופס יש תווית נראית ולא מתויג רק בשימוש בתוויות נסתרות, או בשימוש בתכונות של כותרת או aria-describedby',
    help: 'אלמנטים של טופס צריכים תווית ברורה וגלויה',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=he',
    tags: ['cat.forms', 'best-practice'],
  },
  {
    ruleId: 'label',
    description: 'מוודא שלכל אלמנט של טופס יש תווית',
    help: 'אלמנטים של טופס מוכרחים להיות עם תוויות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=he',
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
    description: 'מוודא שבאנר ציון הדרך הוא ברמה העליונה בהיררכיה',
    help: 'באנר ציון הדרך לא צריך להיות מוכל בתוך ציון דרך אחר',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-complementary-is-top-level',
    description: 'מוודא שציון הדרך המשלים או aside הוא ברמה העליונה',
    help: 'אין להכיל aside בתוך ציון דרך אחר',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-contentinfo-is-top-level',
    description: 'מוודא שציון דרך מידע-תוכן הוא ברמה העליונה בהיררכיה',
    help: 'ציון הדרך מידע-תוכן לא צריך להיות מוכל בתוך ציון דרך אחר',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-main-is-top-level',
    description: 'מוודא שציון הדרך הראשי הוא ברמה העליונה בהיררכיה',
    help: 'ציון הדרך הראשי לא צריך להיות מוכל בתוך ציון דרך אחר',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-banner',
    description: 'מוודא שלמסמך יש לכל היותר באנר ציון דרך אחד',
    help: 'המסמך לא צריך להיות עם יותר מבאנר ציון דרך אחד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-contentinfo',
    description: 'מוודא שלמסמך יש לכל היותר ציון דרך מידע-תוכן אחד',
    help: 'מסמך לא צריך להיות עם יותר מציון דרך מידע-תוכן אחד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-main',
    description: 'מוודא שלמסמך יש ציון דרך אחד מרכזי לכל היותר',
    help: 'במסמך לא נכון שיהיה יותר מציון דרך ראשי אחד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-one-main',
    description: 'מוודא שלמסמך יש ציון דרך מרכזי',
    help: 'במסמך צריך להיות ציון דרך ראשי אחד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-unique',
    description:
      "לציוני דרך צריך להיות תפקיד או שילוב של תפקיד/תווית/כותרת (לדוג' שם נגיש) ייחודיים",
    help: 'מוודא שציוני דרך הם ייחודיים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'link-in-text-block',
    description: 'מוודא שקישורים נבדלים מהטקסט מסביב באופן שאינו נסמך על צבע',
    help: 'על קישורים להיות נבדלים מבלי להסתמך על צבע',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=he',
    tags: ['cat.color', 'wcag2a', 'wcag141'],
  },
  {
    ruleId: 'link-name',
    description: 'מוודא שלקישורים יש טקסט מובן',
    help: 'קישורים מוכרחים להיות עם טקסט מובן',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=he',
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
    description: 'מוודא שרשימות בנויות נכונה',
    help: '<ul> וכן <ol> חייבים להכיל רק באופן ישיר אלמנטים של <li>, <script> וכן <template>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=he',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'listitem',
    description: 'מוודא שאלמנטים של <li> הם בשימוש סמנטי',
    help: 'אלמנטים של <li> חייבים להיות מוכלים על ידי <ul> או <ol>',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=he',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'marquee',
    description: 'מוודא שאלמנטים של <marquee> אינם בשימוש',
    help: 'אלמנטים של <marquee> אסורים ואין להשתמש בהם',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=he',
    tags: ['cat.parsing', 'wcag2a', 'wcag222'],
  },
  {
    ruleId: 'meta-refresh-no-exceptions',
    description:
      'מוודא ש-<meta http-equiv="refresh"> אינו בשימוש עבור ריענון מושהה',
    help: 'אסור שריענון מושהה יתקיים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=he',
    tags: ['cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325'],
    actIds: ['bisz58'],
  },
  {
    ruleId: 'meta-refresh',
    description:
      'מוודא ש-<meta http-equiv="refresh"> אינו בשימוש עבור ריענון מושהה',
    help: 'אסור להשתמש בריענון מושהה של פחות מ-20 שעות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=he',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag221'],
    actIds: ['bc659a', 'bisz58'],
  },
  {
    ruleId: 'meta-viewport-large',
    description: 'מוודא ש-<meta name="viewport"> יכול להגדיל בכמות משמעותית',
    help: 'משתמשים צריכים להצליח להגדיל את הטקסט עד 500%',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=he',
    tags: ['cat.sensory-and-visual-cues', 'best-practice'],
  },
  {
    ruleId: 'meta-viewport',
    description: 'מוודא ש-<meta name="viewport"> לא מנטרל הגדלת טקסט ומסך',
    help: 'אין לבטל את הפונקציות של הגדלת המסך וטקסט',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=he',
    tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
    actIds: ['b4f0c3'],
  },
  {
    ruleId: 'nested-interactive',
    description:
      'מוודא שמנגנוני בקרה לא מקוננים משום שקוראי מסך לא תמיד מתריעים עליהם או שהם יכולים לגרום לבעיות מיקוד עבור טכנולוגיות מסייעות',
    help: 'אסור שמנגנוני בקרה לא פעילים יהיו מקוננים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'wcag2a', 'wcag412'],
    actIds: ['307n5z'],
  },
  {
    ruleId: 'no-autoplay-audio',
    description:
      'מוודא שאלמנטים של <video> או <audio> אינם מפעילים שמע באופן אוטומטי למשך יותר מ-3 שניות ללא מנגנון בקרה לעצירה או להנמכת עוצמת השמע',
    help: 'אלמנטים של <video> או <audio> אינם מופעלים באופן אוטומטי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=he',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag142', 'ACT'],
    actIds: ['80f0bf'],
  },
  {
    ruleId: 'object-alt',
    description: 'מוודא שלאלמנטים של <object> יש טקסט חלופי',
    help: 'אלמנטים של <object> מוכרחים להיות עם טקסט חלופי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=he',
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
      'מוודא שטקסט דגוש, נטוי וגודל פונט לא בשימוש בעיצוב אלמנטים של <p> ככותרת',
    help: 'אסור שאלמנטים מעוצבים של <p> ישמשו ככותרות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
  },
  {
    ruleId: 'page-has-heading-one',
    description: 'מוודא שהעמוד, או לפחות אחת המסגרות שלו, מכילים כותרת רמה אחת',
    help: 'העמוד אמור להכיל כותרת רמה אחת',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=he',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'presentation-role-conflict',
    description:
      'מסמן אלמנטים שהתפקיד שלהם הוא none או presentation ושמפעיל את הטריגר של פתרון תפקידים מתנגשים.',
    help: 'על אלמנטים של תפקיד none או presentation להיות מסומנים',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=he',
    tags: ['cat.aria', 'best-practice', 'ACT'],
    actIds: ['46ca7f'],
  },
  {
    ruleId: 'region',
    description: 'מוודא שכל תוכן העמוד בתוך ציוני דרך',
    help: 'כל תוכן העמוד צריך להיות בתוך ציוני דרך',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'role-img-alt',
    description: "מוודא שלאלמנטים של [role='img'] יש טקסט חלופי",
    help: "אלמנטים של [role='img'] עם תפקיד של תמונה חייבים להיות עם טקסט חלופי",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=he',
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
    description: 'מוודא שמשתמשים בתכונה תחום נכונה על טבלאות',
    help: 'יש להשתמש בתכונה תחום נכונה',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=he',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'scrollable-region-focusable',
    description: 'מוודא שאלמנטים שיש להם תוכן בר גלילה נגישים על ידי מקלדת',
    help: 'אזורי גלילה מוכרחים להיות עם נגישות של מקלדת',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['0ssw9k'],
  },
  {
    ruleId: 'select-name',
    description: 'מוודא שלאלמנט הנבחר יש שם נגיש',
    help: 'לאלמנט הנבחר צריך להיות שם נגיש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=he',
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
    description: 'מוודא שמפות תמונה צד-שרת לא יהיו בשימוש',
    help: 'אסור שמפות תמונה צד-שרת יהיו בשימוש',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=he',
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
    description: 'מוודא שלכל קישורי דילוג לתוכן יש מטרה ברת מיקוד',
    help: 'המטרה של קישור דילוג לתוכן צריכה להתקיים ולהיות ברת מיקוד',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'svg-img-alt',
    description:
      'מוודא שלאלמנטים של <svg> עם תפקיד תמונה, מסמך גרפי או סמל גרפי יש טקסט נגיש',
    help: 'אלמנטים של <svg> עם תפקיד של תמונה חייבים להיות עם טקסט חלופי',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=he',
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
    description: 'מוודא שערכי התכונה tabindex אינם גדולים מ-0',
    help: 'אלמנטים לא צריכים להיות עם tabindex גדול מאפס',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=he',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'table-duplicate-name',
    description: 'מוודא שהאלמנט <caption> לא מכיל אותו טקסט כמו התכונה תקציר',
    help: 'לטבלאות לא צריכים להיות אותם תקציר טבלה וכיתוב',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=he',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'table-fake-caption',
    description: 'מוודא שטבלאות עם כיתוב משתמשות באלמנט <caption>.',
    help: 'תאי מידע או כותרת לא אמורים לשמש כדי לתת כיתוב לטבלת מידע.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=he',
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
      'https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=he',
    tags: ['wcag22aa', 'wcag258', 'cat.sensory-and-visual-cues'],
  },
  {
    ruleId: 'td-has-header',
    description:
      'מוודא שלכל תאי מידע לא-ריק ב-<table> גדולה מ-3X3 יש כותרות טבלה אחת או יותר',
    help: 'אלמנטים לא ריקים של <td> ב-<table> גדולה יותר חייבים להיות מקושרים עם כותרת טבלה ',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=he',
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
      'מוודא שכל תא בטבלה שמשתמש בתכונת הכותרת מתייחס רק לתאים אחרים באותה טבלה',
    help: 'תאי טבלה שמשתמשים בתכונת כותרות חייבים להתייחס לתאים באותה הטבלה',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=he',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['a25f45'],
  },
  {
    ruleId: 'th-has-data-cells',
    description:
      'מוודא שלאלמנטים של <th> ולאלמנטים עם role=columnheader/rowheader יש תאי מידע שהם מתארים',
    help: 'כותרות טבלה בטבלת מידע חייבים להתייחס לתאי מידע',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=he',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['d0f69e'],
  },
  {
    ruleId: 'valid-lang',
    description: 'מוודא שלתכונות lang יש ערכים קבילים',
    help: 'לתכונה lang חייב להיות ערך קביל',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=he',
    tags: ['cat.language', 'wcag2aa', 'wcag312', 'ACT'],
    actIds: ['de46e4'],
  },
  {
    ruleId: 'video-caption',
    description: 'מוודא שלאלמנטים של <video> יש כתוביות',
    help: 'אלמנטים של <video> מוכרחים להיות עם כתוביות',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=he',
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
