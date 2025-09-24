"use strict"

const numeroMagico = Math.random();
const valorPorConsola = prompt("Introduce un número para intentar adivinar el número magico", numeroMagico);


for(intentos=1; intentos>0; intentos++){

    if (valorPorConsola<numeroMagico) {
        console.log("Es un número más alto")
    } else if(numeroMagico>numeroMagico) {
        console.log("Es un número más bajo")
    } else {
        console.log("Ese es el número. ¡Felicidades!")
    }

} console.log(intentos)
