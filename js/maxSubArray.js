const maxSubArray = (nums) => {
  let ans = nums[0];        // Guarda a maior soma encontrada, começa com primeiro elemento
  let currentSum = nums[0]; // Soma do subarray atual, começa com primeiro elemento

  for (let i = 1; i < nums.length; i++) {
    // Para cada elemento, decide se:
    // 1. Começa um novo subarray com o elemento atual (nums[i])
    // 2. Ou continua somando ao subarray existente (currentSum + nums[i])
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Atualiza a maior soma se encontrou uma melhor
    ans = Math.max(ans, currentSum);
  }
  return ans;
}
/**
 Example [-2, 1, -3, 4, -1, 2, 1]:

 ans = -2, currentSum = -2

 1: currentSum = max(1, -1) = 1, ans = 1
 -3: currentSum = max(-3, -2) = -2, ans = 1
 4: currentSum = max(4, 2) = 4, ans = 4
 -1: currentSum = max(-1, 3) = 3, ans = 4
 2: currentSum = max(2, 5) = 5, ans = 5
 1: currentSum = max(1, 6) = 6, ans = 6
 */