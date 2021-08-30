

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

function result() {
  var lat = getRandomInRange(-180, 180, 3);
  var long = getRandomInRange(-180, 180, 3);
  
  return `Lat: ${lat}, Long: ${long}`;
}

console.log(result());
