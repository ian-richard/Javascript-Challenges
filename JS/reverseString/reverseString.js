// Goal:
// 'Hello World' = 'dlroW olleH'

function FirstReverse(str) { 

    var o = '';
    for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
    return o; 
  
  }
     
  const str = 'Hello World';
  console.log(FirstReverse(str));