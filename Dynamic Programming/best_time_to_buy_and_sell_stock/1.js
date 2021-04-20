/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let i = 0;
  let j = prices.length - 1;

  let min, max;

  while (i < prices.length) {
    if (!max) {
      max = prices[i];
    } else if (max < prices[i]) {
      max = prices[i];
    }
    i++;
  }
  return max;

  while (j >= 0) {
    if (!min) {
      min = prices[j];
    } else if (min > prices[j]) {
      min = prices[j];
    }
    j--;
  }
  return min;
};

console.log(maxProfit(prices));
