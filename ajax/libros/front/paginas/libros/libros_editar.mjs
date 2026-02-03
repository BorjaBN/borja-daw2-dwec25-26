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
// Variables
//--------------------------------------------------------------

// Variable donde guardaré el ID del libro que quiero editar
// Porque daba problemas sin ponerlo (acuerdate para futuro)
let id = -1;

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {   
    
    // Obtenemos el ID desde la URL
    id = Number(window.location.search.split("=")[1]);

    // Muestro en consola el libro que se va a crear (útil para depuración)
    console.debug("ID = " + id);
       
    // Evento para volver a la página con el listado de libros
    $("#btnVolver").on("click", () => window.location = "libros.html");

    // Inicializamos el formulario
    const formulario = new formularioModule.Formulario(
        "#formularioLibros",
        onLibroSubmit
    ); 
    
    // Cargar el libro desde el servidor usando la ID
    http.get(URL_LIBROS + "/" + id)
    .then((respuesta) => respuesta.json()) // Convierto la respuesta a JSON
    .then(libro => {
        // Relleno los campos del formulario con los datos del libro
        formulario.inicializarCampos(libro);
    });
});


//--------------------------------------------------
// Eventos
//-------------------------------------------------

// Función que se ejecuta cuando el formulario devuelve un libro válido
function onLibroSubmit(libro) {
    modificarLibro(libro);
}

//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

/**
 * Modifica el libro en el servidor ("Guardar los cambios hechos")
 */
function modificarLibro(libro) {
    
    // Muestra el libro que se va a modificar
    console.debug(libro);

    // Guarda el libro
    http.put(URL_LIBROS + "/" + id, libro)
    .then(() => {
        // Si todo va bien, muestro un mensaje de éxito
        toast.mostrar("Se ha modificado el libro correctamente");        
    });
}
