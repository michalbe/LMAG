var GAME = function() {
  LMAG.engine.hooks.on(LMAG.engine.hooks.HOOKS.entityCreated, function(data){
    console.log('entity created - ', data.id);
  });
  var entity = new LMAG.engine.entity();
};
