"use strict"

//-------------------------------------------------------------------------------------------------------------
//---------------------------------- CONSTANTES Y VARIABLES----------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

const prompt = require('prompt-sync')(); /*Carga el módulo. Función de node.js para leer lo escrito por consola*/ 
/**
 * Clase llamada Cuenta
 *  - sus atributos son titular y cantidad
 *  - titular se hace obligatorio con el setter
 *  - cantidad opcional pero imposibilitado a ser número negativo
 */
class Cuenta {

    // los atirbutos
    titular; 
    cantidad;

    // El constructor de la clase. Define los atributps titular y cantidad 
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;

    }

/*--------------------------------------------- GETTERS Y SETTERS -----------------------------------------------------------------*/
    // getter y setter del atributo titular
    
    get titular() {
        return this._titular;
    }

    set titular(nuevoTitular) {
        // Con el siguiente bucle impedimos que se deje en blanco 
        // "obligamos a crearlo si o si"
        if (nuevoTitular) {
            this._titular = nuevoTitular;
        } else {
            console.log("El titular no puede estar vacío");
        }
    }

    // Getter y Setter del atributo cantidad
    get cantidad() {
        return this._cantidad;
    }

    set cantidad(nuevaCantidad) {
        // Con el siguiente bucle impedimos que se ponga un número negativo
        if (nuevaCantidad >= 0) {
            this._cantidad = nuevaCantidad;
        } else {
            console.log("No se puede asignar una cantidad negativa");
        }
    }
/*--------------------------------------------- TOSTRING -----------------------------------------------------------------*/
}
