/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  // Base case: empty string or single character
  if (str.length <= 1) return str;

  // Recursive case: take first char and put it at end of reversed substring
  return reverse(str.slice(1)) + str[0];
}