import { hasContentVirtual, getComposedParent } from '../../commons/dom';

const allowlist = ['SCRIPT', 'HEAD', 'TITLE', 'NOSCRIPT', 'STYLE', 'TEMPLATE'];

function hiddenContentEvaluate(node, _, virtualNode) {
  if (
    !allowlist.includes(node.nodeName.toUpperCase()) &&
    hasContentVirtual(virtualNode)
  ) {
    const styles = window.getComputedStyle(node);
    if (styles.getPropertyValue('display') === 'none') {
      return undefined;
    } else if (styles.getPropertyValue('visibility') === 'hidden') {
      // Check if visibility isn't inherited
      const parent = getComposedParent(node);
      const parentStyle = parent && window.getComputedStyle(parent);
      if (
        !parentStyle ||
        parentStyle.getPropertyValue('visibility') !== 'hidden'
      ) {
        return undefined;
      }
    }
  }
  return true;
}

export default hiddenContentEvaluate;
