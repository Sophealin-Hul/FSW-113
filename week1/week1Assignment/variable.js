var students = [
    {name: "John", city: "California"},
    {name: "Peter", city: "London"},
    {name: "Mathew", city: "Manchester"},
    {name: "Jane", city: "Phoenix"}
];
console.log("-Requirement One")
students.forEach(function(element){
    console.log(element);
});

students[0].state = "California", 
students[1].state = "England", 
students[2].state = "England",
students[3].state = "Arizona",

students[0].dateOfBirth = "Jan, 1st, 1990", 
students[1].dateOfBirth = "Feb, 2nd, 1991", 
students[2].dateOfBirth = "March, 3rd, 1992",
students[3].dateOfBirth = "April, 4th, 1993",


students[0].payRate = "$20/hour", 
students[1].payRate = "$30/hour", 
students[2].payRate = "$40/hour",
students[3].payRate = "$50/hour",
console.log("-Requirement Two")
students.forEach(function(element){
    console.log(element);
});

const gradStudents = [
    {name: "John", city: "California"},
    {name: "Peter", city: "London"},
    {name: "mathew", city: "Manchester"},
    {name: "Jane", city: "Phoenix"}
];
console.log("-Requirement Three");
gradStudents.forEach(function(element){
    console.log(`Name: ${element.name}, City: ${element.city}`)
});
/*const gradStudents = [
    {name: "John", city: "California", state: "California", dateOfBirth: "January, 1st, 1990", payRate: "$20/hour"},
    {name: "Peter", city: "London", state: "England", dateOfBirth: "Febuary, 2nd, 1999", payRate: "$21/hour"},
    {name: "mathew", city: "Manchester", state: "England", dateOfBirth: "March, 3rd, 2000", payRate: "$22/hour"},
    {name: "Jane", city: "Phoenix", state: "Arizona", dateOfBirth: "April, 4th, 2001", payRate: "$30/hour"}
];
gradStudents.forEach(function(element){
    console.log(element);
}); */
console.log("-Requirement Four" + "\nI was expecting it to be an error since I recalled that const is immutable, and cannot be use more than once and that's what pop up on the output too.");

const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const multiplicans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const tableStart = 1;
const tableEnd = 12;
const table = [];

for(let i = 0; i < tableEnd; i++) {
    table.push( {"name": i + 1} );
    let result = [];
    for(let a = 0; a < multiplicans.length; a++) {
        result.push({
            [a + 1]: multipliers[i] + " x " + multiplicans[a] + " = " + multipliers[i] * multiplicans[a]
        });
        table[i].value = result;
    };
};
table.forEach(function(element){
    console.log(element);
});

