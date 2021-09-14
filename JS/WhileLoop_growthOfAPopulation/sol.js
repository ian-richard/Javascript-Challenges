function nbYear(p0, percent, aug, p) {
    var years = 0;
    while (p0 < p){
      years++
      p0 = p0 + (p0 *(percent/100) + aug)
    }
    if (p0 >= p){
      return years;
    }
  }

console.log(nbYear(1500, 5, 100, 5000) === 15); //answer 15
console.log(nbYear(1500000, 2.5, 10000, 2000000) === 10); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000) === 94); //94


/*
Summation - //simple 'do...while' example: Write a program that finds the summation of every number from 1 to num. The number will always be 
a positive integer greater than 0. For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    var sum = 0;
    var i = 0;
    while ( i < num){
      i++
      sum+=i;
    }
    return sum;
    }

console.log('Summation: ' + (summation(100) === 5050))

const summation_gaussian = n => n * (n + 1) / 2;
// gaussian - https://www.youtube.com/watch?v=dMn5w4_ztSw
console.log('Summation_gaussian: ' + (summation_gaussian(100) === 5050))
