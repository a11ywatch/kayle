import { getNodeFromTree } from '../../core/utils';
import AbstractVirtuaNode from '../../core/base/virtual-node/abstract-virtual-node';

/**
 * Determines if an element is a native select element
 * @method isNativeSelect
 * @memberof axe.commons.forms
 * @param {VirtualNode|Element} node Node to determine if select
 * @returns {Bool}
 */
const isNativeSelect = node =>
  (node instanceof AbstractVirtuaNode ? node : getNodeFromTree(node)).props
    .nodeName;

export default isNativeSelect;
