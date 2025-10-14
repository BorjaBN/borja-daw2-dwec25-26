// ---------------------------------------------------------------------------------------
//                              VARIABLES GLOBALES
// ---------------------------------------------------------------------------------------
    // Referencia al display de la calculadora
     const pantallaCalculadora  = document.getElementById("input");

    let operando1 = 0;
    let operando2 = 0;
    let operador = null;

// ---------------------------------------------------------------------------------------
//                          INICIALIZACIÓN DE LA CALCULADORA
// ---------------------------------------------------------------------------------------
window.addEventListener("load", () => {
 
    const contenedor = document.querySelector(".container");
    contenedor.addEventListener("click", onBotonClick);
    // Obtengo el array de botones
   // const botones = document.querySelectorAll(".cacluldora button");


    //Recorro el array de botones
   // for(let boton of botones){
   //     boton.addEventListener("click", onBotonClick);
   // }

});

// ---------------------------------------------------------------------------------------
//                                      EVENTOS
// ---------------------------------------------------------------------------------------

/**
 * Procesa un evento click en un botón de la calculadora
 * @param {*} evento 
 */
function onBotonClick(evento) {

    // Referencia al botón sobre el que se ha hecho click
    const boton = evento.target; //(ESTO MUY IMPORTANTE)
                                                        // Para saber sobre que "objeto" se 
                                                        // está haciendo "target"
    // Obtengo el texto de boton
    const textoBoton = boton.innerText;

    // Proceso el botón   // Esto sería lo mismo que hacer un Switch
    if ("0123456789".includes(textoBoton)){

        pantallaCalculadora.value += textoBoton; 

    } else if ("+-*/".includes(textoBoton)) {   
        
        // Guardando el primer operador
        operando1 = Number(pantallaCalculadora.value);
        operador = textoBoton;

        //limpiar pantalla
        pantallaCalculadora.value = "";

    } else if (textoBoton === "="){

        operando2 = Number(pantallaCalculadora.value);

        // Realizo la operación
        const resultado = operar(operando1,operando2, operador)
        pantallaCalculadora.value = resultado;

    }

}

// ---------------------------------------------------------------------------------------
//                                      FUNCIONES
// ---------------------------------------------------------------------------------------

function operar(operando1,operando2, operador){
    let resultado = 0;
    switch (operador){
        case "+":
            resultado = operando1 + operando2;
            break;
        case "-":
            resultado = operador1 - operador2;
            break;
        case "*":
            resultado = operador1 * operador2;
            break;
        case "/":
            resultado = operador1 / operando2;
            break;
    }   

    return resultado;
}


// ---------------------------------------------------------------------------------------
// FUNCIONES DE UTILIDAD
// ---------------------------------------------------------------------------------------



