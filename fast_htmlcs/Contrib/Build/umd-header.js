(function (root, factory) { if (typeof define === 'function' && define.amd) { define('htmlcs', factory); } else if (typeof exports === 'object') {  module.exports = factory(); } else { var exports = factory(); for (var prop in exports) { root[prop] = exports[prop]; } }
}(this, function () { var _global = { translation: {} };
