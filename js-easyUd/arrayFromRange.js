const numbers = arrayFromRange(-2,1);

var MIN=17,MAX=23 //--> [18,19,20,21,22,23] EXPECTED

function arrayFromRange(MIN, MAX){
    return Array.from({length:MAX-MIN+1},(v,k)=>k+MIN)
}

console.log(numbers);

