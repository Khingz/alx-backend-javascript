const assert = require('assert');
const add = require('./0-calcul.js');

describe('add function', function() {
  it('should return the the sum of the two rounded numbers', function() {
    assert.equal(add(1, 2), 3);
    assert.equal(add(1, 3.7), 5);
    assert.equal(add(1.2, 3.7), 5);
    assert.equal(add(1.5, 3.7), 6);
  });
});
