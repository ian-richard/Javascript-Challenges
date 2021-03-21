// array of several arrays that each contain integers and your goal is to write a function that 
// will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]]
// then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. 
// Solve without and with reduce.

function sum_array(arr){
    let sum = 0;
    for(let i =0; 
        i < arr.length; 
        i++){
            for(let j=0;
                j< arr[i].length;
                j++)
            sum += arr[i][j];
        }
    return sum;
}

console.log(sum_array([[3, 2], [1], [4, 12]]));


