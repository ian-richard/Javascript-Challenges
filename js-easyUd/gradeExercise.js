const goodMarks = [80, 80, 50];
const badMarks = [10, 10, 10];

// Avg = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


function calculateGrade(marks){
    let avg = calculateAverage(marks);
    const A = 90;
    const B = 80;
    const C = 70;
    const D = 60;
    const F = 59;
    
    
    if (avg >= A) return 'A';
    else if (avg >= B) return 'B';
    else if (avg >= C) return 'C';
    else if (avg >= D) return 'D';
    else if (avg <= F) return 'F';
        
      }

function calculateAverage(array){
    let sum = 0;
    for (let item of array)
        sum+= item;
    return sum / array.length
}

console.log(calculateGrade(goodMarks));
console.log(calculateGrade(badMarks));

// const reducer = (sum, val) => sum + val;
//         const initialValue = 0;
//         let avg = marks.reduce(reducer, initialValue) / marks.length;
