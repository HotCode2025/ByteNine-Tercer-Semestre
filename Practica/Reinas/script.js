let N = 8; 
let tablero = [];

// Elementos del DOM
const valorNEl = document.getElementById('valor-n');
const btnMas = document.getElementById('btn-mas');
const btnMenos = document.getElementById('btn-menos');
const btnResolver = document.getElementById('btn-resolver');
const contenedorTablero = document.getElementById('tablero-html');
const arregloTexto = document.getElementById('arreglo-texto');
const estadoTexto = document.getElementById('estado-texto');

// 1. ALGORITMO MATEMÁTICO (Backtracking)
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

// 2. FUNCIÓN DE RENDERIZADO VISUAL
function ejecutarYDibujar() {
    tablero = new Array(N).fill(-1);
    
    // Intentar resolver
    const solucionado = resolverNReinas(0);
    
    // Limpiar tablero anterior
    contenedorTablero.innerHTML = '';

    // Cálculo dinámico del tamaño de celda para que quepa en un área fija de 400px
    const tamañoCelda = 400 / N;

    contenedorTablero.style.gridTemplateColumns = `repeat(${N}, ${tamañoCelda}px)`;
    contenedorTablero.style.gridTemplateRows = `repeat(${N}, ${tamañoCelda}px)`;

    if (solucionado) {
        estadoTexto.textContent = "RESOLVIBLE";
        estadoTexto.style.color = "#38ef7d";
        arregloTexto.textContent = `[${tablero.join(', ')}]`;

        // Crear las casillas HTML
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                const casilla = document.createElement('div');
                casilla.classList.add('casilla');
                casilla.style.width = `${tamañoCelda}px`;
                casilla.style.height = `${tamañoCelda}px`;
                casilla.style.fontSize = `${tamañoCelda * 0.6}px`; // Corona proporcional

                // Color ajedrezado
                if ((i + j) % 2 === 0) {
                    casilla.classList.add('blanca');
                } else {
                    casilla.classList.add('negra');
                }

                // Inyectar corona si hay reina
                if (tablero[i] === j) {
                    casilla.textContent = "👑";
                }

                contenedorTablero.appendChild(casilla);
            }
        }
    } else {
        estadoTexto.textContent = "SIN SOLUCIÓN";
        estadoTexto.style.color = "#ff4e50";
        arregloTexto.textContent = "---";
        contenedorTablero.style.display = "block";
        contenedorTablero.textContent = "No existe solución para este tamaño.";
    }
}

// 3. CONTROLADORES DE EVENTOS (Botones + y -)
btnMas.addEventListener('click', () => {
    if (N < 12) { // Limite prudente para no colgar el navegador
        N++;
        valorNEl.textContent = N;
        ejecutarYDibujar();
    }
});

btnMenos.addEventListener('click', () => {
    if (N > 4) { // 4 es el mínimo con solución real interactiva
        N--;
        valorNEl.textContent = N;
        ejecutarYDibujar();
    }
});

btnResolver.addEventListener('click', () => {
    ejecutarYDibujar();
});

// Lanzamiento inicial automático al cargar la página
ejecutarYDibujar();