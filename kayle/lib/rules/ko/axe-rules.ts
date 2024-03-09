/* THIS FILE WAS CREATED DYNAMICALLY - DO NOT EDIT */
export const axeRules = [
  {
    ruleId: 'accesskeys',
    description: '모든 accesskey 어트리뷰트 값이 고유한지 확인하세요.',
    help: 'accesskey 어트리뷰트 값은 고유해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/accesskeys?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'area-alt',
    description:
      '이미지 맵의 <area> 엘리먼트가 대체텍스트를 가지고 있는지 확인하세요.',
    help: '활성 <area> 엘리먼트는 반드시 대체텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/area-alt?application=axeAPI&lang=ko',
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
      'ARIA 어트리뷰트가 엘리먼트의 역할(role)에 허용되었는지 확인하세요.',
    help: '엘리먼트는 반드시 허용된 ARIA 어트리뷰트만 사용해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-attr?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5c01ea'],
  },
  {
    ruleId: 'aria-allowed-role',
    description:
      '역할(role) 어트리뷰트가 엘리먼트에 적절한 값을 가지고 있는지 확인하세요.',
    help: 'ARIA 역할(role)은 엘리먼트에 적절해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-allowed-role?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-command-name',
    description:
      '모든 ARIA 버튼, 링크, 메뉴 아이템이 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA 명령 엘리먼트에는 반드시 접근 가능한 이름이 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-command-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['97a4e1'],
  },
  {
    ruleId: 'aria-dialog-name',
    description:
      '모든 ARIA dialog와 alertdialog 노드가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA dialog와 alertdialog 노드는 접근 가능한 이름을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-dialog-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-hidden-body',
    description: "문서 body에 aria-hidden='true'가 없게 하세요.",
    help: "aria-hidden='true'는 반드시 문서 body에 없어야 합니다.",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-body?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-hidden-focus',
    description:
      'aria-hidden 엘리먼트가 초점을 얻을 수 있는(focusable) 엘리먼트를 포함하지 않도록 하세요.',
    help: 'ARIA hidden 엘리먼트는 반드시 초점을 얻을 수 있는(focusable) 엘리먼트를 포함하지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-hidden-focus?application=axeAPI&lang=ko',
    tags: ['cat.name-role-value', 'wcag2a', 'wcag412'],
    actIds: ['6cfa84'],
  },
  {
    ruleId: 'aria-input-field-name',
    description:
      '모든 ARIA 입력 필드가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA 입력 필드에는 반드시 접근 가능한 이름이 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-input-field-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-meter-name',
    description:
      '모든 ARIA meter 노드가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA meter 노드에는 반드시 접근 가능한 이름이 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-meter-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-progressbar-name',
    description:
      '모든 ARIA progressbar 노드가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA progressbar 노드에는 반드시 접근 가능한 이름이 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-progressbar-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag111'],
  },
  {
    ruleId: 'aria-required-attr',
    description:
      'ARIA 역할(role)을 가진 엘리먼트가 필수 ARIA 어트리뷰트를 모두 가지고 있는지 확인하세요',
    help: '필수 ARIA 어트리뷰트는 반드시 제공되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-attr?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['4e8ab6'],
  },
  {
    ruleId: 'aria-required-children',
    description:
      '하위 역할(child role)이 필요한 ARIA 역할(role)을 가진 엘리먼트가 해당 역할(role)을 포함하고 있는지 확인하세요.',
    help: '일부 ARIA 역할(role)은 반드시 특정한 하위 항목들을 포함해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-children?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['bc4a75', 'ff89c9'],
  },
  {
    ruleId: 'aria-required-parent',
    description:
      '상위 역할(parent role)이 필요한 ARIA 역할(role)을 가진 엘리먼트가 해당 역할(role)에 포함되어 있는지 확인하세요.',
    help: '일부 ARIA 역할(role)은 반드시 특정한 상위 항목들에 포함되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-required-parent?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag131'],
    actIds: ['ff89c9'],
  },
  {
    ruleId: 'aria-roledescription',
    description:
      'aria-roledescription이 암묵적 혹은 명시적 역할(role)을 가진 엘리먼트에만 사용되었는지 확인하세요.',
    help: 'aria-roledescription은 의미론적 역할(role)을 가진 엘리먼트에 사용하세요.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roledescription?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-roles',
    description:
      '역할(role) 어트리뷰트를 가진 모든 엘리먼트가 유효한 값을 가지고 있는지 확인하세요.',
    help: 'ARIA 역할(role)은 반드시 유효한 값을 준수해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-roles?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['674b10'],
  },
  {
    ruleId: 'aria-text',
    description:
      '"role=text"가 초점을 얻을 수 있는(focusable) 후손을 가지지 않는 엘리먼트에 사용되었는지 확인하세요.',
    help: '"role=text"는 초점을 얻을 수 있는(focusable) 후손을 가지지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-text?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-toggle-field-name',
    description:
      '모든 ARIA toggle 필드가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA toggle 필드는 접근 가능한 이름을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-toggle-field-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412', 'ACT'],
    actIds: ['e086e5'],
  },
  {
    ruleId: 'aria-tooltip-name',
    description:
      '모든 ARIA tooltip 노드가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA tooltip 노드는 반드시 접근 가능한 이름을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-tooltip-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
  },
  {
    ruleId: 'aria-treeitem-name',
    description:
      '모든 ARIA treeitem 노드가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'ARIA treeitem 노드는 접근 가능한 이름을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-treeitem-name?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'best-practice'],
  },
  {
    ruleId: 'aria-valid-attr-value',
    description: '모든 ARIA 어트리뷰트가 유효한 값을 가지고 있는지 확인하세요.',
    help: 'ARIA 어트리뷰트는 반드시 유효한 값을 준수해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr-value?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['6a7281'],
  },
  {
    ruleId: 'aria-valid-attr',
    description:
      'aria- 로 시작하는 어트리뷰트가 유효한 ARIA 어트리뷰트인지 확인하세요.',
    help: 'ARIA 어트리뷰트는 반드시 유효한 이름을 준수해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/aria-valid-attr?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'wcag2a', 'wcag412'],
    actIds: ['5f99a7'],
  },
  {
    ruleId: 'audio-caption',
    description: '<audio> 엘리먼트가 캡션(자막)을 가지고 있는지 확인하세요.',
    help: '<audio> 엘리먼트는 반드시 캡션(자막) 트랙을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/audio-caption?application=axeAPI&lang=ko',
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
      'autocomplete 어트리뷰트가 올바르고 form 필드에 적합한지 확인하세요.',
    help: 'autocomplete 어트리뷰트는 반드시 올바르게 사용되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/autocomplete-valid?application=axeAPI&lang=ko',
    tags: ['cat.forms', 'wcag21aa', 'wcag135', 'ACT'],
    actIds: ['73f2c2'],
  },
  {
    ruleId: 'avoid-inline-spacing',
    description:
      'style 어트리뷰트를 통해 설정된 텍스트 간격이 사용자 정의 스타일시트를 통해 조정될 수 있는지 확인하세요.',
    help: '인라인 텍스트 간격은 반드시 사용자 정의 스타일시트로 조정 될 수 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/avoid-inline-spacing?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'wcag21aa', 'wcag1412', 'ACT'],
    actIds: ['24afc2', '9e45ec', '78fd32'],
  },
  {
    ruleId: 'blink',
    description: '<blink> 엘리먼트가 사용되지 않도록 하세요.',
    help: '<blink> 엘리먼트는 더 이상 사용되지 않으며 반드시 사용되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/blink?application=axeAPI&lang=ko',
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
    description: '버튼이 인식 가능한 텍스트를 가지고 있는지 확인하세요.',
    help: '버튼에 반드시 인식 가능한 텍스트가 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/button-name?application=axeAPI&lang=ko',
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
      '각 페이지에 사용자가 내비게이션을 건너뛰고 콘텐츠로 바로 이동할 수 있는 최소 하나의 메커니즘이 있는지 확인하세요.',
    help: '페이지에는 반드시 반복 되는 블럭을 건너 뛸 수 있는 수단이 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/bypass?application=axeAPI&lang=ko',
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
      '전경색과 배경색 사이의 대비가 WCAG 2 AAA 명암비 기준치를 충족하는지 확인하세요.',
    help: '엘리먼트는 반드시 충분한 명도 대비를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast-enhanced?application=axeAPI&lang=ko',
    tags: ['cat.color', 'wcag2aaa', 'wcag146', 'ACT'],
    actIds: ['09o5cg'],
  },
  {
    ruleId: 'color-contrast',
    description:
      '전경색과 배경색 사이의 대비가 WCAG 2 AA 명암비 기준치를 충족하는지 확인하세요.',
    help: '엘리먼트는 반드시 충분한 명도 대비를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/color-contrast?application=axeAPI&lang=ko',
    tags: ['cat.color', 'wcag2aa', 'wcag143', 'ACT'],
    actIds: ['afw4f7', '09o5cg'],
  },
  {
    ruleId: 'css-orientation-lock',
    description:
      '콘텐츠가 특정 디스플레이 방향으로 고정되지 않고, 콘텐츠가 모든 디스플레이 방향에서 사용 가능한지 확인하세요.',
    help: 'CSS 미디어쿼리가 디스플레이 방향을 고정하기 위해 사용되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/css-orientation-lock?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'wcag134', 'wcag21aa', 'experimental'],
    actIds: ['b33eff'],
  },
  {
    ruleId: 'definition-list',
    description: '<dl> 엘리먼트가 올바르게 구조화되어 있는지 확인하세요.',
    help: '<dl> 엘리먼트는 반드시 올바르게 정렬된 <dt>와 <dd> 그룹, <script>, <template>, <div> 엘리먼트만 바로 포함해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/definition-list?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'dlitem',
    description: '<dt>와 <dd> 엘리먼트가 <dl>에 포함되어 있는지 확인하세요.',
    help: '<dt>와 <dd> 엘리먼트는 반드시 <dl>에 포함되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/dlitem?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'document-title',
    description:
      '각 HTML 문서가 비어 있지 않은 <title> 엘리먼트를 포함하고 있는지 확인하세요.',
    help: '탐색에 도움이 되도록 문서에는 반드시 <title>이 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/document-title?application=axeAPI&lang=ko',
    tags: ['cat.text-alternatives', 'wcag2a', 'wcag242', 'ACT'],
    actIds: ['2779a5'],
  },
  {
    ruleId: 'empty-heading',
    description: '제목이 인식 가능한 텍스트를 가지고 있는지 확인하세요.',
    help: '제목은 비어있지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-heading?application=axeAPI&lang=ko',
    tags: ['cat.name-role-value', 'best-practice'],
    actIds: ['ffd0e9'],
  },
  {
    ruleId: 'empty-table-header',
    description: '테이블 헤더가 인식 가능한 텍스트를 가지고 있는지 확인하세요.',
    help: '테이블 헤더 텍스트는 반드시 비어있지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/empty-table-header?application=axeAPI&lang=ko',
    tags: ['cat.name-role-value', 'best-practice'],
  },
  {
    ruleId: 'focus-order-semantics',
    description:
      '초점 순서(focus order)에 있는 엘리먼트가 적절한 역할(role)을 가지고 있는지 확인하세요.',
    help: '초점 순서(focus order)에 있는 엘리먼트는 대화형 콘텐츠(interactive contents)에 적합한 역할(role)이 필요합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/focus-order-semantics?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'best-practice', 'experimental'],
  },
  {
    ruleId: 'form-field-multiple-labels',
    description:
      'form 필드가 여러 개의 레이블 엘리먼트를 가지지 않도록 하세요.',
    help: 'form 필드는 반드시 여러 개의 레이블 엘리먼트를 가지지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/form-field-multiple-labels?application=axeAPI&lang=ko',
    tags: ['cat.forms', 'wcag2a', 'wcag332'],
  },
  {
    ruleId: 'frame-focusable-content',
    description:
      '초점을 얻을 수 있는(focusable) 콘텐츠를 가진 <frame>과 <iframe> 엘리먼트에 tabindex=-1이 없게 하세요',
    help: '초점을 얻을 수 있는(focusable) 콘텐츠를 가진 프레임에는 반드시 tabindex=-1 이 없어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-focusable-content?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['akn7bn'],
  },
  {
    ruleId: 'frame-tested',
    description:
      '<iframe>과 <frame> 엘리먼트가 axe-core 스크립트를 포함하고 있는지 확인하세요.',
    help: '프레임이 axe-core로 테스트되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-tested?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'frame-title-unique',
    description:
      '<iframe>과 <frame> 엘리먼트가 고유한 title 어트리뷰트를 포함하고 있는지 확인하세요.',
    help: '프레임에는 고유한 title 어트리뷰트가 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title-unique?application=axeAPI&lang=ko',
    tags: ['cat.text-alternatives', 'wcag412', 'wcag2a'],
    actIds: ['4b1c6c'],
  },
  {
    ruleId: 'frame-title',
    description:
      '<iframe>과 <frame> 엘리먼트가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: '프레임에는 반드시 접근 가능한 이름이 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/frame-title?application=axeAPI&lang=ko',
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
    description: '제목 순서가 의미론적으로 올바른지 확인하세요.',
    help: '제목 수준은 한 단계씩 증가해야만 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/heading-order?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'hidden-content',
    description: '숨겨진 콘텐츠에 대해 사용자에게 알리세요.',
    help: '페이지의 숨겨진 콘텐츠는 분석 될 수 없습니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/hidden-content?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'experimental', 'review-item', 'best-practice'],
  },
  {
    ruleId: 'html-has-lang',
    description: '모든 HTML 문서가 lang 어트리뷰트를 가지고 있는지 확인하세요.',
    help: '<html> 엘리먼트는 반드시 lang 어트리뷰트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-has-lang?application=axeAPI&lang=ko',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['b5c3f8'],
  },
  {
    ruleId: 'html-lang-valid',
    description:
      '<html> 엘리먼트의 lang 어트리뷰트가 유효한 값을 가지고 있는지 확인하세요.',
    help: '<html> 엘리먼트는 반드시 lang 어트리뷰트에 유효한 값을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-lang-valid?application=axeAPI&lang=ko',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['bf051a'],
  },
  {
    ruleId: 'html-xml-lang-mismatch',
    description:
      '유효한 lang과 xml:lang 어트리뷰트를 가진 HTML 엘리먼트가 페이지의 기본 언어와 일치하는지 확인하세요.',
    help: 'lang과 xml:lang을 가진 HTML 엘리먼트는 반드시 동일한 기본 언어를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/html-xml-lang-mismatch?application=axeAPI&lang=ko',
    tags: ['cat.language', 'wcag2a', 'wcag311', 'ACT'],
    actIds: ['5b7ae0'],
  },
  {
    ruleId: 'identical-links-same-purpose',
    description:
      '동일한 접근 가능한 이름을 가지는 링크가 비슷한 용도로 제공되고 있는지 확인하세요.',
    help: '동일한 이름을 가진 링크는 비슷한 용도를 가집니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/identical-links-same-purpose?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'wcag2aaa', 'wcag249'],
    actIds: ['b20e66'],
  },
  {
    ruleId: 'image-alt',
    description:
      '<img> 엘리먼트가 대체텍스트를 가지고 있거나 none 또는 presentation 역할(role)을 가지고 있는지 확인하세요.',
    help: '이미지는 반드시 대체텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-alt?application=axeAPI&lang=ko',
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
    description: '이미지 대체텍스트가 텍스트와 반복되지 않도록 하세요.',
    help: '이미지의 대체텍스트는 텍스트와 반복되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/image-redundant-alt?application=axeAPI&lang=ko',
    tags: ['cat.text-alternatives', 'best-practice'],
  },
  {
    ruleId: 'input-button-name',
    description: '입력 버튼이 인식 가능한 텍스트를 가지고 있는지 확인하세요.',
    help: '입력 버튼은 반드시 인식 가능한 텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-button-name?application=axeAPI&lang=ko',
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
      '<input type="image"> 엘리먼트가 대체텍스트를 가지고 있는지 확인하세요.',
    help: '이미지 버튼은 반드시 대체텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/input-image-alt?application=axeAPI&lang=ko',
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
      '콘텐츠로부터 레이블이 지정되는 엘리먼트가 접근 가능한 이름의 일부로 눈에 보이는 텍스트를 반드시 가지도록 하세요.',
    help: '엘리먼트는 반드시 접근 가능한 이름의 일부로 눈에 보이는 텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-content-name-mismatch?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'wcag21a', 'wcag253', 'experimental'],
    actIds: ['2ee8b8'],
  },
  {
    ruleId: 'label-title-only',
    description:
      '모든 form 엘리먼트가 title이나 aria-describedby 어트리뷰트를 단독으로 사용하여 레이블이 지정되지 않도록 하세요.',
    help: 'form 엘리먼트는 눈에 보이는 레이블을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label-title-only?application=axeAPI&lang=ko',
    tags: ['cat.forms', 'best-practice'],
  },
  {
    ruleId: 'label',
    description: '모든 form 엘리먼트가 레이블을 가지고 있는지 확인하세요.',
    help: 'form 엘리먼트는 반드시 레이블을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/label?application=axeAPI&lang=ko',
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
    description: 'banner 랜드마크가 최상위 레벨에 있는지 확인하세요.',
    help: 'banner 랜드마크는 다른 랜드마크 안에 포함되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-banner-is-top-level?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-complementary-is-top-level',
    description:
      'complementary나 aside 랜드마크가 최상위 레벨에 있는지 확인하세요.',
    help: 'aside는 다른 랜드마크 안에 포함되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-complementary-is-top-level?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-contentinfo-is-top-level',
    description: 'contentinfo 랜드마크가 최상위 레벨에 있는지 확인하세요.',
    help: 'contentinfo 랜드마크는 다른 랜드마크 안에 포함되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-contentinfo-is-top-level?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-main-is-top-level',
    description: 'main 랜드마크가 최상위 레벨에 있는지 확인하세요.',
    help: 'main 랜드마크는 다른 랜드마크 안에 포함되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-main-is-top-level?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-banner',
    description:
      '문서가 최대 하나의 banner 랜드마크를 가지고 있는지 확인하세요.',
    help: '문서는 하나를 초과하는 banner 랜드마크를 가지지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-banner?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-contentinfo',
    description:
      '문서가 최대 하나의 contentinfo 랜드마크를 가지고 있는지 확인하세요.',
    help: '문서는 하나를 초과하는 contentinfo 랜드마크를 가지지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-contentinfo?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-no-duplicate-main',
    description: '문서가 최대 하나의 main 랜드마크를 가지고 있는지 확인하세요.',
    help: '문서는 하나를 초과하는 main 랜드마크를 가지지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-no-duplicate-main?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-one-main',
    description: '문서가 main 랜드마크를 가지고 있는지 확인하세요,',
    help: '문서는 하나의 main 랜드마크를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-one-main?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'landmark-unique',
    description:
      '랜드마크는 고유한 역할(role) 또는 역할(role)/레이블/제목 조합(즉, 접근 가능한 이름)을 가져야 합니다.',
    help: '랜드마크가 고유한지 확인하세요.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/landmark-unique?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'link-in-text-block',
    description: '링크가 색상에 의존하지 않고 구별 될 수 있어야 합니다.',
    help: '링크는 반드시 색상에 의존하지 않는 방식으로 주변 텍스트로부터 구별되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-in-text-block?application=axeAPI&lang=ko',
    tags: ['cat.color', 'wcag2a', 'wcag141'],
  },
  {
    ruleId: 'link-name',
    description: '링크가 인식 가능한 텍스트를 가지고 있는지 확인하세요.',
    help: '링크는 반드시 인식 가능한 텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI&lang=ko',
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
    description: '목록이 올바르게 구조화되어 있는지 확인하세요.',
    help: '<ul>과 <ol>은 반드시 <li>, <script> 또는 <template> 엘리먼트만을 바로 포함해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/list?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'listitem',
    description: '<li> 엘리먼트가 의미론적으로 사용되었는지 확인하세요.',
    help: '<li> 엘리먼트는 반드시 <ul>이나 <ol>에 포함되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/listitem?application=axeAPI&lang=ko',
    tags: ['cat.structure', 'wcag2a', 'wcag131'],
  },
  {
    ruleId: 'marquee',
    description: '<marquee> 엘리먼트가 사용되지 않도록 하세요.',
    help: '<marquee> 엘리먼트는 더 이상 사용되지 않으며 반드시 사용되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/marquee?application=axeAPI&lang=ko',
    tags: ['cat.parsing', 'wcag2a', 'wcag222'],
  },
  {
    ruleId: 'meta-refresh-no-exceptions',
    description:
      'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',
    help: 'Delayed refresh must not be used',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh-no-exceptions?application=axeAPI&lang=ko',
    tags: ['cat.time-and-media', 'wcag2aaa', 'wcag224', 'wcag325'],
    actIds: ['bisz58'],
  },
  {
    ruleId: 'meta-refresh',
    description: '<meta http-equiv="refresh">가 사용되지 않도록 하세요.',
    help: '시간 제한 새로고침은 존재하지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-refresh?application=axeAPI&lang=ko',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag221'],
    actIds: ['bc659a', 'bisz58'],
  },
  {
    ruleId: 'meta-viewport-large',
    description: '<meta name="viewport">가 크기를 조정할 수 있는지 확인하세요.',
    help: '사용자는 텍스트를 최대 500%까지 확대/축소 또는 크기를 조정할 수 있어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport-large?application=axeAPI&lang=ko',
    tags: ['cat.sensory-and-visual-cues', 'best-practice'],
  },
  {
    ruleId: 'meta-viewport',
    description:
      '<meta name="viewport">가 텍스트 크기 조절 및 확대/축소를 비활성화되지 않게 하세요.',
    help: '확대/축소 및 크기 조정은 비활성화되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/meta-viewport?application=axeAPI&lang=ko',
    tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144', 'ACT'],
    actIds: ['b4f0c3'],
  },
  {
    ruleId: 'nested-interactive',
    description: '중첩된 대화형 컨트롤은 스크린리더에 의해 낭독되지 않습니다.',
    help: '대화형 컨트롤이 중첩되지 않게 하세요.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/nested-interactive?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'wcag2a', 'wcag412'],
    actIds: ['307n5z'],
  },
  {
    ruleId: 'no-autoplay-audio',
    description:
      '<video>나 <audio> 엘리먼트가 중지 시키거나 오디오를 음소거하는 제어 메커니즘 없이 3초를 초과하여 오디오를 자동 재생하지 않게 하세요.',
    help: '<video>나 <audio> 엘리먼트는 오디오를 자동 재생하지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/no-autoplay-audio?application=axeAPI&lang=ko',
    tags: ['cat.time-and-media', 'wcag2a', 'wcag142', 'ACT'],
    actIds: ['80f0bf'],
  },
  {
    ruleId: 'object-alt',
    description: '<object> 엘리먼트가 대체텍스트를 가지고 있는지 확인하세요.',
    help: '<object> 엘리먼트는 반드시 대체텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/object-alt?application=axeAPI&lang=ko',
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
    description: 'p 엘리먼트를 스타일링하여 제목으로 사용되지 않도록 하세요.',
    help: '굵은 텍스트, 기울임 꼴, 글꼴 크기를 p 엘리먼트를 제목으로 스타일링하는데 사용하지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/p-as-heading?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'wcag2a', 'wcag131', 'experimental'],
  },
  {
    ruleId: 'page-has-heading-one',
    description:
      '페이지 또는 프레임 중 최소 하나의 프레임이 1 레벨 제목을 포함하고 있는지 확인하세요.',
    help: '페이지는 1 레벨 제목을 포함해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/page-has-heading-one?application=axeAPI&lang=ko',
    tags: ['cat.semantics', 'best-practice'],
  },
  {
    ruleId: 'presentation-role-conflict',
    description:
      '역할(role)이 none이거나 presentation이고 역할(role) 충돌 해결이 필요한 엘리먼트를 표시해 두세요.',
    help: 'none이나 presentation 역할(role) 엘리먼트가 표시되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/presentation-role-conflict?application=axeAPI&lang=ko',
    tags: ['cat.aria', 'best-practice', 'ACT'],
    actIds: ['46ca7f'],
  },
  {
    ruleId: 'region',
    description: '모든 페이지 콘텐츠가 랜드마크에 포함되어 있는지 확인하세요.',
    help: '모든 페이지 콘텐츠는 랜드마크에 포함되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/region?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'role-img-alt',
    description:
      "[role='img'] 엘리먼트가 대체텍스트를 가지고 있는지 확인하세요.",
    help: "[role='img'] 엘리먼트는 대체텍스트를 가저야 합니다.",
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/role-img-alt?application=axeAPI&lang=ko',
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
      'scope 어트리뷰트가 테이블에 올바르게 사용되고 있는지 확인하세요.',
    help: 'scope 어트리뷰트는 올바르게 사용되어야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scope-attr-valid?application=axeAPI&lang=ko',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'scrollable-region-focusable',
    description:
      '스크롤 가능한 콘텐츠를 가진 엘리먼트는 반드시 키보드로 접근 가능해야 합니다.',
    help: '스크롤 가능한 영역이 키보드 접근을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/scrollable-region-focusable?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'wcag2a', 'wcag211'],
    actIds: ['0ssw9k'],
  },
  {
    ruleId: 'select-name',
    description:
      'select 엘리먼트가 접근 가능한 이름을 가지고 있는지 확인하세요.',
    help: 'select 엘리먼트는 반드시 접근 가능한 이름을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/select-name?application=axeAPI&lang=ko',
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
    description: '서버 사이드 이미지 맵이 사용되지 않도록 하세요.',
    help: '서버 사이드 이미지 맵은 반드시 사용되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/server-side-image-map?application=axeAPI&lang=ko',
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
      '모든 건너뛰기 링크가 초점을 얻을 수 있는(focusable) 대상을 가지는지 확인하세요.',
    help: '건너뛰기 링크 대상이 존재하고 초점을 얻을 수 있어야(focusable) 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/skip-link?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'svg-img-alt',
    description:
      '이미지, 그래픽 문서, 그래픽 심볼 역할(role)을 가진 svg 엘리먼트가 접근 가능한 텍스트를 가지고 있는지 확인하세요.',
    help: 'img 역할(role)을 가진 svg 엘리먼트는 접근 가능한 텍스트를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/svg-img-alt?application=axeAPI&lang=ko',
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
    description: 'tabindex 어트리뷰트 값이 0보다 크지 않게 하세요.',
    help: '엘리먼트는 0보다 큰 tabindex를 가지지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/tabindex?application=axeAPI&lang=ko',
    tags: ['cat.keyboard', 'best-practice'],
  },
  {
    ruleId: 'table-duplicate-name',
    description: '테이블이 동일한 summary와 caption을 가지지 않게 하세요.',
    help: '<caption> 엘리먼트는 summary 어트리뷰트와 동일한 텍스트를 포함하지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-duplicate-name?application=axeAPI&lang=ko',
    tags: ['cat.tables', 'best-practice'],
  },
  {
    ruleId: 'table-fake-caption',
    description:
      '캡션이 있는 테이블이 <caption> 엘리먼트를 사용하고 있는지 확인하세요.',
    help: '데이터 테이블에 캡션을 제공하는데 데이터 셀이나 헤더 셀이 반드시 사용되지 않아야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/table-fake-caption?application=axeAPI&lang=ko',
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
      'https://dequeuniversity.com/rules/axe/4.6/target-size?application=axeAPI&lang=ko',
    tags: ['wcag22aa', 'wcag258', 'cat.sensory-and-visual-cues'],
  },
  {
    ruleId: 'td-has-header',
    description:
      '큰 테이블의 비어 있지 않은 각 데이터 셀이 하나 또는 그 이상의 테이블 헤더를 가지고 있는지 확인하세요.',
    help: '3x3보다 큰 테이블에서 모든 비어있지 않은 td 엘리먼트는 반드시 연관된 테이블 헤더를 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-has-header?application=axeAPI&lang=ko',
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
      'headers를 사용하는 테이블의 각 셀이 그 테이블의 다른 셀을 참조하고 있는지 확인하세요.',
    help: 'headers 어트리뷰트를 사용하는 table 엘리먼트의 모든 셀은 반드시 그 동일한 테이블의 다른 셀만 참조해야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/td-headers-attr?application=axeAPI&lang=ko',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['a25f45'],
  },
  {
    ruleId: 'th-has-data-cells',
    description:
      '데이터 테이블의 각 테이블 헤더가 데이터 셀을 참조하고 있는지 확인하세요.',
    help: '모든 th 엘리먼트와 role=columnheader/rowheader를 가진 엘리먼트는 반드시 그것들이 설명하는 데이터 셀을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/th-has-data-cells?application=axeAPI&lang=ko',
    tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
    actIds: ['d0f69e'],
  },
  {
    ruleId: 'valid-lang',
    description: 'lang 어트리뷰트가 유효한 값을 가지고 있는지 확인하세요.',
    help: 'lang 어트리뷰트는 반드시 유효한 값을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/valid-lang?application=axeAPI&lang=ko',
    tags: ['cat.language', 'wcag2aa', 'wcag312', 'ACT'],
    actIds: ['de46e4'],
  },
  {
    ruleId: 'video-caption',
    description: '<video> 엘리먼트가 캡션(자막)을 가지고 있는지 확인하세요.',
    help: '<video> 엘리먼트는 반드시 캡션(자막)을 가져야 합니다.',
    helpUrl:
      'https://dequeuniversity.com/rules/axe/4.6/video-caption?application=axeAPI&lang=ko',
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
