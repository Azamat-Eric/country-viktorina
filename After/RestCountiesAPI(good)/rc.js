//data[0];.population; .area; .altSpellings[0-3]; .name.official; .maps.googleMAps; .flags.svg,png; .capital[0]; .borders; .coatOfArms.svg;  .continints[0]; .currencies.SAR.name; .idd.root; .timezones; .tld[0]; .status; .startOfWeek;


const input = document.getElementById("inp");
const Searchbyname = document.getElementById("btn1");

const Offname = document.getElementById("Offname");
const Population = document.getElementById("Population");
const Area = document.getElementById("Area");
const Capital = document.getElementById("Capital");
const Languages = document.getElementById("Languages")
const Borders = document.getElementById("Borders");
const CoatOfArms = document.getElementById("CoatOfArms");
const Continents = document.getElementById("Continents");
const Idd = document.getElementById("Idd");
const Timezones = document.getElementById("Timezones");
const Tld = document.getElementById("Tld");
const Status = document.getElementById("Status");
const StartOFWeek = document.getElementById("StartOFWeek");
const AltSplettings = document.getElementById("AltSplettings");
const flagcoun = document.getElementById("flagCoun");
const Capital_coords = document.getElementById("Capital-coords");
const googleMAps = document.getElementById("googleMaps");









Searchbyname.addEventListener('click',searching)
function searching(){
    fetch(`https://restcountries.com/v3.1/currency/${input.value}`).
    then(response  => response.json()).
    then(data=>{
        console.table(data);
        console.log(data[0]);

        
        flagcoun.innerHTML = `<img src='${data[0].flags.svg}'>`
        Offname.innerHTML = data[0].name.official;
        Population.innerHTML = data[0].population;
        Area.innerHTML = data[0].area;
        Capital.innerHTML = data[0].capital[0];
        Languages.innerHTML = JSON.stringify(data[0].languages);
        Borders.innerHTML = data[0].borders;
        CoatOfArms.innerHTML = `<img src='${data[0].coatOfArms.svg}'>`;
        Continents.innerHTML = data[0].continents;
        Idd.innerHTML = data[0].idd.root;
        Timezones.innerHTML = data[0].timezones;
        Tld.innerHTML = data[0].tld;
        Status.innerHTML = data[0].status;
        StartOFWeek.textContent = data[0].startOfWeek;
        AltSplettings.innerHTML = data[0].AltSplettings;
        Capital_coords.innerHTML = `Lat. ${data[0].capitalInfo.latlng[0]};Lng. ${data[0].capitalInfo.latlng[1]}.`; 
        googleMAps.innerHTML = data[0].maps.googleMAps;
    });
}



















/*
function createTable() {
    var rows = 4; // Количество рядов
    var cols = 3; // Количество колонок

    var table = document.getElementById('myTable');

    // Создание рядов и колонок
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i); // Создание нового ряда

        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j); // Создание новой ячейки в ряде
            cell.innerHTML = 'Ряд ' + (i + 1) + ', Колонка ' + (j + 1); // Пример текста в ячейке
        }
    }
}
createTable();*/