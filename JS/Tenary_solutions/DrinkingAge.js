


const peopleWithAgeDrink = (age) =>
    age < 14 ? "drink toddy" :
    age < 18 ? "drink coke" :
    age < 21 ? "drink beer" : "drink whisky"

    console.log(peopleWithAgeDrink(21) == 'drink whisky');
    console.log(peopleWithAgeDrink(20) == 'drink beer');
    console.log(peopleWithAgeDrink(13) == 'drink toddy');
    console.log(peopleWithAgeDrink(0) == 'drink toddy');


function peopleWithAgeDrink_ifVersion(old) {
    if (old < 14) return 'drink toddy';
    if (old < 18) return 'drink coke';
    if (old < 21) return 'drink beer';
    if (old > 20) return 'drink whisky';
    };



// Description:

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

