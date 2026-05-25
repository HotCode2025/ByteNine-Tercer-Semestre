let vidasJugador = 3;
let vidasPc = 3;

function aleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    if (jugada == 1) return "Piedra 🪨";
    if (jugada == 2) return "Papel 📄";
    if (jugada == 3) return "Tijera ✂️";
    return "Mal elegido";
}

function actualizarVidas() {
    // Usamos el método .repeat() para mostrar los corazones
    document.getElementById('vidas-jugador').innerHTML = "❤️".repeat(vidasJugador) || "💀";
    document.getElementById('vidas-pc').innerHTML = "❤️".repeat(vidasPc) || "💀";
}

function jugar(jugador) {
    // Si alguien ya perdió, no hacer nada
    if (vidasJugador <= 0 || vidasPc <= 0) return;

    let pc = aleatorio(3, 1);
    let mensaje = "";
    
    //Combate
    if (pc == jugador) {
        mensaje = `EMPATE. Ambos eligieron ${eleccion(pc)}`;
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        mensaje = `¡GANASTE LA RONDA! Tu ${eleccion(jugador)} vence a ${eleccion(pc)}`;
        vidasPc--;
    } else {
        mensaje = `PERDISTE LA RONDA. ${eleccion(pc)} vence a tu ${eleccion(jugador)}`;
        vidasJugador--;
    }

    actualizarVidas();
    document.getElementById('mensaje').innerText = mensaje;

    validarFinal();
}

function validarFinal() {
    if (vidasJugador <= 0) {
        document.getElementById('mensaje').innerText = "Has perdido todas tus vidas. 😢";
        document.getElementById('mensaje').style.color = "#ff3333"; // Color rojo para derrota
        finalizar();
    } else if (vidasPc <= 0) {
        document.getElementById('mensaje').innerText = "¡VICTORIA! ¡Eres el campeón! 🏆";
        document.getElementById('mensaje').style.color = "#ffcc00"; // Color dorado para victoria
        finalizar();
    }
}

function finalizar() {
    document.querySelector('.options').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'inline-block';
}

function jugar(jugador) {
    if (vidasJugador <= 0 || vidasPc <= 0) return;

    let pc = aleatorio(3, 1);
    
    const emojis = { 1: "🪨", 2: "📄", 3: "✂️" };
    document.getElementById('jugada-jugador').innerText = emojis[jugador];
    document.getElementById('jugada-pc').innerText = emojis[pc];
    // ---------------------------------------------

    let mensaje = "";
    
    if (pc == jugador) {
        mensaje = "¡EMPATE!";
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        mensaje = "¡GANASTE LA RONDA!";
        vidasPc--;
    } else {
        mensaje = "¡PERDISTE LA RONDA!";
        vidasJugador--;
    }

    actualizarVidas();
    document.getElementById('mensaje').innerText = mensaje;
    validarFinal();
}

function reiniciarJuego() {
    vidasJugador = 3;
    vidasPc = 3;
    actualizarVidas();
    document.getElementById('mensaje').innerText = "¡Elige tu jugada!";
    document.getElementById('mensaje').style.color = "#66ff66";
    
    // Limpiar los slots de jugada
    document.getElementById('jugada-jugador').innerText = "?";
    document.getElementById('jugada-pc').innerText = "?";
    
    document.querySelector('.options').style.display = 'flex';
    document.getElementById('reiniciar').style.display = 'none';
}