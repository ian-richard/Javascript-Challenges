// array of several arrays that each contain integers and your goal is to write a function that 
// will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]]
// then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. 
// Solve without and with reduce.

const test0 = [2,4,6]
const test = [[3, 2], [1], [4, 12]]

const sum1 = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++)
            total += arr[i][j];
    } 
    return total;
}
//set total to zero
//take arr for each item in arr
// for each item in each item
// add to total
// return total



console.log(sum1(test));

// 6 mins







