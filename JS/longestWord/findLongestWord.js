//

function LongestWord(sen) { 

    var words = sen.split(' ');
    console.log(words);
    var longest = ''; 
    console.log(words[i]);
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) { 
        longest = words[i]; 
      }
    }
    
    return longest; 
  
  }

  const sentence = 'Find the longest llngest word'

  console.log(LongestWord(sentence));