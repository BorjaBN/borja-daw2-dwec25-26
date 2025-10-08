"use sctrict"
//------------------------------------------------------------------
// Dependencias
//------------------------------------------------------------------
    // Implementación de sumar
    const botonSumar = document.getElementById("sumar");
    botonSumar.addEventListener("click", eventoSumar);




//------------------------------------------------------------------
// Inicialización
//------------------------------------------------------------------

    // Implementar Ocultar
    const botonesOcultar = document.querySelectorAll(".ocultar");
    for (let boton of botonesOcultar) {
        boton.addEventListener("click", function (evento){
            const campo = evento.target.parentNode.querySelector("input");
            campo.style.display = "none";
        })
    }


//------------------------------------------------------------------
// Eventos
//------------------------------------------------------------------
    function eventoSumar(evento){

        console.log(evento.target);
        console.log(evento.clientX);

        const campos = document.querySelector("#campos")
        let suma = 0;
        campos.foreach(function(campo) {
            suma += Number(campo.value);
        })


        const resultado = document.getElementById("suma")
        resultado.value = suma;

    }

//------------------------------------------------------------------
// Eventos
//------------------------------------------------------------------