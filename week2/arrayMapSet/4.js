//4
let grades = [90, 98, 79, 99];
let studentGrades = Array.from(grades, function(g) {
    return g * this.percentageIncrement
}, {percentageIncrement: 1.10});
console.log(studentGrades);