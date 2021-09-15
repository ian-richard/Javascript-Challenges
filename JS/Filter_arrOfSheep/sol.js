function countSheeps(arr) {
    return arr.filter(e => e === true).length;
  }


//alt

function countSheeps_v2(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }


  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

    console.log(countSheeps(array1) === 17)