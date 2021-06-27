let studentGrades = [90, 80, 88, 98];
let curveGrades = function(percentage = 1.10, ...grades) {
    var newGrades = grades.map(grade => {
        return grade * percentage;
    })
    return newGrades;
}
var result = curveGrades(undefined, ...studentGrades);
console.log(result);