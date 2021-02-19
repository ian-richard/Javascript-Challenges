// display the values of object using  the bracket notation.

const person = {
    name: 'James',
    age: 26,
    occupation: 'Developer'
}

for (let key in person)
    console.log(key, person[key]);


    /// bracket notation for arrays

const colours = ['red', 'green', 'blue']

for (let index in colours)
    console.log(index, colours[index]);