// speed limit = 70
// for every 5 mph over the speed limit = 1 point
// Math.floor takes a decimal it it's single greatest number. i.e 1.3 to 1. 
// 12 points = licence suspended





// function checkSpeed(num){
//   const speedLimit = 74;
//   const speedToSuspendLicence = 130;
//   const mphPerPoint = 5;
//   let speed = Math.floor(num);
//   let points = 0
//   let sum =  speed - 70;
//   let calc = 0
//   if (speed <= speedLimit)
//     return 'OK'
//   else if (speed >= speedToSuspendLicence)
//         return 'Licence suspended';
//   else if (
//     points = (sum / mphPerPoint)
//   )
//     return 'Points: ' + Math.floor(points);
// };

// let test = checkSpeed(80);
// console.log(test);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit)
    console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
          console.log("Licence Suspended");
        else 
          console.log('Points ' + points);
    }
}

const test = checkSpeed(80);
console.log(test);