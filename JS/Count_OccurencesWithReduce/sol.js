const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  console.log(occurrences) // => {2: 5, 4: 1, 5: 3, 9: 1}