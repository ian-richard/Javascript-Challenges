

function sum10with3QuestionMarks(str) {
  res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        let whatisthis = str.slice(i, j).split("?");
        let length = whatisthis.length;
        console.log(whatisthis)
        console.log(length)
        if (str.slice(i, j).split("?").length - 1 < 3) {
            
          return false;
        }
      }
    }
  }

  return res;
};

// Examples
const input1 = "aa6?9";
// Output: false
let readLine = "acc?7??sss?3rr1??????5";
let readLine__false = "acc?8??sss?3rr1??????5";
const input2 = "acc?7??sss?3rr1??????5";
// Output: true
let true_res = '3???7';

console.log(sum10with3QuestionMarks(readLine));
