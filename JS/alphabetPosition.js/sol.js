function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    var cleanString = text.toLowerCase().replace(/[^a-z]/g, '')
    
    
    for (var i = 0; i < cleanString.length; i++){
      var j = alphabet.indexOf(cleanString[i])+1;
      result+=j+" ";
    }
    
    return result.trim();
  }

  const test = "The sunset sets at twelve o' clock."
  console.log(alphabetPosition(test))

  const result = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

  console.log(alphabetPosition(test) === result)

