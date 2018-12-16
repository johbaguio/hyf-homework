/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

let randomCars = generateCars(10);
console.log(randomCars);


// 1.1: Cars with speeds between 30 and 60

let speedCheck = randomCars.filter(x => x.speed >= 30 && x.speed <= 60);

console.log(speedCheck);

//1.2: The makes of the cars that are not lightyellow

let carColor = randomCars.filter(x => x.color !== 'lightyellow');

console.log(carColor);

//1.3: Change the key words to Danish.

let textTranslate = randomCars.map ( text => {
    let danishText = {};
    danishText.maerke = text.make;
    danishText.farve = text.color;
    danishText.fart = text.speed;
    return danishText;
});

console.log(textTranslate);