function actualizarReloj() {
    const ahora = new Date();

    // Formato de fecha
    const opcionesFecha = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const fechaCompleta = ahora.toLocaleDateString('es-AR', opcionesFecha);

    // Formato de hora
    const h = String(ahora.getHours()).padStart(2, '0');
    const m = String(ahora.getMinutes()).padStart(2, '0');
    const s = String(ahora.getSeconds()).padStart(2, '0');

    // Actualizar el DOM
    document.getElementById('fecha-texto').textContent = fechaCompleta;
    document.getElementById('reloj').textContent = `${h}:${m}:${s}`;
}

// Configurar el intervalo
setInterval(actualizarReloj, 1000);

// Ejecución inicial
actualizarReloj();