//1
var temp = () => 104;
console.log(typeof temp);
console.log(temp());

//2
var temp = multiplier => 104 * multiplier;
console.log(temp(2));

//3
var temp = (multiplier, divider) => 104 * multiplier / divider
console.log(temp(3, 6));

//4
var temp = (multiplier, divider) => { // block
    let result = 104 * multiplier;
    if (result) {
        result = 104 / divider
    }
    return result;
}
console.log(temp(3, 6));

//5
// var clickButton = function ('click', function() {
//     console.log(this);
// };
// console.log(clickButton()); Error

//6
var clickButton = function () {
    console.log(this);
}
clickButton();

//7
var clickButton = () => {
    console.log(this);
}
clickButton();

//8
var person = {
    name: 'David Smith',
    age: 56,
    details: function () {
        console.log(this);
    }
}
person.details();

//9
var person = {
    name: 'David Smith',
    age: 56,
    details: () => {
        console.log(this);
    }
}
person.details();

//10
var temp = () 
=> 100
console.log(temp);