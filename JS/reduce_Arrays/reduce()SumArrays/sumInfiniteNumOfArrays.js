/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/


function arrayPlusArray_og(arr1, arr2) {
    return arr1.concat(arr2).reduce((a,b) => a + b) 
  }

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a,b) => a+b,0)
}

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) //= 21
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) //= -21
  console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]))  //= 15)
  console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])) //= 2100