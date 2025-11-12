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
/**
 * Función para sumar
 *  - se crea el segundo y primer operador
 *  - El resultado se guarda en acumulador
 *  - El acumulador muestra el resultado de la oepración
 */
function sumar(){
    let operador1 = Number(prompt("Dame el primer operador: "));
    let operador2 = Number(prompt("Dame el segundo operador: "));
    acumulador = operador1 += operador2;
    
}

/**
 * Función para sumar
 *  - se crea el segundo y primer operador
 *  - El resultado se guarda en acumulador
 *  - El acumulador muestra el resultado de la oepración
 */
function restar(){
    let operador1 = Number(prompt("Dame el primer operador: "));
    let operador2 = Number(prompt("Dame el segundo operador: "));
    acumulador = operador1 -= operador2;
    
}

/**
 * Función para multiplicar
 *  - se crea el segundo y primer operador
 *  - El resultado se guarda en acumulador
 *  - El acumulador muestra el resultado de la oepración
 */
function multiplicar(){
    let operador1 = Number(prompt("Dame el primer operador: "));
    let operador2 = Number(prompt("Dame el segundo operador: "));
    acumulador = operador1 *= operador2;
    
}

/**
 * Función para dividir
 *  - se crea el segundo y primer operador
 *  - El resultado se guarda en acumulador
 *  - El acumulador muestra el resultado de la oepración
 */
function dividir(){
    let operador1 = Number(prompt("Dame el primer operador: "));
    let operador2 = Number(prompt("Dame el segundo operador: "));
    acumulador = operador1 /= operador2;
    
}

/**
 * Función para ver el resto de la división
 *  - se crea el segundo y primer operador
 *  - El resultado se guarda en acumulador
 *  - El acumulador muestra el resultado de la oepración
 */
function ver_resto(){
    let operador1 = Number(prompt("Dame el primer operador: "));
    let operador2 = Number(prompt("Dame el segundo operador: "));
    acumulador = operador1 %= operador2;
    
}
//-------------------------------------------------------------------------------------------------------------
//---------------------------------------------- MENÚ ---------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------
/**
 * Función para ver las operaciones que se peuden hacer
 *  - Se muestra por console las opciones para informar al usuario
 */
function opcionesMenu(){
    console.log('S -> Hacemos una suma');
    console.log('Q -> Hacemos una resta');
    console.log('X -> Hacemos una multiplicación');
    console.log('D -> Hacemos una división');
    console.log('Z -> Hacemos una división y vemos el resto');
}

/**
 * Función para que las opciones elegidas funcionen 
 *  - (llama a cada función en función de la elección)
 */
function menuPrincipal(opcion){
    switch(opcion) {
        case 's':
            sumar();
            break;
        case 'q':
            restar();
            break;
        case 'x':
            multiplicar();
            break;
        case 'd':
            dividir();
            break;
        case 'z':
            ver_resto();
            break;
        default:
            console.log("Operación no soportada");
            break;
    }
}

let seguimos = "si";
while(seguimos === "si"){

    //Para que la pantalla esté a cero de primeras.
    console.log("Pantalla: " + acumulador);

    //Mostramos mensaje de las operaciones que existen.
    opcionesMenu();

    //Pedimos la operación que se queire hacer.
    let opcion = prompt("Introduce la operación que deseas realizar: ");

    menuPrincipal(opcion);

    console.log("-----------------------------");
    console.log("Pantalla: " + acumulador);
    seguimos = prompt("¿Hacemos otra operación (si o no)?: ");
    console.log("-----------------------------");

}


