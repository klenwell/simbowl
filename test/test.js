var expects = expect = require('expect.js');

describe('Sumobo', function() {
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
