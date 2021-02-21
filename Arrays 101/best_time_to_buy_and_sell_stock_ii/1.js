/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 6, 4, 3, 1];

var maxProfit = function (prices) {
  const n = prices.length;

  // Create variables for:
  // min (buy price)
  // max (sell price)
  // total_profit
  let min = 0;
  let max = 0;
  let total_profit = 0;

  // Loop through prices
  for (let i = 0; i < n; i++) {
    //   If prices[i] < min, reassign min
    if (prices[i] < prices[min]) {
      min = i;
    } else if (min != i) {
      // If prices[i] > min, assign max
      max = i;
    }

    // Once max consecutive value has been reached:
    // Calculate profit by subracting max from min
    // Reset max and min variables
    if (max != 0) {
      if (i === n - 1 || prices[max + 1] < prices[max]) {
        total_profit = total_profit + (prices[max] - prices[min]);
        min = 0;
        max = 0;
      }
    }
  }
  return total_profit;
};

console.log(maxProfit(prices));
