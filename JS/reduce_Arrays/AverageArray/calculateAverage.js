/* 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

const find_average = array =>
     array.length > 0 ? array.reduce((a,b) => (a+b)) / array.length : 0;
  

  console.log(find_average([1,1,1]) === 1);
  console.log(find_average([1,2,3]) === 2);
  console.log(find_average([1,2,3,4]) === 2.5);