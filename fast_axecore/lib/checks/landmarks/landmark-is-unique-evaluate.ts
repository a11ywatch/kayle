import { getRole } from '../../commons/aria';
import { accessibleTextVirtual } from '../../commons/text';

function landmarkIsUniqueEvaluate(node, options, virtualNode) {
  const role = getRole(node);
  const accessibleText = accessibleTextVirtual(virtualNode);

  this.data({
    role: role,
    accessibleText: accessibleText ? accessibleText.toLowerCase() : null
  });
  this.relatedNodes([node]);

  return true;
}

export default landmarkIsUniqueEvaluate;
