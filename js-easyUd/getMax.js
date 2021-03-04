const numbers = [1,2,3,4,5,6,7,1,4,5,8,3,3]

function getMax(arr){
    return Math.max(...arr)
}

const test = getMax(numbers);

function maxForLoop(arr){
    if (arr.length < 0) return undefined;

    let max = arr[0];

    for (let v = 1; v < arr.length; v++){
        if (arr[v] > max)
            max = arr[v];}
    return max;
}

const test1 = maxForLoop(numbers)


function useReduceForMax(arr){
    if (arr.length === 0) return undefined;

    return arr.reduce((a, b) => (a > b) ? a : b);
}

const test2 = useReduceForMax(numbers);
console.log(test2);