function sym(arr1, arr2) {
    var result = []
    // var merge = arr1.concat(arr2);
    // const findDups = merge => merge.filter((item, index) => merge.indexOf(item) !== index)
  
    // const dups = findDups(merge)
    const result1 = arr1.filter(function(e) {
      return this.indexOf(e) < 0;
    }, [...arr2])
  
    const result2 = arr2.filter(function(e) {
      return this.indexOf(e) < 0;
    }, [...arr1])
    
    const arr3 = [...result1, ...result2];
    return removeDup(arr3);
  }
  
  function removeDup(arr) {
    let result = []
    arr.forEach((item, index) => { if (arr.indexOf(item) == index) result.push(item) });
    return result;
  }
  
  console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // should return [3,4,5]

  //needs work
  console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])) //should return [1, 4, 5]

