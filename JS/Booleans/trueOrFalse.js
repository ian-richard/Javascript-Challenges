// Task

// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false 
//(val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

const trueOrFalse_og = val => val ? "true" : "false";   

function trueOrFalse(val){
    return Boolean(val).toString();
  }

console.log(trueOrFalse(true) === "true");
console.log(trueOrFalse(123) ==="true");
console.log(trueOrFalse("123") === "true");
console.log(trueOrFalse(["123"]) ==="true");
console.log(trueOrFalse("false") ==="true");
console.log(trueOrFalse(false) === "false");
console.log(trueOrFalse(0) === "false");
console.log(trueOrFalse("") === "false");
console.log(trueOrFalse(null) ==="false");
console.log(trueOrFalse([].length) ==="false");
console.log(trueOrFalse(undefined) ==="false");

