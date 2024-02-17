const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let qr_inp = document.getElementById("qr-inp"),
    btn = document.getElementById("create"),
    res = document.getElementById("res");
let i = 1;
btn.onclick = ()=>{
    let image = document.createElement('img');
    res.appendChild(image);
    image.src = url+encodeURI(qr_inp.value);
    image.id = "qr-codes"+i;
    i++;
}
