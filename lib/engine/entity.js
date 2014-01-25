var LMAG = LMAG || {};
LMAG.engine = LMAG.engine || {};

LMAG.engine.entity = function() {
  this.id = Math.random();
  this.usedComponents = 0;
};
