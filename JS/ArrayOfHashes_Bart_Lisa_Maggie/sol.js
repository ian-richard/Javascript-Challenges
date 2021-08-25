const solution = names =>{
    var len = names.length;
    if (len == 0) return '';
    return names.slice(0, names.length-1).map(p=>p.name).join(", ") + (len>1 ? ' & ' : '') + names[len-1].name;
    // slice from the start of the hashes of names to the penultimate name, use map to populate a new array with just the names, 
    // use .join(", ") to convert to a string. if the lenght of the arr containing the hashes is greater than 1, add an '&'..
    // if not, add an '', and add the final hash's .name value; 
   }

const t = ([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

const t1 = ([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

const t2 = ([ {name: 'Bart'} ])
// returns 'Bart'

const t3 = ([])
// returns ''

console.log(solution(t))