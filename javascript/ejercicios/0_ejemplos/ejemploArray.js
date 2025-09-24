let frutas = ['Manzana', 'Banana'];

// Un bucle for para leer el array frutas
for (let n = 0; n < frutas.length; n++){
    console.log(frutas[n]);
}

// Este es el for each de JS.
for (let fruta of frutas){
    console.log(fruta);
}

// Funcion lambda
frutas.forEach(fruta => console.log(fruta));