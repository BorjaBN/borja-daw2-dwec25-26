//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as moduloTabla from "../../js/componentes/tabla.mjs";
import * as moduloPaginador from "../../js/componentes/paginador.mjs";
import * as http from "../../js/lib/http.mjs";

//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------
const JSON2HTML_PLANTILLA_TABLA = {
    '<>': 'tr', 'html': [
        {'<>': 'td', 'html': '${titulo}'},
        {'<>': 'td', 'html': '${autor}'},
        {'<>': 'td', 'html': '${editorial}'},
        {'<>': 'td', 'html': '${anho_publicacion}'},
        {'<>': 'td', 'html': '${num_edicion}'}
    ]
};

// Variable donde guardo la letra seleccionada del filtro alfabético
let letraSeleccionada = "";

// Instancio la tabla, pasándole: La URL del recurso, el selector donde se va a renderizar, la plantilla JSON2HTML
const TABLA = new moduloTabla.Tabla(URL_LIBROS, "#libros", JSON2HTML_PLANTILLA_TABLA);

// Instancio el paginador
const PAGINADOR = new moduloPaginador.Paginador(
    "#paginador",
    () => TABLA.navegarPaginaSiguiente(),
    () => TABLA.navegarPaginaAnterior()
);

//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {

    // Pinto los botones del alfabeto
    renderizarAlfabeto();

    // Pinto la tabla y el paginador
    renderizarComponentes();

    // Botón para cerrar sesión
    $("#btnCerrarSesion").on("click", onCerrarSesion);
});

//--------------------------------------------------------------
// Eventos
//--------------------------------------------------------------
function onCerrarSesion() {
    cerrarSesion();
}

//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

// Renderiza la tabla y el paginador
function renderizarComponentes() {
    TABLA.renderizar();
    PAGINADOR.renderizar();
}

// Crea los botones A–Z y el botón "Todos"
function renderizarAlfabeto() {

    const contenedor = $("#alfabeto");

    // Genero un array con todas las letras del alfabeto
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // Recorro cada letra y creo un botón
    letras.forEach(letra => {

        const boton = $(`<button class="btn btn-outline-primary btn-sm">${letra}</button>`);

        // Cuando se pulsa una letra, filtro por libros cuyo título empieza por esa letra
        boton.on("click", () => {
            letraSeleccionada = letra;

            //Que empiece por la letra
            TABLA.añadirFiltro({ campo: "titulo", valor: `^${letra}` });

            //renderizo la tabla 
            TABLA.renderizar();
        });

        // Añado el botón al contenedor
        contenedor.append(boton);
    });

    // Botón para quitar el filtro y mostrar todos los libros con btn "TODOS"
    const botonTodos = $(`<button class="btn btn-secondary btn-sm">Todos</button>`);

    botonTodos.on("click", () => {
        letraSeleccionada = "";

        // Limpio todos los filtros aplicados
        TABLA.limpiarFiltros();

        // Vuelvo a renderizar la tabla sin filtros
        TABLA.renderizar();
    });

    // Añado el botón "Todos" al final
    contenedor.append(botonTodos);
}
