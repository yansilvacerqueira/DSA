/**
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

const sameFrequency = (n, n2) => {
  const nToString = String(n);
  const n2ToString = String(n2);

  if (nToString.length !== n2ToString.length) return false;

  const obj = {}
  const obj2 = {}

  for (let char in nToString) {
    let letter = nToString[char];
    obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
  }

  for (let char in n2ToString) {
    let letter = n2ToString[char];
    obj2[letter] ? obj2[letter] += 1 : obj2[letter] = 1;
  }


  for (let char in n2ToString) {
    let letter = n2ToString[char];
    if (obj[letter] !== obj2[letter]) {
      return false
    }
  }

  return true;
}

// console.log(sameFrequency(182, 281)) // true
// console.log(sameFrequency(34, 14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22, 222)) // false

/**
  refactor solution
 */
function sameFrequencyTwo(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) return false;

  const digitFreq = {};

  for (const digit of str1) {
    digitFreq[digit] = (digitFreq[digit] || 0) + 1;
  }

  for (const digit of str2) {
    if (!digitFreq[digit]) return false;
    digitFreq[digit]--;
  }

  return true;
}

// Test cases
console.log(sameFrequencyTwo(182, 281));     // true
console.log(sameFrequencyTwo(34, 14));       // false
console.log(sameFrequencyTwo(3589578, 5879385)); // true
console.log(sameFrequencyTwo(22, 222));      // false
console.log(sameFrequencyTwo(123, 321));     // true
console.log(sameFrequencyTwo(12345, 54321)); // true