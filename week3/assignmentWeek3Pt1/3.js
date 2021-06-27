let studentGrades = [90, 80, 88, 98];
let curveGrades = function(grades, percentage) {
    var newGrades = grades.map(grade => {
        return grade * percentage;
    });
    return newGrades;
}
var result = curveGrades(studentGrades, 1.33)
console.log(result);