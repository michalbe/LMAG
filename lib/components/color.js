LMAG.components.color = (function() {
  var colorComponent = new LMAG.engine.component('color', {
    value: '#BADA55'
  });

  return function(config) {
    // Gimme mooar colors!
    colorComponent.color.value = config.color || "#BADA55";
    return colorComponent;
  };
})();
