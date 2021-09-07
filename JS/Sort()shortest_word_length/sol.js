function findShort(s){
    var order = s.split(" ").sort((a,b) => a.length - b.length)
    return order[0].length;
  }

function findShort__oneLiner(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


  //alt no sort function

  function findShort__noSort(s){
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
}

console.log(findShort__noSort("bitcoin take over the world maybe who knows perhaps")) // 3
console.log(findShort__oneLiner ("turns out random test cases are easier than writing out basic ones")) // 3 
console.log(findShort("Let's travel abroad shall we")) // 2
