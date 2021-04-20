/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 6, 4, 3, 1];

var maxProfit = function (prices) {
  let i = 0;
  let j = prices.length - 1;

  let min, max;

  if (!prices.length || prices.length == 1) {
    return 0;
  }

  while (i < j) {
    if (!min) {
      min = prices[i];
    } else if (min > prices[i]) {
      min = prices[i];
    }

    if (!max) {
      max = prices[j];
    } else if (max < prices[j]) {
      max = prices[j];
    }
    i++;
    j--;
  }
  return max - min;
};

console.log(maxProfit(prices));
