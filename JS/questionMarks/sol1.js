

function QuestionsMarks(str) {
  res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return res;
}

let readLine = "acc?7??sss?3rr1??????5";
let readLine__false = "acc?8??sss?3rr1??????5";
console.log(QuestionsMarks(readLine));
