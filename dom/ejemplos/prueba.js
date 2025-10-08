//-------------------------------------------------------------------------------------
//                                DEPENDENCIAS
//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------
//                               INICIALIZACIÓN
//-------------------------------------------------------------------------------------
const titulo = document.getElementById("titulo");
titulo.textContent = "Otro titulo";


const parrafos = document.getElementsByTagName("p");
let n = 1;
for (let p of parrafos) {
    p.textContent = "Parrafo "+ n++
}

const botones = document.getElementsByName("botones");
let b = 1;
for (let p of botones) {
    b.value = "Botón "+ n++
}

const CAPTURATITULO = document.querySelector("#titulo");
const CAPTURAPARRAFO0 = document.querySelector("h1 + p");
parrafo1.textContent = "Primer párrafo tras el titulo";
//-------------------------------------------------------------------------------------
//                                  EVENTOS
//-------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------
//                     FUCNIONES DE UTILIDAD / HERRAMIENTAS
//-------------------------------------------------------------------------------------


