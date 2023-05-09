const { writeFile: write } = require('fs');
const { dirname: getDirName } = require('path');
const makeDir = require('make-dir');
const { promisify } = require('util');

const writeFile = promisify(write);

/**
 * Create file with given contents at specified location
 * @method createFile
 * @param {String} path file path, inclusive of file name
 * @param {String} content contents of the file
 * @returns {Promise}
 */
module.exports = (path, content) =>
  makeDir(getDirName(path)).then(() => writeFile(path, content));
