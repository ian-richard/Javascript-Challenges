const testData1 = [17, 21, 23]
const testData2 = [12, 5, -5, 0, 4]

const forecast = (arr) => {
    let sentence = '';
    
    for (let i = 0; i < arr.length; i++) {
        sentence += `...${arr[i]}C in ${i+1} ${i+1 === 1? 'day' : 'days '}`
    }
    return sentence;
}

console.log(forecast(testData1));
console.log(forecast(testData2));
