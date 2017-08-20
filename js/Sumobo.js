var Sumobo = (function() {
  // Private variables and functions
  var $container = null;
  var fps = 30;
  var mspf = 1000 / fps;
  var startedAt = new Date().getTime();
  var maxRunTimeMs = 5000;

  var simCircles = function(containerSelector) {
    $container = $(containerSelector);
    console.log('TODO: Sumobo.circleSim', $container);
    console.log(window, document);
    main();
  };

  var main = function() {
    console.debug('start simLoop', startedAt);
    window.animate = setAnimationHandler();
    simLoop();
  };

  var simLoop = function() {
    var runtime = msRunTime();
    console.debug('simLoop');
    //world.update();
    //world.draw();

    if ( maxRunTimeMs && runtime > maxRunTimeMs ) {
      console.debug('stop simLoop', msRunTime());
      return;
    }
    else {
      window.animate(simLoop);
    }
  };

  var setAnimationHandler = function() {
    var frameHandler =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      null;

    if ( ! frameHandler ) {
      throw 'requestAnimationFrame not supported by this Browser';
    }
    else {
      return frameHandler;
    }
  }

  var msRunTime = function() {
    return unixTimestamp() - startedAt;
  };

  var unixTimestamp = function() {
    return new Date().getTime();
  };

  // Public API
  return {
    simCircles: simCircles
  };
})();

module.exports = Sumobo;
