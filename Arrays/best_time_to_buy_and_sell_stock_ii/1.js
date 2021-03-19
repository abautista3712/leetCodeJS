/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [1, 4, 2];

var maxProfit = function (prices) {
  const n = prices.length;

  // Create variables for:
  // min (buy price)
  // max (sell price)
  // total_profit
  let min = -1;
  let max = -1;
  let total_profit = 0;

  // Loop through prices
  for (let i = 0; i < n; i++) {
    //   If prices[i] < min, reassign min
    if (min === -1) {
      min = i;
    } else if (prices[i] < prices[min]) {
      min = i;
    } else if (min != i) {
      // If prices[i] > min, assign max
      max = i;
    }

    // Once max consecutive value has been reached:
    // Calculate profit by subracting max from min
    // Reset max and min variables
    if (max != 0) {
      if (max === n - 1 || prices[max + 1] < prices[max]) {
        total_profit = total_profit + (prices[max] - prices[min]);
        min = -1;
        max = -1;
      }
    }
  }
  return total_profit;
};

console.log(maxProfit(prices));
