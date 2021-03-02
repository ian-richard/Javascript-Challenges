

const numbers = [1,2,3,4]

function move(arr, index, offset){
    const position = index + offset;
    if (position >=  arr.length || position < 0){
        console.error('Invalid offset')
        return;
    }

    const output = [...arr];
    const element = output.splice(index,1)[0];
    output.splice((index+offset), 0, element);
    return output;
}

const output = move(numbers, 2, -1);
console.log(output);