/**
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
 * (reads the same forward and backward). Otherwise it returns false.
 */

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}


function isPalindrome(str){
// add whatever parameters you deem necessary - good luck!
const reversedStr = reverse(str)

if (str === reversedStr) return true

return false
}

function isPalindromeTwo(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}