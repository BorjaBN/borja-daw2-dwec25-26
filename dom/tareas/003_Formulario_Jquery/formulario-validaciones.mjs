/** Valida que el contenido del campo no esté vacío
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_vacio(valor){
    
    return valor.trim() !== '';
}

/** Valida que el contenido del campo no empiece por un número
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_empiezaNumero(valor){
    
    return !/^\d/.test(valor);
}

/** Valida que el nombre (Cualquier contenido de campo en realidad) no contenga ni numeros ni otros carácteres
 * 
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_nombre(valor){
    
    return /^[a-zA-Z\s]+$/.test(valor);
}

/** Valida que el nombre no sea superior a 10 caracteres
 * 
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_longitudNombre(valor){
    
    return valor.length <= 10; 
}

/** Valida que el email tenga formato de email
 * 
 *  - Que contenga un @
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_email(valor){
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

/** Valida que el DNI tenga un formato de DNI
 * 
 *  - Se dice todas las letras posibles
 *  - Se comprueba si el contenido introducido tiene un formato de DNI 
 *  - Calculada la letra en función de los numeros añadidos
 * 
 * @param {*} valor
 * @returns true o false
 */
export function val_dni(valor){

    // Orden oficial de las letras de la policía
    // Las que faltan son a posta (I, U, O, Ñ)
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
     
    // Comprueba que tenga el formato de DNI antes que "coger los trozos" con slice
    if (!/^\d{8}[A-Z]$/.test(valor)) return false;

    // Coge los trozos
    const numero = valor.slice(0, 8);     // Desde el primero (incluido) hasta el final (no incluido)
    const letra = valor.slice(8).toUpperCase(); // Desde el principio hasta el final (por no incluir ningún final)

    const letraCalculada = letras[numero % 23]; // El cálculo de la letra
    return letra === letraCalculada;
}