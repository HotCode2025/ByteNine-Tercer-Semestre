
function seleccionarPersonajeJugador() {

  // Busca el radio button que esté marcado en este momento
  const seleccionado = document.querySelector('input[name="personaje"]:checked');

  // Si no eligió ninguno, mostramos un aviso y salimos
  if (!seleccionado) {
    alert('Por favor elegí un personaje primero');
    return;
  }

  // Condicional: según el id del radio marcado, mostramos el personaje
  if (seleccionado.id === 'zuko') {
    alert('Elegiste a Zuko 🔥');

  } else if (seleccionado.id === 'katara') {
    alert('Elegiste a Katara 💧');

  } else if (seleccionado.id === 'aang') {
    alert('Elegiste a Aang 🌪️');

  } else if (seleccionado.id === 'toph') {
    alert('Elegiste a Toph 🌱');
  }

}

// Escucha el click del botón y llama a la función
let botonPersonajeJugador = document.getElementById('btn-personaje');
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);