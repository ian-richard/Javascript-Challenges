
function arrayFromRange_loop(min, max){
    let output = [];
    for (let i = min; i <= max; i++)
        output.push(i)
        return output
}

const numbers = arrayFromRange_loop(-1,4);

function arrayFromRange(MIN, MAX){
    return Array.from({length:MAX-MIN+1},(v,k)=>k+MIN)
}

console.log(numbers);



