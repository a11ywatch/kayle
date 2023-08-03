import { createFrameContext } from './create-frame-context';
import { getNodeFromTree, shadowSelectAll } from '../../utils';

/**
 * Finds frames in context, converts selectors to Element references and pushes unique frames
 * @private
 * @param  {Context} context The instance of Context to operate on
 * @param  {String} type     The "type" of thing to parse, "include" or "exclude"
 * @return {Array}           Parsed array of matching elements
 */
export const parseSelectorArray = (context, type) => {
  const contextLength = context[type].length;
  const result = new Array(contextLength);

  let j = 0;

  for (let i = 0; i < contextLength; i++) {
    const item = context[type][i];
    // Handle nodes
    if (item instanceof window.Node) {
      // @ts-ignore
      if (item.documentElement instanceof window.Node) {
        if (context.flatTree[0]) {
          result[j] = context.flatTree[0];
          j++;
        }
      } else {
        // @ts-ignore
        const nd = getNodeFromTree(item);

        if (nd) {
          result[j] = nd;
          j++;
        }
      }

      // Handle Iframe selection
    } else if (item && item.length) {
      if (item.length > 1) {
        pushUniqueFrameSelector(context, type, item);
      } else {
        for (const nodeItem of shadowSelectAll(item[0])) {
          const nn = getNodeFromTree(nodeItem);

          if (nn) {
            result[j] = nn;
            j++;
          }
        }
      }
    }
  }

  result.length = j;

  return result;
};

/**
 * Unshift selectors of matching iframes
 * @private
 * @param  {Context} context 	  The context object to operate on and assign to
 * @param  {String} type          The "type" of context, 'include' or 'exclude'
 * @param  {Array} selectorArray  Array of CSS selectors, each element represents a frame;
 * where the last element is the actual node
 */
function pushUniqueFrameSelector(context, type, selectorArray) {
  context.frames = context.frames || [];

  const frameSelector = selectorArray.shift();
  const frames = shadowSelectAll(frameSelector);

  frames.forEach(frame => {
    let frameContext = context.frames.find(result => result.node === frame);
    if (!frameContext) {
      frameContext = createFrameContext(frame, context);
      context.frames.push(frameContext);
    }
    frameContext[type].push(selectorArray);
  });
}
