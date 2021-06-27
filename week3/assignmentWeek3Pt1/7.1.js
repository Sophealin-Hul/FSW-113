let studentGrades = [90, 80, 88, 98];
let percentageCurve = 0.98;
let curveGrades = function(percentage = percentageCurve, ...grades) {
    var newGrades = grades.map(grade => {
        return grade * percentage;
    });
    return newGrades;
};
var result = curveGrades(undefined, ...studentGrades);
console.log(result);