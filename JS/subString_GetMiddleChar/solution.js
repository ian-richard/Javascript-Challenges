function getMiddle(s)
{
  result = '';
  var middleChar = Math.floor(s.length / 2); 
  var secondCharacter = middleChar + 1;
 
  //if an remainder does not equal 0, it's an odd length string
  if (s.length % 2 !== 0){
    result = result.concat(s[middleChar])
  }
  else {
    result = result.concat(s[(middleChar -1)] + s[(secondCharacter - 1)])  //the '-1' is due to concat counting from zero
  }
  return result;
}

const test = 'test'

console.log(getMiddle(test))