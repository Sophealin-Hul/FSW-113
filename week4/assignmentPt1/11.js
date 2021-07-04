var columnName = "Name";
var name = {};
var student = {
    get [columnName]() {
        return name;
    },
    set [columnName](value) {
        name = value;
    }
};
student.Name = "Harry Potter"
console.log(student.Name);