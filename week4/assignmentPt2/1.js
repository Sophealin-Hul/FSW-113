var students = [
    {name: "James", dob: "01/01/2000"},
    {name: "Mandy", dob: "01/01/2001"},
    {name: "Sandy", dob: "01/01/2002"},
    {name: "Harry", dob: "01/01/2002"}
];
for(var student of students) {
    console.log(student);
}
for(var student of students) {
    console.log(`Name = ${student.name}, Date of Birth = ${student.dob}`);
}
for(var student of students) {
    const {name,dob: dateOfBirth} = student;
    console.log(`Name = ${name}, Date Of Birth = ${dateOfBirth}`);
}