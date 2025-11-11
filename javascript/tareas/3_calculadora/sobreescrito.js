"use strict"

//-------------------------------------------------------------------------------------------------------------
//------------------------------- CONSTANTES Y VARIABLES-------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
/*Carga el módulo. Función de node.js para*/ 
const prompt = require('prompt-sync')();

let operador1 = 0;
let operador2 = 0;

let acumulador = 0; // Donde vamos a guardar el resultado de las operaciones

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
    console.log('P -> Ver el resto de la operación');
}

//-------------------------------------------------------------------------------------------------------------
//Implementación de funciones (+,-,/,*,%), factorial, x elevado a y. Debe de ser con 2 operadores (pantalla + uno solicitado)
//-------------------------------------------------------------------------------------------------------------

//Funciones de operaciones
function suma (operador1,operador2){
    acumulador = operador1+operador2;
    return acumulador;
}

function resta (operador1,operador2){
    acumulador = operador1-operador2;
    return acumulador;
}

function division (operador1,operador2){
    acumulador = operador1/operador2;
    return acumulador;
}

function multiplicacion(operador1,operador2){
    acumulador = operador1*operador2;
    return acumulador;
}

function verResto(operador1,operador2){
    acumulador = operador1%operador2;
    return acumulador;
}

// Función de factorial


// Función de x elevado a y




//-------------------------------------------------------------------------------------------------------------
//--------------------------------------------- MENÚ ----------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------


// Función de menú principal
function menuPrincipal(operacion){

    acumulador = pantalla;
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
        case 'P':
            verResto;
            break;
        default:
            console.log("Operación no soportada");
            break;
    }
}