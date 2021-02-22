
//set a limit, and log the numbers from 0 to the limit
// add a string for odd/even numbers accordingly 

function showNumbers(limit){
  for (let i = 0;
    i <= limit;
    i++){
    // if (i % 2 === 0) 
    //     console.log( i + " EVEN");
    // else 
    //     console.log( i + " ODD");
    const message = ( i % 2 === 0) ? " EVEN" : " ODD"
    console.log(i, message);}
}

const test = showNumbers(10);