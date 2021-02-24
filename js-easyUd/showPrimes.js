//create a function which logs all 
//prime numbers upto a set number, i.e. the limit

const test = showPrimes(10)

function showPrimes(limit){
    for (let num = 2; num <= limit; num++){
    let isPrime = true;
        for(let factor = 2; factor < num; factor++){
            if (num % factor === 0){
                isPrime = false;
                break
            }
        }
        if (isPrime) console.log(num);
    }
}

