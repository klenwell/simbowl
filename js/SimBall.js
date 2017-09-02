/*
 * SimBall Class
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
const Circle = require('../js/Circle');
const Vec2d = require('../js/Physics').Vec2d;

class SimBall extends Circle {
  constructor(x, y, radius, color) {
    super(radius);
    this.color = color;
    this.velocity = new Vec2d(0, 0);
    this.point = new Vec2d(x, y);
    this.lastPoint = new Vec2d(x, y);
    this.sprite = null;
  }

  get x() {
    return this.point.x;
  }

  get y() {
    return this.point.y;
  }

  setPoint(x, y) {
    this.point.x = x;
    this.point.y = y;
    return this;
  }

  get vx() {
    return this.velocity.x;
  }

  get vy() {
    return this.velocity.y;
  }

  setVelocity(x, y) {
    this.velocity.x = x;
    this.velocity.y = y;
    return this;
  }

  update() {
    this.move();
    return this;
  }

  move() {
    this.lastPoint.x = this.point.x;
    this.lastPoint.y = this.point.y;
    this.setPoint(this.point.x + this.velocity.x, this.point.y + this.velocity.y);
    return this;
  }
}

module.exports = SimBall;
