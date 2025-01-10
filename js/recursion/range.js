/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55
function recursiveRange(n){
  if (n === 1) return n;

 return n + recursiveRange(n - 1)
}

