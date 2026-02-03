//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import { SelectorColumnas } from "../../js/componentes/selector_columnas.mjs";
import * as moduloTabla from "../../js/componentes/tabla.mjs";
import * as moduloPaginador from "../../js/componentes/paginador.mjs";

//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------

// Diccionario que asocia cada campo interno con el texto que quiero mostrar
const CAMPOS = {
    titulo: "Título",
    autor: "Autor",
    editorial: "Editorial",
    anho_publicacion: "Año",
    num_edicion: "Edición"
};

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {

    // Crea plantilla inicial (todas las columnas)
    let plantillaActual = generarPlantilla([]);

    // Crea tabla
    const TABLA = new moduloTabla.Tabla(URL_LIBROS,"#libros",plantillaActual);

    // Crea paginador
    const PAGINADOR = new moduloPaginador.Paginador(
        "#paginador",
        () => TABLA.navegarPaginaSiguiente(),
        () => TABLA.navegarPaginaAnterior()
    );

    // Crea selector de columnas, pasandole el contenedor donde renderezarlo y la funcion
    const SELECTOR = new SelectorColumnas(
        "#selectorColumnas",
        (camposSeleccionados) => onColumnasCambiadas(camposSeleccionados, TABLA)
    );

    // Renderizo el selector (carga su HTML y activa sus eventos)
    SELECTOR.renderizar();

    //Render inicial de la cabecera, tabla y paginador
    generarCabecera([]);
    TABLA.renderizar();
    PAGINADOR.renderizar();
});

//--------------------------------------------------------------
// Eventos
//--------------------------------------------------------------

/**
 * Evento que se ejecuta cuando el usuario cambia las columnas seleccionadas
 */
function onColumnasCambiadas(camposSeleccionados, tabla) {

    // Actualiza cabecera
    generarCabecera(camposSeleccionados);

    // Genera nueva plantilla 
    const nuevaPlantilla = generarPlantilla(camposSeleccionados);

    // Asigna plantilla a la tabla
    tabla.setPlantilla(nuevaPlantilla);       

    // Renderiza tabla
    tabla.renderizar();
}

//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

/**
 * Genera la cabecera de la tabla según los campos seleccionados.
 * Si no hay ninguno seleccionado, muestro todos.
 */
function generarCabecera(campos) {

    const cabecera = $("#cabeceraTabla");
    cabecera.empty(); // Limpio la cabecera actual

    // Si no hay columnas seleccionadas muestro todas
    const lista = (campos.length === 0)
        ? Object.keys(CAMPOS)
        : campos;

    // Por cada campo, añado un <th> con su nombre visible
    lista.forEach(campo => {
        cabecera.append(`<th>${CAMPOS[campo]}</th>`);
    });
}

/**
 * Genera la plantilla JSON2HTML según los campos seleccionados.
 * Esta plantilla define qué columnas se pintan en cada fila.
 */
function generarPlantilla(campos) {

    //si no hay selección, muestro todas
    const lista = (campos.length === 0) ? Object.keys(CAMPOS) : campos;

    // Por cada campo, creo un objeto JSON2HTML que representa una celda <td>
    const columnas = lista.map(campo => ({
        '<>': 'td',
        'html': '${' + campo + '}'    // Inserto el valor del campo
    }));

    // Devuelvo la estructura completa de una fila <tr>
    return {
        '<>': 'tr',
        'html': columnas
    };
}
