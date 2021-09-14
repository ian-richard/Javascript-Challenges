function makeNegative(num) {
    return num < 0 ? num : -num;
    
  }

console.log(makeNegative(42) === -42)

//other ternary examples
const boolToWord = bool => bool === true ? "Yes" : "No"

console.log(boolToWord(false) === 'No')