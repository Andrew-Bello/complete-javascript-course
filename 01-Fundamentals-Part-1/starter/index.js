const country = 'Portugal';
const continent = 'Europe';
let population = 10;
console.log(country);
console.log(continent);
cpnsole.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'portuguese';
isIsland = true;

console.log(population / 2);
population++;
console.log(population);
console(population > 6);
console.log(population < 33);

const description1 = country + 'is in' + continent + ', and its' + population + 'million people speak' + language; 

console.log(description);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

//Code Challenge #1 

//BMI = mass / (height * height) mass in kg and height in meters;

let massMark = 78;
const heightMark = 1.69;
let massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

console.log(BMIMark, BMIJohn);


const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);