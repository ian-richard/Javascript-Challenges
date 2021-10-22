//given a start and a stop (inclusive) write a function which returns an array of odd numbers

function oddArr(start, end) {
    
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    newArr = range(start, end, 1);
    //if n is even, n%2 will return 0 and the item will be removed by the filter.
    return newArr.filter(n => n%2)
}

// console.log(oddArr(2,5)) //== [3,5]

function oddArrWhile(start, end){
    let res = [];
    var i = start;
    while ( i < end ){
        i++
        if ( i % 2 != 0){
            res.push(i);
        }
        
    }
    return res;
}

// console.log("test 1: ", oddArrWhile(2,5)) //== [3,5]

function oddArrFor(start, end){
    let res = [];
    for (var i = start; i <= end; i++){
        if ( i % 2 != 0){
            res.push(i);
        }
    }
    return res;
}

console.log("test for-loop: ", oddArrFor(2,5)) //== [3,5]



