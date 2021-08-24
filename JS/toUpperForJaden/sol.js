const toJaden = (str) => {
  
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    
      
    }

const nonJadenCase = "How can mirrors be real if our eyes aren't real"

console.log(toJaden(nonJadenCase))