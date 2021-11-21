const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

const results1 = map(words, word => word[0]);
const results2 = map(results1, word => word + word);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['gg', 'cc', 'tt', 'mm', 'tt']);