// speed limit = 70
// for every 5 mph over the speed limit = 1 point
// Math.floor takes a decimal it it's single greatest number. i.e 1.3 to 1. 
// 12 points = licence suspended

function checkSpeed(num){
  let speed = Math.floor(num);
  let points = 0
  let sum =  speed - 70;
  let calc = 0
  if (speed <= 74)
    return 'OK'
  else if (speed >= 130)
        return 'Licence suspended';
  else if (
    points = (sum / 5)
  )
    return Math.floor(points);
};

let test = checkSpeed(99);
console.log(test);