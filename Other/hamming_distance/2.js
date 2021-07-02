/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const x = 1;
const y = 4;

var hammingDistance = function (x, y) {
  let bit_x = x.toString(2);
  let bit_y = y.toString(2);

  let distance = 0;

  //   Adjustment value: Length difference b/w bit_x and bit_y
  if (bit_x.length != bit_y.length) {
    adj = Math.abs(bit_x.length - bit_y.length);
  }

  //   When bit_x is LONGER / bit_y is SHORTER
  if (bit_x.length > bit_y.length) {
    for (let i = 0; i < adj; i++) {
      if (bit_x.charAt(i) != 0) {
        distance++;
      }
    }
    for (let i = adj; i < bit_x.length; i++) {
      if (bit_x.charAt(i) != bit_y.charAt(i)) {
        distance++;
      }
    }
  }
  //   When bit_y is LONGER / bit_x is SHORTER
  else if (bit_y.length > bit_x.length) {
    for (let i = 0; i < adj; i++) {
      if (bit_y.charAt(i) != 0) {
        distance++;
      }
    }
    for (let i = adj; i < bit_y.length; i++) {
      if (bit_y.charAt(i) != bit_x.charAt(i)) {
        distance++;
      }
    }
  }
  //   When bit_x.length == bit_y.length
  else {
    for (let i = 0; i < bit_x.length; i++) {
      if (bit_y.charAt(i) != bit_x.charAt(i)) {
        distance++;
      }
    }
  }
  return distance;
};

console.log(hammingDistance(x, y));
