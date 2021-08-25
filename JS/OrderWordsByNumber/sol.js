function order(words){
    var toArray = words.split(" ");
    return toArray.sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ")
  }
//"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

const t = "is2 Thi1s T4est 3a";

console.log(order(t))

