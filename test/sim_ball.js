/*
 * circle.js
 * Unit test with mocha.
 *
 */
require('mocha-sinon');
const expects = require('expect.js');
const Circle = require('../js/Circle');
const SimBall = require('../js/SimBall');

describe('SimBall', function() {

  var ball;

  beforeEach(function() {
    var x = 0,
        y = 0,
        radius = 4,
        color = '#000000';
    ball = new SimBall(x, y, radius, color);
  });

  afterEach(function () {
    ball = null;
  });

  it('is instantiated', function() {
    expects(ball).to.be.a(Circle);
    expects(ball).to.be.a(SimBall);
    expects(ball.radius).to.equal(4);
    expects(ball.point.x).to.equal(0);
    expects(ball.point.y).to.equal(0);
  });

  it('moves', function() {
    ball.velocity.x = 2;
    ball.velocity.y = 2;
    ball.move();
    expects(ball.velocity.x).to.equal(2);
    expects(ball.point.x).to.equal(ball.velocity.x);
    expects(ball.point.y).to.equal(ball.velocity.y);
    expects(ball.lastPoint.x).to.equal(0);
  });
});
