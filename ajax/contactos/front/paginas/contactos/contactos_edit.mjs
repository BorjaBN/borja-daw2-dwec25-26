//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as http from "../../js/lib/http.mjs";

//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------


//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {   
   
    // Evento para volver a la página con el listado de contactos
    $("#btnVolver").on("click", () => window.location = "contactos.html");

    // Asignamos un evento para guardar el contacto en el servidor
    $("#btnGuardar").on("click", crearContacto);

});


//--------------------------------------------------
// Eventos
//-------------------------------------------------


//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

/**
 * Almacena el contacto en el servidor
 */
function crearContacto(evento){
   evento.preventDefault();
   
    console.log("crear contacto");


    const contacto = {
        nombre : $("[name=nombre]").val(),
        apellidos : $("[name=apellidos]").val(),
        empresa : $("[name=empresa]").val()
    };

    console.log(contacto);

    // Guarda el contacto
    http.post(URL_CONTACTOS, contacto)
    .then(() => {
        console.log("Contacto creado correctamente")
    });
}

