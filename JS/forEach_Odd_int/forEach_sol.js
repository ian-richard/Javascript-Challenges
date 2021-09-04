//If obj[el] exists, increment is by one, if not set it to 1.

function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }

  /*
  forEach() executes the callbackFn function once for each array element; unlike map() or reduce() 
  it always returns the value undefined and is not chainable. The typical use case is to execute side 
  effects at the end of a chain. */

  var arr1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] //answer 5;
var arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5] //answer -1;

console.log(findOdd(arr2));