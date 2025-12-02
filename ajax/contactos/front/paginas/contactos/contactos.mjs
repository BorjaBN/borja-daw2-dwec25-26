//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as moduloTabla from "../../js/componentes/tabla.mjs";
import * as moduloPaginador from "../../js/componentes/paginador.mjs";
import * as moduloToast from "../../js/componentes/toast.mjs";
import * as moduloModalPregunta from "../../js/componentes/modal-pregunta.mjs";
import * as http from "../../js/lib/http.mjs";


//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------
const JSON2HTML_PLANTILLA_TABLA = {
      '<>': 'tr','html': [
        {'<>': 'td','html': '${nombre}'},
        {'<>': 'td','html': '${apellidos}'},
        {'<>': 'td','html': '${empresa}'},
        {'<>':'td','html':'<button name="btEditar" class="btn btn-info bi bi-pencil-fill" value="${id}"></button>'},
        {'<>':'td','html':'<button name="btEliminar" class="btn btn-danger bi bi-trash-fill" value="${id}"></button>'}
      ]
};

const TABLA_CONTACTOS = new moduloTabla.Tabla(URL_CONTACTOS, "#contactos", JSON2HTML_PLANTILLA_TABLA);
const PAGINADOR = new moduloPaginador.Paginador(
    "#paginador", 
    () => TABLA_CONTACTOS.navegarPaginaSiguiente(), 
    () => TABLA_CONTACTOS.navegarPaginaAnterior(), 
);

const TOAST = new moduloToast.Toast();

const MODAL_PREGUNTA = new moduloModalPregunta.ModalPregunta(); 
//const MODAL_MENSAJE = new moduloModalMensaje.ModalMensaje(); 

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {
    renderizarComponentes();
    
    $("#btAnadir").on("click", () => window.location = "contactos_edit.html");

    //Añadimos los listeners
    $("#btnBuscar").on("click", () => {

      //Obtenermos el texto a buscar
      const filtro = $("#iFiltro").val();

      // Añadimos el filtro
      TABLA_CONTACTOS.añadirFiltro(filtro);

      TOAST.mostrar("hola");
    });

    // Asigna los eventos asociados a botones de los registros en la tabla
    $("#contactos").on("click", "[name=btnEliminar]", onEliminarContacto);
    $("#contactos").on("click", "[name=btnEliminar]", onEditarContacto);


});

//--------------------------------------------------
// Eventos
//-------------------------------------------------

/**
 * Funcion invocada cuando se pulsa sobre eliminar un contacto
 */
function onEditarContacto(){
  console.log("editar contacto")
}

/**
 * Funcion invocada cuando se pulsa sobre editar un contacto
 */
function onEliminarContacto(){

  // Obtien el identificador del contacto a eliminar
  const id = $(this).val();

  // Pide confirmación para eliminar el contacto
  MODAL_PREGUNTA.preguntar(
    "Atención",
    "¿Estás seguro que deseas eliminar el contacto?",
    () => {

      //Invocar al eliminar
      eliminarContacto(id);

      

    }

  )

  console.log("eliminar contacto" + id);
  
}



//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------


/**
 * Elimina
 */
function eliminarContacto(id){

  // Elimina el contacto pasado como argumento
  http.del(URL_CONTACTOS, id)
  .then(() => {
    //Mostrar un mensaje indicando que se ha eliminado
    TOAST.mostrar("El contacto se ha eliminado");

    //Recargamos la tabla de nuevo
    TABLA_CONTACTOS.renderizar();
  });

  
}


/**
 * Muestra el listado de contactos.
 */
function renderizarComponentes() {
  TABLA_CONTACTOS.renderizar();
  PAGINADOR.renderizar();

  MODAL_PREGUNTA.preguntar("Atención", "Esto es un modal de prueba", () => console.log("El usuario ha aceptado"));
}

  

