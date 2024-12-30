/**
 * This file goes give an example about frequency counter pattern
  ------------
  Question:
    Write a function called SUMZERO, which accepts a SORTED array of integers.
    The function should return find the first pair where the sum
    is 0. Return an array that includes both values that sum is zero or
    undefined if a pair does not exist.
*/


/**
 * Examples of input and output:
 *  sumZero([-3, -2, -1, 0, 1, 2, 3]) return [-3, 3]
 *  sumZero([-2, 0, 1, 2, 3]) return undefined
 *  sumZero([1, 2, 3]) return undefined
 */

const sumZero = (arr) => {
  const left = 0;
  const right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]]

    } else if (sum > 0) {
      right--;

    } else {
      left--;
    }

  }
}