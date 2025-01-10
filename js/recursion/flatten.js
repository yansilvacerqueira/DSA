/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

function flatten(arr) {
  // Create a result array
  let result = [];

  // Loop through each element
  for (let i = 0; i < arr.length; i++) {
      // If element is an array, flatten it recursively
      if (Array.isArray(arr[i])) {
          result = result.concat(flatten(arr[i]));
      }
      // If not an array, add directly to result
      else {
          result.push(arr[i]);
      }
  }

  return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]