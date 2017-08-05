var Sumobo = (function() {
  // Private variables and functions
  var $container = null;

  var simCircles = function(containerSelector) {
    $container = $(containerSelector);
    console.log('TODO: Sumobo.circleSim', $container);
  };

  // Public API
  return {
      simCircles: simCircles
  };
})();

module.exports = Sumobo;
