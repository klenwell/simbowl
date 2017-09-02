/*
 * Sumobo Module
 * Based on https://learn.jquery.com/code-organization/concepts/
 */
import World from './World';
import SimBall from './SimBall';
import Graphics from './Graphics';
import Random from './Random';

var Sumobo = (function() {
  // Private variables and functions
  var fps = 30;
  var mspf = 1000 / fps;
  var maxRunTimeMs = 5000;
  var numBalls = 20;

  var startedAt = new Date().getTime();
  var world = null;

  var simCircles = function(canvasSelector) {
    var graphics = new Graphics(canvasSelector);
    world = new World(graphics);
    window.animate = setAnimationHandler();

    for (let i=0; i<numBalls; i++) {
      var randomBall = generateRandomBall();
      world.addBall(randomBall);
    }

    console.debug('start simLoop', startedAt);
    simLoop();
  };

  var generateRandomBall = function() {
    var radius = Random.integer(8, 12);
    var x = Random.integer(radius, world.width-radius);
    var y = Random.integer(radius, world.height-radius);
    var color = Random.choice(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);
    var vx = Random.integer(-radius/2, radius/2);
    var vy = Random.integer(-radius/2, radius/2);
    var randomBall = new SimBall(x, y, radius, color);
    randomBall.setVelocity(vx, vy);
    return randomBall;
  };

  var simLoop = function() {
    var runtime = msRunTime();
    world.update();

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
