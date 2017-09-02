/*
 * Graphics Classes
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
/*
 * Raphael
 * https://github.com/DmitryBaranovskiy/raphael
 * http://dmitrybaranovskiy.github.io/raphael/reference.html
 */
class RaphaelAPI {
  constructor(canvasSelector) {
    var $canvas = $(canvasSelector)[0];
    this.width = $canvas.offsetWidth;
    this.height = $canvas.offsetHeight;
    this.paper = Raphael($canvas, this.width, this.height);
  }

  ballSprite(ball) {
    return RaphaelSprite.ball(this.paper, ball);
  }
}

class RaphaelSprite {
  static ball(paper, ball) {
    var element = paper.circle(ball.x, ball.y, ball.r).attr({
      fill: ball.color,
      stroke: "none",
      opacity: ball.opacity || 1.0
    });
    return new RaphaelSprite(paper, element, ball);
  }

  constructor(paper, element, soul) {
    // soul is the object itself to which the sprite belongs.
    this.paper = paper;
    this.element = element;
    this.soul = soul;
  }

  update() {
    this.element.attr({
      cx: this.soul.x,
      cy: this.soul.y
    });
    this.element.toFront();
  }
}

module.exports = RaphaelAPI;
