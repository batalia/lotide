const head   = require('./head');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual.js');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const diceRoller = require('./dice-roller');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countOnly,
  diceRoller,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  map,
  takeUntil,
  without
};