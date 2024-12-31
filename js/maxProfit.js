const maxProfit = (prices) => {
  let bestWithoutStock = 0
  let bestWithStock = -Infinity

  for (let i = 0; i < prices.length; i++) {
    // keep the position or buy the new stock
    bestWithStock = Math.max(bestWithStock, bestWithoutStock - prices[i])

    // keep the position without stocck or sell the stock
    bestWithoutStock = Math.max(bestWithoutStock, bestWithStock + prices[i])
  }

  return bestWithoutStock;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

