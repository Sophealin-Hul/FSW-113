let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date ("2017-01-03"),
        "capacity": "7"
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date ("2018-03-03"),
        "capacity": 5,
    },
    {
        "color": "blue",
        "type": "sedan",
        "registration": new Date ("2011-01-02"),
        "capacity": 4,
    },
    {
        "color": "green",
        "type": "convertible",
        "registration": new Date ("2020-03-04"),
        "capacity": 2,
    },
    {
        "color": "black",
        "type": "suv",
        "registration":new Date ("2021-11-10") ,
        "capacity": 5,
    },
    {
        "color": "white" ,
        "type": "hatchback",
        "registration": new Date ("2018-12-18"),
        "capacity": 5,
    },
    {
        "color": "yellow",
        "type": "beetle",
        "registration": new Date ("2015-4-18") ,
        "capacity": 4,
    },
    {
        "color": "red",
        "type": "sport",
        "registration": new Date ("2021-6-1") ,
        "capacity": 2,
    },
    {
        "color": "green" ,
        "type": "van",
        "registration": new Date ("2018-4-6") ,
        "capacity": 10,
    },
    {
        "color": "black",
        "type": "sedan",
        "registration": new Date (2019-3-8) ,
        "capacity": 5,
    }
];
let redCars = cars.filter(function(car) {
    return car.color === "red";
});
console.log(JSON.stringify(redCars));

// let allCars = cars.filter(function() {
//      return cars;
// });
//console.log(JSON.stringify(allCars));

let allCars = cars.filter(aCar => aCar.type);
console.log(JSON.stringify(allCars));

let redCar = cars.filter(redCar => redCar.color === "red");
console.log(JSON.stringify(redCar));
let greenCar = cars.filter(greenCar => greenCar.color === "green");
console.log(JSON.stringify(greenCar));
