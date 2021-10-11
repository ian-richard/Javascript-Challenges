// Task:

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// +---------------+-------------+
// |  numbers n    | price(cents)|
// +---------------+-------------+
// |n<5            |    100      |
// +---------------+-------------+
// |n>=5 and n<10  |     95      |
// +---------------+-------------+
// |n>=10          |     90      |
// +---------------+-------------+

// You can use if..else or ternary operator to complete it.


//clean code sol
function saleHotdogs_og(n){
    const lowVolume = 4, lowVolumePrice = 100;
    const medVolume = 9, medVolumePrice = 95;
    const highVolume = 10, highVolumePrice = 90;
    return n<= lowVolume? n*lowVolumePrice : n<= medVolume ? n*medVolumePrice : n*highVolumePrice;
  }

//hard for others to understand one-liner 
const saleHotdogs=n=>n*(n<5?100:n<10?95:90);

console.log(saleHotdogs(1) === 100);
console.log(saleHotdogs(4) === 400);
console.log(saleHotdogs(5) === 475);
console.log(saleHotdogs(9) === 855);
console.log(saleHotdogs(10)  === 900);
console.log(saleHotdogs(100) === 9000);

