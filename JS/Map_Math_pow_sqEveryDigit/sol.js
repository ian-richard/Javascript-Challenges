function squareDigits(num){
    var arr = num.toString().split("");
    var res = arr.map( x => Math.pow(x, 2))
    return parseInt(res.join(""))
  }

//one-line
function squareDigits_oneLiner(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

//alt
function squareDigits__noMap(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

  console.log(squareDigits(3212)) // => 9414