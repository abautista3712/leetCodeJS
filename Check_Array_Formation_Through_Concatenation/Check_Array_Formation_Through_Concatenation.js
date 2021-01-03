/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const arr = [15,88]
const pieces = [[88],[15]]  

let orderedArrObj = {}

var canFormArray = function(arr, pieces) {
  // Return false if pieces[i][j] does not appear in 'arr'
  for (let i = 0; i < pieces.length; i++)
  {
    if (pieces[i].length == 1)
    {     
      if (arr.includes(pieces[i][0]) == false)
      {
        console.log(arr.includes(pieces[i][0]))
        return false
      }
    }
    else
    {
      for (let j = 0; j < pieces[i].length; j++)
      {
        if (arr.includes(pieces[i][j]) == false)
        {
          console.log(arr.includes(pieces[i][j]))
          return false
        }
      }
    }
  }

  // Create object of 'arr' array with 'arr' array value as key and 'arr' array order as value.
  for (let i = 0; i < arr.length; i++)
  {
    orderedArrObj[i] = arr[i]
  } 
};

canFormArray(arr,pieces)

console.log(orderedArrObj)