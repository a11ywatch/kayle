import getExplicitRole from '../aria/get-explicit-role';

/**
 * Determines if an element is an aria textbox element
 * @method isAriaTextbox
 * @memberof axe.commons.forms
 * @param {VirtualNode|Element} node Node to determine if aria textbox
 * @returns {Bool}
 */
const isAriaTextbox = node => getExplicitRole(node) === 'textbox';

export default isAriaTextbox;
