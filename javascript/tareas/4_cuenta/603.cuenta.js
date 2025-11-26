"use strict"

//-------------------------------------------------------------------------------------------------------------
//---------------------------------- CLASE CUENTA ----------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

/**
 * Clase llamada Cuenta
 *  - sus atributos son titular y cantidad
 *  - titular se hace obligatorio con el setter
 *  - cantidad opcional pero imposibilitado a ser número negativo
 */
class Cuenta {

    /** Contructor de la clase Cuenta
     *  - Los siguientes son sus atributos
     * @param {*} titular : Atributo que define el nombre del titular de la cuenta (este es obligatorio)
     * @param {*} cantidad : cantidad de dinero que hay en la cuenta (este es opcionar)
     */
    constructor(titular, cantidad = 0){
        this._titular = titular;
        this._cantidad = cantidad;

    }

/*--------------------------------------------- GETTERS Y SETTERS -----------------------------------------------------------------*/
    // getter y setter del atributo titular
    
    get titular() {
        return this._titular; 
        //Importantisimo, acuerdate del bucle infinito que se crea
        // Hecho así para llamar al atributo y no al propio getter (o setter)
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
    
    // Así "mostramos el objeto tal y como es" 
    toString(){
        return `Cuenta de ${this.titular} con saldo: ${this.cantidad} €`; // Si llamamos al atributo del constructor nos cargamos 
                                                                          // al validaciones puestas en los setters
    }


/*--------------------------------------------- MÉTODOS ESPECIALES -----------------------------------------------------------------*/



    /** Método para ingressar una cantidad de la cuenta
     *  - Impedimos que sea cantidad negativa o nada.
     *  - Que la cantidadIngresada es +? se le suma al saldo
     * 
     * @param {*} cantidad 
     */
    ingresar(cantidadIngresada) {
        if (cantidadIngresada > 0) {
            this._cantidad += cantidadIngresada;
        } else {
            console.log("No se puede ingresar una cantidad negativa o cero");
        }
    }



    /** Método para retirar una cantidad de la cuenta
     *  - Impedimos que sea una cantidad negativa o nada.
     *  - Si el resultado de la resta del saldo de 
     *  la cuenta - lo que me piden retirar es mayor o igual a 0, se hace.
     * 
     * @param {*} cantidadRetirada 
     */
    retirar(cantidadRetirada) {
        if (cantidadRetirada > 0) {
            if (this._cantidad - cantidadRetirada >= 0) {
                this._cantidad -= cantidadRetirada;
            } else {
                this._cantidad = 0;
            }
        } else {
            console.log("No se puede retirar una cantidad negativa o cero");
        }
    }

}

/*--------------------------------------------- MODIFICACIONES ADICIONALES -----------------------------------------------------------------*/

let cuenta1 = new Cuenta("Borja", 100);
console.log(cuenta1.toString());

// Ingresar 10
cuenta1.ingresar(10);
console.log(cuenta1.toString());

// Retirar 50
cuenta1.retirar(50);
console.log(cuenta1.toString());

// Ingresar 15
cuenta1.ingresar(15);
console.log(cuenta1.toString());

// Retirar 100
cuenta1.retirar(100);
console.log(cuenta1.toString());