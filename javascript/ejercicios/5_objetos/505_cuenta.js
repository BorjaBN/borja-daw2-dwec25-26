"use strict"

/*Carga el módulo. Función de node.js para*/ 
const prompt = require('prompt-sync')();

// clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales)

let Cuenta = {
    titular : "",
    cantidad : 0, 

    nombreObligatorio : function () {
        if (this.titular == undefined || "") {
            return console.log("Es obligatorio poner un titular");
        };
    },
}

this.titular = prompt("Introduce el nombre del titular de la cuenta: ");
this.cantidad = prompt("Introduce la cantidad que tiene la cuenta: ");

console.log("El titular es: " + this.titular + " y la cantidad es: " + this.cantidad);



