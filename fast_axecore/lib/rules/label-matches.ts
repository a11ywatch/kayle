function labelMatches(_, virtualNode) {
  if (virtualNode.props.nodeName !== 'input' || !virtualNode.hasAttr('type')) {
    return true;
  }

  return !['HIDDEN', 'IMAGE', 'BUTTON', 'SUBMIT', 'RESET'].includes(
    virtualNode.attr('type')
  );
}

export default labelMatches;
