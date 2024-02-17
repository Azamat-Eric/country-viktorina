const imgdiv = document.getElementById("image");
const porod = document.getElementById("poroda");
const imagi = document.getElementById("image");
function next(){
fetch('https://api.thedogapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].url;
    imgdiv.innerHTML = `<img src="${imageUrl}" id="image">`;
  })
  .catch(error => console.log('Ошибка:', error));
}