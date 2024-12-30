const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0)
  // 1 -> check the numbers, 2 -> check upper alpha, 3 -> check the lower alpha
  if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
    return false
  }
  return true
}

const isAlphaNumericRegex = (char) => {
  if (!(/[a-z0-9]/.test(char))) {
    return false
  }

  return true
}

const charCount = (str) => {
  const obj = {}

  for (let char of str) {
    char = char.toLowerCase()
    if (isAlphaNumericRegex(char)) {
      obj[char] = (obj[char] || 0) + 1;
    }
  }


  return obj
}

console.log(charCount("Hello Hi!"))

