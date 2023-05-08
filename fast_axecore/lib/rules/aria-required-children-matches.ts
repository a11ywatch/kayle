import { requiredOwned, getExplicitRole } from '../commons/aria';

function ariaRequiredChildrenMatches(_, virtualNode) {
  const role = getExplicitRole(virtualNode, { dpub: true });
  return !!requiredOwned(role);
}

export default ariaRequiredChildrenMatches;
