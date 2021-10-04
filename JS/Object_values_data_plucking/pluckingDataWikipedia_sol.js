// Don't you just love Wikipedia lists?

// In this Kata, you'll write a function that extracts pieces of data and stores them in an Array.

// The function will accept two parameters:

//     data An Array of Objects
//     property A String representing the property from which to pluck data

// An Array should be returned, containing the value extracted for each Object contained in the data Array.

// See the Test Cases for examples.

function pluck_og(data, property) {
    var res = [];
  
    if (data.length > 1){
      for (const e in data){
        res.push(data[e][property])
      }}
    return res;
  }
//refactor using Map

const pluck = (data, property) => data.map(v => v[property]);

  // from https://en.wikipedia.org/wiki/List_of_countries_by_GDP_%28nominal%29_per_capita
var gdpPerCapita = [{
    "name": "Luxembourg",
    "dollars": 111716
}, {
    "name": "Norway",
    "dollars": 97013
}, {
    "name": "Qatar",
    "dollars": 93965
}];

var empty = [];

console.log('Test 1', pluck(gdpPerCapita, 'name')) //==  ["Luxembourg","Norway","Qatar"]
console.log('Test 2', pluck(gdpPerCapita, 'dollars')) // ==  [111716,97013,93965] )