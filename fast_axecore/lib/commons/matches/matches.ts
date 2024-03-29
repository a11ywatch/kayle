import fromDefinition from './from-definition';

/**
 * Check if a virtual node matches a definition
 *
 * Example:
 * ```js
 * // Match a single nodeName:
 * axe.commons.matches(vNode, 'div')
 *
 * // Match one of multiple nodeNames:
 * axe.commons.matches(vNode, ['ul', 'ol'])
 *
 * // Match a node with nodeName 'button' and with aria-hidden: true:
 * axe.commons.matches(vNode, {
 *   nodeName: 'button',
 *   attributes: { 'aria-hidden': 'true' }
 * })
 *
 * // Mixed input. Match button nodeName, input[type=button] and input[type=reset]
 * axe.commons.matches(vNode, ['button', {
 *  nodeName: 'input', // nodeName match isn't case sensitive
 *  properties: { type: ['button', 'reset'] }
 * }])
 * ```
 *
 * @deprecated HTMLElement is deprecated, use VirtualNode instead
 *
 * @namespace matches renamed to matchesV internal to avoid mutating
 * @memberof axe.commons
 * @param {HTMLElement|VirtualNode} vNode virtual node to verify attributes against constraints
 * @param {Array<ElementDefinition>|String|Object|Function|Regex} definition
 * @return {Boolean} true/ false based on if vNode passes the constraints expected
 */
function matchesV(vNode, definition) {
  return fromDefinition(vNode, definition);
}

matchesV.hasAccessibleName = undefined;
matchesV.attributes = undefined;
matchesV.condition = undefined;
matchesV.explicitRole = undefined;
matchesV.fromDefinition = undefined;
matchesV.fromFunction = undefined;
matchesV.fromPrimative = undefined;
matchesV.implicitRole = undefined;
matchesV.nodeName = undefined;
matchesV.properties = undefined;
matchesV.semanticRole = undefined;

export default matchesV;
