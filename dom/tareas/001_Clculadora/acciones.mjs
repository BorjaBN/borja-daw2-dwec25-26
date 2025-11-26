// ---------------------------------------------------------------------------------------
//                              VARIABLES GLOBALES
// ---------------------------------------------------------------------------------------
    // Referencia al display de la calculadora
    const pantallaCalculadora  = document.getElementById("input"); //input es el id 

    let operando1 = 0;
    let operando2 = 0;
    let operador = null;
    let resultado = 0;

// ---------------------------------------------------------------------------------------
//                          INICIALIZACIÓN DE LA CALCULADORA
// ---------------------------------------------------------------------------------------
window.addEventListener("load", () => { // El window es literalmente la ventana del anvegador
 //"Esto ahce que se espere  el navegador a que esté todo cargado (HTML, css, img, script) y ejecuta lo de dentro "
    pantallaCalculadora.value = "0";
    const contenedor = document.querySelector(".container");
    contenedor.addEventListener("click", onBotonClick); // Se llama a la funcion que tenemos más abajo
    
   

});

// ---------------------------------------------------------------------------------------
//                                      EVENTOS
// ---------------------------------------------------------------------------------------

/**
 * Procesa un evento click en un botón de la calculadora
 * @param {*} evento 
 */
function onBotonClick(evento) {

//--------------------------------------------------------------------------------------------------------------------------

    // Referencia al botón sobre el que se ha hecho click         // Como el evento click está en toooodo el contenedor
    const boton = evento.target; //(ESTO MUY IMPORTANTE)          // si no tuviesemos el evento.target, es como si hiciesemos
                                                                  // click en todo el contendor, esto hace que sepa 100% 
    // Obtengo el texto de boton                                  // en que elemento / item / objeto has tocado
    const textoBoton = boton.innerText;
    // Si tiene un 7, enseña el 7, si tiene vacío no enseñará nada
    // si tiene un símbolo, pues el símbolo. Mostrará el valor
    // que tenga por escrito
//--------------------------------------------------------------------------------------------------------------------------


    // Proceso el botón   // Esto sería lo mismo que hacer un Switch
    if ("0123456789".includes(textoBoton)){

        pantallaCalculadora.value += textoBoton; 

    } else if ("+-x÷%".includes(textoBoton)) {   
        
        // Guardando el primer operando1
        operando1 = Number(pantallaCalculadora.value);
        operador = textoBoton; // el operador pues será el valor del boton pulsado

        //limpiar pantalla
        pantallaCalculadora.value = "";

    } else if (textoBoton === "="){

        operando2 = Number(pantallaCalculadora.value);

        // Realizo la operación
        const resultado = operar(operando1,operando2, operador) // funcion que tenemos más abajo
        pantallaCalculadora.value = resultado;

    } else if (textoBoton === "AC") {
        operando1 = 0;
        operando2 = 0;
        operador = null;
        pantallaCalculadora.value = "0";
        return;
    } else if (textoBoton === "+/-"){
        if (pantallaCalculadora.value != ""){

            pantallaCalculadora.value *= -1;

        }
    } else if (textoBoton === ",") {
        if (!pantallaCalculadora.value.includes(".")) {
            pantallaCalculadora.value += ".";
        }

    }

}

// ---------------------------------------------------------------------------------------
//                                      FUNCIONES
// ---------------------------------------------------------------------------------------

function operar(operando1,operando2, operador){
    
    let resultado;
    switch (operador){
        case "+":
            resultado = operando1 + operando2;
            break;
        case "-":
            resultado = operando1 - operando2;
            break;
        case "x":
            resultado = operando1 * operando2;
            break;
        case "÷":
            if (operando2 == 0){
                resultado = "ERROR"
            } else {
            resultado = operando1 / operando2;
            }
            break;
        case "%":
            resultado = operando1 % operando2;
            break;
    }   

    return resultado;
}



