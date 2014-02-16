LMAG.components.body = (function() {
  var bodyComponent = new LMAG.engine.component('body', {
    x: 1,
    y: 1
  });
  
  return function(config) {
    bodyComponent.body.width = config.width || 1;
    bodyComponent.body.height = config.height || 1;
    bodyComponent.body.offsetX = config.offsetX || 0;
    bodyComponent.body.offsetY = config.offsetY || 0;
    bodyComponent.body.x = config.x || 1;
    bodyComponent.body.y = config.y || 1;
    return  bodyComponent;
  };
})();
