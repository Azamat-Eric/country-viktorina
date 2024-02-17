const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        //getting latitude&longitude from position obj
        const { latitude, longitude} = position.coords;
        //getting location of passed coordinates using geolocation API
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        fetch(url).then(res => res.json()).then(data=>{
            console.table(data.address);
            //news();
            const ndiv = document.createElement('div');
    document.body.appendChild(ndiv);
    ndiv.id='newdiv';
    ndiv.innerHTML = `<span>Қысқаша: ${data.display_name}</span><table><thead><tr><td>Деректер</td><td>Мәні</td>        </tr>    </thead>    <tbody>        <tr>            <td>Country</td>            <td>${data.address.country}</td>        </tr>        <tr>            <td>Облыс/Штат</td>            <td>${data.address.state}</td>        </tr>        <tr>            <td>Town</td>            <td>${data.address.town}</td>        </tr>        <tr>            <td>Post Code</td>            <td>${data.address.postcode}</td>        </tr>        <tr>            <td>Country Code</td>            <td>${data.address.country_code}</td>        </tr></tbody>    </table>`;
        }).catch(()=>{
            console.log('error');
        });
    });
});
function news(){
    const ndiv = document.createElement('div');
    document.body.appendChild(ndiv);
    ndiv.id='newdiv';
    ndiv.innerHTML = `<span>hello</span><br>
    <table>
    <thead>
        <tr>
            <td>Деректер</td>
            <td>Мәні</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Country</td>
            <td>${data.country}</td>
        </tr>
        <tr>
            <td>Облыс/Штат</td>
            <td>${data.state}</td>
        </tr>
        <tr>
            <td>Town</td>
            <td>${data.town}</td>
        </tr>
        <tr>
            <td>Post Code</td>
            <td>${data.postcode}</td>
        </tr>
        <tr>
            <td>Country Code</td>
            <td>${data.country_code}</td>
        </tr>


        <tr>
            <td>County</td>
            <td>${data.county}</td>
        </tr>
        <tr>
            <td>road</td>
            <td>${data.addess.road}</td>
        </tr>
        <tr>
            <td>Country Code</td>
            <td>${data.country_code}</td>
        </tr>
        <tr>
            <td>House number</td>
            <td>${data.house_number}</td>
        </tr>
    </tbody>
    </table>`;
}