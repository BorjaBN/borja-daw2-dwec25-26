import { Cuenta } from "./cuenta.mjs";


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