/*
 * circle.js
 * Unit test with mocha.
 *
 */
require('mocha-sinon');
const expects = require('expect.js');
const Circle = require('../js/Circle');

describe('Circle', function() {

  beforeEach(function() {
  });

  afterEach(function () {
  });

  it('is instantiated', function() {
    var circle = new Circle(8);
    expects(circle).to.be.a(Circle);
    expects(circle.radius).to.equal(8);
  });
});
