import { matchesSelector } from '../../core/utils';

/**
 * recusively walk up the DOM, checking for a node which matches a selector
 *
 * **WARNING:** this should be used sparingly, as it's not even close to being performant
 * @method findUpVirtual
 * @memberof axe.commons.dom
 * @instance
 * @deprecated use axe.utils.closest
 * @param {VirtualNode} element The starting virtualNode
 * @param {String} target The selector for the HTMLElement
 * @return {HTMLElement|null} Either the matching HTMLElement or `null` if there was no match
 */
const findUpVirtual = (element, target) => {
  let parent = element.actualNode;
  // virtualNode will have a shadowId if the element lives inside a shadow DOM or is
  // slotted into a shadow DOM
  if (!element.shadowId && typeof element.actualNode.closest === 'function') {
    // non-shadow DOM elements
    return element.actualNode.closest(target);
  }

  // TODO: remove method to find-up-virtual through walk
  // handle shadow DOM elements and older browsers
  do {
    // recursively walk up the DOM, checking each parent node
    parent = parent.assignedSlot ? parent.assignedSlot : parent.parentNode;
    if (parent && parent.nodeType === 11) {
      parent = parent.host;
    }
  } while (
    parent &&
    !matchesSelector(parent, target) &&
    parent !== document.documentElement
  );

  if (!parent || !matchesSelector(parent, target)) {
    return null;
  }

  return parent;
}

export default findUpVirtual;
