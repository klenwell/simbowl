/*
 * Random Module
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var Random = (function() {
  // Private variables and functions
  var integer = function(min, max) {
    // Source: https://stackoverflow.com/a/1527820/1093087
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var choice = function(choices) {
    var randomIndex = integer(0, choices.length - 1);
    return choices[randomIndex];
  }

  // Public API
  return {
    integer: integer,
    choice: choice
  };
})();


module.exports = Random;
