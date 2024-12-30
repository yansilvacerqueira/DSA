/**
  Question:
    Write a function called COUNTUNIQUEVALUES, which accepts a SORTED array of integers.
    The function should count the unique values in the array. There can be negative numbers
    in the array, but it will always be sorted.
*/


/**
 * Examples of input and output:
 *  countUniqueValues([1, 1, 1, 1, 1, 2]) return 2
 *  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) return 7
 *  countUniqueValues([-2, -1, -1, 0, 1]) return 4
 */

/** solution, Time BigO(N), Space BigO(1)  */
const countUniqueValues = (arr) => {
  if (!arr.length) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))