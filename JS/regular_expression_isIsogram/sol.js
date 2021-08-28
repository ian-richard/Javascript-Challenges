function isIsogram(str){
    var result = true;
    var withNoDigits = str.replace(/[0-9]/g, '');
  //   if (withNoDigits == ''){ result = true;}
    if (/^.*(.).*\1.*/gi.test(str)){
      result = false;
    
    }
    return result;
  }

//one-liner sol

function isIsogram_OneLiner(str){ 
    return !/(\w).*\1/i.test(str)
  }
  //to make sense of this use https://regexr.com/

const t1 = 'Dermatoglyphics' //true
const t2 = 'isIsogram' //false

console.log(isIsogram_OneLiner(t1))
console.log(isIsogram_OneLiner(t2))