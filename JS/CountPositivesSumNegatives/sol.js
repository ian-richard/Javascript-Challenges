function countPositivesSumNegatives_og(input) {
    var res = [];
    if (input == null){ return res}
      else {
        var positives = input.filter(x => x > 0).length;
        var negs = input.filter(x => x < 0).reduce((t, n) => t + n, 0)
        positives > 0 && negs < 0 ? res.push(positives, negs) :  res = [];
        return res;
      }
  }

    //alt

    function countPositivesSumNegatives(input) {
        if (input == null || input.length == 0)
          return [];
        
        var positive = 0;
        var negative = 0;
        
        for (var i=0, l=input.length; i<l; ++i)
        {
          if (input[i] > 0)
            ++ positive;
          else
            negative += input[i];
        }
        
        return [positive, negative];
    }

  let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
  let actual = countPositivesSumNegatives(testData);

  console.log('Result '+actual)
  console.log('Expected [8, -50]') 

