/*
 * Circle Class
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get r() {
    return this.radius;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = Circle;
