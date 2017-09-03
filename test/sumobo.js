/*
 * circle.js
 * Unit test with mocha.
 *
 */
require('mocha-sinon');
const expects = require('expect.js');
const Sumobo = require('../js/Sumobo');

describe('Sumobo', function() {

  beforeEach(function() {
    this.sinon.spy(console, 'log');
  });

  afterEach(function () {
  });

  xit('expects to run simCircles', function() {
    Sumobo.simCircles('#sumobo');
    expects(console.log.calledOnce).to.be.true;
  });
});
