/*
 * World Class
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
class World {
  constructor(GraphicsAPI) {
    this.graphics = GraphicsAPI;
    this.balls = [];
  }

  get width() {
    return this.graphics.width;
  }

  get height() {
    return this.graphics.height;
  }

  addBall(ball) {
    ball.sprite = this.graphics.ballSprite(ball);
    this.balls.push(ball);
  }

  update() {
    var world = this;
    this.balls.forEach(function(ball, i) {
      ball.update();
      world.wraparound(ball);
      ball.sprite.update();
    });
  }

  wraparound(ball) {
    // https://en.wikipedia.org/wiki/Wraparound_(video_games)
    // Wrap x
    if ( ball.x < 0 ) {
      ball.setPoint(this.width + ball.x, ball.y);
    }
    else if ( ball.x > this.width ) {
      ball.setPoint(ball.x - this.width, ball.y);
    }

    // Wrap y
    if ( ball.y < 0 ) {
      ball.setPoint(ball.x, this.height + ball.y);
    }
    else if ( ball.y > this.height ) {
      ball.setPoint(ball.x, ball.y - this.height);
    }
  }
}

module.exports = World;
