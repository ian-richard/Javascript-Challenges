function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))
  }
  // filter array A, for each 'item' but not(!) if it is included array B.

console.log(arrayDiff([3,4], [3])) //  => [4], "a was [3,4], b was [3]"

// various options for solution at
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
