'use strict';
module.exports = (x) => {
  return x ===''
    || !!x
    && (typeof x === 'string' ?  true : x instanceof String)
}
