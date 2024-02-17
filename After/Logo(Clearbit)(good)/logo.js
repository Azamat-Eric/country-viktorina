const input = document.getElementById("nameBrand");
const btn = document.getElementById("search");
const save = document.getElementById("save");
const imgs = document.getElementById("imgs");
const see = document.getElementById("see");
let i = 0;

btn.addEventListener("click", function searchF(){
    var iv = input.value;
    const image = document.createElement("img");
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src",`https://wikipedia.org/wiki/${iv}`);
    iframe.setAttribute("width",500);
    iframe.setAttribute("height", 300);
    image.src = `https://logo.clearbit.com/${iv}.com`;
    image.title = input.value;
    image.style.display = "block";
    imgs.appendChild(image);
    imgs.appendChild(iframe);
    console.log("Succes!");
    input.placeholder = input.value;
    var scrs = [];
    save.addEventListener("click", () => {
        scrs.push(`<img src=https://logo.clearbit.com/${iv}.com><span id='nameimg'>${iv}</span><br><iframe src='https://ru.wikipedia.org/wiki/${iv}' width='500' height='300'>`);
        localStorage.setItem("Srcs", scrs.toString());
        input.value="";
});


});
see.addEventListener("click", ()=>{
    var x = localStorage.getItem("Srcs");
    var xJson = JSON.stringify(x);
    if(xJson.includes(",")==1){  
    console.log(xJson);
    imgs.innerHTML =JSON.parse(xJson.replace(",", ""));
 }
 else{
    console.log(xJson);
    imgs.innerHTML =JSON.parse(xJson);
 }
});

function clearing(){
    localStorage.clear();
}
function clr(){
    input.value = '';
}