function sumTwoSmallestNumbers(numbers) {  
    var sortAscending = numbers.sort((a, b) => a - b);
    return sortAscending[0] + sortAscending[1]
    }

const t1 = [19, 5, 42, 2, 77]
const t2 = [10, 343445353, 3453445, 3453545353453]

console.log(sumTwoSmallestNumbers(t2))