/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const arr = [91,4,64,78]
const pieces = [[78],[4,64],[91]]  

var canFormArray = function(arr, pieces) {
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
        // console.log(pieces[i][j])
        if (arr.includes(pieces[i][j]) == false)
        {
          console.log(arr.includes(pieces[i][j]))
          return false
        }
      }
    }
  }
};
    
canFormArray(arr,pieces)