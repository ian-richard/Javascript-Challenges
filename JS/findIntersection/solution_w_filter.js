function FindIntersection(strArr) { 

    var a = strArr[0].split(', ')
    var b = strArr[1].split(', ')
    var result = a.filter(x => b.find(a => a === x))
    return result.length > 0 ? result.join(',') : 'false'
  
  }
     
  const strArr = ["1, 3, 4, 7, 9, 13, 20", "1, 2, 4, 13, 9, 15, 20"]
  // keep this function call here 
  console.log(FindIntersection(strArr));