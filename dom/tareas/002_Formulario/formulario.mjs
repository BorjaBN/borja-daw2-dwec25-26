// ---------------------------------------------------------------------------------------
//                              DEPENDENCIAS 
// ---------------------------------------------------------------------------------------
import  *  as validaciones from './validaciones.mjs'

// ---------------------------------------------------------------------------------------
//                              VARIABLES GLOBALES
// ---------------------------------------------------------------------------------------

const ELEMENTO_AYUDA = document.getElementById("ayuda");



// ---------------------------------------------------------------------------------------
//                          INICIALIZACIÓN 
// ---------------------------------------------------------------------------------------
window.addEventListener("load", () => {
 
    // Vamos a gestionar eventos
    //Submit
    //Se captura el formulario y se asigna el evento submit
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", onFormularioSubmit);


    // Campos que muestran ayuda
    //Se asignan eventos a los campos con data-ayuda
    const camposAyuda = document.querySelectorAll("#formulario [data-ayuda]");
    for (let campo of camposAyuda){

        //Asigna evento para mostrar la ayuda
        campo.addEventListener("focusin", onInputFocusIn); // muestra la ayuda
        campo.addEventListener("focusout", onInputFocusOut); // oculta la ayuda
    }

    // Asigna el evento para validar el campo cuando cambia
    // Se asignan validaciones a los campos con data-validacion
    // cuando pierde el foco se valida
    const camposValidar = document.querySelectorAll("#formulario [data-validacion]");
    for (let campo of camposValidar){
        campo.addEventListener("focusout", onInputChange);
    }

});

// ---------------------------------------------------------------------------------------
//                                      EVENTOS
// ---------------------------------------------------------------------------------------
function onFormularioSubmit(evento){ 

    evento.preventDefault(); // Evita el envío automático 

    // Validación de contraseñas 
    const con1 = document.getElementById("contraseña1");
    const con2 = document.getElementById("contraseña2");

    if (con1.value !== con2.value) {
        mostrarError(con1, "Las contraseñas deben coincidir");
        con1.classList.add("error");
        con2.classList.add("error");
        con1.focus();
        return;
    }
    
    // Obtener todos los campos con validaciones
    const campos = document.querySelectorAll("#formulario [data-validacion]");
    for (let campo of campos) { 
        
        // Disparamos la validación manualmente (valida los campos)
        campo.dispatchEvent(new Event("focusout")); 
        
        // Si el campo tiene la clase error, se para 
        if (campo.classList.contains("error")) { 
            campo.focus(); 
            return; // Bloquea el envío 
        } 
    } 
    
    // Si llega aquí, todo está validado 
    alert("Formulario enviado correctamente"); 
    
    evento.target.submit(); // Ahora sí enviamos 

}

function onInputFocusIn (evento){
    
    // Obtengo el campo
    const campo = evento.target;

    // Si el campo tiene error, no mostramos ayuda
    if (!campo.classList.contains("error")) {
        mostrarAyudaCampo(campo);
    }

}

function onInputFocusOut (evento){
    
    // Obtengo el campo
    const campo = evento.target;
    
    // Si el campo NO tiene error, borramos la ayuda
    if (!campo.classList.contains("error")) {
        ELEMENTO_AYUDA.innerText = "";
    }

}

function mostrarAyudaCampo (campo){
    
    // Obtengo la ayuda a mostrar
    const ayuda = campo.dataset.ayuda;


    // Obtengo el mensaje de ayuda
    ELEMENTO_AYUDA.innerText = ayuda;

}


function onInputChange (evento){
    // Obtengo el campo
    const campo = evento.target;

    // Obtengo la ayuda a mostrar
    const listaValidaciones = campo.dataset.validacion.split(",");
    let errores = 0;
    for (let n = 0; n < listaValidaciones.length && errores == 0;n++){

        // Obtengo el nombre de la validación
        const nombreValidacion = listaValidaciones[n];

        // Obtengo la funcion de validación
        const funcionValidacion = eval("validaciones.val_"+nombreValidacion);

        // Llamo a la función
        if (!funcionValidacion(campo.value)){
            const mensaje = mensajeError(nombreValidacion); 
            mostrarError(campo, mensaje);
            errores++;
        }

    }

    // Validación de contraseñas iguales
    if (campo.id === "contraseña2") { 

        const con1 = document.getElementById("contraseña1"); 
        const con2 = document.getElementById("contraseña2"); 
        
        if (con1.value !== con2.value) {
            mostrarError(con1, "Las contraseñas no coinciden");

            con1.classList.add("error");
            con2.classList.add("error");


            return; // Evita que se ejecute el siguiente if

        } else { 

            limpiarError(con1); 
            limpiarError(con2); 
            
        }

    }


    // Si no hay errores, quitamos la clase error
    if (!errores){
        limpiarError(campo);
    }
}

// ---------------------------------------------------------------------------------------
//                                      FUNCIONES
// ---------------------------------------------------------------------------------------



function mostrarError(campo, mensaje){
    campo.classList.add("error"); //Añade la clase error
    ELEMENTO_AYUDA.innerText = mensaje; // Me enseña el mensaje en el elemento ayuda
}

function limpiarError(campo){
    campo.classList.remove("error");
    ELEMENTO_AYUDA.innerText = ""; //Para limpiar el mensaje de elemento ayuda
}

// Mi menú
function mensajeError(tipo) {

    switch (tipo) {

        case "vacio":
            return "Este campo no puede estar vacío.";

        case "nombre":
            return "Solo se permiten letras y espacios.";

        case "longitudNombre":
            return "El nombre no puede tener más de 10 caracteres.";

        case "email":
            return "Debes introducir un email válido.";

        case "empiezaNumero":
            return "El email no puede empezar por un número.";

        case "dni":
            return "El DNI introducido no es válido.";

        default:
            return "El valor introducido no es válido.";
    }
}

