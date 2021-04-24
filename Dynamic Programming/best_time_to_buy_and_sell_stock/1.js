/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let i = 0;
  let n = prices.length - 1;
  let max_return;

  let buy = null,
    sell = null;

  if (!prices.length || prices.length == 1) {
    return 0;
  }

  while (i < n) {
    while (i < n && prices[i + 1] <= prices[i]) {
      i++;
    }
    buy = prices[i];
    return buy;
  }
};
console.log(maxProfit(prices));
