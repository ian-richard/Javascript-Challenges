function sumArray_og(arr) {

    return arr != null ? arr.sort((a, b) => a - b).slice(1, arr.length-1 ).reduce((a, b) => a + b, 0) : 0;
    }

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

console.log('Null or Empty')
console.log(sumArray(null) === 0);
console.log(sumArray([ ]) === 0);

console.log('Only one Element')
console.log(sumArray([ 3 ]) === 0);

console.log('Only two Element')
console.log(sumArray([ 3, 5 ]) === 0);

console.log('Real Tests')
console.log(sumArray([ 6, 2, 1, 8, 10 ])  === 16);
console.log(sumArray([ 6, 0, 1, 10, 10 ]) === 17);
console.log(sumArray([  -6, -20, -1, -10, -12 ]) === -28);
console.log(sumArray([ -6, 20, -1, 10, -12 ])  === 3);