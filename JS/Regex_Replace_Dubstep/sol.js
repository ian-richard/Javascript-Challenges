function songDecoder_original(song){
    //replace WUB with a space
    var p1 = song.replace(/(WUB)/g, " ")
    // replace instances of 2 to 5 consecutive white spaces with a single white space
    var p2 = p1.replace(/\s{2,5}/g, " ")
    // remove white space from front and end of string
    return p2.trim();
   }

//refactor

//replace WUB with a space & the + modifier identifies 1 or more WUB
const songDecoder_oneLine = (song) => song.replace(/(WUB)+/g, " ").trim()

//boolean 
function songDecoder(song){
    return song.split('WUB').filter(Boolean).join(' ');
  }
//filter out empty elements of the array as they evaluate as falsy 

 

console.log(songDecoder("AWUBBWUBC") === "A B C") //"WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC") === "A B C") //"multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB") === "A B C") //"heading or trailing spaces should be removed");

//simple example of removing blank spaces (\s is a blank, the + is '1 or more')
const noSpace = x => x.replace(/\s+/g, "")

console.log('noSpace result:')
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B') === '8j8mBliB8gimjB8B8jlB');