const kokGekozen = document.getElementById("kokKies");
const muffinGekozen = document.getElementById("muffinKies");
const beslagGekozen = document.getElementById("beslagKies");
const ovenAan = document.getElementById("oven");
const slagroomGekozen = document.getElementById("slagroomKies");

/* Chat Gpt
Hoe krijg ik het voor elkaar om met javascript de ene sectie weg te halen en een andere te voor schijn krijgen? */ 
function wisselselectieKok(){
    document.getElementById("kokKeuze").style.display = "none";
    document.getElementById("muffinKeuze").style.display = "block";
}

function wisselselectieMuffin(){
    document.getElementById("muffinKeuze").style.display = "none";
    document.getElementById("beslagKeuze").style.display = "block";
}

function wisselselectieBeslag(){
    document.getElementById("beslagKeuze").style.display = "none";
    document.getElementById("oven").style.display = "block";
}

function wisselselectieOven(){
    document.getElementById("oven").style.display = "none";
    document.getElementById("slagroomKeuze").style.display = "block";
}

function wisselselectieSlagroom(){
    document.getElementById("slagroomKeuze").style.display = "none";
    document.getElementById("sprinkelsKeuze").style.display = "block";
}

kokGekozen.addEventListener("click", wisselselectieKok);
muffinGekozen.addEventListener("click", wisselselectieMuffin);
beslagGekozen.addEventListener("click", wisselselectieBeslag);
ovenAan.addEventListener("click", wisselselectieOven);
slagroomGekozen.addEventListener("click", wisselselectieSlagroom);