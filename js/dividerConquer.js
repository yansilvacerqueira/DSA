/**
 * This file goes give an example about divider and conquer pattern:
    This pattern involver dividing a data set into smaller chunks and
    then repeating a process with a subset of data.

    This pattern can tremendously decrease time complexity

    ------------

    Question:
      Given a sorted array of integers, write a function called SEARCH
      that accepts a value and returns the index where the value passed
      to the function is located. If the value is not found, return -1.
*/

/**
 * Examples of input and output:
 *  search([1,2,3,4,5,6], 4) return 3
 *  search([1,2,3,4,5,6], 6) return 5
 *  search([1,2,3,4,5,6], 11) return -11
 */

/** Naive solution, Time BigO(N), Space BigO(1)  */
const search = (arr, n) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i
    }
  }

  return -1;
}

/** Refactor solution, Time BigO(log(N)), Space BigO(1)  */
const binarySearch = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < n) {
      min = middle + 1;
    } else if (arr[middle] > n) {
      max = middle - 1;
    } else {
      return middle;
    }

  }

  return -1;
}