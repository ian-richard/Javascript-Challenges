function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      //Map(Number) is a handy shortcut to strings to numbers
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }

 console.log(persistence(39)) //3)
 console.log(persistence(4)) //0)
 console.log(persistence(25)) //2
 console.log(persistence(999)) //,4

