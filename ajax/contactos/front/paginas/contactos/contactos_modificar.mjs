//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as http from "../../js/lib/http.mjs";
import * as formularioModule from "../../js/lib/formulario.mjs";
import * as toastModule from "../../js/componentes/toast.mjs";

//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------
const toast = new toastModule.Toast();

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {   
    
    id = Number(window.location.search.split("=")[1]);

    console.debug("ID = "+id);

    // Evento para volver a la página con el listado de contactos
    $("#btnVolver").on("click", () => window.location = "contactos.html");

    // Inicializamos el formulario
    const formulario = new formularioModule.Formulario(
        "#formularioContactos",
        onContactoSubmit
    );

    // Guarda el contacto
    http.put(URL_CONTACTOS+"/"+id)
    .then((respuesta) => respuesta.json())
    .then(contactos => {
        formulario.inicializarCampos(contactos);
    });
});


//--------------------------------------------------
// Eventos
//-------------------------------------------------
function onContactoSubmit(contacto) {
    modificarContacto(contacto);
}

//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

/**
 * Almacena el contacto en el servidor
 */
function modificarContacto(contacto) {
    
    // Muestra el contacto que se va a crear
    console.debug(contacto);

    // Guarda el contacto
    http.put(URL_CONTACTOS, contacto)
    .then(() => {
        toast.mostrar("Se ha creado el contacto correctamente");        
    });
}

  

