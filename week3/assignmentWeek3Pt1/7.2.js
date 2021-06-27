let studentGrades = [90, 80, 88, 98];
const avg = function(array) {
    let average = array.reduce((a, b) => a + b, 0)
    return average/array.length/100;
};
let curveGrades = function(percentage = avg (studentGrades), ...grades) {
    var newGrades = grades.map(grade => {
        return grade * percentage;
    });
    return newGrades;
};
var result = curveGrades(undefined, ...studentGrades);
console.log(result);