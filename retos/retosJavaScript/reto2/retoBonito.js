"user strict"
const prompt = require('prompt-sync')();


/**/

let arrayNumeros = [];

let valorIntroducido = Number(prompt("Introduce un número: "));

while (valorIntroducido != 0){
    arrayNumeros.push(valorIntroducido);


    console.log("---------------------------------------");
    console.log(Number(valorIntroducido("Introduce otro número")));
    console.log("---------------------------------------");


    console.log(arrayNumeros);
}

let mySet = new Set();

for (let n; n < arrayNumeros; mySet.add()){

}