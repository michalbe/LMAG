LMAG.components.shape = (function() {
  var shapeComponent = new LMAG.engine.component('shape', {});

  return function(config) {
    var data = {
      type: config.type || 1
    };

    switch(data.type) {
      case 1: //circle
        data.radius = config.radius || 100;
        break;
      case 2: //rectangle
        data.width = config.width || 100;
        data.height = config.height || 100;
    }
  
    shapeComponent.shape = data;
    return shapeComponent;
  };
})();
