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

const percentages = [percentageOfWorld1(populations[0]), 
percentageOfWorld1(populations[1]), 
percentageOfWorld1(populations[2]), 
percentageOfWorld1(populations[populations.length - 1])];

console.log(percentages);

//BASIC ARRAY OPERATIONS (METHODS).

// Add Elements

//.push method adds elements to the end of an array. It also gives the value of the new length when the method is applied to a variable. 

//.unshift method adds elements to the beginning of an array. It also gives the value of the new length when applied to a variable. 

//Remove Elements.

//.pop removes the last element of an array. This returns the removed array element.
//.shift removes the first element of an array. This also return the removed element. 

//.indexOf returns the idex of which the element is located. If you put in a values tht doesn't exist in the array, it will return -1.
//.includes This will return a boolean if an element is or isn't in an array. This method uses strict equality. 

const neighbours = ['Ghana', 'Benin', 'Togo'];

neighbours.push('Utopia');
neighbours.pop();

if(!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D')
}

neighbours[neighbours.indexOf('Benin')] = 'Republic of Benin';

console.log(neighbours);

//CODE CHALLENGE #2 
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals); 

//Also this is what I came up with. 

// function calcTip(bill) {
//     const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
//     return tips.push(tip)
// }


// const bills = [125, 555, 44];
// const tips = [];
// calcTip(bills[0])
// calcTip(bills[1])
// calcTip(bills[2])
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);
//CODE CHALLENGE #2

//INTRODUCTION TO OBJECTS

//Objects contain what is called properties.
const myCountry = {
    country: 'England',
    capital: 'London',
    language: 'English',
    population: 55,
    neighbours: ['Wales', 'Scotland', 'Ireland'],
    checkIsland: function() {
        // this.neighbours.length >= 1 ? this.isIsland = false : this.isIsland = true;
        // return this.isIsland;
        return this.isIsland = this.neighbours.length === 0 ? true : false;
    },
    describe: function() {
        return `${this.country} has ${this.population} million english-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },
};

console.log(myCountry);

//DOT VS. BRACKET NOTATION

//Challenge
//Jonas has 3 friends, and his best friend is called Michael.

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Joe', 'Madison'],
    hasDriversLicense: true,
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;  
    },
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.`);

console.log(`${myCountry.country} has ${myCountry.population} million english-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry['population']);

//OBJECT METHODS
//Challenge 
//Jonas is a 46 year old teacher, and he has a driver's license.

console.log(jonas.getSummary());

console.log(myCountry.describe());
console.log(myCountry.checkIsland())

//CODE CHALLENGE #3 SECTION
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    },
};

if(john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ${mark.bmi}!`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
};
//CODE CHALLENGE #3 SECTION

//ITERATION: THE LOOP

// for(let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// };

//LOOPING ARRAYS. BREAKING AND CONTINUING

const jonasArray = ['Jonas', 
'Schmedtmann', 
2037 - 1991, 
'teacher', 
['Michael', 'Peter', 'Steven'],
true
];

const types = []; 

for(let i = 0; i < jonasArray.length;i++) {
    // Reading from Jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);

    //Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

//Creating a new Array 

console.log(types)

const years = [1991, 2007, 1969, 2020]; 
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue & break

//Continue is used to exit the current iteration of the loop an move to next one.   

//Break is used to exit the entire loop - Remember how we use it for switch statements

const greetings = ['Hello', 'Good Morning', 'Hi', 200494, ['Bonjour', 'E Kale', 'Konnichiwa'], 'Yo!']

for(let i = 0; i < greetings.length; i++) {
    if(typeof greetings[i] !== 'string') break; // Continue ... Interchange to see the results.
    console.log(greetings[i], typeof greetings[i]);
}

const percentages2 =[]

for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

//LOOPING BACKWARDS AND LOOPS IN LOOPS

for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++) 
    for(let j = 0; j < listOfNeighbours[i].length; j++) 
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    
//THE WHILE LOOP
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifing weights repetition ${rep}`)
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

 while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`You rolled a ${dice}, the loop has ended`);
 }

const percentages3 = [];
let pop = 0;

while(pop < populations.length){
    percentages3.push(percentageOfWorld1(populations[pop]))
    pop++;
}

console.log(percentages3);

//CODE CHALLENGE #4 SECTION
const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const newTips = []; 
const newTotals = [];

for (let i = 0; i < newBills.length; i++) {
    const tip = calcTip(newBills[i]);
    newTips.push(tip);
    newTotals.push(newBills[i] + newTips[i])
}

console.log(newTips);
console.log(newTotals);

const newCalcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i] 
    }
    const average = sum/ arr.length;
    return average;
}

console.log(newCalcAverage(newTotals));
//CODE CHALLENGE #4 SECTION