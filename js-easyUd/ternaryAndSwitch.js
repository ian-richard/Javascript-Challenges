
//ternary 
let points =99;
let type = points > 100 ? 'gold' : 'silver'
console.log(type);

let a = 'red';
let b = 'blue';

let c = a;
a = b;
b = c;


console.log('a is', a +' & ' + 'b is ', b) 

function switchValues(a,b){
    let temp = b; 
    b = a; 
    a = temp;
    return console.log('a is', a +' & ' + 'b is ', b)
}


switchValues(a,b);
