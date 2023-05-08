import { getImplicitRole } from '../commons/aria';

function hasImplicitChromiumRoleMatches(_, virtualNode) {
  return getImplicitRole(virtualNode, { chromium: true }) !== null;
}

export default hasImplicitChromiumRoleMatches;
