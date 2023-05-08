import { requiredContext, getExplicitRole } from '../commons/aria';

function ariaRequiredParentMatches(_, virtualNode) {
  const role = getExplicitRole(virtualNode);
  return !!requiredContext(role);
}

export default ariaRequiredParentMatches;
