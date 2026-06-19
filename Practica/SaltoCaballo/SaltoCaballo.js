// Salto del caballo - backtracking
// tablero 8x8

const N = 8;

// los 8 movimientos posibles del caballo
const movX = [2, 1, -1, -2, -2, -1, 1, 2];
const movY = [1, 2, 2, 1, -1, -2, -2, -1];

let tablero = [];
let camino = [];

// inicializa el tablero con -1 (no visitado)
function iniciarTablero() {
  tablero = [];
  camino = [];
  for (let i = 0; i < N; i++) {
    tablero[i] = [];
    for (let j = 0; j < N; j++) {
      tablero[i][j] = -1;
    }
  }
}

// verifica si la casilla (x, y) es valida
function esValido(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= N) return false;
  if (tablero[x][y] != -1) return false;
  return true;
}

// backtracking
function resolver(x, y, salto) {
  tablero[x][y] = salto;
  camino.push([x, y]);

  // condicion de exito: se recorrieron las 64 casillas
  if (salto == N * N - 1) return true;

  // probar los 8 movimientos
  for (let i = 0; i < 8; i++) {
    let nx = x + movX[i];
    let ny = y + movY[i];

    if (esValido(nx, ny)) {
      if (resolver(nx, ny, salto + 1)) return true;
    }
  }

  // vuelta atras (backtracking)
  tablero[x][y] = -1;
  camino.pop();
  return false;
}

// variables para la animacion
let paso = 0;
let intervalo = null;

function iniciar() {
  iniciarTablero();
  paso = 0;
  clearInterval(intervalo);

  let encontrado = resolver(0, 0, 0);

  if (!encontrado) {
    document.getElementById("estado").innerText = "No se encontro solucion.";
    return;
  }

  document.getElementById("estado").innerText = "Solución encontrada!";
  document.getElementById("btn-parar").disabled = false;
  document.getElementById("btn-iniciar").disabled = true;

  let vel = parseInt(document.getElementById("velocidad").value);
  intervalo = setInterval(function () {
    if (paso >= camino.length) {
      clearInterval(intervalo);
      document.getElementById("estado").innerText = "Listo! El caballo recorrio las 64 casillas.";
      document.getElementById("btn-parar").disabled = true;
      return;
    }
    dibujarTablero(paso);
    paso++;
  }, vel);
}

function parar() {
  clearInterval(intervalo);
  document.getElementById("btn-iniciar").disabled = false;
  document.getElementById("estado").innerText = "Pausado.";
}

function reiniciar() {
  clearInterval(intervalo);
  iniciarTablero();
  paso = 0;
  document.getElementById("btn-iniciar").disabled = false;
  document.getElementById("btn-parar").disabled = true;
  document.getElementById("estado").innerText = "Presiona Iniciar para empezar.";
  dibujarTablero(-1);
}

function dibujarTablero(hastaPos) {
  let contenedor = document.getElementById("tablero");
  contenedor.innerHTML = "";

  for (let fila = 0; fila < N; fila++) {
    for (let col = 0; col < N; col++) {
      let celda = document.createElement("div");
      celda.className = "celda";

      // color del tablero
      if ((fila + col) % 2 == 0) {
        celda.classList.add("clara");
      } else {
        celda.classList.add("oscura");
      }

      // ver si esta casilla fue visitada
      let numSalto = -1;
      for (let k = 0; k <= hastaPos && k < camino.length; k++) {
        if (camino[k][0] == fila && camino[k][1] == col) {
          numSalto = k + 1;
          break;
        }
      }

      if (numSalto != -1) {
        let esCaballo = (hastaPos < camino.length && camino[hastaPos][0] == fila && camino[hastaPos][1] == col);
        if (esCaballo) {
          celda.classList.add("caballo");
          celda.innerText = "♞";
        } else {
          celda.classList.add("visitada");
          celda.innerText = numSalto;
        }
      }

      contenedor.appendChild(celda);
    }
  }
}

// al cargar la pagina
window.onload = function () {
  dibujarTablero(-1);
};
