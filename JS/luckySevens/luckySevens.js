// a function which takes an array and returns true if three numbers in the array total7.

function lucky_sevens(arr) {
    if (arr.length < 3) {
      return false;
    }

    for (let i = 2; i < arr.length; i++) {
      if (arr[i] + arr[i-1] + arr[i-2] === 7) {
        return true; 
      }
    }
  
    return false;
    
  }
  const two = [1,2]
  const arr = [2, 1, 5, 1, 0]
 
  console.log(lucky_sevens(arr));