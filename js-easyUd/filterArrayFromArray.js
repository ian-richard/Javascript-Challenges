const numbers = [1,2,3,4, 5]

const filtered = numbers.filter((value)=>{
    return value >= 2});


function filterArrWithArr(arr, excluded){
    const output = [];
    for (let e of arr){
        if (!excluded.includes(e))
            output.push(e)
    }
    return output
}

const ex = [5, 1, 3]

const test = filterArrWithArr(numbers, ex);
console.log(test);