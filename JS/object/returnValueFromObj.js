// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

//     Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

//     If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

//     Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

 var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' }
 var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

function aliasGen_og(first, second){
    var letters = /[a-z]/gi;
    var initial1 = first.charAt(0);
    var initial2 = second.charAt(0);
      if(!initial1.match(letters) || !initial2.match(letters)){
        return "Your name must start with a letter from A - Z.";
      } else {
        var fn = firstName[initial1.toUpperCase()];
        var sn = surname[initial2.toUpperCase()];
        return fn + " " + sn;
      }
}

const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}

console.log(aliasGen("Aaron", "Bean") === "Alpha Bomb");
console.log(aliasGen("Barry", "Carrot") === "Beta Catalyst");
console.log(aliasGen("1uan", "&drew") === "Your name must start with a letter from A - Z.");

