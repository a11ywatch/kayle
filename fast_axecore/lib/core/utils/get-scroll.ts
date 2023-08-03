import memoize from './memoize';

const isScrollable = (style, prop) =>
  ['scroll', 'auto'].includes(style.getPropertyValue(prop));

/**
 * Get the scroll position of given element
 * @method getScroll
 * @memberof axe.utils
 * @param {Element} node
 * @param {buffer} (Optional) allowed negligence in overflow
 * @returns {Object | undefined}
 */
const getScroll = (elm, buffer = 0) => {
  const overflowX = elm.scrollWidth > elm.clientWidth + buffer;
  const overflowY = elm.scrollHeight > elm.clientHeight + buffer;

  /**
   * if there is neither `overflow-x` or `overflow-y`
   * -> return
   */
  if (!(overflowX || overflowY)) {
    return;
  }

  const style = window.getComputedStyle(elm);
  const scrollableX = isScrollable(style, 'overflow-x');
  const scrollableY = isScrollable(style, 'overflow-y');

  /**
   * check direction of `overflow` and `scrollable`
   */
  if ((overflowX && scrollableX) || (overflowY && scrollableY)) {
    return {
      elm,
      top: elm.scrollTop,
      left: elm.scrollLeft
    };
  }
};

export default memoize(getScroll);
