function duplicateIdAfter(results) {
  var uniqueIds = [];

  return results.filter(r => {
    // todo: move to map
    if (uniqueIds.indexOf(r.data) === -1) {
      uniqueIds.push(r.data);
      return true;
    }
    return false;
  });
}

export default duplicateIdAfter;
