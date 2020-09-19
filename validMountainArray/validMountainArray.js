// /**
//  * @param {number[]} A
//  * @return {boolean}
//  */

const A = [1, 3, 1];

const validMountainArray = (A) => {
  for (let i = 0; i < A.length; i++) {
    if (A[i + 1] === A[i]) {
      console.log("---Idential values found. NOT a valid Mountain Array---");
      return;
    } else if (A[i + 1] > A[i]) {
      console.log("Increasing...");
      console.log(A[i]);
    } else if (A[i + 1] < A[i]) {
      console.log("MAX value identified");
      console.log(A[i]);
    } else {
      console.log("---No increase. NOT a valid Mountain Array---");
      return;
    }
  }
};

validMountainArray(A);
