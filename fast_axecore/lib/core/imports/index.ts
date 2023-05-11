import { CssSelectorParser } from 'css-selector-parser';
import doT from '@deque/dot';
import memoize from 'memoizee';

// prevent striping newline characters from strings (e.g. failure
// summaries). value must be synced with build/configure.js
doT.templateSettings.strip = false;

if (window.Uint32Array) {
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some
  if (!('some' in window.Uint32Array.prototype)) {
    Object.defineProperty(window.Uint32Array.prototype, 'some', {
      value: Array.prototype.some
    });
  }

  if (!('reduce' in window.Uint32Array.prototype)) {
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce
    Object.defineProperty(window.Uint32Array.prototype, 'reduce', {
      value: Array.prototype.reduce
    });
  }
}

/**
 * Namespace `axe.imports` which holds required external dependencies
 *
 * @namespace imports
 * @memberof axe
 */
export { CssSelectorParser, doT, memoize };
