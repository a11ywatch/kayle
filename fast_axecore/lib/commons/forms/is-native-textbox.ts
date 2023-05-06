import { getNodeFromTree } from '../../core/utils';
import AbstractVirtuaNode from '../../core/base/virtual-node/abstract-virtual-node';

const nonTextInputTypes = [
  'button',
  'checkbox',
  'color',
  'file',
  'hidden',
  'image',
  'password',
  'radio',
  'reset',
  'submit'
];

/**
 * Determines if an element is a native textbox element
 * @method isNativeTextbox
 * @memberof axe.commons.forms
 * @param {VirtualNode|Element} node Node to determine if textbox
 * @returns {Bool}
 */
function isNativeTextbox(node) {
  const nodeName = (
    node instanceof AbstractVirtuaNode ? node : getNodeFromTree(node)
  ).props.nodeName;

  // TODO: nodeName should be caps
  return (
    nodeName === 'textarea' ||
    (nodeName === 'input' &&
      !nonTextInputTypes.includes((node.attr('type') || '').toLowerCase()))
  );
}

export default isNativeTextbox;
