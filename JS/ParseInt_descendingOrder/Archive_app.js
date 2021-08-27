module.exports = {
  descendingOrder: function(n){
   
    var numsToString = n.toString()
    // console.log(numsToString)
    
    var splitString = numsToString.split('')
    // console.log(splitString)
    
    var sortString = splitString.sort(function(a,b){return b-a})
    // console.log(sortString)
    
    var join = sortString.join('')
    // console.log(join)
    
    var result = parseInt(join);
    
    return result;
  }
}
