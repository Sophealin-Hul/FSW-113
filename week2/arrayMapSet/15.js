//15
let student = {name: 'John Masson'};
let adjunct = {name: 'Dave Larson'};
let people = new Map();
people.set(student, 'Student');
people.set(adjunct, 'Adjunct');
let result = people.values(student);
console.log(result);5