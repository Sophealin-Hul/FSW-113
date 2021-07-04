var students = [
    {name: "James", dob: "01/01/2000"},
    {name: "Mandy", dob: "01/01/2001"},
    {name: "Sandy", dob: "01/01/2002"},
    {name: "Harry", dob: "01/01/2003"}
];
var studentDetails = students.map((student) => {
    let newInfo = {...student, name: student.name.toUpperCase(),college: "BU"};
    return newInfo;
});
for(var student of studentDetails) {
    const {name, dob: dateOfBirth, college} = student;
    console.log(`Name = ${name}, Date of Birth = ${dateOfBirth}, University = ${college}`);
};