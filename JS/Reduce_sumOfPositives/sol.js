function positiveSum__og(arr) {
    var positives = arr.filter(e => e > 0)
    return positives.reduce((t, n) => t + n, 0)
  }

  // one-liner
function positiveSum_oneLiner(arr) {
    return arr.filter(e => e > 0).reduce((t, n) => t + n, 0)
}

//no built in functions 
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }


  console.log(positiveSum([1,2,3,4,5])) //15
  console.log(positiveSum([1,-2,3,4,5])) //13
  console.log(positiveSum([])) //0
  console.log(positiveSum([-1,-2,-3,-4,-5]))//0
  console.log(positiveSum([-1,2,3,4,-5])) //9