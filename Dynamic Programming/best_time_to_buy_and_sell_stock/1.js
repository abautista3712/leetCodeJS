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

  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i + 1] <= prices[i]) {
      i++;
    }
    buy = prices[i];
    // while (i < prices.length && prices[i + 1] > prices[i]) {
    //   if (!sell) {
    //     sell = prices[i];
    //   } else if (sell < prices[i]) {
    //     sell = prices[i];
    //   }
    //   i++;
    // }
    return buy;
  }
};
console.log(maxProfit(prices));
