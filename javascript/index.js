console.log("hello world!");

const keuze = 1;

const kokGekozen = document.getElementById("kokKies");
const muffinGekozen = document.getElementById("muffinKies");
const beslagGekozen = document.getElementById("beslagKies");
const ovenAan = document.getElementById("oven");
const slagroomGekozen = document.getElementById("slagroomKies");


function wisselselectieKok(){
    document.getElementById("kokKeuze").style.display = "none";
    document.getElementById("muffinKeuze").style.display = "block";
}

kokGekozen.addEventListener("click", wisselselectieKok);

function wisselselectieMuffin(){
    document.getElementById("muffinKeuze").style.display = "none";
    document.getElementById("beslagKeuze").style.display = "block";
}

muffinGekozen.addEventListener("click", wisselselectieMuffin);

function wisselselectieBeslag(){
    document.getElementById("beslagKeuze").style.display = "none";
    document.getElementById("oven").style.display = "block";
}

beslagGekozen.addEventListener("click", wisselselectieBeslag);

function wisselselectieOven(){
    document.getElementById("oven").style.display = "none";
    document.getElementById("slagroomKeuze").style.display = "block";
}

ovenAan.addEventListener("click", wisselselectieOven);

function wisselselectieSlagroom(){
    document.getElementById("slagroomKeuze").style.display = "none";
    document.getElementById("sprinkelsKeuze").style.display = "block";
}

slagroomGekozen.addEventListener("click", wisselselectieSlagroom);