//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as http from "../../js/lib/http.mjs";
import * as formularioModule from "../../js/lib/formulario.mjs";
import * as toastModule from "../../js/componentes/toast.mjs";

//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------

// para llamar al toast
const toast = new toastModule.Toast();

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {   
    
    // Evento para volver a la página con el listado de libros
    $("#btnVolver").on("click", () => window.location = "libros.html");

    // Inicializamos el formulario
    const formulario = new formularioModule.Formulario(
        "#formularioLibros",
        onLibroSubmit
    );
});


//--------------------------------------------------
// Eventos
//-------------------------------------------------

// Función que se ejecuta cuando el formulario devuelve un libro válido
function onLibroSubmit(libro) {
    crearLibro(libro);
}

//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

/**
 * Almacena el libro en el servidor
 */
function crearLibro(libro) {
    
    // Muestro en consola el libro que se va a crear (útil para depuración)
    console.debug(libro);

    // Guarda el libro
    http.post(URL_LIBROS, libro)
    .then(() => {
        // Si todo va bien, muestro un mensaje de éxito
        toast.mostrar("Se ha creado el libro correctamente");        
    });
}



