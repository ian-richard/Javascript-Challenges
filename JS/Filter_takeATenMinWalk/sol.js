function isValidWalk__og(walk) {
    if (walk.length !=10){return false}
    var north = walk.filter(word => word == 'n');
    var south = walk.filter(word => word == 's');
    var east = walk.filter(word => word == 'e');
    var west = walk.filter(word => word == 'w');
    if (north.length == south.length && east.length == west.length){ return true}
    else {
        return false;
    }
  }

  //alt
  function isValidWalk_helper(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }

  //alt 

  function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
  }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // 'should return true')
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // 'should return false')
console.log(isValidWalk(['w'])), //should return false'
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) //'should return false')