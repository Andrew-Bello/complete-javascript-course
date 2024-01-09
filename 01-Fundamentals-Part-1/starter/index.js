const country = 'Portugal';
const continent = 'Europe';
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'english';
// isIsland = true;

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);


//Code Challenge #1 section

//BMI = mass / (height * height) mass in kg and height in meters.

let massMark = 78;
const heightMark = 1.69;
let massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);

console.log(BMIMark, BMIJohn);


const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

//Code challenge #1 section

const description1 = country + 'is in' + continent + ', and its' + population + 'million people speak' + language; 

console.log(description1);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(`String
from
multiple lines`);

if(country > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`)
}

//Code challenge #2 Section

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}

//Code challenge #2 section

//Type Conversion and Coercion

// Type conversion
const inputYear = '2024'; 
console.log(Number(inputYear), inputYear);
console.log(typeof inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Andrew'));
console.log(typeof NaN)
//NaN is classified as a number, but an invalid number


//Type coercion.

console.log('I am ' + 23 + 'years old'); 
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //11
n = n - 1;

let n2  = 2 + 3 + 4 + '5';
console.log(n);
console.log(n2);

//a
console.log('9' - '5'); //4
//b
console.log('19' - '13' + '17') //617
//c
console.log('19' - '13' + 17) //23
//d
console.log('123' < 57) //false
//e
console.log(5 + 6 + '4' + 9 - 4 -2); //1143

//Numbers will always concatenate with strings unless there is a minus sign. Look at c and e to understand. 

//Truthy and Falsy Values

// Falsy values: 0, '', undefined, null, NaN.
// Everything else is a truthy value.

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// if(numNeighbours === 1) {
//     console.log(`Only ${numNeighbours} border!`)
// } else if (numNeighbours > 1) {
//     console.log(`Moe than 1 border`)
// } else {
//     console.log('No borders')
// }

//Convert the value manually before using ==, so try to always use ===. 

// Boolean Logic 

// If you have two or more boolean values you want to compare, this is where boolean logic comes into place. The and operator gives these values: True && True = True | True && False = False | False && False = False.

//The or operator is the opposite to the and operator. It works when one statement is true. True || True = True | True || False = True | False || False = False. 

//The not operator only acts on one boolean value and inverts it.

//Sara wants a country that speaks english, has less than 50 million people and is not an island.

if (language === 'english' && population < 50 && isIsland === false) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria :(`)
}

//Code challenge #3 Section 
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy')
} else {
    console.log('Both win the trophy')
}
//Code challenge #3 Section 
