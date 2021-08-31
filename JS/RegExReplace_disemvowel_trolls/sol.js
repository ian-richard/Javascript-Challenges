function disemvowel(str) {
    //regular expression of [] matches aeiou, gi is global + case insensitive 
    return str.replace(/[aeiou]/gi, '');
  }