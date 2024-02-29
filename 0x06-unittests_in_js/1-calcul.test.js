const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber function three opts', function() {
  describe('sum two integers', function() {
    it('returns 9', function() {
      assert.equal(calculateNumber('SUM', 4, 5), 9)
    });
  });
  describe('sum two floats', function() {
    it('returns 6', function() {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6)
    });
  });
  describe('sum one float and integers', function() {
    it('returns 6', function() {
      assert.equal(calculateNumber('SUM', 1, 4.5), 6)
    });
  });
  describe('subtract two integers', function() {
    it('returns -1', function() {
      assert.equal(calculateNumber('SUBTRACT', 4, 5), -1)
    });
  });
  describe('SUBTRACT two integers', function() {
    it('returns 6', function() {
      assert.equal(calculateNumber('SUBTRACT', 10, 4), 6)
    });
  });
  describe('SUBTRACT one float and integer', function() {
    it('returns -1', function() {
      assert.equal(calculateNumber('SUBTRACT', 4, 4.5), -1)
    });
  });
  describe('DIVIDE two integers', function() {
    it('returns 0.2', function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    });
  });
  describe('DIVIDE two integers', function() {
    it('returns Error', function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    });
  })
})