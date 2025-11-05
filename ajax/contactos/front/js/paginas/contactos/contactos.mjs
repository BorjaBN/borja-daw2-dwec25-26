//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as moduloTabla from "../componentes/tabla.mjs";


//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------
const JSON2HTML_PLANTILLA_TABLA = {
      '<>': 'tr','html': [
      {'<>': 'td','html': '${nombre}'},
      {'<>': 'td','html': '${descripcion}'},
      {'<>':'td','html':'<button name="btEditar" class="btn btn-info bi bi-pencil-fill" value="${id}"></button>'},
      {'<>':'td','html':'<button name="btEliminar" class="btn btn-danger bi bi-trash-fill" value="${id}"></button>'}
    ]
};

const TABLA_CONTACTOS = new moduloTabla.Tabla(URL_CONTACTOS, "#contactos", JSON2HTML_PLANTILLA_TABLA)

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready( ()=> {
    mostrarContactos(); 
    
    $("#btAnadir").on("click", () => this.window.location = "contactos_edit.html");
});


//--------------------------------------------------
// Eventos
//-------------------------------------------------


//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------


/**
 * Muestra el listado de contactos.
 */
function mostrarContactos() {
    TABLA_CONTACTOS.renderizar();   
}

  

