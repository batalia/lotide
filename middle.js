const assertArraysEqual = require('./assertArraysEqual');

const middle = (array) => {
  const l = array.length;
  if (l === 0 || l === 1) {
    return [];
  } else if (l % 2 === 1) {
    let x = Math.floor(l / 2);
    return [array[x]];
  } else {
    let x = l / 2;
    return [array[x - 1], array[x]];
  }
};

module.exports = middle;