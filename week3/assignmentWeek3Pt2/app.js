let starWars_data = [
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/14/",
            "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/12/",
            "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
    },
    {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [
            "https://swapi.dev/api/species/2/"
        ],
        "vehicles": [],
        "starships": [],
        "created": "2014-12-10T15:10:51.357000Z",
        "edited": "2014-12-20T21:17:50.309000Z",
        "url": "https://swapi.dev/api/people/2/"
    },
    {
        "name": "Obi-Wan Kenobi",
        "height": "182",
        "mass": "77",
        "hair_color": "auburn, white",
        "skin_color": "fair",
        "eye_color": "blue-gray",
        "birth_year": "57BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/20/",
        "films": [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
            "https://swapi.dev/api/vehicles/38/"
        ],
        "starships": [
            "https://swapi.dev/api/starships/48/",
            "https://swapi.dev/api/starships/59/",
            "https://swapi.dev/api/starships/64/",
            "https://swapi.dev/api/starships/65/",
            "https://swapi.dev/api/starships/74/"
        ],
        "created": "2014-12-10T16:16:29.192000Z",
        "edited": "2014-12-20T21:17:50.325000Z",
        "url": "https://swapi.dev/api/people/10/"
    }

];
document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault();
    get(0, document.getElementById("input").value);
});
document.getElementById("submit_2").addEventListener("click", e => {
    e.preventDefault();
    getData(document.getElementById("select").value, "name", "height", "mass");
});
function get(index, data) {
    document.getElementById("data").textContent = "";
    document.getElementById("data").textContent = starWars_data[index][data];
};
function getData(index, ...multidata) {
    document.getElementById("data_2").textContent = "";
    
    for(let i = 0; i < multidata.length; i++) {
        if(multidata[i] == "name") {
            document.getElementById("data_2").textContent += "Name: " + starWars_data[index][multidata[i]] + " ";
        }
        if(multidata[i] == "height") {
            document.getElementById("data_2").textContent += "Height: " + starWars_data[index][multidata[i]] + " ";
        }
        if(multidata[i] == "mass") {
            document.getElementById("data_2").textContent += "Mass: " + starWars_data[index][multidata[i]] + " ";
        }
    }
   
}