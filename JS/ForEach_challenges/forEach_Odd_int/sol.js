function findOdd(arr) {
    var result = 0;
   
       
    const occurences = arr.reduce(function (acc, curr) {
     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc}, {});
     //If acc[curr] exists, increment is by one, if not set it to 1.
   
    for (const property in occurences){
      if ( occurences[property] % 2 == 1 || occurences[property] == 1){
        result = parseInt(property);
      }
    }
     return result;
    
     }

var arr1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] //answer 5;
var arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5] //answer -1;

console.log(findOdd(arr2));