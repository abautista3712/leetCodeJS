// /**
//  * @param {number[]} A
//  * @return {boolean}
//  */

const A = [2, 1];

const validMountainArray = (A) => {
  for (let i = 0; i < A.length; i++) {
    if (A[i + 1] < A[i]) {
      console.log("---MAX Found---");
      console.log(A[i]);
    }
  }
};

validMountainArray(A);
