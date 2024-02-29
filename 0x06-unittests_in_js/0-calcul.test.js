const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber function', function() {
  describe('calculate sum of 2 integers', function() {
    it('should return 3', function() {
      assert.equal(calculateNumber(1, 2), 3);
    });
  });

  describe('calculate sum of 2 floats', function() {
    it('should return 3', function() {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('calculate sum of 2 floats', function() {
    it('should return 3', function() {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
  });

  describe('calculate sum of 2 floats', function() {
    it('should return 3', function() {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
});
