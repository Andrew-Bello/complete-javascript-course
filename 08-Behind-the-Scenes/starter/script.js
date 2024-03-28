'use strict';

// Notes

// INTRODUCTION!!

// HIGH-LEVEL OVERVIEW OF JAVASCRIPT.

// JavaScript is:
// High-level:
// Javascript is a programming language that manges its own resources.
// Benefit: It makes the programming language easy to use.
// Downside: It on't be as fast as lower level programming languages. For eg: C

// Garbage collected:
// Cleans the memory usage so we don't have to.

// Interpreted or just-in-time compiled language:

// Multi-paradigm language:
// Paradigm means an approach and mindset of structuring code, which will direct your coding style and technique.
// The tree types are:
// Procedural programming:
// Organizing code in a linear way with functions in between.

// Object-oriented programming (OOP):

// Functional programming (FP):

//Javascript those all of them

// Prototype-base object-oriented:

// First class function:
//Functions are treated as variables. You can pass functions into other functions.

// Dynamic:
// No data type definitions.
// Other programming languages define types.

// Single-threaded:
// Concurrency model: How the JavaScript engines handles multiple tasks happening at the same time.
// JS runs on one single thread, so it can only do one thing at a time.

//Non-blocking event loop:
// By using event loop, this takes long running tasks, executes them in the 'background', and puts them in the main thread once they are finished.

// THE JAVASCRIPT ENGINE AND RUNTIME

// A JS Engine is a compute program that executes JS Code
// Googles v8 Engine runs JS in Chrome and Node.js. Every browser has their own engine.

// Every JS engine had a Call Stack and Heap.

// Call Stack: This is where the code is actually executed using a method called EXECUTION CONTEXT

// Heap: This is an unstructured memory pool that stores all the objects our applications need.

// How is our code compiled to machine code?

// Compilation vs Interpretation:
// Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

// Source code >> COMPILATION >> Portable file: machine code >> EXECUTION >> Program running

// Execution can happen way after compilation

// Interpretation: Interpreter runs through the source code and executes it line by line
//Source code >> EXECUTION LINE BY LINE >> Program running.

// Modern JS uses JIT compilation: Entire code is converted into machine code at once, then executed immediately.
// Source code >> COMPILATION >> Machine code >> EXECUTION >> Program running

// Execution happens immediately after compilation.

// const name = 'Jonas';

// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   return c;
// }

// JavaScript is based off something called Lexical scoping. This means the scoping is controlled by the placement of functions and blocks int the code.

// Scope: This the space or environment in which a certain variable is declared. There is global scope, function scope and block scope i.e: anything with a curly braces.

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millennial = true;
//       // Creating NEW variable t=with same same as outer scope's variable

//       const firstName = 'Steven';
//       const str = `Oh, and you're a millennial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = 'NEW OUTPUT';
//     }
//     // console.log(str);
//     console.log(millennial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// HOISTING: Makes some type of variables accessible/ usable in the code before they are actually declared. "Variables lifted to the top of their scope".

// Before Execution, code is scanned for variable declarations, and for each variable a new property is created in the *variable environment object*.

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions

// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

// if (!numProducts) {
//   deleteShoppingCart();
//   console.log(numProducts);
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// This keyword/ variable: Special variable that is created for every execution context (every function). Takes the value of (point to) the *owner* if the function in which the this keyword is used.

// this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

// this does NOT point to the function itself, and also NOT the its variable environment.

// console.log(this);

// const calcAgeNew = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeNew(1991);

// const calcAgeNewArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeNewArrow(1991);

// Arrow function doesn't get its own this keyword, so it uses it parents one instead.

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// f();
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge() {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // Can also be called 'that' - Before ES6;
//     // const isMellenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMellenial();

//     // Solution 2
//     const isMellenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMellenial();
//   },
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// Never use an arrow function as a method.
// Arrow functions use this key word in the parent scope.

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 6, 7);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 4, 5);

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
