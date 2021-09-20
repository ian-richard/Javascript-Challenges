function printerError_og(s) {
    //  optional chaining.
    const err = s.match(/[^a-m]/g)?.length || 0; return `${err}/${s.length}`;
}

function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}



    let s1="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    console.log(printerError(s1) === "3/56")
    let s2 = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    console.log(printerError(s2)=== "6/60")
    let s3 = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
    console.log(printerError(s3) === "11/65")
    let s4="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm"
    console.log(printerError(s4) === "0/53")