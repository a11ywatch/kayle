import { findUpVirtual } from '../commons/dom';

function landmarkHasBodyContextMatches(node, virtualNode) {
  // Filter elements that, within certain contexts, don't map their role.
  // e.g. a <header> inside a <main> is not a banner, but in the <body> context it is
  return (
    node.hasAttribute('role') || !findUpVirtual(virtualNode, 'article, aside, main, nav, section')
  );
}

export default landmarkHasBodyContextMatches;
