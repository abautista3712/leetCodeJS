/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let i = 0;
  let max_return;

  let buy = null,
    sell = null;

  if (!prices.length || prices.length == 1) {
    return 0;
  }

  while (i < prices.length) {
    while (i < prices.length && prices[i + 1] < prices[i]) {
      if (!buy) {
        buy = prices[i];
      } else if (buy > prices[i]) {
        buy = prices[i];
      }
      i++;
    }
    while (i < prices.length && prices[i + 1] > prices[i]) {
      if (!sell) {
        sell = prices[i];
      } else if (sell < prices[i]) {
        sell = prices[i];
      }
      i++;
    }
  }
  return sell;
};

console.log(maxProfit(prices));
