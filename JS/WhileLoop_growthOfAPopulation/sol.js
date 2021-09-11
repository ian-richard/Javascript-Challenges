function nbYear(p0, percent, aug, p) {
    var years = 0;
    while (p0 < p){
      years++
      p0 = p0 + (p0 *(percent/100) + aug)
    }
    if (p0 >= p){
      return years;
    }
  }

console.log(nbYear(1500, 5, 100, 5000) === 15); //answer 15
console.log(nbYear(1500000, 2.5, 10000, 2000000) === 10); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000) === 94); //94