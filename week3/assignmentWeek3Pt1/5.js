let studentGrades = [90, 80, 88, 98];
let curveGrades = function(percentage, ...grades) {
    var newGrades = grades.map(grade => {
        return grade * percentage;
    });
    return newGrades;
};
var result = curveGrades(1.24, ...studentGrades);
console.log(result);