const fetch = require("node-fetch");

const URL = `https://swapi.dev/api/`;
const peopleEndPoint = `${URL}/people`;

let peopleData = []
const getData = async function(id) {
    const idEndPoint = `${peopleEndPoint}/${id}`;
    const res = await fetch(idEndPoint);
    const data = await res.json();
    peopleData =  await {...peopleData, [id]:data};
};

var ids = [1 ,2, 3, 4, 5, 6];
var result = [];
ids.forEach(id => {
    result.push(getData(id));
})
var output = Promise.all(result).then(res => {
    console.log(JSON.stringify(peopleData));
}).catch(error => {
    console.log(error);
});





