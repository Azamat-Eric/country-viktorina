var san1, flagApiUrl, countryCode, number, randomsan,btn;
let btns = document.getElementsByClassName('option');
const toggleDarkMode = document.getElementById("toggle-dark-mode");
var flagImage = document.getElementById("flag-image");
const body = document.body;
var startbtn = document.getElementById('start');
var header = document.querySelector('header');
var cor = document.getElementById('cor'),
    incor = document.getElementById('incor'),
    record = document.getElementById('record'),
    recSave = [],
    incorrSave = [];




//---------------------------------------=======================    
//              MENU SCRIPT 
var menu_open = document.getElementById('menu-open');   //||
var menu_close = document.getElementById('menu-close');  //||
var menu = document.getElementById('others');

menu_open.onclick = ()=>{
    menu.classList.remove('others-close');
    menu.classList.add('others');
    menu_open.style = "display:hidden;"
}
menu_close.onclick = ()=>{
    menu_open.style = 'display:block;';
    menu.classList.remove('others');
    menu.classList.add('others-close');
}
//==========================================================




    const countryCodes = [
        'AF', 'AL', 'DZ', 'AD', 'AO', 'AG', 'AR', 'AM', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BT',
        'BO', 'BA', 'BW', 'BR', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA', 'CF', 'TD', 'CL', 'CN', 'CO', 'KM', 'CG', 'CD',
    'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FJ', 'FI', 'FR',
    'GA', 'GM', 'GE', 'DE', 'GH', 'GR', 'GD', 'GT', 'GN', 'GW', 'GY', 'HT', 'HN', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE',
    'IL', 'IT', 'JM', 'JP', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT',
    'LU', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MR', 'MU', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MA', 'MZ', 'MM', 'NA',
    'NR', 'NP', 'NL', 'NZ', 'NI', 'NE', 'NG', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PL', 'PT', 'QA',
    'RO', 'RU', 'RW', 'KN', 'LC', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA',
    'SS', 'ES', 'LK', 'SD', 'SR', 'SZ', 'SE', 'CH', 'SY', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TO', 'TT', 'TN', 'TR', 'TM', 'TV',
    'UG', 'UA', 'AE', 'GB', 'US', 'UY', 'UZ', 'VU', 'VA', 'VE', 'VN', 'WF', 'YE', 'ZM', 'ZW'
];
const list_countries = {
    'AF': 'Афганистан',
    'AL': 'Албания',
    'DZ': 'Алжир',
    'AD': 'Андорра',
    'AO': 'Ангола',
    'AG': 'Антигуа и Барбуда',
    'AR': 'Аргентина',
    'AM': 'Армения',
    'AU': 'Австралия',
    'AT': 'Австрия',
    'AZ': 'Азербайджан',
    
    'BS': 'Багамы',
    'BH': 'Бахрейн',
    'BD': 'Бангладеш',
    'BB': 'Барбадос',
    'BY': 'Беларусь',
    'BE': 'Бельгия',
    'BZ': 'Белиз',
    'BJ': 'Бенин',
    'BT': 'Бутан',
    'BO': 'Боливия',
    'BA': 'Босния и Герцеговина',
    'BW': 'Ботсвана',
    'BR': 'Бразилия',
    'BN': 'Бруней',
    'BG': 'Болгария',
    'BF': 'Буркина-Фасо',
    'BI': 'Бурунди',
    'CV': 'Кабо-Верде',
    'KH': 'Камбоджа',
    'CM': 'Камерун',
    'CA': 'Канада',
    'CF': 'Центральноафриканская Республика',
    'TD': 'Чад',
    'CL': 'Чили',
    'CN': 'Китай',
    'CO': 'Колумбия',
    'KM': 'Коморы',
    'CG': 'Республика Конго',
    'CD': 'Демократическая Республика Конго',
    'CR': 'Коста-Рика',
    'CI': 'Кот д’Ивуар',
    'HR': 'Хорватия',
    'CU': 'Куба',
    'CY': 'Кипр',
    'CZ': 'Чехия',
    'DK': 'Дания',
    'DJ': 'Джибути',
    'DM': 'Доминика',
    'DO': 'Доминиканская Республика',
    'EC': 'Эквадор',
    'EG': 'Египет',
    'SV': 'Сальвадор',
    'GQ': 'Экваториальная Гвинея',
    'ER': 'Эритрея',
    'EE': 'Эстония',
    'ET': 'Эфиопия',
    'FJ': 'Фиджи',
    'FI': 'Финляндия',
    'FR': 'Франция',
    'GA': 'Габон',
    'GM': 'Гамбия',
    'GE': 'Грузия',
    'DE': 'Германия',
    'GH': 'Гана',
    'GR': 'Греция',
    'GD': 'Гренада',
    'GT': 'Гватемала',
    'GN': 'Гвинея',
    'GW': 'Гвинея-Бисау',
    'GY': 'Гайана',
    'HT': 'Гаити',
    'HN': 'Гондурас',
    'HU': 'Венгрия',
    'IS': 'Исландия',
    'IN': 'Индия',
    'ID': 'Индонезия',
    'IR': 'Иран',
    'IQ': 'Ирак',
    'IE': 'Ирландия',
    'IL': 'Израиль',
    'IT': 'Италия',
    'JM': 'Ямайка',
    'JP': 'Япония',
    'JO': 'Иордания',
    'KZ': 'Казахстан',
    'KE': 'Кения',
    'KI': 'Кирибати',
    'KP': 'Северная Корея',
    'KR': 'Южная Корея',
    'KW': 'Кувейт',
    'KG': 'Киргизия',
    'LA': 'Лаос',
    'LV': 'Латвия',
    'LB': 'Ливан',
    'LS': 'Лесото',
    'LR': 'Либерия',
    'LY': 'Ливия',
    'LI': 'Лихтенштейн',
    'LT': 'Литва',
    'LU': 'Люксембург',
    'MG': 'Мадагаскар',
    'MW': 'Малави',
    'MY': 'Малайзия',
    'MV': 'Мальдивы',
    'ML': 'Мали',
    'MT': 'Мальта',
    'MH': 'Маршалловы Острова',
    'MR': 'Мавритания',
    'MU': 'Маврикий',
    'MX': 'Мексика',
    'FM': 'Микронезия',
    'MD': 'Молдова',
    'MC': 'Монако',
    'MN': 'Монголия',
    'ME': 'Черногория',
    'MA': 'Марокко',
    'MZ': 'Мозамбик',
    'MM': 'Мьянма (Бирма)',
    'NA': 'Намибия',
    'NR': 'Науру',
    'NP': 'Непал',
    'NL': 'Нидерланды',
    'NZ': 'Новая Зеландия',
    'NI': 'Никарагуа',
    'NE': 'Нигер',
    'NG': 'Нигерия',
    'NO': 'Норвегия',
    'OM': 'Оман',
    'PK': 'Пакистан',
    'PW': 'Палау',
    'PS': 'Палестина',
    'PA': 'Панама',
    'PG': 'Папуа — Новая Гвинея',
    'PY': 'Парагвай',
    'PE': 'Перу',
    'PH': 'Филиппины',
    'PL': 'Польша',
    'PT': 'Португалия',
    'QA': 'Катар',
    'RO': 'Румыния',
    'RU': 'Россия',
    'RW': 'Руанда',
    'KN': 'Сент-Китс и Невис',
    'LC': 'Сент-Люсия',
    'VC': 'Сент-Винсент и Гренадины',
    'WS': 'Самоа',
    'SM': 'Сан-Марино',
    'ST': 'Сан-Томе и Принсипи',
    'SA': 'Саудовская Аравия',
    'SN': 'Сенегал',
    'RS': 'Сербия',
    'SC': 'Сейшельские Острова',
    'SL': 'Сьерра-Леоне',
    'SG': 'Сингапур',
    'SK': 'Словакия',
    'SI': 'Словения',
    'SB': 'Соломоновы Острова',
    'SO': 'Сомали',
    'ZA': 'Южно-Африканская Республика',
    'SS': 'Южный Судан',
    'ES': 'Испания',
    'LK': 'Шри-Ланка',
    'SD': 'Судан',
    'SR': 'Суринам',
    'SZ': 'Свазиленд',
    'SE': 'Швеция',
    'CH': 'Швейцария',
    'SY': 'Сирия',
    'TJ': 'Таджикистан',
    'TZ': 'Танзания',
    'TH': 'Таиланд',
    'TL': 'Восточный Тимор',
    'TG': 'Того',
    'TO': 'Тонга',
    'TT': 'Тринидад и Тобаго',
    'TN': 'Тунис',
    'TR': 'Турция',
    'TM': 'Туркменистан',
    'TV': 'Тувалу',
    'UG': 'Уганда',
    'UA': 'Украина',
    'AE': 'ОАЭ',
    'GB': 'Великобритания',
    'US': 'США',
    'UY': 'Уругвай',
    'UZ': 'Узбекистан',
    'VU': 'Вануату',
    'VA': 'Ватикан',
    'VE': 'Венесуэла',
    'VN': 'Вьетнам',
    'WF': 'Уоллис и Футуна',
    'YE': 'Йемен',
    'ZM': 'Замбия',
    'ZW': 'Зимбабве'
};
var corr = 0;//правильный ответ счетчик
var incorr = 0;//Неправильный ответ счетчик




//random san shygaru
function f4(){
    number = [];
    for(let i=1; i<=4;i++){
        var san = Math.floor(Math.random()*countryCodes.length);
        number.push(san);
    }
    console.log(number);

    
    record.textContent = JSON.stringify(localStorage.getItem("recSAve"));
}
    /*
document.querySelector('.stop').addEventListener('click',stop);
    function stop(){
    cor.textContent = "Правильно: " + recSave[-1];
    incor.textContent = "Неправильно: " + incorrSave[-1];
}
*/
// knopka basqandagy element
function checkAnswer(elem){
    if(elem.innerHTML==list_countries[countryCodes[number[randomsan]]]){
        elem.id='correct';
        console.log(elem.innerHTML, countryCodes[number[randomsan]]);
        setTimeout(start, 1000);
        setTimeout(()=>{elem.id=''},900);
        corr++;
        cor.textContent ="Правильно: "+corr;
        recSave.push(corr);
    }
    else{
        elem.id='incorrect';
        setTimeout(start, 1000);
        setTimeout(()=>{elem.id=''},900);
        incorr++;
        incor.textContent = "Неправильно: " + incorr;
        incorrSave.push(incorr);
    }
    localStorage.setItem("recSave", JSON.parse(recSave));//Все 
}
function start(){
    header.remove();
    startbtn.classList.add('stop');
    startbtn.classList.remove('start');
    startbtn.value = 'STOP';
    document.querySelector('.quiz-container').style.display = "block";
f4();
    function suret(){
        randomsan = Math.floor(Math.random()*4);
            flagImage.src = `https://flagcdn.com/${countryCodes[number[randomsan]].toLocaleLowerCase()}.svg`;
            console.log("Surettin sany: ", countryCodes[number[randomsan]]);
    }
    suret();
    


    for(btn of btns){
        btn.addEventListener('click', ()=>{
        });
        
        if(btn.className == 'option 1'){
            btn.textContent = list_countries[countryCodes[number[0]]];
            console.log(countryCodes[number[0]]);
        }
        if(btn.className == 'option 2'){
            btn.textContent = list_countries[countryCodes[number[1]]];
            console.log(countryCodes[number[1]]);
        }
        if(btn.className == 'option 3'){
            btn.textContent = list_countries[countryCodes[number[2]]];
            console.log(countryCodes[number[2]]);
        }
        if(btn.className == 'option 4'){
            btn.textContent = list_countries[countryCodes[number[3]]];
            console.log(countryCodes[number[3]]);
        }
    }

}

/*

toggleDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

*/