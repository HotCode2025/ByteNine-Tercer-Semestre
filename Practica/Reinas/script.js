const N = 8; // Puedes cambiarlo a 8, 9, 10, etc.
let tablero = new Array(N).fill(-1);

function esSeguro(fila, columna) {
    for (let i = 0; i < fila; i++) {
        let otraColumna = tablero[i];
        if (otraColumna === columna) return false;
        if (Math.abs(otraColumna - columna) === Math.abs(i - fila)) return false;
    }
    return true;
}

function resolverNReinas(fila) {
    if (fila === N) return true;

    for (let col = 0; col < N; col++) {
        if (esSeguro(fila, col)) {
            tablero[fila] = col; 
            if (resolverNReinas(fila + 1)) return true; 
            tablero[fila] = -1; 
        }
    }
    return false;
}

// NUEVA FUNCIÓN: Dibuja el tablero directamente en el HTML
function dibujarTableroEnPantalla() {
    const contenedorTablero = document.getElementById('tablero-html');
    
    // Configura la cuadrícula de CSS para que tenga N filas y N columnas
    contenedorTablero.style.gridTemplateColumns = `repeat(${N}, 50px)`;
    contenedorTablero.style.gridTemplateRows = `repeat(${N}, 50px)`;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const casilla = document.createElement('div');
            casilla.classList.add('casilla');

            // Lógica para intercalar los colores de las casillas del ajedrez
            if ((i + j) % 2 === 0) {
                casilla.classList.add('blanca');
            } else {
                casilla.classList.add('negra');
            }

            // Si en esta posición hay una reina, le ponemos la corona
            if (tablero[i] === j) {
                casilla.textContent = "👑";
            }

            contenedorTablero.appendChild(casilla);
        }
    }

    // Muestra el arreglo de índices debajo del tablero
    document.getElementById('arreglo-texto').textContent = `Arreglo de índices: [${tablero.join(', ')}]`;
}

// --- EJECUCIÓN ---
if (resolverNReinas(0)) {
    dibujarTableroEnPantalla();
} else {
    document.getElementById('tablero-html').textContent = `No se encontró solución para N = ${N}`;
}