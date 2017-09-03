/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _World = __webpack_require__(6);

var _World2 = _interopRequireDefault(_World);

var _SimBall = __webpack_require__(5);

var _SimBall2 = _interopRequireDefault(_SimBall);

var _Graphics = __webpack_require__(2);

var _Graphics2 = _interopRequireDefault(_Graphics);

var _Random = __webpack_require__(4);

var _Random2 = _interopRequireDefault(_Random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Sumobo Module
 * Based on https://learn.jquery.com/code-organization/concepts/
 */
var Sumobo = function () {
  // Private variables and functions
  var fps = 30;
  var mspf = 1000 / fps;
  var maxRunTimeMs = 5000;
  var numBalls = 20;

  var startedAt = new Date().getTime();
  var world = null;

  var simCircles = function simCircles(canvasSelector) {
    var graphics = new _Graphics2.default(canvasSelector);
    world = new _World2.default(graphics);
    window.animate = setAnimationHandler();

    for (var i = 0; i < numBalls; i++) {
      var randomBall = generateRandomBall();
      world.addBall(randomBall);
    }

    console.debug('start simLoop', startedAt);
    simLoop();
  };

  var generateRandomBall = function generateRandomBall() {
    var radius = _Random2.default.integer(8, 12);
    var x = _Random2.default.integer(radius, world.width - radius);
    var y = _Random2.default.integer(radius, world.height - radius);
    var color = _Random2.default.choice(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);
    var vx = _Random2.default.integer(-radius / 2, radius / 2);
    var vy = _Random2.default.integer(-radius / 2, radius / 2);
    var randomBall = new _SimBall2.default(x, y, radius, color);
    randomBall.setVelocity(vx, vy);
    return randomBall;
  };

  var simLoop = function simLoop() {
    var runtime = msRunTime();
    world.update();

    if (maxRunTimeMs && runtime > maxRunTimeMs) {
      console.debug('stop simLoop', msRunTime());
      return;
    } else {
      window.animate(simLoop);
    }
  };

  var setAnimationHandler = function setAnimationHandler() {
    var frameHandler = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;

    if (!frameHandler) {
      throw 'requestAnimationFrame not supported by this Browser';
    } else {
      return frameHandler;
    }
  };

  var msRunTime = function msRunTime() {
    return unixTimestamp() - startedAt;
  };

  var unixTimestamp = function unixTimestamp() {
    return new Date().getTime();
  };

  // Public API
  return {
    simCircles: simCircles
  };
}();

module.exports = Sumobo;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Circle Class
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var Circle = function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    this.radius = radius;
  }

  _createClass(Circle, [{
    key: "calcArea",
    value: function calcArea() {
      return Math.PI * this.radius * this.radius;
    }
  }, {
    key: "r",
    get: function get() {
      return this.radius;
    }
  }, {
    key: "area",
    get: function get() {
      return this.calcArea();
    }
  }]);

  return Circle;
}();

module.exports = Circle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Graphics Classes
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
/*
 * Raphael
 * https://github.com/DmitryBaranovskiy/raphael
 * http://dmitrybaranovskiy.github.io/raphael/reference.html
 */
var RaphaelAPI = function () {
  function RaphaelAPI(canvasSelector) {
    _classCallCheck(this, RaphaelAPI);

    var $canvas = $(canvasSelector)[0];
    this.width = $canvas.offsetWidth;
    this.height = $canvas.offsetHeight;
    this.paper = Raphael($canvas, this.width, this.height);
  }

  _createClass(RaphaelAPI, [{
    key: "ballSprite",
    value: function ballSprite(ball) {
      return RaphaelSprite.ball(this.paper, ball);
    }
  }]);

  return RaphaelAPI;
}();

var RaphaelSprite = function () {
  _createClass(RaphaelSprite, null, [{
    key: "ball",
    value: function ball(paper, _ball) {
      var element = paper.circle(_ball.x, _ball.y, _ball.r).attr({
        fill: _ball.color,
        stroke: "none",
        opacity: _ball.opacity || 1.0
      });
      return new RaphaelSprite(paper, element, _ball);
    }
  }]);

  function RaphaelSprite(paper, element, soul) {
    _classCallCheck(this, RaphaelSprite);

    // soul is the object itself to which the sprite belongs.
    this.paper = paper;
    this.element = element;
    this.soul = soul;
  }

  _createClass(RaphaelSprite, [{
    key: "update",
    value: function update() {
      this.element.attr({
        cx: this.soul.x,
        cy: this.soul.y
      });
      this.element.toFront();
    }
  }]);

  return RaphaelSprite;
}();

module.exports = RaphaelAPI;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Physics Module
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var Physics = function () {
  // Private variables and functions
  var collideBalls = function collideBalls(ball1, ball2) {
    // calculate restitution
    // TODO: add elasticity attr to circles
    var ball1Elasticity = 1.0;
    var ball2Elasticity = 1.0;
    var restitution = ball1Elasticity * ball2Elasticity;

    // invert masses
    var invertedMass1 = 1.0 / ball1.m;
    var invertedMass2 = 1.0 / ball2.m;

    // get minimum translation distance
    var delta = ball1.point().subtract(ball2.point());
    var deltaLength = delta.getLength();
    var mtd = delta.multiply(ball1.r + ball2.r - deltaLength).multiply(1.0 / deltaLength);

    // push-pull apart based on mass
    var ball1Pt = ball1.point().add(mtd.multiply(invertedMass1 / (invertedMass1 + invertedMass2)));
    var ball2Pt = ball2.point().subtract(mtd.multiply(invertedMass2 / (invertedMass1 + invertedMass2)));
    ball1.setPoint(ball1Pt.x, ball1Pt.y);
    ball2.setPoint(ball2Pt.x, ball2Pt.y);

    // calculate impact speed
    var v = ball1.velocity().subtract(ball2.velocity());
    var vn = v.dot(mtd.normalized());

    // positive vn means balls are already moving away for one another
    if (vn > 0) {
      return;
    }

    // collision impulse
    var i = -1.0 * (1.0 + restitution) * vn / (invertedMass1 + invertedMass2);
    var impulse = mtd.normalized().multiply(i);

    // transfer momentum
    var v1 = ball1.velocity().add(impulse.multiply(invertedMass1));
    var v2 = ball2.velocity().subtract(impulse.multiply(invertedMass2));

    // set new velocities
    ball1.setVelocity(v1.x, v1.y);
    ball2.setVelocity(v2.x, v2.y);
  };

  var bounceBallOffWorld = function bounceBallOffWorld(ball, world) {
    // translate ball back inside world
    var contactPt = findContactPoint(world, ball);
    ball.setPoint(contactPt.x, contactPt.y);

    // reflect velocity of ball
    var newBallVel = reflectBall(world, ball);
    ball.setVelocity(newBallVel.x, newBallVel.y);
  };

  var polarToVector = function polarToVector(distance, angle) {
    var radians = angle * (Math.PI / 180);
    return new Vec2d(distance * Math.cos(radians), distance * Math.sin(radians));
  };

  var findContactPoint = function findContactPoint(world, ball) {
    // see http://gamedev.stackexchange.com/a/29658
    var A = world.point();
    var B = ball.lastPoint();
    var C = ball.point();
    var R = world.r;
    var r = ball.r;

    var AB = B.subtract(A);
    var BC = C.subtract(B);
    var AB_len = AB.get_length();
    var BC_len = BC.get_length();

    // Avoid divide-by-zero erros (this should never really happen)
    if (!BC_len) {
      return C;
    }

    var b = AB.dot(BC) / Math.pow(BC_len, 2) * -1;
    var c = (Math.pow(AB_len, 2) - Math.pow(R - r, 2)) / Math.pow(BC_len, 2);
    var d = b * b - c;
    var k = b - Math.sqrt(d);

    if (k < 0) {
      k = b + Math.sqrt(d);
    }

    var BD = C.subtract(B);
    var BD_len = BC_len * k;
    BD.set_length(BD_len);

    var D = B.add(BD);
    return D;
  };

  var reflectBall = function reflectBall(world, ball) {
    // see http://stackoverflow.com/a/573206/1093087
    var worldPt = world.point();
    var ballPt = ball.point();
    var v = ball.velocity();
    var n = ballPt.subtract(worldPt).normalized();

    // assume perfect elasticity for now
    // TODO: add elasticity attr to balls
    var ballElasticity = 1.0;
    var worldElasticity = 1.0;
    var restitution = ballElasticity * worldElasticity;

    // solve reflection
    var u = n.multiply(v.dot(n));
    var w = v.subtract(u);
    var v_after = w.subtract(u);
    var reflection = v_after.subtract(v).multiply(restitution);

    // return new velocity
    var newBallVel = v.add(reflection);
    return newBallVel;
  };

  // Public API
  return {
    collideBalls: collideBalls,
    bounceBallOffWorld: bounceBallOffWorld,
    polarToVector: polarToVector
  };
}();

var Vec2d = function () {
  function Vec2d(x, y) {
    _classCallCheck(this, Vec2d);

    this.x = x;
    this.y = y;
  }

  _createClass(Vec2d, [{
    key: "setLength",
    value: function setLength(newLength) {
      var oldLength = this.length;
      this.x *= newLength / oldLength;
      this.y *= newLength / oldLength;
      return this;
    }
  }, {
    key: "add",
    value: function add(v2) {
      return new Vec2d(this.x + v2.x, this.y + v2.y);
    }
  }, {
    key: "subtract",
    value: function subtract(v2) {
      return new Vec2d(this.x - v2.x, this.y - v2.y);
    }
  }, {
    key: "multiply",
    value: function multiply(v2) {
      if (!v2.length) {
        // v2 is a scalar
        return new Vec2d(this.x * v2, this.y * v2);
      } else {
        return new Vec2d(this.x * v2.x, this.y * v2.y);
      }
    }
  }, {
    key: "distance",
    value: function distance(v2) {
      return Math.sqrt(Math.pow(this.x - v2.x, 2) + Math.pow(this.y - v2.y, 2));
    }
  }, {
    key: "dot",
    value: function dot(v2) {
      return this.x * v2.x + this.y * v2.y;
    }
  }, {
    key: "normalized",
    value: function normalized() {
      var length = this.get_length();

      if (length != 0) {
        return new Vec2d(this.x / length, this.y / length);
      } else {
        return new Vec2d(this.x, this.y);
      }
    }
  }, {
    key: "length",
    get: function get() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }]);

  return Vec2d;
}();

module.exports.Physics = Physics;
module.exports.Vec2d = Vec2d;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Random Module
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var Random = function () {
  // Private variables and functions
  var integer = function integer(min, max) {
    // Source: https://stackoverflow.com/a/1527820/1093087
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var choice = function choice(choices) {
    var randomIndex = integer(0, choices.length - 1);
    return choices[randomIndex];
  };

  // Public API
  return {
    integer: integer,
    choice: choice
  };
}();

module.exports = Random;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * SimBall Class
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var Circle = __webpack_require__(1);
var Vec2d = __webpack_require__(3).Vec2d;

var SimBall = function (_Circle) {
  _inherits(SimBall, _Circle);

  function SimBall(x, y, radius, color) {
    _classCallCheck(this, SimBall);

    var _this = _possibleConstructorReturn(this, (SimBall.__proto__ || Object.getPrototypeOf(SimBall)).call(this, radius));

    _this.color = color;
    _this.velocity = new Vec2d(0, 0);
    _this.point = new Vec2d(x, y);
    _this.lastPoint = new Vec2d(x, y);
    _this.sprite = null;
    return _this;
  }

  _createClass(SimBall, [{
    key: 'setPoint',
    value: function setPoint(x, y) {
      this.point.x = x;
      this.point.y = y;
      return this;
    }
  }, {
    key: 'setVelocity',
    value: function setVelocity(x, y) {
      this.velocity.x = x;
      this.velocity.y = y;
      return this;
    }
  }, {
    key: 'update',
    value: function update() {
      this.move();
      return this;
    }
  }, {
    key: 'move',
    value: function move() {
      this.lastPoint.x = this.point.x;
      this.lastPoint.y = this.point.y;
      this.setPoint(this.point.x + this.velocity.x, this.point.y + this.velocity.y);
      return this;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.point.x;
    }
  }, {
    key: 'y',
    get: function get() {
      return this.point.y;
    }
  }, {
    key: 'vx',
    get: function get() {
      return this.velocity.x;
    }
  }, {
    key: 'vy',
    get: function get() {
      return this.velocity.y;
    }
  }]);

  return SimBall;
}(Circle);

module.exports = SimBall;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * World Class
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var World = function () {
  function World(GraphicsAPI) {
    _classCallCheck(this, World);

    this.graphics = GraphicsAPI;
    this.balls = [];
  }

  _createClass(World, [{
    key: "addBall",
    value: function addBall(ball) {
      ball.sprite = this.graphics.ballSprite(ball);
      this.balls.push(ball);
    }
  }, {
    key: "update",
    value: function update() {
      var world = this;
      this.balls.forEach(function (ball, i) {
        ball.update();
        world.wraparound(ball);
        ball.sprite.update();
      });
    }
  }, {
    key: "wraparound",
    value: function wraparound(ball) {
      // https://en.wikipedia.org/wiki/Wraparound_(video_games)
      // Wrap x
      if (ball.x < 0) {
        ball.setPoint(this.width + ball.x, ball.y);
      } else if (ball.x > this.width) {
        ball.setPoint(ball.x - this.width, ball.y);
      }

      // Wrap y
      if (ball.y < 0) {
        ball.setPoint(ball.x, this.height + ball.y);
      } else if (ball.y > this.height) {
        ball.setPoint(ball.x, ball.y - this.height);
      }
    }
  }, {
    key: "width",
    get: function get() {
      return this.graphics.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.graphics.height;
    }
  }]);

  return World;
}();

module.exports = World;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Sumobo = __webpack_require__(0);

var _Sumobo2 = _interopRequireDefault(_Sumobo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Based on https://stackoverflow.com/q/34357489/1093087.
window.Sumobo = _Sumobo2.default;

/***/ })
/******/ ]);