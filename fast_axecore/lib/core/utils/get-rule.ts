/**
 * Get an axe rule by id.
 * @param {String} ruelId the rule id
 * @return {Rule}
 */
function getRule(ruleId) {
  // @ts-ignore TODO: es-modules_audit
  const rule = axe._audit.rules.find(rule => rule.id === ruleId);

  if (!rule) {
    throw new Error(`Cannot find rule by id: ${ruleId}`);
  }

  return rule;
}

export default getRule;
