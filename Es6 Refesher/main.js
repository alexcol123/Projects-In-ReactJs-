// FILTER -------------------------------------------------------->>
const people = [
  { id: 1, name: 'James' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Camilla' },
  { id: 5, name: 'Susan' },
  { id: 6, name: 'Jenn' },
  { id: 7, name: 'Lara' }
];

//console.log(people);

const people2 = people.filter(
  person => person.id <= 5 && person.name.length == 5
);
//console.log(people2);

//  SPREAD OPERATOR ------------------------------------------------>>
// on arrays
const array = [1, 2, 3];
const array2 = [100, 200, 300];

const array3 = [...array, ...array2];
//console.log(array3);

// on Objects
let person1 = {
  name: 'Alex',
  age: 89
};

person1 = {
  ...person1,
  email: 'alex@yahoo.net'
};
//console.log(person1);

// Spread with filter

const arrayA = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const arrayB = [...arrayA.filter(num => num >= 500)];
//console.log(arrayB);

//  SPREAD OPERATOR ------------------------------------------------>>

const profile = {
  nameX: 'Hugo Boss',
  addressX: {
    streetX: '533 Old timber road',
    cityX: 'Chicago',
    stateX: 'Illinois'
  },
  hobbiesX: ['movies', 'music', 'soccer']
};

const { nameX, addressX, hobbiesX } = profile;
const { streetX, cityX } = profile.addressX;

// console.log(nameX, addressX)
// console.log(streetX, cityX)
// console.log(hobbiesX[1])
