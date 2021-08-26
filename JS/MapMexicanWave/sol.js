function wave(str){
    let result = [];
    
    str.split("").forEach(function(char, index){
        //for each letter in the string
        if (/[a-z]/i.test(char)){
        //if the letter(char) is a letter (/i flag for case insensitive)
        result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index+1))
        //slice from the start of the str to index, make the char uppercase, add the remainder of the string i.e. index +1
    }})
    return result;
}

const t = "this is a few words";

console.log(wave(t))