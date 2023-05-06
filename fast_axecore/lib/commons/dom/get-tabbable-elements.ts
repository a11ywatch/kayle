import { querySelectorAll } from '../../core/utils';

/**
 * Get all elements (including given node) that are part of the tab order
 * @method getTabbableElements
 * @memberof axe.commons.dom
 * @instance
 * @param  {Object} virtualNode The virtualNode to assess
 * @return {Boolean}
 */
function getTabbableElements(virtualNode) {
  const nodeAndDescendents = querySelectorAll(virtualNode, '*');

  let tabbableElements = [];
  
  // todo: filter off Dom Node iterations
  if(Array.isArray(nodeAndDescendents)) {
    tabbableElements = nodeAndDescendents.filter(vNode => {
      const tabIndex = vNode.actualNode.getAttribute('tabindex');
      const isFocusable = vNode.isFocusable;
      
      const tab =
        tabIndex && !isNaN(parseInt(tabIndex, 10)) ? parseInt(tabIndex) : null;
  
      return tab ? isFocusable && tab >= 0 : isFocusable;
    });
  }

  return tabbableElements;
}

export default getTabbableElements;
