module.exports = {
  descendingOrder: function(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
 }

// module.exports = {
//  descendingOrder: function(n){
//     var result = n.toString().split('').sort(function(a,b){return b-a}).join('')
    
//     return parseInt(result)
     
//   }
// }