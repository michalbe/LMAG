var LMAG = LMAG || {};
LMAG.engine = LMAG.engine || {};

LMAG.engine.entity = function() {
  this.id = Math.random().toString().slice(2);
  this.usedComponents = 0;
  
  LMAG.engine.hooks.fire(LMAG.engine.hooks.HOOKS.entityCreated, this);
};
