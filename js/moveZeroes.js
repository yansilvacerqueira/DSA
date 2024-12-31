const moveZeroes = (nums) => {
  const size = nums.length;
  let pointer = 0

  for (let i = 0; i < size; i++) {
    if (nums[i] != 0) {
      nums[pointer] = nums[i]
      pointer++
    }
  }

  for (let i = pointer; i < size; i++) {
    nums[i] = 0
  }

  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 0, 1, 0, 3, 12]))
