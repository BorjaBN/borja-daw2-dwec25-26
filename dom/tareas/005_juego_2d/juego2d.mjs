
//==========VARIABLES Y CONSTANTES================

let tiempoRestante = 0;
let puntosGanados = 0;
let pixelesIniciales = 200;
let temporizadorId = null;
let nivelActual = "";

const tiempoFacil = 40;
const tiempoNormal = 30;
const tiempoDificil = 5;

const reduccionFacil = 20;
const reduccionNormal = 15;
const reduccionDificil = 10;




//=========CAPTURA DE ELEMENTOS============

//Selecciona el p de dificultad excepto el primero 
const dificultadOpciones = $("#dificultad p:not(:first-child)").on("click", comenzarJuego);

const temporizador = $("#temporizador");

const marcador = $("#marcador").hide();

const puntos = $("#puntos");

const CUADRADO = $("#cuadrado").hide();



//==========EVENTOS=============

/**
 * Establece todo lo necesario para comenzar el juego
 * @param {*} evento 
 */
function comenzarJuego(evento){

  nivelActual = seleccionarDificultad(evento); //para seleccionar la dificultad

  dificultadOpciones.off("click"); //Para evitar que se pueda hacer click de nuevo y reestablecer los valores iniciales

  marcador.show(); // para enseñar el marcador
  
  establecerTiempo(); // según dificultad, pone un timepo u otro

  jugarPartida();

}


//=========FUNCIONES DE UTILIDAD===========

// Selecciona un nivel de dificultad para aplicar las reglas 
// y oculta el resto (las no seleccionadas)

function seleccionarDificultad(evento){
    
  const seleccion = $(evento.target);

  dificultadOpciones.not(seleccion).hide();

  return seleccion.text();

}

/**
 * Establece un tiempo de juego dependiendo de la dificultad escogida
 */
function establecerTiempo(){
  switch(nivelActual){
    case "Fácil":
      tiempoRestante = tiempoFacil;
      break;
    case "Normal":
      tiempoRestante = tiempoNormal;
      break;
    case "Difícil":
      tiempoRestante = tiempoDificil;
      break;
    default:
      break;
  }
}


 function jugarPartida(){

    cuentaAtras();
   
    mostrarCuadrado();

}


function cuentaAtras() {

  if (tiempoRestante <= 0) {
    acabarJuego();
    return;
  }

  temporizador.text(tiempoRestante);

  tiempoRestante--; 

  temporizadorId = setTimeout(cuentaAtras, 1000);
}


/**
 * Muestra el cuadrado en una posición aleatoria del tablero
 */
function mostrarCuadrado() {
  
  actualizarTamano();
  
  if (pixelesIniciales <= 0) {
      acabarJuego(); 
      return;
    }
  
  posicionarCuadrado();
 
  CUADRADO.show();
  CUADRADO.off("click").on("click", sumarPuntos); //Para reestablecer el evento click y evitar problemas
}


/**
 * Establece la reducción de tamaño con cada clic según el nivel de dificultad
 */
function actualizarTamano(){

    switch (nivelActual) {
      case "Fácil":
        pixelesIniciales -= reduccionFacil;
        break;
      case "Normal":
        pixelesIniciales -= reduccionNormal;
        break;
      case "Difícil":
        pixelesIniciales -= reduccionDificil;
        break;
    }

   let tamanoCuadrado = pixelesIniciales + "px";

  CUADRADO.css({
    "height": tamanoCuadrado,
    "width": tamanoCuadrado,
  });
}

/**
 * Establece de forma aleatoria la posición del cuadrado dentro del grid que conforma la zona de juego
 */
function posicionarCuadrado(){
 
  let columna = Math.floor(Math.random() * 5) + 1;
  let fila = Math.floor(Math.random() * 5) + 1;

  CUADRADO.css({
    "grid-column": columna,
    "grid-row": fila,
  });
}

/**
 * Suma puntos 
 */
function sumarPuntos(){

  puntosGanados += tiempoRestante;
  puntos.text(puntosGanados);
  mostrarCuadrado();
}

/**
 * Acaba el juego:
 * Victoria -> Aparece un mensaje en verde
 * Derrota -> Aparece un mensaje en rojo
 */
function acabarJuego(){

  clearTimeout(temporizadorId); 

  let mensaje = "";
  let color = "";

  if (pixelesIniciales <= 0) {
    mensaje = "¡Ganaste!";
    color = "green";
  } else if (tiempoRestante <= 0) {
    mensaje = "¡Tiempo acabado!";
    color = "red";
  }

  temporizador.text(mensaje).css({
    "color": color,
    "font-weight": "bold",
  });

  setTimeout(reestablecerValores, 3000);
  
}


/**
 * Reestablece todos los valores para empezar una nueva partida desde 0
 */
function reestablecerValores(){

  pixelesIniciales = 200;
  tiempoRestante = 0;
  puntosGanados = 0;
  puntos.text("0");

  temporizador.text("").css({
    "color": "black",
    "font-weight": "normal"
  });

  CUADRADO.hide();
  marcador.hide();
  dificultadOpciones.show().on("click", comenzarJuego);

}