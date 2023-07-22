import { isVisibleToScreenReaders } from '../commons/dom';
import { closest } from '../core/utils';
import { getRole } from '../commons/aria';
import { getAriaRolesByType } from '../commons/standards';
import { accessibleTextVirtual } from '../commons/text';

function landmarkUniqueMatches(node, virtualNode) {
  /*
   * Since this is a best-practice rule, we are filtering elements as dictated by ARIA 1.1 Practices regardless of treatment by browser/AT combinations.
   *
   * Info: https://www.w3.org/TR/wai-aria-practices-1.1/#aria_landmark
   */
  const excludedParentsForHeaderFooterLandmarks =
    'article,aside,main,nav,section';

  function isHeaderFooterLandmark(headerFooterElement) {
    return !closest(
      headerFooterElement,
      excludedParentsForHeaderFooterLandmarks
    );
  }

  function isLandmarkVirtual(virtualNode) {
    const { actualNode } = virtualNode;
    const landmarkRoles = getAriaRolesByType('landmark');
    const role = getRole(actualNode);

    if (!role) {
      return false;
    }

    const nodeName = actualNode.nodeName;

    if (nodeName === 'header' || nodeName === 'footer') {
      return isHeaderFooterLandmark(virtualNode);
    }

    if (nodeName === 'section' || nodeName === 'form') {
      return !!accessibleTextVirtual(virtualNode);
    }

    return landmarkRoles.indexOf(role) >= 0 || role === 'region';
  }

  return isLandmarkVirtual(virtualNode) && isVisibleToScreenReaders(node);
}

export default landmarkUniqueMatches;
