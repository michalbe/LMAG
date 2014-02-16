var entity;
var GAME = function() {

  LMAG.engine.hooks.on(LMAG.engine.hooks.entityCreated, function(data) {
    console.log('entity created - ', data.id);
  });
  entity = new LMAG.engine.entity();
  
  LMAG.engine.core.addComponents(
    entity, 
    LMAG.components.body({
      width: 20,
      height: 29,
      offsetX: 17,
      offsetY: 10,
      x: 0,
      y: 0
    })
  );

};
