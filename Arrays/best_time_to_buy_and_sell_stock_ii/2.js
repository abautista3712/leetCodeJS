/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 6, 4, 3, 1];

var maxProfit = function (prices) {
  const n = prices.length - 1;
  let i = 0;

  let buy,
    sell,
    profit = 0;

  while (i < n) {
    while (i < n && prices[i + 1] <= prices[i]) {
      i++;
    }
    buy = prices[i];

    while (i < n && prices[i + 1] > prices[i]) {
      i++;
    }
    sell = prices[i];

    profit += sell - buy;
  }
  return profit;
};

console.log(maxProfit(prices));
