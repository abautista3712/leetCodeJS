/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const arr = [91,4,64,78]
const pieces = [[78],[4,64],[91]]  

var canFormArray = function(arr, pieces) {
  // Flatten 'pieces' to 1D array.
  const flattenedPieces = pieces.reduce(
    (accumulator, currentValue) => {
      return accumulator.concat(currentValue)
    },
    []
    )
    // console.log(flattenedPieces)
    
    // Return false if pieces[i] does not appear in 'arr'
    // for (let i = 0; i < flattenedPieces.length; i++) {
    //   if (arr.includes(flattenedPieces[i]) == false) {
    //     console.log(arr.includes(flattenedPieces[i]))
    //     return false
    //   }
    // }
    
    // Create object of 'arr' array with 'i' as key and 'arr[i]' as value.
    let orderedArrObj = []
    for (let i = 0; i < arr.length; i++) {
      orderedArrObj.push({"order":i, "value":arr[i]})
    } 

    // // Sort 'arr' object by value for binary search
    orderedArrObj.sort((a,b) => {
      return a.value - b.value
    })

    // Define variables for binary search
    let startIndex = 0
    let endIndex = orderedArrObj.length - 1
    let middleIndex = Math.floor((startIndex + endIndex) / 2)
    
    // let n = pieces[i].length
    console.log(flattenedPieces)
    
    while (startIndex <= endIndex) {
      for (let i = 0; i < flattenedPieces.length; i++)
      {
        if (flattenedPieces[i] == orderedArrObj[middleIndex].value) {
          return console.log(`${flattenedPieces[i]} found in array at index ${middleIndex}`)
        }

        if (flattenedPieces[i] <  orderedArrObj[middleIndex].value) {
          endIndex = middleIndex - 1 
          console.log(`Searching left side of array`)
        }
        
        if (flattenedPieces[i] >  orderedArrObj[middleIndex].value) {
          startIndex =  middleIndex + 1
          console.log(`Searching right side of array`)
        }

        else {
          // If number in 'pieces' does not appear in 'arr' return false
          console.log(`${flattenedPieces[i]} not found in array`)
        }
      
    }
  } 

    console.log(orderedArrObj)

    

  // for (let i = 0; i < )

  // let array1 = [2,1,3],
//   array2 = [1,2,3,4],
  // array3 = [1,2];



// let checker = (arr, target) => target.every(v => arr.includes(v));

// console.log(checker(array2, array1));
// console.log(checker(array3, array1));

// let checker = (arr, target) => target.every(v => arr.includes(v));

// console.log(checker(arr, pieces[0]));
// console.log(checker(arr, pieces[1]));

  // console.log(arr.every())
  // const isBelowThreshold = (currentValue) => currentValue < 40

  // const array1 = [1, 30, 39, 29, 10, 13]
  
  // console.log(pieces.every(pieces[0] => arr.includes(x)))
  // expected output: true

  // const check = orderedArrObj.every(element => element.value == 88)
  // console.log(check)

// const found = arr.find(element => element.order == 88);
// console.log(found);
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
