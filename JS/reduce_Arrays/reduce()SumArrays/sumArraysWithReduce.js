//reduce method

function sum_array(arr){
    let sum = 0;
    for(let i = 0;
        i < arr.length;
        i++){
            sum += arr[i].reduce((total, amount) => total + amount); 
        }
    return sum;
}

console.log(sum_array([[3, 2], [1], [4, 12]]));

//using  concat

function sumArray(arr) {
    return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)
  }

  console.log(sumArray([[3, 2], [1], [4, 12]]));