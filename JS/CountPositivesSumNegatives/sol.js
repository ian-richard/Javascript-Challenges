function countPositivesSumNegatives(input) {
    var res = [];
    if (input == null){ return res}
      else {
        var positives = input.filter(x => x > 0).length;
        var negs = input.filter(x => x < 0).reduce((t, n) => t + n, 0)
        positives > 0 && negs < 0 ? res.push(positives, negs) :  res = [];
        return res;
      }
  }

  