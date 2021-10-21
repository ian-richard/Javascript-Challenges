// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy_og(x, n) {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    return range(x, (x*n), x);
  }

  const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

//range from here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

function countBy_for(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}



console.log(countBy(1,10))// == [1,2,3,4,5,6,7,8,9,10])  "Array does not match"
console.log(countBy(2,5)) // == [2,4,6,8,10])// "Array does not match"
