"use strict"

//Aquí declaramos las variables y constantes 
const prompt = require('prompt-sync')(); //Poner esto siempre para que funcione el prompt
let numerosAleatorios = [];
let numerosUsuario = [];


// Aquí vamos a crear el bucle para generar los 10 numeros del 1 al 20
for (let i = 0; i < 10; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 21));   // Genera un número del 0 al 1,
                                                            // lo multiplico por 21 para que me de
}                                                           // los nº decimales con un max. de 20'9999 y tal
                                                            // y con math.floor hago que se redondee hacia abajo
                                                            // (p.e.: de 10'999 a 10)
                                                            // Luego añado el push para meterlos dentro del array


// Este bucle es para pedir numeros (hasta cinco veces) al usuario
for (let i = 0; i < 5; i++) {
  let numero = Number(prompt("Escribe un número:"));
  numerosUsuario.push(numero);
}
