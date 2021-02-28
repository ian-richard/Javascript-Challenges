//how to check if two objects are the same in terms of values and the same in terms of reference point in memory


function ConstructorAddress(street, city, zip){
    this.street = street;
    this.city = city;
    this.zip = zip;}

let add1 = new ConstructorAddress("Sk st", 'Birm', 'BM10')
let add2 = new ConstructorAddress("Sk st", 'Birm', 'BM10')
let add3 = add1;

function  areEqual(a,b) {
    return a.street === b.street && a.city === b.city && a.zip === b.zip
}

function areSame(a,b){ return a === b}

console.log(areEqual(add1, add2));
console.log(areSame(add1, add2));
console.log(areSame(add1, add3));

