//11
let student = {name: 'John Masson'};
let adjunct = {name: 'Dave Larson'};
let people = new Map();
people.set(student, 'student');
people.set(adjunct, 'adjunct');
people.delete(student);
console.log(people);