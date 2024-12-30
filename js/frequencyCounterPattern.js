/**
 * This file goes give an example about frequency counter pattern
  ------------
  Question:
    Write a function called SAME, which accepts two arrays.
    The function should return TRUE if every value in the array
    has it's corresponding value squared in the second array.
    The frequency of values must be the same.
*/

/**
 * Examples of input and output:
 *  same([1,2,3], [4,9,1],) return true
 *  same([1,2,3], [9,1],) return false
 *  same([1,2,1], [4,4,1],) return false
 */

/** Naive solution, Time BigO(N^2), Space BigO(1)  */
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    let writeIndex = arr2.indexOf(arr1[[i]] ** 2)

    if (writeIndex === -1) {
      return false
    }

    arr2.splice(writeIndex, 1)
  }

  return true
}

/** Refactored solution, Time BigO(N), Space BigO(N)  */
const sameTwo = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  const frequencyOne = {}
  const frequencyTwo = {}

  for (let number in arr1) {
    frequencyOne[number] = (frequencyOne[number] || 0) + 1
  }

  for (let number in arr2) {
    frequencyTwo[number] = (frequencyTwo[number] || 0) + 1
  }

  for (let key in frequencyOne) {
    if (!(key ** 2 in frequencyTwo)) return false

    if (frequencyTwo[key ** 2] !== frequencyOne[key]) return false
  }

  return true
}