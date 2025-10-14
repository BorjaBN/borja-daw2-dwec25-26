// ---------------------------------------------------------------------------------------
//                              DEPENDENCIAS 
// ---------------------------------------------------------------------------------------


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

    //Llamo a validar un cmapo cada vez que cambia el contenido
    const campos = document.querySelectorAll('#formulario input')
    for (let campo of campos){
        campo.addEventListener("focus", onInputFocus);
        campo.addEventListener("change", onInputChange);
    }
    //Focus

});

// ---------------------------------------------------------------------------------------
//                                      EVENTOS
// ---------------------------------------------------------------------------------------
function onInputFocus (evento){
    
    // Obtengo el campo
    const campo = evento.target;

    // Obtengo la ayuda a mostrar
    const ayuda = campo.dataset.ayuda;


    // Obtengo el mensaje de ayuda
    ELEMENTO_AYUDA.innerText = ayuda;

}


function onInputChange (evento){
    // Obtengo el campo
    const campo = evento.target;

    // Obtengo la ayuda a mostrar
    const nombreValidacion = campo.dataset.ayuda;
    


    // Obtengo la validación
    const funcionValidacion = eval(nombreValidacion);

    //Llamo a la función
    if (!funcionValidacion(campo.value)){
        console.log("error"+nombreValidacion);
    };

}

// ---------------------------------------------------------------------------------------
//                                      FUNCIONES
// ---------------------------------------------------------------------------------------

function nombreBonito(valor){

}

function emailBonito(valor){

}