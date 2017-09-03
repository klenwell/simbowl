/*
 * test.js
 * Unit test with mocha.
 *
 */
require('mocha-sinon');
var expects = require('expect.js');

describe('Test Examples', function() {
  beforeEach(function() {
    this.sinon.spy(console, 'log');
  });

  afterEach(function () {
  })

  describe('test basic expectations', function() {
    it('will support expect.js', function() {
      expects(1).to.be(1);
      expects(NaN).not.to.equal(NaN);
      expects(1).not.to.be(true);
      expects('1').to.not.be(1);
    });
    it('expects more tests in future.');
  });
});
