const { config } = require('@swc/core/spack');

module.exports = config({
  entry: {
    web: __dirname + '/lib/core/index.ts'
  },
  output: {
    path: __dirname + '/tmp'
  },
  module: {}
});
