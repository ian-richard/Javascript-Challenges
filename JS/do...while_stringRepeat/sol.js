function repeatStr (n, s) {
    let res = '';
    let i = 0;
    
    do {
      i = i + 1;
      res += s;
    } while (i < n);
    
    return res
  }

// same but with for loop

function repeatStr_for (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }

// refactor 

const repeatStr_refactor = (n, s) => s.repeat(n)

console.log(repeatStr_for(3, "ha ") === 'ha ha ha ')
