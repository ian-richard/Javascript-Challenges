function getCount(str) {
    var vowelsCount = 0;
    
    const strArr = str.toLowerCase().split("").sort().join("").match(/a|e|i|o|u/g)
    
    if (strArr != null){
      vowelsCount = strArr.length}
    
    return vowelsCount;
  }

  //refactor
  function getCount__refactor(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
    // [aeiou] = any of these letters (if truthy) or an empty array.
  }

  //alt solutions:

  function getCount__noRegEx(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }  

  const test1 = 'abracadabra';
  const test2 = 'my pyx'

  console.log(getCount__refactor(test1))