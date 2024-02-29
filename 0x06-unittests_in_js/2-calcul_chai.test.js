const chai = require('chai');
const calculateNumber = require('./1-calcul.js');
const expect = chai.expect;

describe('calculateNumber function three opts', function() {
  describe('sum two integers', function() {
    it('returns 9', function() {
      expect(calculateNumber('SUM', 4, 5)).to.equal(9);
    });
  });
  describe('sum two floats', function() {
    it('returns 6', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe('sum one float and integers', function() {
    it('returns 6', function() {
      expect(calculateNumber('SUM', 1, 4.5)).to.equal(6);
    });
  });
  describe('subtract two integers', function() {
    it('returns -1', function() {
      expect(calculateNumber('SUBTRACT', 4, 5)).to.equal(-1);
    });
  });
  describe('SUBTRACT two integers', function() {
    it('returns 6', function() {
      expect(calculateNumber('SUBTRACT', 10, 4)).to.equal(6);
    });
  });
  describe('SUBTRACT one float and integer', function() {
    it('returns -1', function() {
      expect(calculateNumber('SUBTRACT', 4, 4.5)).to.equal(-1);
    });
  });
  describe('DIVIDE two integers', function() {
    it('returns 0.2', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('DIVIDE two integers', function() {
    it('returns Error', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  })
})