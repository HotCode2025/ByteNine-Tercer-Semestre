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