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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _World = __webpack_require__(1);

var _World2 = _interopRequireDefault(_World);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sumobo = function () {
  // Private variables and functions
  var fps = 30;
  var mspf = 1000 / fps;
  var maxRunTimeMs = 5000;

  var world = null;
  var graphics = null;
  var $container = null;
  var startedAt = null;

  var simCircles = function simCircles(containerSelector) {
    $container = $(containerSelector);
    startedAt = new Date().getTime();
    world = new _World2.default();

    console.log('TODO: Sumobo.circleSim', $container);
    console.log(window, document);
    main();
  };

  var main = function main() {
    console.debug('start simLoop', startedAt);
    window.animate = setAnimationHandler();
    simLoop();
  };

  var simLoop = function simLoop() {
    var runtime = msRunTime();
    world.update();
    //graphics.draw(world);

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
}(); /*
      * Sumobo Module
      * Based on https://learn.jquery.com/code-organization/concepts/
      */


module.exports = Sumobo;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * World Class
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var World = function () {
  function World() {
    _classCallCheck(this, World);

    return 'TODO';
  }

  _createClass(World, [{
    key: 'update',
    value: function update() {
      console.debug('TODO');
    }
  }]);

  return World;
}();

module.exports = World;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Sumobo = __webpack_require__(0);

var _Sumobo2 = _interopRequireDefault(_Sumobo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Based on https://stackoverflow.com/q/34357489/1093087.
window.Sumobo = _Sumobo2.default;

/***/ })
/******/ ]);