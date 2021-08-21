module.exports = {
 descendingOrder: function(n){
    var result = n.toString().split('').sort(function(a,b){return b-a}).join('')
    
    return parseInt(result)
     
  }
}