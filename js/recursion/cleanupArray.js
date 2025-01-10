const cleanupArray = (arr) => {
  if (!arr.length) return arr;

  return cleanupArray(arr.slice(1))
}

console.log(cleanupArray([1,2,3,4]))
