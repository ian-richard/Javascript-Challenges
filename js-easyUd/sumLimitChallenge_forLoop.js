// find the multiples of 3 + 5 for a Number. i.e for 10:
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// return total of multiples, i.e. 33. 


function sum(limit){
    let total = 0;
    for (let i = 0; i <= limit; i++){
        if (i % 3 === 0 || i % 5 === 0)
            total+= i; 
    }
    return total;
}


console.log(sum(10));
