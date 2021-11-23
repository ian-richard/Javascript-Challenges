
// Complete the method which returns the number which is most frequent in the given input array.

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
     
    console.log(obj)
    
    let highestFrequency = 0;
    let highestFrequencyNumber = 0;
    
    for (let key in obj) {
        if (obj[key] > highestFrequency) {
            highestFrequency = obj[key];
            highestFrequencyNumber = key;
        }   
    }
    
    return parseInt(highestFrequencyNumber);
    
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
//These both have two highest frequency numbers, hence will fail, see harder variation for solution (HarderVariationOfHighestNumInArray.js)
// var arr_hard = [12,10,8,12,7,6,4,10,12,10]
// var arr = [12,10,8,12,7,6,4,10,12,10]
console.log(highestRank(arr) === 12);