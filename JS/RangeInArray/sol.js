/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:

monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]

*/

function monkeyCount_og(n) {
    var ans = [];
    
    for (let i = 1; i <= n; i++) {
        ans.push(i);
    }
    return ans;
}

function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)
  }

/* 
Array.from creates a new Array from an iterable object.

    Here the "iterable" is just {length:n} then the created array will have a length of n.
    The second (optional) argument is a map function which will be called on each item of the new created array: (_,i)=>i+1). Here the item (_) is ignored, but new item is formed with index (i) + 1.
*/

console.log(monkeyCount(5)) //= [1, 2, 3, 4, 5]);
console.log(monkeyCount(3)) //= [1, 2, 3]);
console.log(monkeyCount(9)) //= [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(monkeyCount(10)) //= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(monkeyCount(20)) //= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);