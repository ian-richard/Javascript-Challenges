// Goal:
// 'Hello World' = 'dlroW olleH'

const words = 'Hello World';

const reverseString = str => {
    return str.split("").reverse().join("");
}

console.log(reverseString(words))

//completed 3 mins