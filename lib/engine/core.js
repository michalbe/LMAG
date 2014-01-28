//var LMAG = LMAG || {};
//LMAG.engine = LMAG.engine || {};
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

  return {
    systems: [],

    // number of frames from the start
    ticker: 0,
    
    // methods
    mix: mix
  };
}();
