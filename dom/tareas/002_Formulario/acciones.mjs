// ---------------------------------------------------------------------------------------
//                              DEPENDENCIAS 
// ---------------------------------------------------------------------------------------
import  *  as validaciones from './validaciones.mjs'

// ---------------------------------------------------------------------------------------
//                              VARIABLES GLOBALES
// ---------------------------------------------------------------------------------------

const ELEMENTO_AYUDA = document.getElementById("ayuda");



// ---------------------------------------------------------------------------------------
//                          INICIALIZACIÓN DE LA CALCULADORA
// ---------------------------------------------------------------------------------------
window.addEventListener("load", () => {
 
    // Vamos a gestionar eventos
    //Submit
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", onFormularioSubmit);


    //Llamo a validar un cmapo cada vez que cambia el contenido
    const camposAyuda = document.querySelectorAll("#formulario [data-ayuda]");
    for (let campo of camposAyuda){

        //Asigna evento para mostrar la ayuda
        campo.addEventListener("focusin", onInputFocusIn);
        campo.addEventListener("focusout", onInputFocusOut);
    }

    //Asigna el evento para los campos que hay que validar
    const camposValidar = document.querySelectorAll("#formulario [data-ayuda]");
    for (let campo of camposValidar){
        campo.addEventListener("change", onInputChange);
    }

});

// ---------------------------------------------------------------------------------------
//                                      EVENTOS
// ---------------------------------------------------------------------------------------
function onFormularioSubmit(evento){

    // Obtener los campos que tenemos que validar.

    // Validar los campos que tienen validaciones.

    // Si hay errores.
    // Bloquear el envío del formulario.

}

function onInputFocusIn (evento){
    
    // Obtengo el campo
    const campo = evento.target;

    // Muestra la ayuda del campo
    mostrarAyudaCampo(campo)

}

function onInputFocusOut (evento){
    
    // Obtengo el campo
    const campo = evento.target;
    ELEMENTO_AYUDA.innerText = "";

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

        //Obtengo el nombre de la validación
        const nombreValidacion = listaValidaciones[n];

        //ontengo la funcion de validación
        const funcionValidacion = eval("validaciones.val_"+nombreValidacion);

        //Llamo a la función
        if (!funcionValidacion(campo.value)){

            campo.classList.add("error");
            errores++;
            console.log("error" + nombreValidacion);
        };
    }

    if (!errores){
        campo.classList.remove("error");
    }
}

// ---------------------------------------------------------------------------------------
//                                      FUNCIONES
// ---------------------------------------------------------------------------------------

function limpiarAyuda(){

}