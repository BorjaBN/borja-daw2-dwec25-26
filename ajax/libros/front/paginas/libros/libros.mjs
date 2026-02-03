//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as moduloTabla from "../../js/componentes/tabla.mjs";
import * as moduloPaginador from "../../js/componentes/paginador.mjs";
import * as moduloBuscador from "../../js/componentes/buscador.mjs";
import * as moduloToast from "../../js/componentes/toast.mjs";
import * as moduloModalPregunta from "../../js/componentes/modal-pregunta.mjs";
import * as http from "../../js/lib/http.mjs";

//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------

//Con esto se genera "la estructura" de la lista, btn editar y borrar
const JSON2HTML_PLANTILLA_TABLA = {
    '<>': 'tr', 'html': [
        {'<>': 'td', 'html': '${titulo}'},
        {'<>': 'td', 'html': '${autor}'},
        {'<>': 'td', 'html': '${editorial}'},
        {'<>': 'td', 'html': '${anho_publicacion}'},
        {'<>': 'td', 'html': '${num_edicion}'},
        {'<>': 'td', 'html': '<button name="btEditar" class="btn btn-info bi bi-pencil-fill" value="${id}"></button>'},
        {'<>': 'td', 'html': '<button name="btEliminar" class="btn btn-danger bi bi-trash-fill btn-borrar" value="${id}"></button>'}
    ]
};

// Crea la clase libro, 
// llama al contenido de libros con la url_libros, 
// con # define donde se va a colocar,
// json2html es donde se define como se pinta.
const TABLA_LIBROS = new moduloTabla.Tabla(URL_LIBROS, "#libros", JSON2HTML_PLANTILLA_TABLA);

// Se crea el componenete paginador,
// con # señalamos el contenedor donde el buscador
// cuando se pulsa siguiente se llama a navegarPaginaSiguiente
// cuando se pulsa anterior se llama a navegarPaginaAnterior
const PAGINADOR = new moduloPaginador.Paginador(
    "#paginador",
    () => TABLA_LIBROS.navegarPaginaSiguiente(),
    () => TABLA_LIBROS.navegarPaginaAnterior()
);

// Se crea el componenete del buscador,
// con # señalamos el contenedor donde van
// cuando se pulsa siguiente se llama a navegarPaginaSiguiente
// Cada vez que cambia el filtro, se llama a TABLA_LIBROS.añadirFiltro(filtro) para aplicar el filtro a la tabla
const BUSCADOR = new moduloBuscador.Buscador(
    "#buscador",
    (filtro) => TABLA_LIBROS.añadirFiltro(filtro)
);

// Instancia del componente de notificaciones; se usa para mostrar mensajes al usuario
const TOAST = new moduloToast.Toast();

// Instancia del modal de confirmación; se usa para preguntar antes de eliminar
const MODAL_PREGUNTA = new moduloModalPregunta.ModalPregunta();

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------

// Espera a que el DOM esté cargado antes de ejecutar el codigo
$(document).ready(() => {

    renderizarComponentes(); 

    // Al hacer clic, redirige a la página de creación de libro
    $("#btAnadir").on("click", () => window.location = "libros_crear.html");

    // Al hacer clic, llama a la función onCerrarSesion
    $("#btnCerrarSesion").on("click", onCerrarSesion);
    
    // Asocia los botones #ordenTituloAsc y #ordenTituloDesc 
    // a las funciones que ordenan la tabla por título
    $("#ordenTituloAsc").on("click", onOrdenTituloAsc);
    $("#ordenTituloDesc").on("click", onOrdenTituloDesc);


    // Asigna los eventos asociados a botones de los registros en la tabla
    $("#libros").on("click", "[name=btEditar]", onEditarLibro);
    $("#libros").on("click", "[name=btEliminar]", onEliminarLibro);
});

//--------------------------------------------------------------
// Eventos
//--------------------------------------------------------------

/**
 * Funcion invocada cuando se pulsa sobre editar un libro
 */
function onEditarLibro() {

    // Obtiene el identificador del libro a editar
    const id = $(this).val();

    // Carga la página para modificar un libro
    window.location = "libros_editar.html?id=" + id;
}

/**
 * Funcion invocada cuando se quiere eliminar un libro
 */
function onEliminarLibro() {

    // Obtiene el identificador del libro a eliminar
    const id = $(this).val();

    // Pide confirmación para eliminar el libro
    MODAL_PREGUNTA.preguntar(
        "Atención",
        "¿Desea eliminar este libro?",

        // Invocar al eliminar.
        () => eliminarLibro(id)
    );

    console.log("eliminar libro" + id);
}

/**
 * Ordena por título ascendente
 */
function onOrdenTituloAsc() {
    TABLA_LIBROS.ordenarPor("titulo", "asc");
}

/**
 * Ordena por título descendente
 */
function onOrdenTituloDesc() {
    TABLA_LIBROS.ordenarPor("titulo", "desc");
}


/**
 * Cierra la sesión en la aplicación (llama a la de app)
 */
function onCerrarSesion() {
  cerrarSesion();
}

//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

/**
 * Pinta la tabla, el paginador y el buscador por primera vez.
 */
function renderizarComponentes() {
    TABLA_LIBROS.renderizar();
    PAGINADOR.renderizar();
    BUSCADOR.renderizar();
}


/**
 * Elimina el libro pasado como argumento
 * 
 * @param {*} id 
 */
function eliminarLibro(id) {

    // Elimina el libro pasado como argumento
    http.del(URL_LIBROS, id)
    .then(() => {    

        // Mostrar un mensaje indicando que se ha eliminado.
        TOAST.mostrar("El libro se ha eliminado");

        // Recarga los registros en la tabla
        TABLA_LIBROS.renderizar();
    });
}
