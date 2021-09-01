function createPhoneNumber(numbers){
    var splitArr = numbers.join(" ");  
    var cleanStr = splitArr.replace(/\s/g, "");
    var p1 = cleanStr.slice(0,3)
    var p2 = cleanStr.slice(3,6)
    var p3 = cleanStr.slice(6)
    
    return `(${p1}) ${p2}-${p3}`
  }

  //subString solution:
  function createPhoneNumber_subString(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }

  console.log(createPhoneNumber_subString([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) == "(123) 456-7890")
  console.log(createPhoneNumber_subString([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))