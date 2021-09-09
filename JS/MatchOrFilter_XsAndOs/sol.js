function XO_og(str) {
  var lower = str.toLowerCase();
  var arr = Array.from(lower);
  var oCount = arr.filter((letter) => letter == "o");
  var xCount = arr.filter((letter) => letter == "x");
  if (oCount.length == xCount.length) {
    return true;
  } else {
    return false;
  }
}

function XO_match(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}



  function XO(str) {
    return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
  }

  const XO_filter = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

console.log(XO('xo')) //true);
console.log(XO('XO')) //true);
console.log(XO('xo0')) //true);
console.log(XO("xxOo")) //,true);
console.log(XO("")); //,true,'Empty string contains equal amount of x and o');
console.log(XO("xxxxxoooxooo")); //,true);
console.log(XO('abcdefghijklmnopqrstuvwxyz')) //true,'Alphabet contains equal amount of x and o');
console.log(XO('xxxoo')) //,false);
console.log(XO("xxxm")); //,false);
console.log(XO("ooom")); //,false);
console.log(XO("Oo")); //,false);
