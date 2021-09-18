function count__og (string) {  
    var count = {}
    string.split("").forEach( x => count[x] ? count[x]++ : count[x] = 1)
    return count;
  }

//alt

  function count (string) {
    return string.split('').reduce(function(counts,char){
      counts[char] = (counts[char]||0) + 1;
      return counts;
      //note the empty object below for reduce to populate
    },{});
  }

  console.log(count("aba")) // { a: 2, b: 1 }); 
  console.log(count("")) // {}  