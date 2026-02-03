
/** Valida que el contenido del campo no esté vacío
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_vacio(valor){
    
    return valor.trim() !== '';
}


/** Valida que el nombre (Cualquier contenido de campo en realidad) no contenga ni numeros ni otros carácteres
 * - Permite caracteres españoles
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_nombre(valor){
    
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor);
}


/**
 * Valida que el año tenga exactamente 4 números
 * y no contenga letras ni otros caracteres.
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_anho(valor) {
    return /^[0-9]{4}$/.test(valor);
}


/**
 * Valida que el numero de edicion sea siempre mayor que cero
 * 
 * @param {*} valor 
 * @returns true o false
 */
export function val_edicion(valor) {
    return Number(valor) > 0;
}
