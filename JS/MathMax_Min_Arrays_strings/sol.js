function highAndLow(numbers){
    var toArr = numbers.split(" ");
    return `${Math.max(...toArr)} ${Math.min(...toArr)}`
  }