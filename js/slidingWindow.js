/**
 * This file goes give an example about sliding window pattern
    This pattern involves creating a window which can either be an array
    or number from one position to another.

    Depending on a certain condition, the window either increases or closes (and a new window is created)

    Very useful for keeping track of a subset of data in an array/string etc.
  ------------
  Question:
    Write a function called MAXSUBARRAYSUM which accepts an
    array of integers and a number called n. The function should
    calculate the maximum sum of n consecutive elements in the array.
*/

/**
 * Examples of input and output:
 *  maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2) return 10
 *  maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4) return 17
 *  maxSubArraySum([4, 2, 1, 6], 1) return 6
 */

/** Naive solution, Time BigO(N^2), Space BigO(1)  */
const maxSubArraySum = (arr, num) => {
  if (num > arr.length) return null;

  let max = -Infinity
  let temp = 0;

  for (let i = 0; i < arr.length - num + 1; i++) {
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

/** Refactor solution, Time BigO(N), Space BigO(1)  */
const maxSubArraySumTwo = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum;
}