const definitions = [
  {
    name: 'NA',
    value: 'inapplicable',
    priority: 0,
    group: 'inapplicable'
  },
  {
    name: 'PASS',
    value: 'passed',
    priority: 1,
    group: 'passes'
  },
  {
    name: 'CANTTELL',
    value: 'cantTell',
    priority: 2,
    group: 'incomplete'
  },
  {
    name: 'FAIL',
    value: 'failed',
    priority: 3,
    group: 'violations'
  }
];

const constants = {
  helpUrlBase: 'https://dequeuniversity.com/rules/',
  gridSize: 200,
  results: [],
  resultGroups: [],
  resultGroupMap: {},
  impact: ['minor', 'moderate', 'serious', 'critical'],
  preload: {
    /**
     * array of supported & preload(able) asset types.
     */
    assets: ['cssom', 'media'],
    /**
     * timeout value when resolving preload(able) assets
     */
    timeout: 10000
  },
  allOrigins: '<unsafe_all_origins>',
  sameOrigin: '<same_origin>',
  NA: undefined,
  PASS: undefined,
  CANTTELL: undefined,
  FAIL: undefined,
  CANTTELL_GROUP: undefined,
  NA_GROUP: undefined,
  FAIL_PRIO: undefined,
  CANTTELL_PRIO: undefined,
  PASS_PRIO: undefined,
  FAIL_GROUP: undefined
};

for (const definition of definitions) {
  const name = definition.name;
  const value = definition.value;
  const priority = definition.priority;
  const group = definition.group;

  constants[name] = value;
  constants[name + '_PRIO'] = priority;
  constants[name + '_GROUP'] = group;

  constants.results[priority] = value;
  constants.resultGroups[priority] = group;

  constants.resultGroupMap[value] = group;
}

export default constants;
