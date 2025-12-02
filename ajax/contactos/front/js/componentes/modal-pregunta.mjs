export class ModalPregunta {

    /**
     * Inicializa el modal. Permite a partir de ahora mostrar mensajes 
     */


    // Añade al body un div con el contenido cargado desde el documento html indicado
    constructor (){
    }

   /**
    * 
    * @param {*} titulo Título a mostrar en el cuadro de diálogo
    * @param {*} cuerpo Mensaje a mostrar dentro del modal
    * @param {*} onAceptar Función callback a invocar cuando se pulse en aceptar
    */
    preguntar(titulo, cuerpo, onAceptar){

        //Si el cuadro de diálogo está insertado muestra el texto, si no lo inserta
        if($('#modal-pregunta').length) {
            this.#mostrarModal(titulo, cuerpo, onAceptar);
        } else {
            $('body').append(
                $('<div>').load(
                    getUrlComponenteHtml("modal-pregunta"),
                    () => this.#mostrarModal(titulo, cuerpo, onAceptar)
                )
            );
        }
    }

    /**
     * Mostramos el cuadro de diálogo modal
     * 
     * @param {*} titulo Título a mostrar en el cuadro de diálogo
     * @param {*} cuerpo Mensaje a mostrar dentro del modal
     */
    #mostrarModal(titulo, cuerpo, onAceptar){

        // Asignamos el texto al título y el cuerpo
        //Es importante especificar en que modal por si hubiera otro modal...
        $("#modal-pregunta .modal-title").text(titulo);
        $("#modal-pregunta .modal-body").text(cuerpo);

        // Asignar los eventos para gestionar la respuesta del usuario
        $('#modal-pregunta .btn-primary').on('click', () => {

            //Desactiva el evento click del botón
            $('#modal-pregunta .btn-primary').off('click');

            //Oculta el cuadro de diálogo
            $('#modal-pregunta').modal('hide');

            //Invova a la función para notificar que se ha aceptado el diálogo
            onAceptar();

        } )

        //Muestra la ventana
        $('#modal-pregunta').modal('show');
    }



}