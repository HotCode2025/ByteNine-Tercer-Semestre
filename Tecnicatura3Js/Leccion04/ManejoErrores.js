'use strict';
// Veamos como evitar este error 
try {
    let x = 10; //Lo traemos con alt + flecha hacia arriba o hacia abajo
    //miFuncion();
    throw 'Mi Error'; //Maneja tipo string
}
catch( error ){ //Catchamos el error
    console.log(typeof(error));
}
finally{
    console.log('Termina la revision de errores');
}

//La ejecucion ahora continua...
console.log('Continuamos...'); //Esto no se llega a ver porque esta bloqueado

let resultado = -5;

try{
    //y = 5;
    if( isNaN(resultado)) throw 'No es un numero';
    else if( resultado ==='') throw 'Es cadena vacia';
    else if( resultado >= 0) throw 'Valor Positivo';
    else if ( resultado <= 0) throw "Valor negativo";
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.messaje);
}
finally{
    console.log('Terminamos la revision de errores 2');
}