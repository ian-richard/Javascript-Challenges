const isSquare = n =>{
    if (n === 0) return true;
    // step 1. zero is a sq num, therefore return true. 
    // step 2. 'truthy' check, if n > 0 AND 
    // step 3. the built in sq route function, when divided by 1 is equal to 0;
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
  
  console.log(isSquare(25)) // true
  console.log(isSquare(0)) // true
  console.log(isSquare(26)) // false

