function likes(names) {
    if (names.length == 0){return 'no one likes this'}
    if (names.length == 1){return `${names[0]} likes this`}
    if (names.length == 2){return `${names[0]} and ${names[1]} like this`}
    if (names.length == 3){return `${names[0]}, ${names[1]} and ${names[2]} like this`}
    if (names.length > 3){return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`}
  }

  function likes__switch(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

const test1 = [] // must be "no one likes this"
const test2 = ["Peter"] // must be "Peter likes this"
const test3 = ["Jacob", "Alex"] // must be "Jacob and Alex like this"
const test4 = ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
const test5 = ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

console.log(likes__switch(test3))
  