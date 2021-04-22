/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [3, 2, 6, 5, 0, 3];

var maxProfit = function (prices) {
  let i = 0;

  let min, max;

  if (!prices.length || prices.length == 1) {
    return 0;
  }
};

console.log(maxProfit(prices));
