let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvió correctamente');
    } else {
        rechazar('Se produjo un error');
    }
});

//miPromesa.then(
//    valor => console.log(valor),
//    error => console.log(error)
//);

//miPromesa
//         .then(valor => console.log(valor))
//         .catch(error => console.log(error));

let promesa = new Promise( (Resolver) => {
    console.log('Inicio promesa');
    setTimeout( () => Resolver('Saludos desde promesa, callback, función flecha y setTimeout'), 3000);
    console.log('Final promesa');
})

//El llamado a la promesa
promesa.then( valor => console.log(valor));