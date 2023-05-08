/**
 * Finds failing Checks and combines each help message into an array
 * @param  {Object} nodeData Individual "detail" object to generate help messages for
 * @return {String}          failure messages
 */
function failureSummary(nodeData) {
  const failingChecks = {
    none: nodeData.none.concat(nodeData.all),
    any: nodeData.any
  };

  return Object.keys(failingChecks)
    .map(key => {
      if (!failingChecks[key].length) {
        return;
      }

      const sum = axe._audit.data.failureSummaries[key];

      if (sum && typeof sum.failureMessage === 'function') {
        return sum.failureMessage(
          failingChecks[key].map(check => {
            return check.message || '';
          })
        );
      }
    })
    .filter(i => {
      return i !== undefined;
    })
    .join('\n\n');
}

export default failureSummary;
