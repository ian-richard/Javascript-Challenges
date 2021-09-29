/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
    var bmi = weight / (height*height) 
      return bmi <= 18.5? "Underweight" : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? "Overweight" : "Obese"
  }

  console.log(bmi(50, 1.80) === "Underweight");
  console.log(bmi(80, 1.80) === "Normal");
  console.log(bmi(90, 1.80) === "Overweight");
  console.log(bmi(110, 1.80) === "Obese");