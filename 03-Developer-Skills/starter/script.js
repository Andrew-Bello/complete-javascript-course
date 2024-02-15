// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

const calcA = birthYear => 2037 - birthYear;

console.log(calcA(1991));

//PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this "Given an array of temperatures of one day, calculate the temperature amplitude . Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp.
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtracting min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//PROBLEM 2:
// Function should now receive two arrays of temps

// 1) Understanding the problem
// -With two arrays, should we implement functionality twice? NO! Just merge two arrays.

// 2) Breaking up into sub-problems
// -How to merge two arrays?

// Using a debugger
const calcTempAmplitudeNew = function (tempsA, tempsB) {
  const temps = tempsA.concat(tempsB);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY

console.log(measureKelvin());

//MY SOLUTION
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let message = '... ';
  for (let i = 0; i < arr.length; i++) {
    message += `${arr[i]} degrees celsius in ${[i + 1]} days ... `;
  }
  return message;
};

console.log(printForecast(data2));

// Problem 1
// String length based on the array length
//  add dots to string.

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Index + 1

// 2) Breaking into sub problems
// - Transform array in to string
// - Transform each element to string with C
//- String need to contain day (index + 1)
// - Add ... between elements and start and end of string

const printForecastNew = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degrees Celsius in ${i + 1} days ... `;
  }
  console.log('...' + str);
};

printForecastNew(data1);
