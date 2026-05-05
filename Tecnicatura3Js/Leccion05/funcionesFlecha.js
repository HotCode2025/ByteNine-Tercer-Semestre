

miFuncion();

function miFuncion() {
    console.log("Saludos desde mi función");
}

miFuncion();

let myFuncion = function() {
    console.log("Saludos desde la función anonima");
}

// Ahora vamos  a crear una función flecha
let miFuncionFlecha = () => {
    console.log("Saludos desde mi función flecha");
}

// Hay mas variantes para funciones flecha que vamos a ir viendo
miFuncionFlecha();

// lo hacemos en una sola linea
const saludar = () => console.log('Saludos a todos desde esta función flecha');

console.log(saludar);

// Otro ejemplo
const saludar2 = ()  => {
    return 'Saludos desde la función dos'

}

console.log(saludar2);

// Simplificamos la funcion anterior
const saludar3 = () => ' Saludos desde la función flecha tres';

console.log(saludar3)




