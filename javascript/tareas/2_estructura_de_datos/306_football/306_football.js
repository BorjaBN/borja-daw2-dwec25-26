"use strict"

//Aquí declaramos las variables y constantes 
const prompt = require('prompt-sync')(); //Poner esto siempre para que funcione el prompt


// 1ª Parte
let equipo = [];
let jugador = prompt("Escribe el nombre del jugador del equipo:");

while (jugador !== "" && equipo.length <= 10){ //Para que me salgan 11 jugadores, máximo  en futbol

    if (equipo.includes(jugador)){
        console.log( jugador + " ya existe en la lista de jugadores del equipo.");
    } else {
        equipo.push(jugador);
        console.log(jugador + " se ha añadido a la lista de jugadores del equipo.");

    }
    jugador = prompt("Escribe otro jugador que quieres añadir a la lista de jugadores del equipo: "); 
    //Si no le añadimos una manera de "refrescar" el valor de elemento, 
    //se queda con el valor puesto de primeras y hace el bucle infinito.
}
// Bucle reutilizado del ejercicio anterior, solo cambié algunos datos

console.log("Estos son tus jugadores: " + equipo.sort());

//2ª Parte

let numeroDorsal = prompt("Escribe el número del dorsal quieres añadir: ")

while (numeroDorsal != 0){

    
}