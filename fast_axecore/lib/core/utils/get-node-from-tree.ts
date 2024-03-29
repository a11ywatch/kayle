import cache from '../base/cache';

/**
 * Return a single node from the virtual dom tree
 *
 * @param {Object} vNode The flattened, virtual DOM tree
 * @param {Node}   node  The HTML DOM node
 */
function getNodeFromTree(
  vNode: string | HTMLElement | Element | ParentNode,
  node?: string
) {
  const el = node || vNode;

  return cache.has('nodeMap') ? cache.get('nodeMap').get(el) : null;
}

export default getNodeFromTree;
