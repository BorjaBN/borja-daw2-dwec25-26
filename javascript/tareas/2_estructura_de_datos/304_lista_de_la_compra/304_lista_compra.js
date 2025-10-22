"use strict"

//Aquí declaramos las variables y constantes 
const prompt = require('prompt-sync')(); //Poner esto siempre para que funcione el prompt
let listaCompra = [];
let elemento = prompt("Escribe lo que quieres añadir a la lista de la compra:");

while (elemento !== ""){

    if (listaCompra.includes(elemento)){
        console.log( elemento + " ya existe en la lista de la compra.")
    } else {
        listaCompra.push(elemento);
        console.log(elemento + " se ha añadido a la lista de la compra.")

    }
    elemento = prompt("Escribe otro elemento  que quieres añadir a la lista de la compra:"); 
    //Si no le añadimos una manera de "refrescar" el valor de elemento, 
    //se queda con el valor puesto de primeras y hace el bucle infinito.
}
console.log(listaCompra.sort());