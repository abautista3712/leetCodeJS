/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const x = 1577962638;
const y = 1727613287;

var hammingDistance = function (x, y) {
  let bit_x = x.toString(2);
  let bit_y = y.toString(2);

  let distance = 0;

  if (bit_x.length != bit_y.length) {
    distance = Math.abs(bit_x.length - bit_y.length);
  }

  const adj = distance;

  if (bit_x.length > bit_y.length) {
    for (let i = 0; i < bit_y.length; i++) {
      if (bit_x.charAt(i + adj) != bit_y.charAt(i)) {
        distance++;
      }
    }
  } else if (bit_y.length > bit_x.length) {
    for (let i = 0; i < bit_x.length; i++) {
      if (bit_y.charAt(i + adj) != bit_x.charAt(i)) {
        distance++;
      }
    }
  }

  return distance;

  //   let combined_int = parseInt(bit_x) + parseInt(bit_y);

  //   console.log(combined_int.toString());

  //   let count = 0;
  //   while (combined_int >= 1) {
  //     if (combined_int % 10 == 1) {
  //       count++;
  //     }
  //     combined_int = Math.floor(combined_int / 10);
  //   }
  //   return count;
};

console.log(hammingDistance(x, y));
