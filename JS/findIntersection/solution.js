function FindIntersection(strArr) { 

    const lists = strArr.map(str => str.split(", "));
    const firstList = lists[0];
    const secondList = lists[1];
  
    let matchMap = {};
    let resultArr = [];
  
    firstList.forEach( num => matchMap[num] = true);
    secondList.forEach( num => {
      if(matchMap[num]){
        resultArr.push(num);
      }
    })
  
    if(resultArr.length > 0){
      return resultArr.join(",")
    }
  
    return false; 
  
  }

  const strArr = ["1, 3, 4, 7, 9, 13", "1, 2, 4, 13, 9, 15"]
  // keep this function call here 
  console.log(FindIntersection(strArr));