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
    if (!buy) {
      buy = prices[i];
    } else if (buy > prices[i]) {
      buy = prices[i];
    }
    i++;
    if (!sell) {
      sell = prices[i];
    } else if (sell < prices[i]) {
      sell = prices[i];
    }
  }
  return sell;
};

console.log(maxProfit(prices));
