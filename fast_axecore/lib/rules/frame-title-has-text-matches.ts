import { sanitize } from '../commons/text';

function frameTitleHasTextMatches(node) {
  return !!sanitize(node.getAttribute('title'));
}

export default frameTitleHasTextMatches;
