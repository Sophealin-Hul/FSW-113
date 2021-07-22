const fetch = require("node-fetch");

const URL = `https://swapi.dev/api/`;
const peopleEndPoint = `${URL}/people`;

const getData = function(id) {
    const idEndPoint = `${peopleEndPoint}/${id}`;
    fetch(idEndPoint)
        .then(res => res.json())
        .then(data =>  {
            console.log(`*** ${id} ***`)
            console.log(data);
        });
};

var ids = [1 ,2, 3, 4, 5, 6];
ids.forEach(id => {
    console.log(id);
    getData(id);
})



