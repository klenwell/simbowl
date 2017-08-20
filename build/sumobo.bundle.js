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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sumobo = function () {
  // Private variables and functions
  var $container = null;
  var fps = 30;
  var mspf = 1000 / fps;
  var startedAt = new Date().getTime();
  var maxRunTimeMs = 5000;

  var simCircles = function simCircles(containerSelector) {
    $container = $(containerSelector);
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
    console.debug('simLoop');
    //world.update();
    //world.draw();

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


var _Sumobo = __webpack_require__(0);

var _Sumobo2 = _interopRequireDefault(_Sumobo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Based on https://stackoverflow.com/q/34357489/1093087.
window.Sumobo = _Sumobo2.default;

/***/ })
/******/ ]);