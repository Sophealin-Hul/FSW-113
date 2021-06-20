//16
let student = {name: 'John Masson'};
let adjunct = {name: 'Dave Larson'};
let people = new WeakMap();
people.set(student, 'Student');
people.set(adjunct, 'Adjunct');
adjunct = null;
console.log(people.size);
