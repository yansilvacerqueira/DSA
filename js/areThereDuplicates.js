/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
 */

/**Time O(N), space O(N) */
const areThereDuplicates = (...args) => {
  const arr = args.map((v) => String(v))

  const obj = {}

  for (let v in arr) {
    const value = arr[v];
    obj[value] ? obj[value] += 1 : obj[value] = 1;
  }

  for (let v in arr) {
    const value = arr[v];

    if (obj[value] > 1) {
      return true
    }
  }

  return false
}

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))


// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}

  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }

  for (let key in collection) {
    if (collection[key] > 1) return true
  }

  return false;
}

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}