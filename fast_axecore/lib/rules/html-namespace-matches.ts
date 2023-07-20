import svgNamespaceMatches from './svg-namespace-matches';

const htmlNamespaceMatches = (node, virtualNode) => !svgNamespaceMatches(node, virtualNode)

export default htmlNamespaceMatches;
