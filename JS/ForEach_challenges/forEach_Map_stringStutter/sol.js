function accum(s) {
    let result = []
    let addhyphen = '-'
    s.split("").forEach(function(char, index){
      var c = (s.slice(index, index+1))
      if (index == 0){result.push(c.toUpperCase())}
      if (index >= 1){
        result.push(addhyphen, c.toUpperCase(), c.toLowerCase().repeat(index));
      }
    })
    return result.toString().replace(/(,)/g, "");
    
  }

  //better solution

  function accum_map(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

 


  const test = 'ZpglnRxqenU'
  const result = "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

  console.log(accum_map(test) === result)
  