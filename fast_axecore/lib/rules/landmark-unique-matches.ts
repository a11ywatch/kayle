import { isVisibleToScreenReaders } from '../commons/dom';
import { closest } from '../core/utils';
import { getRole } from '../commons/aria';
import { getAriaRolesByType } from '../commons/standards';
import { accessibleTextVirtual } from '../commons/text';

const landmarkUniqueMatches = (node, virtualNode) => {
  /*
   * Since this is a best-practice rule, we are filtering elements as dictated by ARIA 1.1 Practices regardless of treatment by browser/AT combinations.
   *
   * Info: https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark
   */
  const excludedParentsForHeaderFooterLandmarks =
    'article,aside,main,nav,section';

  let isLandmarkVirtual = false;

  const { actualNode } = virtualNode;
  const nodeName = actualNode.nodeName;
  const role = getRole(actualNode);

  if (!role) {
    isLandmarkVirtual = false;
  } else if (nodeName === 'header' || nodeName === 'footer') {
    isLandmarkVirtual = !closest(
      virtualNode,
      excludedParentsForHeaderFooterLandmarks
    );
  } else if (nodeName === 'section' || nodeName === 'form') {
    isLandmarkVirtual = !!accessibleTextVirtual(virtualNode);
  } else {
    isLandmarkVirtual =
      getAriaRolesByType('landmark').indexOf(role) >= 0 || role === 'region';
  }

  return isLandmarkVirtual && isVisibleToScreenReaders(node);
}

export default landmarkUniqueMatches;
