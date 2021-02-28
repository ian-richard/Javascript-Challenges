const address = {
    street: 'Littleford',
    city: 'London',
    zip: 'W2Y 4AA'
}

function showAddress(address){
    for (let key in address) console.log(key, address[key]);
}

// showAddress(address);

//factory function for creating an object
function createAddress(street, city, zip){
    return {
        street,
        city,
        zip,
}}

const add1 = createAddress("a", "b", "c");


//constructor function

function ConstructorAddress(street, city, zip){
    this.street = street;
    this.city = city;
    this.zip = zip;}

let add2 = new ConstructorAddress("Sk st", 'Birm', 'BM10')
console.log(add2);
