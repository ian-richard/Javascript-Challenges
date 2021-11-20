

function calculateDaysBetweenDates(begin, end) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(begin);
    var secondDate = new Date(end);
    
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}

console.log(calculateDaysBetweenDates("08/05/2021", "11/04/2021")+1);

