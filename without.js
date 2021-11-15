const assertArraysEqual = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  };


  const eqArrays = (array1, array2) => {
    for (i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

const without = (source, itemsToRemove) => {
    return source.filter(element => !itemsToRemove.includes(element) )
}

// TEST
const testArray = [1, 2, 3]
const newArray = without(testArray, [3])
assertArraysEqual(newArray, [1, 2])

const words = ["hey", "world", "lh"]
without(words, "lh")
assertArraysEqual(["hey", "world", "lh"], words)