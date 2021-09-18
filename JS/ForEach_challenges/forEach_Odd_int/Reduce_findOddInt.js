const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

var arr1 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] //answer 5;
var arr2 = [1,1,2,-2,5,2,4,4,-1,-2,5] //answer -1;

console.log(findOdd(arr2));

/* ^ = means XOR operation
Capital letters as A or B or X are the result of a xor operation.

1. Truth table
--- 

0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

(this is usefull to undertand second thing below)

2. Properties: 

A ^ A = 0 ( ex: 10 ^ 10 = 0 )
A ^ 0 = A 

(ps: we don't need other properties to undertand)

3. Associativity:

a ^ b ^ c = a ^ c ^ b
or even
a ^ b ^ c ^ d = a ^ c ^ d ^ b

So this means that the priority order of operations 
can be changed, this is not mandatory to start by doing a ^ b operation.
*/