/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7, 1, 5, 3, 6, 4];

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
    console.log(i);

    console.log(`min = ${min}`);
    console.log(`prices[min] = ${prices[min]}`);

    console.log(`prices[i] = ${prices[i]}`);

    // if (min === 0) {
    //   console.log("min === 0");
    //   console.log("assigning min...");
    //   min = i;
    //   console.log(`min = ${min}`);
    //   console.log(`prices[min] = ${prices[min]}`);
    // }

    //   If prices[i] < min, reassign min
    if (prices[i] < prices[min]) {
      console.log("prices[i] < prices[min]...");
      min = i;
    } else {
      // If prices[i] > min, assign max
      console.log("assigning max...");
      max = i;
      console.log(`max = ${max}`);
      console.log(`prices[max] = ${prices[max]}`);
    }

    // Once max consecutive value has been reached:
    // Calculate profit by subracting max from min
    // Reset max and min variables
    if (max != 0) {
      if (i === n || prices[max + 1] < prices[max]) {
        console.log("calculating profit...");
        total_profit = total_profit + (prices[max] - prices[min]);
        min = 0;
        max = 0;
      }
    }
  }
  return total_profit;
};

console.log(maxProfit(prices));
