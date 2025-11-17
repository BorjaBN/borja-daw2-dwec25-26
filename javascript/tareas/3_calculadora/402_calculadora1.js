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
 *  - Se crea el segundo y primer operador
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
 *  - Se crea el segundo y primer operador
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
 *  - Se crea el segundo y primer operador
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
 *  - Se crea el segundo y primer operador
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
 *  - Se crea el segundo y primer operador
 *  - El resultado se guarda en acumulador
 *  - El acumulador muestra el resultado de la oepración
 */
function ver_resto(){
    let operador1 = Number(prompt("Dame el primer operador: "));
    let operador2 = Number(prompt("Dame el segundo operador: "));
    acumulador = operador1 %= operador2;
    
}

/**
 * Función para hacer una potencia 
 *  - Se crea el segundo y primer operador
 *  - El resultado se guarda en acumulador
 *  - Se crea la variable resultado para aplicar dentro del bucle for
 *  - El bucle multiplica el primer nº que se introduce a resultado
 *    el mismo numero de veces que se pide como segundo nº
 *  - Se muestra el resultado con el acumulador 
 */
function potencia(){
    let operador1 = Number(prompt("Dame el primer operador: "));
    let operador2 = Number(prompt("Dame el segundo operador: "));

    resultado = 1;
    for (let i = 0; i < operador2; i++) {
        resultado *= operador1;
    }
    acumulador = resultado;

}

/**
 * Función para hacer un factorial 
 *  - Se crea el primer operador y se usa solo a diferencia de las otras operaciones
 *  - El resultado se guarda en acumulador
 *  - Se crea la variable resultado para aplicar dentro del bucle for
 *  - El bucle multiplica el operador1 por resultado (1) hasta que que se multiplique por si mismo
 *  - Se muestra el resultado con el acumulador 
 */
function factorial(){
    let operador1 = Number(prompt("Dame un numero: "));

    resultado = 1;
    for (let i = 1; i <= operador1; i++) {
        resultado *= i;
    }
    acumulador = resultado;
}

/**
 * Función para guardar el resultado de la operación en memoria
 *  - El valor de acumulador despues de la operación pasa a guardarse en 
 *    la variable memoria
 */
function guardarMemoria(){
    memoria = acumulador;
    console.log("Memoria guardada:", memoria);
}

/**
 * Función para mostrar el resultado de la operación en memoria
 *  - El valor de acumulador recupera el valor guardado en memoria
 */
function mostrarMemoria(){
    acumulador = memoria;
    console.log("Memoria recuperada:", acumulador);
}

/**
 * Función para resetear memoria y acumulador
 *  - El valor de acumulador y memoria pasa a ser 0
 */
function resetear(){
    acumulador = 0;
    memoria = 0;
    console.log("Pantalla y memoria reseteadas a 0");
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
    console.log('P -> Hacemos una podencia');
    console.log('F -> Hacemos un factorial');
    console.log('G -> Guardamos en memoria');
    console.log('M -> Mostramos la memoria');
    console.log('R-> Hacemos un reset');



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
        case 'p':
            potencia();
            break;
        case 'f':
            factorial();
            break;
        case 'g':
            guardarMemoria();
            break;
        case 'm':
            mostrarMemoria();
            break;
        case 'r':
            resetear();
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


