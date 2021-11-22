const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // value: "20",
        value: 20,
    };
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());
