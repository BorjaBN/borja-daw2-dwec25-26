"use strict"

//-------------------------------------------------------------------------------------------------------------
//---------------------------------- CONSTANTES Y VARIABLES----------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

const prompt = require('prompt-sync')(); /*Carga el módulo. Función de node.js para*/ 

let acumulador = 0; // Este es el primer operador introducido

let memoria = 0; // El valor almacenado de forma "temporal".
let resultado = 0; // Resultado de las operaciones.

let opcion = 0;

//-------------------------------------------------------------------------------------------------------------
//------------------------------------------ OPERACIONES-------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

function sumar(){
    
    let operador2 = prompt("Dame el segundo operador");
    resultado = Number(acumulador) + Number(operador2);
    return resultado;
}

//-------------------------------------------------------------------------------------------------------------
//---------------------------------------------- MENÚ ---------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

function opcionesMenu(){
    console.log('S -> Hacemos una suma');
}

function menuPrincipal(opcion){
    switch(opcion) {
        case 'S':
            sumar;
            break;
        default:
            console.log("Operación no soportada");
            break;
    }
}

let seguimos = "si";
while(seguimos === "si"){

    //Para que la pantalla esté a cero de primeras.
    console.log(acumulador);

    //Mostramos mensaje de las operaciones que existen.
    opcionesMenu();

    //Pedimos la operación que se queire hacer.
    opcion = prompt("Introduce la operación que deseas realizar: ");

    menuPrincipal();

    console.log("-----------------------------");
    seguimos = prompt("¿Hacemos otra operación (si o no)?: ");
    console.log("-----------------------------");
}


