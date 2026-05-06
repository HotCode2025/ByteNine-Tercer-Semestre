

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

//Continuamos con otro ejemplo
const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});

console.log(regresaObjeto());

//Funciones flecha que riciben parámetros
const funcionParametros = ( mensaje ) => console.log( mensaje );

funcionParametros('Saludos desde esta función con parámetros');

//Una función clásica
const funcionParametrosClasica = function( mensaje ){
    console.log( mensaje );
}

funcionParametrosClasica('Saludos desde la función clasica');

//Se pueden omitir los parentesis en la función flecha de la siguiente manera
const funcionConParametros = mensaje => console.log( mensaje );

funcionConParametros('Otra forma de trabajar con función flecha');