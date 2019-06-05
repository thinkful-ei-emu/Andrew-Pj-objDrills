'use strict';
// function createMyObject() {
//   return {
//     foo: 'bar',
//     answerToUniverse : 42,
//     'olly olly' : 'oxen free',
//     sayHello: function() {
//       return 'hello';
//     }
//   };
// }

// let call = createMyObject();
// console.log(call);

// function updateObject(obj) {
//   obj.foo = "foo";
//   obj.bar = "bar";
//   obj.bizz = "bizz";
//   obj.bang = "bang";
//   return obj;
// }

// // let testCall = updateObject();

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
//   return person;
// }

// const sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// function keyDeleter(obj) {
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }

// function makeStudentsReport(data) {
//   let newArray = [];
//   for(let i = 0; i < data.length; i++) {
//     newArray.push(`${data[i].name}: ${data[i].grade}`);
//   }
//   console.log(newArray);
//   return newArray;
// }

// const studentData = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology',
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics',
//   },
//   {
//     name: 'Liz',
//     status: 'On leave',
//     course: 'Computer science',
//   },
// ];

// function enrollInSummerSchool(students) {
//   for (let student of students){
//     student.status = 'In Summer School';
//   }
//   console.log(students);
// }
// enrollInSummerSchool(studentData);



// const scratchData = [
//   { id: 22, foo: 'bar' },
//   { id: 28, foo: 'bizz' },
//   { id: 19, foo: 'bazz' },
// ];

// function findById(items, idNum) {
//   for(let item of items) {
//     if(item.id === idNum){
//       return item;
//     }
//   }
// }

// console.log(findById(scratchData, 22));
// const objectA = {
//   id: 2,
//   name: 'Jane Doe',
//   age: 34,
//   city: 'Chicago',
// };

// // running the function with `objectB` and `expectedKeys`
// // should return `false`
// const objectB = {
//   id: 3,
//   age: 33,
//   city: 'Peoria',
// };

// const expectedKeys = ['id', 'name', 'age', 'city'];

// function validateKeys(object, expectedKeys) {
//   let keys = Object.keys(object);
  
//   if (keys.length === expectedKeys.length) {
//     for (let i= 0; i < keys.length; i++){
//       if (keys[i] !== expectedKeys[i]){ 
//         return false;
//       }         
//     }
//     return true;  
//   }
//   else {
//     return false;
//   }
// }

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return (this.water / this.flour) * 100;
//   }
// };

// let drinkUp = loaf.hydration();
// console.log(drinkUp);

// const funObject = {
//   foo: "valueFoo",
//   bar: "valueBar",
//   fum: "valueFum",
//   quux: "valueQuux",
//   spam: "valueSpam"
// }

// for (let key in funObject){
//   console.log(key, funObject[key]);
// }

// const Food = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(Food.meals[3]);
// const objArray = [
//   {name: 'john', jobTitle: 'web developer'},
//   {name: 'mary', jobTitle: 'doctor'},
//   {name: 'mike', jobTitle: 'lawyer'},
// ]
// for (let person of objArray){
//   console.log(`${person.name}: ${person.jobTitle}`);
// }

// const objArray = [
//   {name: 'john', jobTitle: 'web developer', boss: 'Fred'},
//   {name: 'mary', jobTitle: 'doctor',boss: 'Fred'},
//   {name: 'mike', jobTitle: 'lawyer', boss: 'Fred'},
//   {name: 'Fred', jobTitle: 'The Boss'}
// ];
// for (let person of objArray){
//   if(person.boss){
//     console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`);
//   } else {
//     console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
//   }
// }

// const cypher = {
//   'a': 2,
//   'b': 3,
//   'c': 4,
//   'd': 5,
// };

// const message = 'craft block argon meter bells brown croon droop';
// function decode (word){    
//   let index= cypher[word[0]];
//   return index ? word[index-1] : ' ';
// }

// function decodeWords (words){
//   let output= '';
//   let splitWords= words.split(' ');
//   for (let word of splitWords){
//     output+= decode(word);
//   }
//   return output;
// }
// console.log(decodeWords(message));


// function createCharacter(name, nickname, race, origin, attack, defense) {
//   return {
//     name,
//     nickname,
//     race,
//     origin,
//     attack,
//     defense,
//     describe: function() {
//       console.log(`${this.name} is a ${this.race} from ${this.origin}`);
//     },
//     evaluateFight: function(opponent) {
//       console.log(`Your opponent takes ${Math.max(this.attack - opponent.defense,0)} damage and you recieve ${Math.max(opponent.attack - this.defense, 0)}`);
//     }
//   };
// }

// const Gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);

// const Baggins = createCharacter('Bilbo Baggins', 'bilbo','Hobbit','The Shire', 2, 1);

// let Characters = [Gandalf,Baggins];

// let search = Characters.find(function(character) {
//   return character.nickname === 'gandalf';
// });
// // console.log(search.describe());

// let hobbiters = Characters.filter(character => {
//   return character.race === 'Hobbit';
// });

// // console.log(hobbiters);

// let attAbove6 = Characters.filter(character => character.attack >= 6);

// // console.log(attAbove6);

// function equipWeapon(character, weapon) {
//   character.weapon = weapon;
//   character.describe = function() {
//     console.log(`${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`);
//   };
// }

// equipWeapon(Gandalf,'wizard staff');
// Gandalf.describe();

// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];

// function findOne(arr, query){
//   let heroMatch = arr.filter(hero => {
//     let queryKeys= Object.keys(query);
//     for (let key of queryKeys){
//       if(hero[key] !== query[key])
//         return false;      
//     }
//     return true;
//   });
//   console.log(heroMatch);  
//   if(heroMatch.length > 0){
//     return heroMatch[0];
//   }
//   else {
//     return null;
//   }
// }

// console.log(findOne(HEROES, { squad: 'Justice League' }));

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query){
    let matches = this.store.heroes.filter((elem) => {
      let qKeys = Object.keys(query);
      for (let key of qKeys) {
        if (elem[key] !== query[key])
          return false;
      }
      return true;
    });

    return matches[0] ? matches[0] : null;
  }
};

console.log(Database.findOne({ id: 2 }));