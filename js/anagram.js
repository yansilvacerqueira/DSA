/**
  Question:
    Given two strings, write a function to determine if the
    second string is an anagram of the first. An anagram is
    a word, phrase or name formed by rearranging the letters of another,
    such as CINEMA, formed from iceman.
*/

/**
 * Examples of input and output:
 *  validAnagram(" ", " ") return true
 *  validAnagram("aaz", "zza") return false
 *  validAnagram("anagram", "nagaram") return true
 *  validAnagram("rat", "car") return false
 *  validAnagram("qwerty", "qeywrt") return true
 *
 */

/** Naive solution, Time BigO(N), Space BigO(N)  */
const validAnagram = (str1, str2) => {
  if (str1 === " " && str2 === " ") return true
  if (str1.length !== str2.length) return false

  const obj = {}
  const obj2 = {}

  for (char in str1) {
    obj[str1[char]] = (obj[str1[char]] || 0) + 1
  }

  for (char in str2) {
    obj2[str2[char]] = (obj2[str2[char]] || 0) + 1
  }

  for (char in str1) {
    if (obj[str1[char]] !== obj2[str1[char]]) return false
  }

  return true
}

/** Refactored solution, Time BigO(N), Space BigO(N)  */
const validAnagramTwo = (first, second) => {

  if (first === " " && second === " ") return true
  if (first.length !== second.length) return false

  const obj = {};

  for (let i = 0; i < first.lenght; i++) {
    const letter = first[i];
    obj[letter] ? obj[letter] += 1 : obj[letter] = 1
  }

  for (let i = 0; i < second.lenght; i++) {
    const secondLetter = second[i];
    const firstLetter = first[i];

    if (obj[firstLetter] !== obj[secondLetter]) return false
  }

  return true
}

console.log(validAnagram("qwerty", "qeywrt"))
console.log(validAnagram("rat", "car"))
console.log(validAnagram("aaz", "zza"))
console.log(validAnagram("anagram", "nagaram"))
