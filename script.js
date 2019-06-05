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

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  for (let student of students){
    student.status = 'In Summer School';
  }
  console.log(students);
}
enrollInSummerSchool(studentData);



const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  for(let item of items) {
    if(item.id === idNum){
      return item;
    }
  }
}

console.log(findById(scratchData, 22));

