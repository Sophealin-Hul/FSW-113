let studentGrades = [90, 80, 88, 98];
let curveGrades = function(grades, percentage = 1.10) {
    var newGrades = grades.map (grade => {
        return grade * percentage;
    });
    return newGrades;
};
var result = curveGrades(studentGrades);
console.log(result);