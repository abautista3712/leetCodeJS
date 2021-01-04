/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const arr = [91,4,64,78]
const pieces = [[78],[4,64],[1]]  

let orderedArrObj = []

var canFormArray = function(arr, pieces) {
  // Flatten 'pieces' to 1D array. Return false if pieces[i] does not appear in 'arr'
  const flattenedPieces = pieces.reduce(
    (accumulator, currentValue) => {
      return accumulator.concat(currentValue)
    },
    []
  )
  // console.log(flattenedPieces)
  
  for (let i = 0; i < flattenedPieces.length; i++) {
    if (arr.includes(flattenedPieces[i]) == false) {
      // console.log(arr.includes(flattenedPieces[i]))
      return false
    }
  }

  // Create object of 'arr' array with 'arr' array value as key and 'arr' array order as value.
  // for (let i = 0; i < arr.length; i++) {
  //   orderedArrObj[i] = arr[i]
  // } 

  // const check = orderedArrObj.every(element => element.value == 88)
  // console.log(check)

// const found = arr.find(element => element.order == 88);
// console.log(found);

  // console.log(orderedArrObj)

  // // Sort 'arr' for binary search
  // arr.sort()

  // for (let i = 0; i < pieces.length; i++)
  // {
  //   // Define variables for binary search
  //   let startIndex = 0
  //   let endIndex = arr.length - 1

  //   let n = pieces[i].length
    
  //   while (startIndex <= endIndex) {
  //     let middleIndex = Math.floor((startIndex + endIndex) / 2)
  //     if (pieces[i] == arr[middleIndex]) {
  //       if (n == 1) {
  //         return console.log(`${pieces[i]} found in array at index ${middleIndex}`)
  //       }
  //       else
  //       {
  //         for (let j = 0; j < n; )
  //       }
  //     }

  //     if (pieces[i] <  arr[middleIndex]) {
  //       endIndex = middleIndex - 1 
  //       console.log(`Searching left side of array`)
  //     }
      
  //     if (pieces[i] >  arr[middleIndex]) {
  //       startIndex =  middleIndex + 1
  //       console.log(`Searching right side of array`)
  //     }

  //   }
  //   // If number in 'pieces' does not appear in 'arr' return false
  //   console.log(`${pieces[i]} not found in array`)
  // }
}

canFormArray(arr,pieces)

// console.log(orderedArrObj)

// 1) If pieces[i] == 1, search arr for existence
// 2) If pieces[i] > 1, search arr for existence w/ order

// Worst Case Scenarios
// i) Pieces Array of Arrays has multiple arrays with multiple items per array
    // -> Nested Loops
    //   -> One to loop through pieces array
    //   -> One to loop through pieces array items
    //   -> One to loop through arr
    // -> Search and if matches, remove from future searches
