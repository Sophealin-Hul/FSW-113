//5
let grades = [90, 98, 78, 99];
let studentGrades = Array.from(grades, g => {
    return g * this.percentageIncrement
}, {percentageIncrement: 1.10});
console.log(studentGrades); //I can't figued this out