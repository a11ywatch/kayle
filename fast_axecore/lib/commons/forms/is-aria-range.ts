import getExplicitRole from '../aria/get-explicit-role';

const rangeRoles = ['progressbar', 'scrollbar', 'slider', 'spinbutton'];

/**
 * Determines if an element is an aria range element
 * @method isAriaRange
 * @memberof axe.commons.forms
 * @param {VirtualNode|Element} node Node to determine if aria range
 * @returns {Bool}
 */
const isAriaRange = node => rangeRoles.includes(getExplicitRole(node));

export default isAriaRange;
