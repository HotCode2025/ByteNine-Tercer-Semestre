
// Las tres varillas son arreglos 
let varillas = { A: [], B: [], C: [] };

// Acá guardamos todos los movimientos
let movimientos = [];

// En qué paso vamos
let pasoActual = 0;

// Colores para cada disco
const COLORES = ["#1707c9", "#069ff7", "#6b6b6b", "#9808eb", "#f77a05"];

// =========================================
// FUNCION RECURSIVA PARA LOS MOVMIENTOS
// =========================================
function hanoi(n, desde, hacia, auxiliar) {
  if (n === 1) {  // Caso base: mover un disco
    movimientos.push({ desde, hacia, disco: n });
    return;
  }
  hanoi(n - 1, desde, auxiliar, hacia); // Caso recursivo: mover n-1 discos a la varilla auxiliar
  movimientos.push({ desde, hacia, disco: n });
  hanoi(n - 1, auxiliar, hacia, desde); // Caso recursivo: mover n-1 discos de la varilla auxiliar a la varilla destino
}

// ==============================
// DIBJAR LAS VARILLAS Y DISCOS
// ==============================
function dibujar() {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = "";

  ["A", "B", "C"].forEach(function(letra) { // Para cada varilla (A, B, C)
    const contenedor = document.createElement("div"); // Crea un contenedor para la varilla
    contenedor.className = "varilla";

    const nombre = document.createElement("p");
    nombre.textContent = "Varilla " + letra;
    contenedor.appendChild(nombre);

    // Dibuja cada disco de la varilla
    varillas[letra].forEach(function(n) { // n es el número del disco
      const disco = document.createElement("div"); 
      disco.className = "disco"; 
      disco.style.width = 20 + (n * 25) + "px"; 
      disco.style.backgroundColor = COLORES[n - 1]; 
      disco.textContent = n; 
      contenedor.appendChild(disco);// Agrega el disco a la varilla
    });

    tablero.appendChild(contenedor);// Agrega la varilla al tablero
  });
}

// =========================
// BOTON PARA REINICIAR EL JUEGO
// ========================
function iniciar() {
  const nDiscos = parseInt(document.getElementById("num-discos").value); // Lee el número de discos

  varillas = { A: [], B: [], C: [] }; // Reinicia las varillas
  movimientos = []; // Reinicia los movimientos
  pasoActual = 0; // Reinicia el paso actual

  for (let i = nDiscos; i >= 1; i--) {// Llena la varilla A con los discos, el disco más grande (n) va al fondo
    varillas.A.push(i); // Agrega el disco a la varilla A
  }

  hanoi(nDiscos, "A", "C", "B"); // Genera la lista de movimientos para resolver el problema

  document.getElementById("btn-siguiente").disabled = false; // Habilita el botón de siguiente paso
  document.getElementById("info").textContent = "Presioná Siguiente paso."; // Muestra el mensaje inicial
  dibujar(); 
}

// ===========================================================
// BOTON SIGUINTE PASO PARA REALIZAR EL SIGUEINTTE MOVIMIENTO 
// ===========================================================
function siguientePaso() {
  if (pasoActual >= movimientos.length) return; // Si ya no hay más movimientos, no hace nada

  const mov = movimientos[pasoActual]; // Toma el movimiento actual (desde, hacia, disco)
  const disco = varillas[mov.desde].pop(); // Saca el disco de la varilla de origen
  varillas[mov.hacia].push(disco);// Lo pone en la varilla de destino
  pasoActual++;// Incrementa el paso actual

  document.getElementById("info").textContent = // Muestra el movimiento actual
    "Paso " + pasoActual + " de " + movimientos.length + // Muestra el número del paso actual y el total de pasos
    ": disco " + disco + " de " + mov.desde + " → " + mov.hacia;// Muestra el número del disco y las varillas de origen y destino

  dibujar();

  if (pasoActual >= movimientos.length) { // Si ya se realizaron todos los movimientos, deshabilita el botón y muestra el mensaje final
    document.getElementById("btn-siguiente").disabled = true; // Deshabilita el botón de siguiente paso
    document.getElementById("info").textContent = "¡Listo! Todos los discos llegaron a C."; // Muestra el mensaje final
  }
}

// ======================================================
// CONECTAMOS BOTONES CON LAS FUNICIONES CORRSPNDIENTS 
// =====================================================
document.getElementById("btn-iniciar").addEventListener("click", iniciar);
document.getElementById("btn-siguiente").addEventListener("click", siguientePaso);

dibujar();