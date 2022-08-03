const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp-off');


function lampOn(){
    lamp.src = "./assets/img/on.jpg";
}

function lampOff(){
    lamp.src = "./assets/img/off.jpg";
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
