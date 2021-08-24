function alphabetPosition(text) {
    //does the string contain text 
  if (/[a-z]/gi.test(text)){
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map((c) => c.charCodeAt() - 64)
      .join(" ");
  }
    else {
        return 'No letters in string'
    }
}

const test = "The sunset sets at twelve o' clock.";
const test_noLetters = "{{{{[[!?[[,";
console.log(alphabetPosition(test_noLetters));

const result =
  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";

console.log(alphabetPosition(test) === result);
