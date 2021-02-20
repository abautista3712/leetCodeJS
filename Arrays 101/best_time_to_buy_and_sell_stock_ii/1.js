/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  // Create variable for min (buy price) = 0
  // Create variable for max value (sell price)
  // Create variable for total profit
  // Loop through prices (start index at 1, since dealing with days)
  //   If min = 0, assign first number as min
  //   If prices[i] < min, reassign min
  //   Find max value or first value that satisfies either:
  //     prices[i+1] < prices[i]
  //     OR
  //     end of array
  // Subtract max from min in total profit variable, reset min and max
  // Repeat until end of array
};

console.log(maxProfit(prices));
