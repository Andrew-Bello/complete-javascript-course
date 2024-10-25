'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious past with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    if (otherIngredients.includes('Vegan cheese')) {
      console.log(
        'Sorry we have run out of Vegan Cheese, we cannot process this order'
      );
    } else {
      console.log('Order Confirmed');
    }
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];

console.log(main, secondary);

//Receive 2 return values from a funcntion
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Assignment 1:

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
//   ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// DESTRUCTURING OBJECTS

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant; // [] sets the variable to a default value.

console.log(menu, starters);

// MUTATING VARIABLES

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// NESTED OBJECTS

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// ASSIGNMENT 2:

const { title, author, ISBN } = books[0];

const { keywords: newTags } = books[0];

const { language, programmingLanguage = 'unknown' } = books[6];

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ bookTitle = title, bookAuthor = author } = books[0]);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// SPREAD OPERATOR (...)

const numArr = [7, 8, 9];
const badNewArr = [1, 2, numArr[0], numArr[1], numArr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...numArr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu, restaurant.mainMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join two arrays

//Contains main menu and starter menu

const brandNewMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(brandNewMenu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1996, ...restaurant, founder: 'Andrew' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Smint Org';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Assignment 3

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

function spellWord(str) {
  console.log(...str);
}

spellWord('JavaScript');

//REST OPERATOR

// 1) Destructuring

//Used to pack elements into an array
//Opposite of a spread operator

const spreadArr = [1, 2, ...[3, 4]];

const [rA, rB, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const v = [23, 5, 7];
console.log(add(...v));

restaurant.orderPizza('Beef', 'Mushroom', 'Cheddar');

//ASSIGNMENT 4

//4.1
console.log(books[0].keywords);

const [mainKeywords, ...rest] = books[0].keywords;
console.log(mainKeywords, rest);

//4.2
const { publisher: bookPublisher, ...restOfBook } = books[1];
console.log(bookPublisher, restOfBook);

//4.3
function printBookAuthorsCount(title, ...authors) {
  return `The book ${title} has ${author.length} authors.`;
}
console.log(
  printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne')
);

//SHORT CIRCUITING (&& AND ||)

// Use ANY data type, return Any data type, short-circuiting
console.log('---OR---');

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null || 0); // 0

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // 23

const guest2 = restaurant.numGuests || 10;
console.log(guest2); //23

console.log('---AND---');

console.log(0 && 'Andrew'); // 0
console.log(7 && 'Andrew'); // Andrew

//And operator returns the first falsy value or the last value if all of them are truthy, whereas Or operator returns the first truthy value it can obtain.

console.log('Hello' && 23 && null && 'Andrew'); //null

//Real world example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

//ASSIGNMENT 5

//5.1
const hasExamplesInJava = obj =>
  obj.programmingLanguage.toLowerCase() === 'java' ||
  'no data available' ||
  true;

console.log(hasExamplesInJava(books[0]));

//5.2

function checkOnlineContent(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].onlineContent &&
      console.log(`${arr[i].title} provides online content.`);
  }
}

checkOnlineContent(books);

// NULLISH COALESCING OPERATOR

const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect); // 0

// ASSIGNMENT 6

// 6.1

function checkFalseOnlineContent(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].onlineContent ??
      console.log(`${arr[i].title} provides no date about its online content.`);
  }
}

checkFalseOnlineContent(books);

// LOGICAL ASSIGNMENT OPERATORS

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1.numGuests); //20
// console.log(rest2.numGuests); //10

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1.numGuests); //20
console.log(rest2.numGuests); //10

rest1.owner &&= 'anon';
rest2.owner &&= 'anon';

console.log(rest1);
console.log(rest2.owner);

// ASSIGNMENT 7

// 7.1

function checkEdition(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log((arr[i].edition ||= 1));
  }
}

checkEdition(books);

function checkRating(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].highlighted === true &&
      books[i].thirdParty.goodreads.rating < 4.2
    ) {
      books[i].highlighted &&= false;
    }
    console.log(books[i].highlighted);
  }
}

function checkRatings2(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].highlighted &&= !(arr[i].thirdParty.goodreads.rating < 4.2);
  }
  return books;
}

checkRating(books);
checkRatings2(books);

// CODE CHALLENGE 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6
function printGoals(...players) {
  console.log(`${players.length} goals were scored`);
}

printGoals(...game.scored);

// 7
team1 < team2 && console.log(`${game.team1} is most likely to win.`);
team2 < team1 && console.log(`${game.team2} is most likely to win.`);
