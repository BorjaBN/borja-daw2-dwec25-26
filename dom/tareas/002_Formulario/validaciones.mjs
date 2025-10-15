/**
 * 
 * @param {*} valor 
 * @returns 
 */
export function val_vacio(valor){
    // Devuelve false si el campo está vacío
    return valor.trim() !== '';
}
/**
 * 
 * @param {*} valor 
 * @returns 
 */
export function val_empiezaNumero(valor){
    // Devuelve false si empieza con un número
    return !/^\d/.test(valor);
}
/**
 * 
 * @param {*} valor 
 * @returns 
 */
export function val_nombre(valor){
    // Devuelve false si tiene números o caracteres extraños
    return /^[a-zA-Z\s]+$/.test(valor);
}
export function val_longitudNombre(valor){
    return valor.length <= 10; 
}
/**
 * 
 * @param {*} valor 
 * @returns 
 */
export function val_email(valor){
    // Devuelve false si no tiene formato de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}