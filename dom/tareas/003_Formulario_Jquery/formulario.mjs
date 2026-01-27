// ---------------------------------------------------------------------------------------
//                              DEPENDENCIAS 
// ---------------------------------------------------------------------------------------
import * as validaciones from './formulario-validaciones.mjs';

// ---------------------------------------------------------------------------------------
//                              VARIABLES GLOBALES
// ---------------------------------------------------------------------------------------

const $AYUDA = $("#ayuda");

// ---------------------------------------------------------------------------------------
//                          INICIALIZACIÓN 
// ---------------------------------------------------------------------------------------

$(document).ready(function () {

    const $formulario = $("#formulario");

    // Captura del evento submit del formulario
    $formulario.on("submit", onFormularioSubmit);

    // Se asignan campos con ayuda
    const $camposAyuda = $("#formulario [data-ayuda]");
    $camposAyuda.on("focusin", onInputFocusIn);
    $camposAyuda.on("focusout", onInputFocusOut);

    // Se asignan campos con validación
    const $camposValidar = $("#formulario [data-validacion]");
    $camposValidar.on("focusout", onInputChange);
});

// ---------------------------------------------------------------------------------------
//                                      EVENTOS
// ---------------------------------------------------------------------------------------

function onFormularioSubmit(evento) {

    evento.preventDefault(); // Evita envío automático

    const $con1 = $("#contrasenha1");
    const $con2 = $("#contrasenha2");

    // Validación de contraseñas iguales
    if ($con1.val() !== $con2.val()) {
        mostrarError($con1, "Las contraseñas deben coincidir");
        $con1.addClass("error");
        $con2.addClass("error");
        $con1.trigger("focus");
        return;
    }

    // Validación campo a campo
    const $campos = $("#formulario [data-validacion]");

    for (let campo of $campos) {

        $(campo).trigger("focusout");

        if ($(campo).hasClass("error")) {
            $(campo).trigger("focus");
            return;
        }
    }

    // Si todo está validado
    alert("Formulario enviado correctamente");
    evento.target.submit();
}

//Si no tiene errer, muestra la ayuda
function onInputFocusIn(evento) {

    const $campo = $(evento.target);

    if (!$campo.hasClass("error")) {
        mostrarAyudaCampo($campo);
    }
}

// para borrar la ayuda cuando pierde el "foco"
function onInputFocusOut(evento) {

    const $campo = $(evento.target);

    if (!$campo.hasClass("error")) {
        $AYUDA.text("");
    }
}

//Muestra el texto del atributo de ayuda en el elemento de ayuda
function mostrarAyudaCampo($campo) {

    const ayuda = $campo.data("ayuda");
    $AYUDA.text(ayuda);
}

//
function onInputChange(evento) {

    // Cojo la lista de las validaciones
    const $campo = $(evento.target);

    //Ejecuta la validacion
    const listaValidaciones = $campo.data("validacion").split(",");
    let errores = 0;

    for (let i = 0; i < listaValidaciones.length && errores === 0; i++) {

        const nombreValidacion = listaValidaciones[i];
        const funcionValidacion = validaciones["val_" + nombreValidacion];

        if (!funcionValidacion($campo.val())) {
            const mensaje = mensajeError(nombreValidacion);
            mostrarError($campo, mensaje);
            errores++;
        }
    }

    // Validación de contraseñas iguales (solo en la segunda)
    if ($campo.attr("id") === "contrasenha2") {

        const $con1 = $("#contrasenha1");
        const $con2 = $("#contrasenha2");

        if ($con1.val() !== $con2.val()) {

            mostrarError($con1, "Las contraseñas no coinciden");
            $con1.addClass("error");
            $con2.addClass("error");
            return;

        } else {

            limpiarError($con1);
            limpiarError($con2);
        }
    }

    // Si no hay errores
    if (errores === 0) {
        limpiarError($campo);
    }
}

// ---------------------------------------------------------------------------------------
//                                      FUNCIONES
// ---------------------------------------------------------------------------------------

function mostrarError($campo, mensaje) {
    $campo.addClass("error"); //añade clase error
    $AYUDA.text(mensaje); //muestra el mensaje ayuda
}

function limpiarError($campo) {
    $campo.removeClass("error"); //quita la clase error
    $AYUDA.text(""); // quita el mensaje de ayuda
}

function mensajeError(tipo) {

    switch (tipo) {

        case "vacio":
            return "Este campo no puede estar vacío.";

        case "nombre":
            return "Solo se permiten letras y espacios.";

        case "longitudNombre":
            return "No puede haber más de 10 caracteres.";

        case "email":
            return "Debes introducir un email válido.";

        case "empiezaNumero":
            return "No se puede empezar por un número.";

        case "dni":
            return "El DNI introducido no es válido.";

        default:
            return "El valor introducido no es válido.";
    }
}
