// Elements

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPM = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}<span> </span>${amPM}`

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function greetBG() {
    let today = new Date(),
        hour = today.getHours();

    if (hour >= 5) {
        document.body.style.backgroundImage = "url('../imgs/morning.jpg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Morning'
    }
    if (hour >= 12) {
        document.body.style.backgroundImage = "url('../imgs/afternoon.jpg')"
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Afternoon'
    }
    if (hour >= 16) {
        document.body.style.backgroundImage = "url('../imgs/evening.jpg')"
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening'
    }
    if (hour >= 20) {
        document.body.style.backgroundImage = "url('../imgs/night.jpg')"
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good Evening'
        document.body.style.color="white"
    }
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Task]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

function setName(e){
    if(e.type=='keypress'){
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('name', e.target.innerText);
            name.blur()
        }
    }
    else{
        localStorage.setItem('name', e.target.innerText)
    }
}

function setFocus(e){
    if(e.type=='keypress'){
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur()
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText)
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('blur', setFocus);
focus.addEventListener('keypress', setFocus);

showTime();
greetBG();
getName();
getFocus();