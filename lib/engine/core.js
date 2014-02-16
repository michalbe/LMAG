LMAG.engine.core = function() {

  var mix = function(object) {
    var args = Array.prototype.slice.call(arguments, 1);
    var addProperty = function(source) {
      for (var property in source) {
        if (source.hasOwnProperty(property)) {
          object[property] = source[property];
        }
      }
    };

    for (var i = 0, l = args.length; i < l; i++) {
      addProperty(args[i]);
    }

    return object;
  };

  // component manager
  var components = {};
  var registerComponent = (function() {
    var lastMask = 0.5;
    return function(name) {
      lastMask = components[name] = lastMask * 2;
      console.log('component >' + name + '< registered');
    }
  })();
  

  var addComponent = function(object) {
    
  };

  return {
    systems: [],

    // number of frames from the start
    ticker: 0,
    
    // methods
    mix: mix,
    registerComponent: registerComponent
  };
}();
