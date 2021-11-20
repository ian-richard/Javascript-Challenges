/*
Debug the functions

Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

broken code:

function multi(arr) {
  return arr * arr;
}
function add(arr) {
  return arr + arr;
}
function reverse(str) {
  return str.reverse();
}

*/


function multi(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue * currentValue)
  }
  function add(arr) {
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue)
  }
  function reverse(str) {
    return str.split("").reverse().join("");
  }

console.log(multi([5, 1, 5]) === 25);
console.log(add([9, 8, 5]) === 22);
console.log(reverse("Hello") === "olleH");