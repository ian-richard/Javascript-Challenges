const numbers  = [1,2,3,4,5,1,2]

function getAllIndexes(arr, val) {
    let indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes.length;
}

const test = getAllIndexes(numbers, 4);
console.log(test);

function countMethod(arr,v){
    let count = 0;
    for (let i of arr){
        if (i === v) count++;
    }
    return  count;
}

const test1 = countMethod(numbers, 1)
console.log(test1);

function useReduce(arr, v){
    return arr.reduce((accumulator, current)=>{
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    })
}

const test 