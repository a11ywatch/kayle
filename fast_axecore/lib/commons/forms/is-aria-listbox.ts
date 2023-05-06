import getExplicitRole from '../aria/get-explicit-role';

/**
 * Determines if an element is an aria listbox element
 * @method isAriaListbox
 * @memberof axe.commons.forms
 * @param {VirtualNode|Element} node Node to determine if aria listbox
 * @returns {Bool}
 */
const isAriaListbox = node => getExplicitRole(node) === 'listbox';

export default isAriaListbox;
