LMAG.engine.entity = function() {
  this.id = Math.random().toString(36).slice(2).toUpperCase();
  this.usedComponents = 0;
  
  LMAG.engine.hooks.fire(LMAG.engine.hooks.entityCreated, this);
};
