

const myArray = [0, null, undefined, '', 2, 3]
// const count = myArray.filter(Boolean);
// console.log(count.length);

function countTruthy(array){
    let count = 0;
    for (let value of array)
      if (value)
        count++;
    return count;
}

const test1 = countTruthy(myArray);
console.log(test1);