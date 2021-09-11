function duplicateEncode_og(str){
    var result = '';
    var word = str.toLowerCase();
    for (var i = 0; i < word.length; i++){
      if (word.indexOf(word[i]) === word.lastIndexOf(word[i])){
        result += '('
      }
      else { result += ')'
           }
  }
    return result;
    }

    function duplicateEncode(word){
        return word
          .toLowerCase()
          .split('')
          .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
          })
          .join('');
      }


console.log(duplicateEncode("din") === "(((")//,"(((");
console.log(duplicateEncode("recede") === "()()()")//,);
console.log(duplicateEncode("Success") === ")())())")//,")())())","should ignore case");
console.log(duplicateEncode("(( @") === "))((")//,"))((");