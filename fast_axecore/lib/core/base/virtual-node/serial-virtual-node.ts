import AbstractVirtualNode from './abstract-virtual-node';
import { assert, validInputTypes } from '../../utils';

class SerialVirtualNode extends AbstractVirtualNode {
  _props = undefined;
  _attrs = undefined;
  /**
   * Convert a serialised node into a VirtualNode object
   * @param {Object} node Serialised node
   */
  constructor(serialNode) {
    super();
    this._props = normaliseProps(serialNode);
    this._attrs = normaliseAttrs(serialNode);
  }

  // Accessof for DOM node properties
  get props() {
    return this._props;
  }

  /**
   * Get the value of the given attribute name.
   * @param {String} attrName The name of the attribute.
   * @return {String|null} The value of the attribute or null if the attribute does not exist
   */
  attr(attrName) {
    return this._attrs[attrName] ?? null;
  }

  /**
   * Determine if the element has the given attribute.
   * @param {String} attrName The name of the attribute
   * @return {Boolean} True if the element has the attribute, false otherwise.
   */
  hasAttr(attrName) {
    return this._attrs[attrName] !== undefined;
  }

  /**
   * Return a list of attribute names for the element.
   * @return {String[]}
   */
  get attrNames() {
    return Object.keys(this._attrs);
  }
}

const nodeNamesToTypes = {
  '#cdata-section': 2,
  '#text': 3,
  '#comment': 8,
  '#document': 9,
  '#document-fragment': 11
};
const nodeTypeToName = {};
const nodeNames = Object.keys(nodeNamesToTypes);

for (const nodeName of nodeNames) {
  nodeTypeToName[nodeNamesToTypes[nodeName]] = nodeName;
}

/**
 * Convert between serialised props and DOM-like properties
 * @param {Object} serialNode
 * @return {Object} normalProperties
 */
function normaliseProps(serialNode) {
  let nodeName = serialNode.nodeName ?? nodeTypeToName[serialNode.nodeType];
  const nodeType =
    serialNode.nodeType ?? nodeNamesToTypes[serialNode.nodeName] ?? 1;

  assert(
    typeof nodeType === 'number',
    `nodeType has to be a number, got '${nodeType}'`
  );
  assert(
    typeof nodeName === 'string',
    `nodeName has to be a string, got '${nodeName}'`
  );

  nodeName = nodeName.toLowerCase();
  let type = null;
  if (nodeName === 'input') {
    type = (
      serialNode.type ||
      (serialNode.attributes && serialNode.attributes.type) ||
      ''
    ).toLowerCase();

    if (!validInputTypes().includes(type)) {
      type = 'text';
    }
  }

  return {
    attributes: undefined,
    ...serialNode,
    type,
    nodeType,
    nodeName
  };
}

/**
 * Convert between serialised attributes and DOM-like attributes
 * @param {Object} serialNode
 * @return {Object} normalAttributes
 */
function normaliseAttrs({ attributes = {} }) {
  const attrMap = {
    htmlFor: 'for',
    className: 'class'
  };

  return Object.keys(attributes).reduce((attrs, attrName) => {
    const value = attributes[attrName];
    assert(
      typeof value !== 'object' || value === null,
      `expects attributes not to be an object, '${attrName}' was`
    );

    if (value !== undefined) {
      const mappedName = attrName in attrMap ? attrMap[attrName] : attrName;
      attrs[mappedName] = value !== null ? String(value) : null;
    }
    return attrs;
  }, {});
}

export default SerialVirtualNode;
