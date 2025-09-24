"use strict"

/*Carga el módulo. Función de node.js para*/ 
const prompt = require('prompt-sync')();

/* Contiene el valor actual en la memoria de*/
let pantalla = 0;

/** Permite almacenar el valor actual de la pa */
let memoria = 0;

let fin = false;
while(!fin){

    // Mostrar el contenido de la pantalla.
    console.log('Pantalla = ' + pantalla)

    // Mostrar el menú.
    mostrarMenu();

    // Leer la entrada del usuario.
    let operacion = prompt(' Introduce la operación que deseas: ')

    // Ejecutar la operación.
        pantalla = ejecutarOperacion(operacion);

}

/** 
 *  Muestra el menú de la calculadora por la salida standard
 */
function mostrarMenu() {
    console.log('C -> Pone la pantalla a cero');
    console.log('M -> Guarda el valor en memoria');
    console.log('R -> Recupera el valor en memoria');
    console.log('+-*/ -> Hace la operación');
}

/** 
 *  Ejecuta una operacion de la calculadora y muestra
 */
function ejecutarOperacion(operacion){

    let resultado = pantalla;
    let operando = 0;

    switch(operacion) {
        case 'C':
            resultado = 0;
            break;
        case 'M':
            memoria = pantalla;
            break;
        case 'R':
            resultado = memoria;
            memoria = 0;
            break;
        case '+':
            operando2 = Number(prompt("Introduce operando : "));
            resultado += operando2;
            break;
        default:
            console.log("Operación no soportada");
            break;
    }

    return resultado;

}