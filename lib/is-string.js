'use strict';

module.exports = function (x) {
  return x === '' || !!x && (typeof x === 'string' ? true : x instanceof String);
};