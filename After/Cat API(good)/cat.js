const imgdiv = document.getElementById("image");
const porod = document.getElementById("poroda");
const imagi = document.getElementById("image");


function next(){
// Получить случайную фотографию кошки
fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].url;
    imgdiv.innerHTML = `<img src="${imageUrl}" id="image">`;
  })
  .catch(error => console.log('Ошибка:', error));
}