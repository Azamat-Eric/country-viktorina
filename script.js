const reg = document.getElementById('reg');
        const log = document.getElementById('log');
        const namereg = document.getElementById('namereg');
        const passreg = document.getElementById('passreg');
        const namelog = document.getElementById('namelog');
        const passlog = document.getElementById('passlog');

        reg.addEventListener("submit", (event)=>{
            event.preventDefault();
            localStorage.setItem(namereg.value, namereg.value);
            localStorage.setItem(passreg.value, passreg.value);
            alert("Good");
            namereg.value = '';
            passreg.value = '';
        });
        log.addEventListener("submit", (event)=>{
            event.preventDefault();
            let users = localStorage.getItem(namelog.value);
            let passwords = localStorage.getItem(passlog.value);
            namereg.value = '';
            passreg.value = '';
            if(users == namelog.value && passwords == passlog.value){
                alert("you have");
                window.open('After/index.html',"_blank");
            }
            else{
                alert('no');
            }
        })





// reg form animation
function regCh(){
    log.style.transform = "rotateY(180deg)";
    reg.style.transform = "rotateY(0)";
    log.style.zIndex = "-2";
    reg.style.zIndex = "2";
    reg.style.animation = "reglog 1s ease-in-out";
    log.style.animation = "logreg 1s ease-in-out";
}
function logCh(){
    reg.style.transform = "rotateY(180deg)";
    log.style.transform = "rotateY(0)";
    reg.style.zIndex = "-2";
    log.style.zIndex='2';
    log.style.transform = "rotateY(0)";
    log.style.animation = "reglog 1s ease-in-out";
    reg.style.animation = "logreg 1s ease-in-out";
}


