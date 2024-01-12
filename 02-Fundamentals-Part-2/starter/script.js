'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log('I can drive!');

//Functions
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

//Function Declarations vs Expressions
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

//Arrow Functions

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

//Functions calling other functions

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
