/*
 * test.js
 * Unit test with mocha.
 *
 */
require('mocha-sinon');
var expects = require('expect.js');

import Sumobo from '../js/Sumobo';

describe('Sumobo', function() {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  describe('instantiates class', function() {
    const mockContainer = {};
    const sumobo = new Sumobo(mockContainer)

    it('expects container to be set', function() {
      expects(console.log.calledOnce).to.be.true;
      expects(sumobo.container).to.equal(mockContainer);
    });
  });

  describe('testing', function() {
    it('will support expect.js', function() {
      expects(1).to.be(1);
      expects(NaN).not.to.equal(NaN);
      expects(1).not.to.be(true);
      expects('1').to.not.be(1);
    });
    it('expects more tests in future.');
  });
});
