// Con hosting llamamos a las funciones antes que esten definidas
console.log(' llamada de funciones antes de definirlas')
mifuncion2()
mifuncion1()

function mifuncion1(){
    console.log('Funcion 1')
}

function mifuncion2(){
    console.log('Funcion 2')

}

// Llamamos a las funciones Para trabajar con orden secuencial( de arriba hacia abajo)
console.log('LLamada a funciones luego de definirlas (orden secuencial)')
mifuncion2()
mifuncion1()

// FUNCIONES DE TIPO CALLBACK(Utilizadas para procesos sincronos, es decir secuencialmente, una linea a la vez y para procesos asincronos)
console.log('Funciones de tipo callback')
// Podemos asignar una variable
let imp =  function imprimir(mensaje){
    console.log(mensaje);
}
// pasamos como argumento  la funcion Callback
function sumar(operando1, operando2, funcionCallback){ //funtion callback apunta a la funcion como referencia sumar
    //variable temporal
    let resultado = operando1 + operando2;
    funcionCallback(`Resultado: ${resultado}`) // Utilizamos template ScriptProcessorNode(alt gr+ teclabastic)
}

//llamamos a la funcion sumar. Pasamos los argumentos 
sumar(5,3,imp);

//Llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 5000);

setTimeout(function(){ console.log('Saludo asincrono 2')}, 3000);

setTimeout( () => console.log('Saludo asincrono 3'), 4000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); //Cada 1 segundo se ejecuta