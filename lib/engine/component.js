LMAG.engine.component = function(name, config) {
  var that = this;
  that[name] = {};

  LMAG.engine.core.mix(that[name], {name: name}, config);

  //core.registerComponent(name);
};
