/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  // Kadane's Algorithm Implementation
  let max_return = 0,
    max_return_final = 0;

  for (let i = 1; i < prices.length; i++) {
    max_return = Math.max(0, (max_return += prices[i] - prices[i - 1]));
    max_return_final = Math.max(max_return, max_return_final);
  }
  return max_return_final;
};
console.log(maxProfit(prices));
