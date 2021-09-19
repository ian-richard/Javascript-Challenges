// Goal:
// 'Hello World' = 'dlroW olleH'

const words = 'Hello World';

const rev = str => {
    //empty string
    let result = '';
    for (var i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

console.log(rev(words))

//10 mins