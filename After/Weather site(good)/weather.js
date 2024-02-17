var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var dasc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=aef6ea0cd82ca5e3b27e499a4e071f4f')
.then(response =>response.json())
.then(data => {
var nameValue = data['name'];
var tempValue = data['main']['temp'];
var descValue = data['weather']['0']['description'];

name.innerHTML = nameValue;
temp.innerHTML = (parseInt(tempValue)-273)+"°C";
descValue.innerHTML = descValue;
})

.catch(err =>alert("wrong city name!"))
})