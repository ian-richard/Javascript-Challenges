const address = {
    street: 'Littleford',
    city: 'London',
    zip: 'W2Y 4AA'
}

function showAddress(address){
    for (let key in address) console.log(key, address[key]);
}

showAddress(address);