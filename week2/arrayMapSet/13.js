//13 
let student = {name: 'John Masson'};
let adjunct = {name: 'Dave Larson'};
let people = new Map();
people.set(student, 'Student');
people.set(adjunct, 'Adjunct');
let result = people.has(student);
console.log(result);