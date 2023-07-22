import { requiredOwned, getExplicitRole } from '../commons/aria';

function ariaRequiredChildrenMatches(_, virtualNode) {
  return !!requiredOwned(getExplicitRole(virtualNode, { dpub: true }));
}

export default ariaRequiredChildrenMatches;
