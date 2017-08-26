/*
 * Physics Module
 * Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
var Physics = (function() {
  // Private variables and functions
  var collideBalls = function(ball1, ball2) {
    // calculate restitution
    // TODO: add elasticity attr to circles
    var ball1Elasticity = 1.0;
    var ball2Elasticity = 1.0;
    var restitution = ball1Elasticity * ball2Elasticity;

    // invert masses
    var invertedMass1 = 1.0 / ball1.m;
    var invertedMass2 = 1.0 / ball2.m;

    // get minimum translation distance
    var delta = ball1.point().subtract(ball2.point());
    var deltaLength = delta.getLength();
    var mtd = delta.multiply(ball1.r + ball2.r - deltaLength).multiply(1.0 / deltaLength);

    // push-pull apart based on mass
    var ball1Pt = ball1.point().add(mtd.multiply(invertedMass1 / (invertedMass1 + invertedMass2)));
    var ball2Pt = ball2.point().subtract(mtd.multiply(invertedMass2 / (invertedMass1 + invertedMass2)));
    ball1.setPoint(ball1Pt.x, ball1Pt.y);
    ball2.setPoint(ball2Pt.x, ball2Pt.y);

    // calculate impact speed
    var v = ball1.velocity().subtract(ball2.velocity());
    var vn = v.dot(mtd.normalized());

    // positive vn means balls are already moving away for one another
    if ( vn > 0 ) {
      return;
    }

    // collision impulse
    var i = (-1.0 * (1.0 + restitution) * vn) / (invertedMass1 + invertedMass2);
    var impulse = mtd.normalized().multiply(i);

    // transfer momentum
    var v1 = ball1.velocity().add(impulse.multiply(invertedMass1));
    var v2 = ball2.velocity().subtract(impulse.multiply(invertedMass2));

    // set new velocities
    ball1.setVelocity(v1.x, v1.y);
    ball2.setVelocity(v2.x, v2.y);
  };

  bounceBallOffWorld: function(ball, world) {
    // translate ball back inside world
    var contactPt = findContactPoint(world, ball);
    ball.setPoint(contactPt.x, contactPt.y);

    // reflect velocity of ball
    var newBallVel = reflectBall(world, ball);
    ball.setVelocity(newBallVel.x, newBallVel.y);
  };

  polarToVector: function(distance, angle) {
    var radians = angle * (Math.PI / 180);
    return new Vec2d(distance * Math.cos(radians), distance * Math.sin(radians));
  };

  findContactPoint: function(world, ball) {
    // see http://gamedev.stackexchange.com/a/29658
    var A = world.point();
    var B = ball.lastPoint();
    var C = ball.point();
    var R = world.r;
    var r = ball.r;

    var AB = B.subtract(A);
    var BC = C.subtract(B);
    var AB_len = AB.get_length();
    var BC_len = BC.get_length();

    // Avoid divide-by-zero erros (this should never really happen)
    if ( ! BC_len ) {
      return C;
    }

    var b = AB.dot(BC) / Math.pow(BC_len, 2) * -1;
    var c = (Math.pow(AB_len, 2) - Math.pow(R - r, 2)) / Math.pow(BC_len, 2);
    var d = b * b - c;
    var k = b - Math.sqrt(d);

    if ( k < 0 ) {
      k = b + Math.sqrt(d);
    }

    var BD = C.subtract(B);
    var BD_len = BC_len * k;
    BD.set_length(BD_len);

    var D = B.add(BD);
    return D;
  };

  reflectBall: function(world, ball) {
    // see http://stackoverflow.com/a/573206/1093087
    var worldPt = world.point();
    var ballPt = ball.point();
    var v = ball.velocity();
    var n = ballPt.subtract(worldPt).normalized();

    // assume perfect elasticity for now
    // TODO: add elasticity attr to balls
    var ballElasticity = 1.0;
    var worldElasticity = 1.0;
    var restitution = ballElasticity * worldElasticity;

    // solve reflection
    var u = n.multiply(v.dot(n));
    var w = v.subtract(u);
    var v_after = w.subtract(u);
    var reflection = v_after.subtract(v).multiply(restitution);

    // return new velocity
    var newBallVel = v.add(reflection);
    return newBallVel;
  };

  // Public API
  return {
    collideBalls: collideBalls,
    bounceBallOffWorld: bounceBallOffWorld,
    polarToVector: polarToVector
  };
})();

module.exports = Physics;
