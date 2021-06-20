//17.2
let student = [ {name: 'John Masson'}, {name: 'Don Vasco'},
{name: 'Mary Landley'} ];
let people = new Set(student);
console.log(people.has({name: 'Dave Vasco'}));