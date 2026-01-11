"use strict";

//-------------------------------------------------------------------------------------------------------------------
//--------------------------------------------- VARIABLES Y CONSTANTES ----------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

let turnoActual = "X"; 

let puntosX = 0; 
let puntosO = 0; 

const combinacionesGanadoras = [ 
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6] 
];

//-------------------------------------------------------------------------------------------------------------------
//------------------------------------------------- INICIALIZACIÓN --------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

$(document).ready(function () { 

    mostrarMensaje("Empieza X"); 

    // Registrar eventos 
    $(".casilla").on("click", gestionarJugada); 

});



//-------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------  EVENTOS  ----------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

function gestionarJugada() {

    if ($(this).text().trim() !== "") return;

    $(this).text(turnoActual);

    if (hayGanador(turnoActual)) {
        mostrarMensaje("Ha ganado " + turnoActual);
        sumarPunto(turnoActual);
        setTimeout(reiniciarTablero, 1200);
        return;
    }

    if (esEmpate()) {
        
        mostrarMensaje("Empate. Punto aleatorio para un jugador."); 

        const ganador = ganadorAleatorio(); 

        sumarPunto(ganador); 
        setTimeout(reiniciarTablero, 1200); 

        return;

    }

    turnoActual = turnoActual === "X" ? "O" : "X";
    mostrarMensaje("Turno de " + turnoActual);
}


//-------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------- FUNCIONES ----------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

function mostrarMensaje(texto) {

    $("#mensaje").text(texto);
}

function hayGanador(jugador) {

    const valores = $(".casilla").map(function () {

        return $(this).text();

    }).get();

    return combinacionesGanadoras.some(([a, b, c]) =>
        valores[a] === jugador &&
        valores[b] === jugador &&
        valores[c] === jugador
    );
}

function esEmpate() {

    let lleno = true;
    $(".casilla").each(function () {

        if ($(this).text().trim() === "") lleno = false;
    });

    return lleno;
}

function sumarPunto(jugador) {

    if (jugador === "X") {

        puntosX++;

        $("#marcaje_x").text(puntosX);

    } else {

        puntosO++;
        $("#marcaje_o").text(puntosO);
    }
}

function reiniciarTablero() {

    $(".casilla").text("");

    turnoActual = "X";

    mostrarMensaje("Empieza X");
}

/** Devuelve un ganador de forma aleatoria en caso de empate
 * 
 *  - Comparamos a 0'5 para hacer una mitad y otra
 *  - Math.random() genera de 0 a 1 (0,001, 0,02, 0,6, etc)
 *  - Si es menor a 0'5 pues true, si es mayor pues false
 *  - Menores X mayores O
 * 
 * @returns 
 */
function ganadorAleatorio() { 
    
    
    return Math.random() < 0.5 ? "X" : "O"; 
}