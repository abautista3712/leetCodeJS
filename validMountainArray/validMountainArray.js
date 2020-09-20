// /**
//  * @param {number[]} A
//  * @return {boolean}
//  */

const A = [0, 3, 2, 1];

const validMountainArray = (A) => {
  for (let i = 0; i < A.length; i++) {
    console.log("---i---");
    console.log(i);
    if (A[i + 1] === A[i]) {
      console.log("---Idential values found. NOT a valid Mountain Array---");
      return false;
    } else if (A[i + 1] > A[i]) {
      console.log("---A[i]---");
      console.log(A[i]);
      console.log("Increase...");
    } else if (A[i + 1] < A[i]) {
      console.log("---A[i]---");
      console.log(A[i]);
      console.log("Decrease...");
      console.log("---i + 1 ---");
      console.log(i + 1);
      console.log("---A.length -1 ---");
      console.log(A.length - 1);
    } else if (A[i + 1] < A[i] && i + 1 === A.length - 1) {
      console.log("End of Array...");
      console.log("---Valid Mountain Array---");
      return true;
    } else {
      console.log("---NOT a valid Mountain Array---");
      return false;
    }
  }
};

validMountainArray(A);
