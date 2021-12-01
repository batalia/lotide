// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// //TEST
// assertArraysEqual([2], middle([1, 2, 3]));
// assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
// assertArraysEqual([], middle([]));
// assertArraysEqual([], middle([1]));

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#head", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
});