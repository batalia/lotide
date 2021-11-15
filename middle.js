const assertArraysEqual = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

// const eqArrays = (array1, array2) => {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

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

//TEST
assertArraysEqual([2], middle([1, 2, 3]));
assertArraysEqual([2, 3], middle([1, 2, 3, 4]));
assertArraysEqual([], middle([]));
assertArraysEqual([], middle([1]));