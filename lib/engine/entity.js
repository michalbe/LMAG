LMAG.engine.entity = function() {
  this.id = Math.random().toString(16).slice(2);
  this.usedComponents = 0;
  
  LMAG.engine.hooks.fire(LMAG.engine.hooks.entityCreated, this);
};
