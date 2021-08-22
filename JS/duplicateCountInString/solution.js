
function duplicateCount(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    
    if (strArr != null) {
      strArr.forEach((i) => {
        result.push(i[0]);
      });
    }  return result.length;
  }


const test1 = "abcde" //-> 0 # no characters repeats more than once
const test2 = "aabbcde" //-> 2 # 'a' and 'b'
const test3 ="aabBcde" //-> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
const test4 = "indivisibility" //-> 1 # 'i' occurs six times
const test5 = "Indivisibilities" //-> 2 # 'i' occurs seven times and 's' occurs twice
const test6 = "aA11" //-> 2 # 'a' and '1'
const test7 = "ABBA" //-> 2 # 'A' and 'B' each occur twice

console.log(duplicateCount(test1))
console.log(duplicateCount(test2))
console.log(duplicateCount(test3))
console.log(duplicateCount(test4))
console.log(duplicateCount(test5))
console.log(duplicateCount(test6))
console.log(duplicateCount(test7))


