import { getExplicitRole } from '../commons/aria';

function ariaAllowedRoleMatches(_, virtualNode) {
  return (
    getExplicitRole(virtualNode, {
      dpub: true,
      fallback: true
    }) !== null
  );
}

export default ariaAllowedRoleMatches;
