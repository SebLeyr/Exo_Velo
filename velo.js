const url = "https://data.laregion.fr/api/records/1.0/search/?dataset=station-velo-toulouse&q=&rows=20";
const display = document.querySelector("#zone");
let jsonData;

function getApi(url) {
    fetch(url)
    //quand j'obtient une reponse je met le body en json
    .then(response => response.json())
    // puis je traite les données reçues
    .then(data => {
        //console.log('sucess:', data);
        jsonData = data;
        console.log(jsonData);
        stations(jsonData);
    })
    // en cas d'erreur je lève une exeecption et j'affiche l'erreur
    .catch((error) => {
        console.error('Error:', error);
    })
}

function esp() {
    display.innerHTML += "<p>";
}

function stations(jsonData) {
    display.innerHTML ="";

    for(let i=0; i<jsonData.records.length; i++) {
        let nom = document.createElement("h3");
        nom.textContent = jsonData.records[i].fields.nom;
        display.appendChild(nom);

        let num_station = document.createElement("div");
        num_station.textContent = `Numéro de la station : ${jsonData.records[i].fields.num_station}`;
        display.appendChild(num_station);
        esp();

        let adresse = document.createElement("div");
        adresse.textContent = `Emplacement : :${jsonData.records[i].fields.no} ${jsonData.records[i].fields.street}`;
        display.appendChild(adresse);
        esp();

        let service = document.createElement("div");
        service.textContent = `En service : ${jsonData.records[i].fields.en_service}`;
        display.appendChild(service)
        esp();

        let nb_born = document.createElement("div");
        nb_born.textContent = `Nombre de bornes : ${jsonData.records[i].fields.nb_bornettes}`;
        display.appendChild(nb_born);
    }
}

getApi(url);