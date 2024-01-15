'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log('I can drive!');

//FUNCTIONS
function logger() {
    console.log('My name is Andrew');
}

logger();
//Calling/ Running / Invoking the function;

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const a = describeCountry('Finland', 6, 'Helsinki');
const b = describeCountry('France', 50, 'Paris');
const c = describeCountry('Nigeria', 40, 'Lagos');

console.log(a);
console.log(b);
console.log(c);

//FUNCTION DECLARATIONS VS EXPRESSIONS
//Parameter is the place holder in the function and the argument is the actual value we use to fill in the place holder.

//This is a function declaration.
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991)

//This is an function expression
//This is also called an anonymous function 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991)

console.log(age1, age2);

//What's the difference: You can call function declaration before they are defined. 
const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return `${(population/ worldPopulation) * 100}%`;
}

const china = percentageOfWorld1(1441);
const nigeria = percentageOfWorld1(500);
const uk = percentageOfWorld1(900);

console.log(china, nigeria, uk);

const percentageOfWorld2 = function(population) {
    return `${(population/ worldPopulation) * 100}%`;
}

const china2 = percentageOfWorld1(1441);
const nigeria2 = percentageOfWorld1(500);
const uk2 = percentageOfWorld1(900);

console.log(china2, nigeria2, uk2);

//ARROW FUNCTIONS

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, 'Andrew'));
console.log(yearsUntilRetirement(1998, 'John'));

//Arrow functions do not get a 'this' keyword. This is good for using one line function. but for the most part use expressions or declarations.

const percentageOfWorld3 = population => `${(population / worldPopulation) * 100}`;

const china3 = percentageOfWorld1(1441);
const nigeria3 = percentageOfWorld1(500);
const uk3 = percentageOfWorld1(900);

console.log(china3, nigeria3, uk3);

//FUNCTIONS CALLING OTHER FUNCTIONS

const describePopulation = function(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Nigeria', 500));
console.log(describePopulation('UK', 90));

//If you are taking in a number as a variable for a function or block it's best practice to return back a number and visa versa.

//Return statements exit functions immediately. If code is placed underneath the return statement it will not be executed. 

const helloWorld = function() {
    return 'Hello World';
    console.log(-1); // This line's opacity is low on vscode, probably meaning it will not execute.
}

console.log(helloWorld());

//CODE CHALLENGE #1 SECTION

const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if(avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`); 
    } else {
        console.log('No team wins...')
    }
} 

checkWinner(scoreDolphins, scoreKoalas);

//Make the score variables let instead of const so you can reassign them 

//CODE CHALLENGE #1 SECTION

// INTRODUCTION TO ARRAYS

const friends = ['Will', 'Suzie', 'Jamal'];

//If you always want to get the last element of an array, then do this...

console.log(friends[friends.length - 1]);

friends[2] = 'Ivan';
console.log(friends);

//Arrays are not primitive values, which means even when defined with const you can still change the values in them, however you cannot change the entire array, whether it be a value or another array.

//friends = 'Chibs'; This will not work.

const populations = [55, 213, 32, 125]; 

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];

console.log(percentages);

