"use strict"

/*Carga el módulo. Función de node.js para*/ 
const prompt = require('prompt-sync')();

const operador1=0;
const operador2=0;


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
    console.log('S -> Hacemos una suma');
    console.log('R -> Hacemos una resta');
    console.log('D -> Hacemos una división');
    console.log('M -> Hacemos una multiplicación');
}


//Funciones de operaciones
function suma (operador1,operador2){
    operador1+operador2
}

function resta (operador1,operador2){
    operador1-operador2
}

function division (operador1,operador2){
    operador1/operador2
}

function multiplicacion(operador1,operador2){
    operador1*operador2
}

// Función de menú principal
function menuPrincipal(operacion){

    let resultado = pantalla;
    let operacion = 0;

    switch(operacion) {
        case 'S':
            suma;
            break;
        case 'R':
            resta;
            break;
        case 'D':
            division;
            break;
        case 'M':
            multiplicacion;
            break;
        default:
            console.log("Operación no soportada");
            break;
    }
}