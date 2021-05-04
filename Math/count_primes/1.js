/**
 * @param {number} n
 * @return {number}
 */

const n = 2;

var countPrimes = function (n) {
  let count = 0;

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    } else if (num <= 3) {
      return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  };

  if (n === 0 || n === 1) {
    return 0;
  } else if (n > 1) {
    for (let i = 0; i < n; i++) {
      if (isPrime(i)) {
        // console.log(`PRIME = ${i}`);
        count++;
      }
    }
  }

  return count;
};

console.log(countPrimes(n));
