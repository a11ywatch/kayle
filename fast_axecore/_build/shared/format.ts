const { format } = require('prettier');
const prettierConfig = require('../../package.json').prettier;

/**
 * Format the given `content` string, optionally using `filename` for error messages.
 *
 * @param {String} content
 * @param {String} [filename]
 */

module.exports = (content, filename) =>
  format(content, { ...prettierConfig, filepath: filename });
