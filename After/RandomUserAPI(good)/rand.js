const namediv = document.getElementById("name");
const pic = document.getElementById("pick");
const addressdiv = document.getElementById("address");


function random(){
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const photo = user.picture.large;
    const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`;
    namediv.innerText = 'Full Name: '+ fullName;
    pic.innerHTML = "<img src="+photo+">";
    addressdiv.innerText = 'Address: '+ address;
    // и другие данные пользователя...

    // Можно также обновить соответствующие элементы на странице с полученными данными
    // document.getElementById('full-name').textContent = fullName;
    // document.getElementById('photo').src = photo;
    // document.getElementById('address').textContent = address;
    // и другие обновления элементов...
  })
  .catch(error => {
    console.log('Ошибка при получении данных:', error);
  });
}