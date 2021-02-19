

//find the max of two numbers 
function findMax(num1, num2){
    let sumMultiplied = num1 * num2;
    let sumAdd = num1 + num2;
    let sumPower = num1 ** num2
    let sumPowerRev = num2 ** num1;
    let result = sumMultiplied;
    if (sumAdd > result)
         result = sumAdd;
    else if (sumPower > result)
        result = sumPower;
    else if (sumPowerRev > result)
        result = sumPowerRev;
    return ('result is ' + result);
}

// console.log(findMax(8,9));

//find the higher value

function max(a,b){
    return (a > b) ? a : b;
}

let number = max(10,3)
console.log(number);

//is it landscape? 
function isLandscape(width,height){
    return (width > height);
}
console.log(isLandscape(50,100));