// Description:

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// create an object that has the number as the key and the frequency as the value
// iterate through the array and add the number to the object
// iterate through the object and find the highest frequency
// return the highest frequency number

const highestRank = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }  
    
    let highestFrequency = 0;
    let highestFrequencyNumberFirstLoop = 0;
    const highestFreqNums = [];
    
    for (let key in obj) {
        if (obj[key] > highestFrequency) {
            highestFrequency = obj[key];
            highestFrequencyNumberFirstLoop = key;
        }   
    }

    for (let key in obj) {
        if (obj[key] === highestFrequency) {
            highestFreqNums.push(key);
        }
    }
    // If there is a tie for most frequent number, return the largest number among them.
    if (highestFrequencyNumberFirstLoop > 1) {
        highestFrequencyNumber = Math.max(...highestFreqNums);
    }
    
    return parseInt(highestFrequencyNumber);
    
}

//refactor - (not written by me. NB it may be short, but it's pretty hard to read)
function highestRank_hardToRead(arr){
    return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
  }

var arr_easy = [12, 10, 8, 12, 7, 6, 4, 10, 12];
var arr_hard = [12,10,8,12,7,6,4,10,12,10]
var arr = [12,10,8,12,7,6,4,10,12,10,13, 13]
console.log(highestRank(arr) === 12);
console.log(highestRank_hardToRead(arr) === 12);