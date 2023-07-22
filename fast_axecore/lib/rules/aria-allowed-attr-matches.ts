function ariaAllowedAttrMatches(_, virtualNode) {
  const aria = /^aria-/;
  const attrs = virtualNode.attrNames;

  if (attrs.length) {
    return attrs.some(attr => aria.test(attr));
  }

  return false;
}

export default ariaAllowedAttrMatches;
