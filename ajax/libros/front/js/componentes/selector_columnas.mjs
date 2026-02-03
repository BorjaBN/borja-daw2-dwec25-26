export class SelectorColumnas {

    #elementoContenedor;

    #onCambiarColumnas;

    #camposSeleccionados;


    // Guardo el contenedor donde se va a renderizar el componente
    // Guardo la función que debo llamar cada vez que cambien las columnas seleccionadas
    // Inicialmente no hay columnas seleccionadas → equivale a “mostrar todas”
    constructor(elementoContenedor, onCambiarColumnas) {

       
        this.#elementoContenedor = elementoContenedor;

        this.#onCambiarColumnas = onCambiarColumnas;

        this.#camposSeleccionados = [];
    }

    // Renderizo el componente cargando su HTML y luego configuro los eventos
    renderizar() {

        $(this.#elementoContenedor).load(

            // Cargo el HTML del componente
            getUrlComponenteHtml("selector_columnas"),

            // Cuando se termine de cargar, configuro los eventos de los botones
            () => this.#configurarEventos()
        );
    }

    // Configuro los eventos de los botones del selector
    #configurarEventos() {

        // Obtengo todos los botones del componente
        const botones = $(this.#elementoContenedor).find("button");

        // Asigno el evento click a cada botón
        botones.on("click", (e) => {

            const boton = $(e.target);
            const campo = boton.data("col"); // Leo el atributo data-col del botón

            // Si pulsa "Todos"
            if (campo === "todos") {

                // Vacío la lista de campos seleccionados
                this.#camposSeleccionados = [];

                // Actualizo el estado visual de los botones
                this.#actualizarBotones();

                // Aviso a la tabla de que debe mostrar todas las columnas
                this.#onCambiarColumnas([]);

                return;
            }

            // Añadir o quitar campo
            if (this.#camposSeleccionados.includes(campo)) {

                // Quitar
                this.#camposSeleccionados = this.#camposSeleccionados.filter(c => c !== campo);

            } else {

                // Añadir
                this.#camposSeleccionados.push(campo);
            }


            // Si selecciona las 5 columnas manualmente, lo interpreto como “mostrar todas”
            if (this.#camposSeleccionados.length === 5) {
                this.#camposSeleccionados = [];
            }

            // Actualizo el estilo de los botones según lo seleccionado
            this.#actualizarBotones();

            // le digo a la tabla de qué columnas debe mostrar
            this.#onCambiarColumnas(this.#camposSeleccionados);
        });
    }

    // Actualiza el estilo visual de los botones según las columnas seleccionadas
    #actualizarBotones() {

        // Obtengo todos los botones del componente
        const botones = $(this.#elementoContenedor).find("button");

        // un objeto que contiene todos los botones, digo que me los recorra por indice (i) y el boton (btn)
        botones.each((i, btn) => {
            const boton = $(btn);
            const campo = boton.data("col");

            if (campo === "todos") {

                // Botón "Todos" activo si NO hay campos seleccionados
                boton.toggleClass("btn-secondary", this.#camposSeleccionados.length === 0);
                boton.toggleClass("btn-outline-secondary", this.#camposSeleccionados.length !== 0);

            } else {

                // Botones normales (con el toggle activa o desactiva estilos)
                const activo = this.#camposSeleccionados.includes(campo);
                boton.toggleClass("btn-primary", activo);
                boton.toggleClass("btn-outline-primary", !activo);
            }
        });
    }
}
