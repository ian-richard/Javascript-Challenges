const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

// function showProperties(obj){
//     const picked = (({title, director})=>({title, director}))(obj);
//     return picked;
// }

// https://stackoverflow.com/questions/17781472/how-to-get-a-subset-of-a-javascript-objects-properties

function showProperties(obj){
    for (let key in obj)
        if (typeof obj[key] === 'string')
          console.log(key, obj[key]);
}

showProperties(movie);


