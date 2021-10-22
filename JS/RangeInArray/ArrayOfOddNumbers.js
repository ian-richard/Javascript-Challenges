//given a start and a stop (inclusive) write a function which returns an array of odd numbers

function oddArr(start, end) {
    
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    newArr = range(start, end, 1);
    //if n is even, n%2 will return 0 and the item will be removed by the filter.
    return newArr.filter(n => n%2)
}

console.log(oddArr(2,5)) //== [3,5]
