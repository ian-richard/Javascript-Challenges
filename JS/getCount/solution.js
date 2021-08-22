function getCount(str) {
    var vowelsCount = 0;
    
    const strArr = str.toLowerCase().split("").sort().join("").match(/a|e|i|o|u/g)
    
    if (strArr != null){
      vowelsCount = strArr.length}
    
    return vowelsCount;
  }

  const test1 = 'abracadabra';
  const test2 = 'my pyx'

  console.log(getCount(test1))