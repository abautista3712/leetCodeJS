/**
 * @param {number} n
 * @return {number}
 */

const n = 10;

var countPrimes = function (n) {
  let count = 0;

  const isPrime = (num) => {
    for (let i = 2; i < num - 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  if (n === 1) {
    return 0;
  } else if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  }

  return count;
};

console.log(countPrimes(n));
