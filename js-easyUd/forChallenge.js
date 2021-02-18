
//print the same msg five times 
function msgFive () {
    for (let i = 1; i <= 5; i++)
  console.log('Hello World', i)};

// msgFive();

// print odd numbers
function printOdds (num) {
for (let i = num; i <= 10; i++){
    if (i % 2 !==0) console.log(i)}};

// printOdds(4);

// decrement i, odd numbers in the reverse order 
function printOdds__decrement() {
    for (let i = 5; i >= 1; i--){
        if (i % 2 !==0) console.log(i)}};
    
// printOdds__decrement();

// while loop version of for loop

function printOddsWhile () {
    let i = 0;
    while ( i <= 10){
        if (i % 2 !==0) console.log(i);
    i++}};

printOddsWhile();

