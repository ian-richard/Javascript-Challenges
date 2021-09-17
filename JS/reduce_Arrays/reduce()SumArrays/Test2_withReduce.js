// array of several arrays that each contain integers and your goal is to write a function that 
// will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]]
// then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. 
// Solve without and with reduce.

const test0 = [2,4,6]
const test = [[3, 2], [1], [4, 12]]

const sum1 = arr =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i].reduce((total, n) => total + n, 0)
    }
    return sum;
}

console.log(sum1(test));


//11 mins
