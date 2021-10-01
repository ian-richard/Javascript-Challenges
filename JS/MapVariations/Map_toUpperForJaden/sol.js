const toJaden = (str) => {
  
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    
      
    }
const toJaden_CharAt = str => {
        return str.split(" ").map(function(word){
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");
    }

const nonJadenCase = "How can mirrors be real if our eyes aren't real"

console.log(toJaden(nonJadenCase))
console.log(toJaden_CharAt(nonJadenCase))