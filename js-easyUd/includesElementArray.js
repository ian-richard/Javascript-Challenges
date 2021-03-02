const numbers = [1, 2, 3, 4]
const e = 1;

function  includesEx(array, element) {
    return array.includes(element)};

    //alternative 
function includes(arr, element){
    for (let v of arr)
        if (v === element)
            return true
    return false
}

const test2 = includes(numbers, e);


const test = includesEx(numbers, e);
console.log(test2);