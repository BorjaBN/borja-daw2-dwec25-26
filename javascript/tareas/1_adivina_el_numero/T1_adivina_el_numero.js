"use strict"


//Aquí declaramos las variables y constantes 
const prompt = require('prompt-sync')(); //Poner esto siempre para que funcione el prompt
let valorIntroducido;
let numIntentos = 0;
let numMaxIntentos = 10;

const numSecreto = Math.floor(Math.random() * 11); // Genera un número del 0 al 1,
                                                    // lo multiplico por 11 para que me de
                                                    // los nº decimales con un max. de 10'9999 y tal
                                                    // y con math.floor hago que se redondee hacia abajo
                                                    // (p.e.: de 10'999 a 10)

// Aquí vamos a crear el bucle para que nos vaya informando de si acertamos o no
while (valorIntroducido != numSecreto && numIntentos < numMaxIntentos){ // Al ponerle || no se sale del mensaje, llegamos al infinito
    valorIntroducido = Number(prompt("Introduce un número del 0 al 10: "));
    numIntentos++

    if (valorIntroducido<numSecreto){
        console.log("El número secreto es más grande");
    } else if (valorIntroducido>numSecreto){
        console.log("El número secreto es más pequeño");
    } else { //Puesto aquí porque al ponerlo fuera se repetía siempre
        console.log("Has acertado, el numero secreto era: " + numSecreto);
    }
    
    console.log("Lo has intentado " + numIntentos + " veces de " + numMaxIntentos);
} 


