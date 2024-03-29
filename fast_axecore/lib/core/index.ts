/*exported axe, commons */
var axe = axe || {};
axe.version = '<%= pkg.version %>';

// @ts-ignore
if (typeof define === 'function' && define.amd) {
  // @ts-ignore Explicitly naming the module to avoid mismatched anonymous define() modules when injected in a page
  define('axe-core', [], () => axe);
}

if (
  typeof module === 'object' &&
  module.exports &&
  // @ts-ignore
  typeof axeFunction.toString === 'function'
) {
  axe.source =
    '(' +
    // @ts-ignore
    axeFunction.toString() +
    ')(typeof window === "object" ? window : this);';
  module.exports = axe;
}

if (typeof window.getComputedStyle === 'function') {
  window.axe = axe;
}

function SupportError(error) {
  this.name = 'SupportError';
  this.cause = error.cause;
  this.message = `\`${error.cause}\` - feature unsupported in your environment.`;
  if (error.ruleId) {
    this.ruleId = error.ruleId;
    this.message += ` Skipping ${this.ruleId} rule.`;
  }
  this.stack = new Error().stack;
}
SupportError.prototype = Object.create(Error.prototype);
SupportError.prototype.constructor = SupportError;
