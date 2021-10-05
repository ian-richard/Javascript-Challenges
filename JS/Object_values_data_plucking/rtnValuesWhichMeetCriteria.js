// Task

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)
// Examples

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function myLanguages(results) {
    var res = []
    
    var arr = Object.entries(results)
    arr.sort(function(b,a){
      return a[1] - b[1]
    })
    console.log(arr)
    for ( const e in arr){
      if (e[0] >= 60){
        console.log('ok')
      }
    }
    
   //  for (const property in results){
   //    //console.log(`${property}: ${results[property]}`);
   //    if (results[property] >= 60){
   //      res.push(property)
   //    }
   //    }
    return res;
    }