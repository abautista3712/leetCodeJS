/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [3, 2, 6, 5, 0, 3];

var maxProfit = function (prices) {
  let i = 0;
  let j = prices.length - 1;

  let min, max;

  if (!prices.length || prices.length == 1) {
    return 0;
  }

  while (i <= j) {
    if (!min) {
      min = prices[i];
    } else if (min > prices[i]) {
      min = prices[i];
    }

    if (!max) {
      max = prices[j];
    } else if (max < prices[j]) {
      max = prices[j];
    }
    i++;
    j--;
  }

  console.log(`min = ${min}`);
  console.log(`max = ${max}`);

  if (min <= max) {
    return max - min;
  } else return 0;
};

console.log(maxProfit(prices));
