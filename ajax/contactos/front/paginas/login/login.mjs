//--------------------------------------------------------------
// Dependencias
//--------------------------------------------------------------
import * as moduloToast from "../../js/componentes/toast.mjs";
import * as http from "../../js/lib/http.mjs";
import * as moduloModalMensaje from "../../js/componentes/modal-mensaje.mjs";

//--------------------------------------------------------------
// Constantes
//--------------------------------------------------------------

const TOAST = new moduloToast.Toast();
const MODAL_MENSAJE = new moduloModalMensaje.ModalMensaje();


//--------------------------------------------------------------
// Inicialización
//--------------------------------------------------------------
$(document).ready(() => {

    $("#formlogin").on("submit", onLogin);

    

});

//--------------------------------------------------
// Eventos
//-------------------------------------------------

function onLogin(e){

    //
    e.preventDefault();

    //Obtiene los valores de usuario y contraseña
    const login = $("[name=login]").val();
    const pass = $("[name=password]").val();

    // Crear el objeto para hacer login
    const objeto = {
        email: login,
        password: pass
    }


    // Estado de la petición
    let peticionOk = true;

    // Envía la petición de login al servidor
    http.post(URL_LOGIN, objeto)
    .then(respuesta => {

        // Comprueba si la respuesta es correcta
        if (respuesta.ok){
            peticionOk = false;
        }

        return respuesta.json()
    })
    .then(resultado => {

        const token = resultado.accesToken;



        // Almacena el token en el almacenamiento local
        localStorage.setItem("jwtToken", token);

        //Redirije a la página de contáctos
        window.location = "/paginas/contactos/contactos.html"

    })
     .catch(() => {
        
        if (!peticionOk){
            TOAST.mostrar("Error de autenticación")
        } else {
            //Detectamos errores cuando el servidor no está disponible
            MODAL_MENSAJE.mostrar("Atencion","El servidor no está disponible en estos momentos. Inténtalo de nuevo en unos minutos.");
        }
    });
}

//--------------------------------------------------------------
// Funciones de utilidad
//--------------------------------------------------------------

