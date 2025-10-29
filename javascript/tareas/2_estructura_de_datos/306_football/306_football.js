"use strict"

//Aquí declaramos las variables y constantes 
const prompt = require('prompt-sync')(); //Poner esto siempre para que funcione el prompt


// 1ª Parte
const equipo = new Map();
let jugador = prompt("Escribe el nombre del jugador del equipo:");

while (jugador !== "" && equipo.size <= 10){ //Para que me salgan 11 jugadores, máximo  en futbol
                                            //Acuerdate cuando leas esto que map no tiene length, tiene size
    let numero = prompt(`Introduce el número de dorsal para ${jugador}:`);
        
        if (equipo.has(Number(numero))) { // Este método me devuelve un boolean si está o no en el amp
        console.log(`Ya hay un jugador con el dorsal ${numero}.`);
        } else {
            equipo.set(Number(numero), jugador); //El método set de los mapas es para guardarme lo introducido como pares clave valor.
            console.log(`${jugador} se ha añadido con el dorsal ${numero}.`);
        }
    console.log("-----------------------------");
    jugador = prompt("Escribe el nombre del siguiente jugador: ");
    console.log("-----------------------------");

} 
// Intenté comprobar que no se repitiera el nombre, 
// pero al tenerlo de valor y no de clave me daba siempre
// true, a si que como no es requisito lo eliminé :) 

console.log(equipo);
console.log("-----------------------------");

   
// 2ª Parte



