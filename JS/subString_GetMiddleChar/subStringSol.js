function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

const test = 'animal'
const test_odd = 'animals'

console.log(getMiddle(test_odd))

function getMiddle__slice(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

function getMiddle__charAt(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}