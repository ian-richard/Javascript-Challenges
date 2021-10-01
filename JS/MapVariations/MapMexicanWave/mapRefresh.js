let dwarves = ['Bifur', 'Bofur', 'Bombur', 'Fili', 'Kili', 'Oin']

let nameLenghts = dwarves.map(function(item, index, array){
    return item.length;
})

console.log(nameLenghts)