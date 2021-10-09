// Task

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}

// and return a string like this:

// "This white dog has 4 legs."

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }

console.log(animal({name:"dog",legs:4,color:"white"}) === "This white dog has 4 legs.");
console.log(animal({name:"cock",legs:2,color:"red"}) === "This red cock has 2 legs.");
console.log(animal({name:"rabbit",legs:4,color:"gray"}) === "This gray rabbit has 4 legs.");