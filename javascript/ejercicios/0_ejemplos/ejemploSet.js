
const letters = new Set();

// Añadiendo letras al set

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");

if (letters.has('a')){
    console.log('Tiene a')
}

letters.delete('a');

console.log(letters);
