const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST
assertArraysEqual([2], middle([1, 2, 3]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
assertArraysEqual([], middle([]));
assertArraysEqual([], middle([1]));