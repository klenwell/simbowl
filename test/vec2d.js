/*
 * circle.js
 * Unit test with mocha.
 *
 */
require('mocha-sinon');
const expects = require('expect.js');
const Vec2d = require('../js/Physics').Vec2d;

describe('Vec2d', function() {
  it('is instantiated', function() {
    var vec = new Vec2d(2,2);
    expects(vec).to.be.a(Vec2d);
    expects(vec.x).to.equal(2);
    expects(vec.y).to.equal(2);
  });

  it('computes length', function() {
    var vec = new Vec2d(2,2);
    expects(vec.length).to.be.within(2.8284, 2.8285);
  });
});
