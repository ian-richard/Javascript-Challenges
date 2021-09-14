function removeChar(str) {
    return str.slice(1, -1);
  }

//or

const removeChar_oneLiner = str => str.slice(1,-1)

console.log(removeChar_oneLiner('function'))