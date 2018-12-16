// AGE-IFY

const yearOfBirth = 1991 ;
let yearFuture = 2030;
let age = yearFuture - yearOfBirth;

console.log('You will be ' + age + ' years old in ' + yearFuture +'.');


// GOODBOY - OLDBOY

let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;
let ageType;

if (shouldShowResultInDogYears){
    dogYear *= 7;
    ageType = 'dog';
} 
else {
    ageType = 'human';
}

console.log('Your dog will be ' + dogYear +' ' + ageType + ' years old in ' + dogYearFuture + '.');


// HOUSEY-PRICEY

let houseWidthInMeters = 8;
let houseLengthInMeters = 10;
let houseDepthInMeters = 10; 
let gardenSizeInM2 = 100;
let volumeInMeters = houseWidthInMeters * houseLengthInMeters * houseDepthInMeters;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let houseCost = 2500000;
let payingStatus;

if (housePrice < houseCost){
    payingStatus ='too much';
}
else{
    payingStatus = 'too little';
}

console.log(housePrice);
console.log('You are paying ' + payingStatus + ' for the house.');

//EZ NAMEY

let firstWords = ['Amazing ', 'Great ', 'Brilliant ' , 'Unique ', 'Magnificent ', 'Powerful ', 'Famous ', 'Elegant ', 'Fancy ','Majestic '];
let secondWords = ['Company','Corporation', 'Resto Bar' ,'Restaurant', 'Relaxing Place', 'Food Expert', 'Studio','Condotel', 'Coffee shop', 'Donuts'];
let randomNumber = Math.floor(Math.random() * 10) + 0;
let startupName = firstWords[randomNumber] + secondWords [randomNumber];

console.log('The startup name: ' + startupName + ' contains ' + startupName.length + ' characters.');

