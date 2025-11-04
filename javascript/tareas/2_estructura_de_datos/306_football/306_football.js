"use strict"

//Aquí declaramos las variables y constantes 
const prompt = require('prompt-sync')(); //Poner esto siempre para que funcione el prompt


// 1ª Parte
const equipo = new Map();
console.log("Si dejas en blanco se termina")
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

console.log("Si pones 0 se termina")

let consulta = prompt("Escribe el número del jugador que quieres consultar:");

while (consulta !== "0") { // Acordarse de problemas con poner 0 porque promt solo recoge texto, entonces tiene que ser entrecomillado !!!!
    if (equipo.has(Number(consulta))) {
        console.log("Ese número lo tiene " + equipo.get(Number(consulta)));
    } else {
        console.log("No hay ningún jugador con ese número")
    }

    console.log("-----------------------------");
    consulta = prompt("Escribe el siguiente número que quieras comprobar: ");
    console.log("-----------------------------");
}