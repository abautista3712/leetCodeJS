// /**
//  * @param {number[]} A
//  * @return {boolean}
//  */

const A = [0, 3, 2, 1];

const validMountainArray = (A) => {
  for (let i = 0; i < A.length; i++) {
    if (A[i + 1] === A[i]) {
      console.log("---Idential values found. NOT a valid Mountain Array---");
      return false;
    } else if (A[i + 1] > A[i]) {
      console.log("Increasing...");
      console.log(A[i]);
    } else if (A[i + 1] < A[i]) {
      console.log("Decreasing...");
      if ((i = A.length - 1)) {
        console.log("---Valid Mountain Array---");
        return true;
      }
    } else {
      console.log("---No increase. NOT a valid Mountain Array---");
      return false;
    }
  }
};

validMountainArray(A);
