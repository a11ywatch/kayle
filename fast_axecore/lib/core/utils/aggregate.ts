const criteriaMap = {
  minor: 0,
  inapplicable: 0,
  passed: 1,
  moderate: 1,
  cantTell: 2,
  serious: 2,
  critical: 3,
  failed: 3
};

/**
 * From a list of values, find the one with the greatest weight according to
 * the supplied map
 * @param  {Array} params Contains 3 properties:
 * - map: a map indicating the order of values to run in
 *        example: ['small', 'medium', 'large']
 * @param {Array} values of values to take the highest from
 * @param {String} initial: optional starting value
 */
function aggregate(
  map: readonly string[] | string[],
  values: string[],
  initial?: string
) {
  const valSize = values.length;

  if (valSize === 1) {
    return map[criteriaMap[values[0]]];
  }

  const maxPoint = valSize / 2;
  const tailEnd = valSize - 1;
  let mapIndex = initial ? criteriaMap[initial] : 0;

  if (mapIndex !== 3) {
    for (let i = 0; i < valSize; i++) {
      // double ended iterator max
      if (i > maxPoint) {
        break;
      }
      const head = criteriaMap[values[i]];
      const tail = criteriaMap[values[tailEnd - i]];
      const maxV = tail > head ? tail : head;

      if (maxV > mapIndex) {
        mapIndex = maxV;
      }

      if (mapIndex === 3) {
        break;
      }
    }
  }

  return map[mapIndex];
}

export default aggregate;
